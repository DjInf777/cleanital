# Cleanital Website

Canonical public repository for the replacement website at `cleanital.com`.

## Current status

- Website Governance Phase 1.2 is ratified and effective.
- Administrative correction release v1.2.1 confirms `DjInf777/cleanital` as the public canonical repository.
- The governed Release 1 website has been implemented as a release candidate.
- Production launch remains blocked until the external legal, account-control, contact, accessibility, deployed-form, backup/restore, and Founder authorization gates recorded in `docs/website-implementation/RELEASE-1-BUILD-AND-LAUNCH-READINESS-REPORT.md` are satisfied.
- The current live website remains legacy production until an authorized replacement deployment succeeds.

## Technology

- Astro 7 static public pages.
- Node.js 24 LTS intake and static-serving runtime.
- Nginx reverse proxy on the Hostinger VPS.
- No third-party analytics or public file uploads in the initial release candidate.

## Key paths

- `src/` — website pages, content data, components, and styles.
- `server/` — governed form intake and static runtime.
- `docs/website-governance/instruments/` — ratified governing instruments.
- `docs/website-implementation/` — implementation specification, page matrix, and readiness report.
- `docs/technical-ownership/` — infrastructure ownership and recovery controls.
- `ops/` — Nginx and systemd deployment configuration.
- `scripts/` — validation, retention, and deployment scripts.

## Local validation

```bash
npm install --no-audit --no-fund
npm run build
npm test
```

No secrets, credentials, production environment files, production data, private client records, backups, or confidential operational evidence belong in this public repository.
