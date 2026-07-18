import { isIP } from 'node:net';

export function decodeRequestPath(url) {
  try {
    return { ok: true, pathname: decodeURIComponent(new URL(url || '/', 'http://localhost').pathname) };
  } catch {
    return { ok: false, pathname: '' };
  }
}

export function trustedClientIp(headers, socketAddress) {
  const realIpHeader = headers?.['x-real-ip'];
  const candidate = Array.isArray(realIpHeader) ? realIpHeader[0] : realIpHeader;
  if (typeof candidate === 'string' && isIP(candidate.trim())) return candidate.trim();

  const socketIp = String(socketAddress || '').replace(/^::ffff:/, '').trim();
  return isIP(socketIp) ? socketIp : 'unknown';
}

export function injectFormStartedAt(html, now = Date.now()) {
  return String(html).replaceAll('__FORM_STARTED_AT__', String(now));
}
