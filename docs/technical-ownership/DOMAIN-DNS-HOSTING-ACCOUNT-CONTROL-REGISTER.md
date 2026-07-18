# Domain, DNS, Hosting, and Account Control Register

**Record ID:** CLN-WEB-ACC-001  
**Status:** Control Model Effective; Provider Verification Pending  
**Effective Date:** July 18, 2026  
**Owner:** Technical Owner

| Asset | Approved Control Model | Verification Evidence Required | Status |
|---|---|---|---|
| `cleanital.com` registration | Cleanital-controlled Porkbun account | Registrar screenshot/export, registrant control, transfer lock, renewal, MFA | Pending provider verification |
| Authoritative DNS | Cleanital-controlled Cloudflare account | Nameserver match, MFA, recovery ownership, DNS export | Pending provider verification |
| Website hosting | Hostinger | Account owner, MFA, renewal, server/site identifier, backup settings | Pending provider verification |
| Business email | Google Workspace target | Super-admin ownership, MX match, MFA, recovery, billing | Pending implementation verification |
| GitHub source control | Public repository `DjInf777/cleanital` | Admin ownership, branch-protection verification, governance workflow, corrected release tag | Active; admin ownership and repository visibility verified; protection and v1.2.1 tag require final verification |
| Corp4ce routes | Corp4ce | Per-destination activation record and access test | Inactive until approved |

## Required Account Rules

- Recovery email and phone must be controlled by Cleanital or Edgar Henderson.
- MFA is required on registrar, DNS, hosting, GitHub, and primary email administration.
- Vendor or contractor accounts may not be the sole owner.
- Billing and renewal notices must reach a monitored Cleanital-controlled address.
- Secrets and recovery codes must not be stored in the website repository.
- DNS exports and critical account recovery details require a secure offline copy.
- Public repository visibility does not authorize publication of private business, personal, security, or operational data.
- A secret committed to Git must be revoked or rotated even when the file is later deleted.
