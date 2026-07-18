import assert from 'node:assert/strict';
import { mkdtemp, readFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { processSubmission, validateSubmission } from '../server/forms.mjs';
import { decodeRequestPath, injectFormStartedAt, trustedClientIp } from '../server/request-utils.mjs';

const base = {
  contactName: 'Test Person',
  organizationName: 'Test Business',
  email: 'person@example.com',
  phone: '555-555-0100',
  state: 'North Carolina',
  facilityType: 'Office or professional workplace',
  serviceNeeded: 'Office cleaning',
  message: 'We need a commercial office cleaning assessment for an occupied workplace.',
  consent: 'yes',
  startedAt: String(Date.now() - 5000),
  website: ''
};

assert.equal(validateSubmission('assessment', base).ok, true);
assert.equal(validateSubmission('assessment', { ...base, email: 'bad' }).ok, false);
assert.equal(validateSubmission('assessment', { ...base, website: 'spam' }).ok, false);
assert.equal(validateSubmission('assessment', { ...base, startedAt: String(Date.now()) }).ok, false);
assert.equal(validateSubmission('assessment', { ...base, startedAt: '' }).ok, false);

assert.equal(decodeRequestPath('/services/office-cleaning/').pathname, '/services/office-cleaning/');
assert.equal(decodeRequestPath('/%E0%A4%A').ok, false);
assert.equal(trustedClientIp({ 'x-real-ip': '203.0.113.9', 'x-forwarded-for': '198.51.100.4' }, '127.0.0.1'), '203.0.113.9');
assert.equal(trustedClientIp({ 'x-real-ip': 'not-an-ip' }, '::ffff:127.0.0.1'), '127.0.0.1');
assert.equal(injectFormStartedAt('<input value="__FORM_STARTED_AT__">', 12345), '<input value="12345">');

const dir = await mkdtemp(join(tmpdir(), 'cleanital-'));
const result = await processSubmission({
  kind: 'assessment',
  input: base,
  ip: '127.0.0.1',
  userAgent: 'test',
  storageDir: dir,
  ipHashKey: 'test-key-long-enough'
});
assert.equal(result.ok, true);
const day = new Date().toISOString().slice(0, 10);
const stored = await readFile(join(dir, `${day}.jsonl`), 'utf8');
assert.match(stored, /CLN-/);
assert.doesNotMatch(stored, /127\.0\.0\.1/);
console.log('Form validation, request hardening, and durable-write tests passed.');
