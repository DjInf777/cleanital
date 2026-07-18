# Website Implementation Decision Record

**Record ID:** CLN-WEB-IMP-DEC-001  
**Status:** Approved for implementation  
**Decision Date:** July 18, 2026  
**Founder:** Edgar Henderson  
**Authority:** Direct instruction to complete the remaining website steps without stopping  
**Applies To:** Initial replacement-site release candidate

## Decisions

### IMP-DEC-001 — Application stack

Use Astro 7 for content-first page generation and Node.js 24 LTS for the production runtime. The Astro output remains static. A small Node service serves the built files and handles governed public intake on the Hostinger VPS.

### IMP-DEC-002 — Initial intake system of record

Until a specific Corp4ce intake destination is active and approved, the website Node service is the temporary system of record for public form submissions.

Controls:

- Append-only JSON Lines records outside the public repository and web root.
- Storage directory permissions `0700`; file permissions `0600`.
- Raw IP addresses are not stored; a keyed HMAC is stored for abuse control.
- Default retention is 90 days.
- No public file uploads.
- No success response until the durable append completes.
- A notification webhook may be configured, but notification failure does not erase the durable intake record.
- Edgar Henderson is the initial receiving and review owner.
- Migration to Corp4ce requires a separately approved activation and reconciliation plan.

### IMP-DEC-003 — Initial analytics posture

Do not install third-party analytics or marketing trackers for the initial release candidate. This avoids creating an unapproved cookie, processor, consent, or data-retention dependency. Analytics may be added only through the governed material-change process.

### IMP-DEC-004 — Portal posture

Do not publish client, worker, applicant, or contractor portal routes until each specific Corp4ce destination passes the activation gate. Missing portal pages shall return the normal 404 page.

### IMP-DEC-005 — Legal pages

Create implementation drafts for Privacy, Terms, and Accessibility, mark them no-index, and block production launch until a qualified legal reviewer approves the implemented text. Drafting does not satisfy the legal review gate.

### IMP-DEC-006 — Public contact posture

Do not invent a public email address or telephone number. Forms provide the initial public contact path. A public fallback email and telephone number remain a production form-launch requirement and must be approved before final launch authorization.

## Impact and rollback

These decisions implement the ratified website boundary, territory, conversion, data, and launch controls. Rollback is removal of the application code and restoration of the prior known-good public site. The ten ratified Phase 1.2 governance instruments remain unchanged.
