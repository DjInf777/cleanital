import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize, resolve } from 'node:path';
import { processSubmission } from './forms.mjs';
import { decodeRequestPath, injectFormStartedAt, trustedClientIp } from './request-utils.mjs';

const host = process.env.HOST || '127.0.0.1';
const port = Number(process.env.PORT || 4321);
const root = resolve(process.env.STATIC_DIR || 'dist');
const origins = new Set(
  (process.env.ALLOWED_ORIGINS || 'https://cleanital.com,https://www.cleanital.com')
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean)
);
const hits = new Map();
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg'
};
const headers = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
  'Content-Security-Policy': "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self'; connect-src 'self'; form-action 'self'; base-uri 'self'; frame-ancestors 'none'; object-src 'none'; upgrade-insecure-requests"
};

function send(res, status, body, type = 'text/plain; charset=utf-8', extra = {}) {
  if (res.headersSent) return res.end();
  res.writeHead(status, { ...headers, 'Content-Type': type, 'Cache-Control': 'no-store', ...extra });
  res.end(body);
}

async function parse(req) {
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > 65536) throw new Error('too-large');
    chunks.push(chunk);
  }
  const raw = Buffer.concat(chunks).toString('utf8');
  const type = req.headers['content-type'] || '';
  if (type.includes('application/json')) return JSON.parse(raw || '{}');
  if (type.includes('application/x-www-form-urlencoded')) return Object.fromEntries(new URLSearchParams(raw));
  if (type.includes('multipart/form-data')) {
    const boundary = type.match(/boundary=(.+)$/)?.[1];
    if (!boundary) throw new Error('bad-form');
    const result = {};
    for (const part of raw.split(`--${boundary}`)) {
      const match = part.match(/name="([^"]+)"\r\n\r\n([\s\S]*?)\r\n$/);
      if (match) result[match[1]] = match[2];
    }
    return result;
  }
  throw new Error('unsupported');
}

function limited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((timestamp) => now - timestamp < 600000);
  if (recent.length >= 5) return true;
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

async function notify(record) {
  const url = process.env.FORM_NOTIFICATION_WEBHOOK_URL;
  if (!url) return null;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(process.env.FORM_NOTIFICATION_WEBHOOK_TOKEN
        ? { Authorization: `Bearer ${process.env.FORM_NOTIFICATION_WEBHOOK_TOKEN}` }
        : {})
    },
    body: JSON.stringify(record),
    signal: AbortSignal.timeout(8000)
  });
  if (!response.ok) throw new Error('notify-failed');
}

async function form(req, res, kind) {
  const origin = req.headers.origin;
  if (origin && !origins.has(origin)) {
    return send(res, 403, JSON.stringify({ ok: false, message: 'Origin not allowed.' }), 'application/json');
  }

  const ip = trustedClientIp(req.headers, req.socket.remoteAddress);
  if (limited(ip)) {
    return send(
      res,
      429,
      JSON.stringify({ ok: false, message: 'Too many attempts. Please try later.' }),
      'application/json',
      { 'Retry-After': '600' }
    );
  }

  try {
    const input = await parse(req);
    const result = await processSubmission({
      kind,
      input,
      ip,
      userAgent: req.headers['user-agent'],
      storageDir: process.env.FORM_STORAGE_DIR,
      ipHashKey: process.env.FORM_IP_HASH_KEY,
      notify: process.env.FORM_NOTIFICATION_WEBHOOK_URL ? notify : null
    });
    const wantsJson = (req.headers.accept || '').includes('application/json');
    if (result.ok) {
      if (wantsJson) return send(res, 201, JSON.stringify(result), 'application/json');
      res.writeHead(303, { ...headers, Location: '/form-result/success/' });
      return res.end();
    }
    if (wantsJson) return send(res, 422, JSON.stringify(result), 'application/json');
    res.writeHead(303, { ...headers, Location: '/form-result/error/' });
    return res.end();
  } catch (error) {
    const status = error?.message === 'too-large' ? 413 : 400;
    return send(
      res,
      status,
      JSON.stringify({ ok: false, message: 'The request could not be processed safely.' }),
      'application/json'
    );
  }
}

async function staticFile(req, res) {
  const decoded = decodeRequestPath(req.url);
  if (!decoded.ok) return send(res, 400, 'Bad request');
  const pathname = decoded.pathname;
  if (pathname.includes('..')) return send(res, 400, 'Bad request');

  let candidate = join(root, normalize(pathname));
  try {
    const candidateStat = await stat(candidate);
    if (candidateStat.isDirectory()) candidate = join(candidate, 'index.html');
  } catch {
    if (!extname(candidate)) candidate = join(candidate, 'index.html');
  }
  if (!candidate.startsWith(root)) return send(res, 403, 'Forbidden');

  try {
    let body = await readFile(candidate);
    const extension = extname(candidate);
    if (extension === '.html') body = Buffer.from(injectFormStartedAt(body.toString('utf8')));
    const cache = extension === '.html' ? 'no-cache' : 'public, max-age=604800, immutable';
    res.writeHead(200, {
      ...headers,
      'Content-Type': types[extension] || 'application/octet-stream',
      'Cache-Control': cache
    });
    if (req.method === 'HEAD') return res.end();
    return res.end(body);
  } catch {
    try {
      const body = await readFile(join(root, '404.html'));
      return send(res, 404, body, 'text/html; charset=utf-8');
    } catch {
      return send(res, 404, 'Not found');
    }
  }
}

async function handle(req, res) {
  if (req.method === 'POST' && req.url?.startsWith('/api/forms/')) {
    const kind = req.url.split('/').filter(Boolean).at(-1);
    return form(req, res, kind);
  }
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    return send(res, 405, 'Method not allowed', 'text/plain; charset=utf-8', { Allow: 'GET, HEAD, POST' });
  }
  return staticFile(req, res);
}

const server = http.createServer((req, res) => {
  void handle(req, res).catch(() => send(res, 500, 'Internal server error'));
});
server.listen(port, host, () => console.log(`Cleanital website listening on http://${host}:${port}`));
