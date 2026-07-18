# Cleanital Website Technical Ownership Register

**Record ID:** CLN-WEB-OWN-001  
**Status:** Effective  
**Effective Date:** July 18, 2026  
**Review Cycle:** Quarterly during build; annually after stable production launch

## 1. Accountable Ownership

| Control Area | Accountable Owner | Current State |
|---|---|---|
| Founder and final business authority | Edgar Henderson | Assigned |
| Website Business Owner | Edgar Henderson | Assigned |
| Technical Owner | Edgar Henderson | Assigned initially |
| Website Incident Owner | Edgar Henderson | Assigned initially |
| Content approval authority | Edgar Henderson | Assigned initially |
| GitHub account owner | `DjInf777` | Verified connected account |
| Canonical GitHub repository | `DjInf777/cleanital` | Active and intentionally public; admin ownership verified |
| Canonical public domain | `cleanital.com` | Governed and publicly active |
| Production hosting | Hostinger | Approved current hosting platform |
| DNS control target | Cloudflare | Approved control model; account implementation must be verified |
| Registrar target | Porkbun | Approved control model; current registrar implementation must be verified |
| Business email target | Google Workspace | Separate from website hosting; implementation must be verified |
| Corp4ce | Secure operational and portal platform | Routes remain inactive until each destination passes its activation gate |

## 2. Public Repository Responsibility

Because the canonical repository is public, every contributor shall treat every committed file and every Git history object as permanently discloseable.

The repository shall not contain:

- Secrets, passwords, tokens, private keys, or recovery codes.
- Production `.env` files or unrestricted configuration exports.
- Private client, worker, contractor, applicant, or tenant information.
- Production database exports, backups, private logs, or attachments.
- Private contracts, invoices, pricing records, or operational evidence.

Accidental disclosure shall be treated as a website security incident. Deleting the visible file is not sufficient when the information remains in Git history; affected secrets must be revoked or rotated and the incident assessed.

## 3. Separation of Duties for a Solo Founder

Cleanital is currently permitted to consolidate ownership roles under Edgar Henderson.

The following controls remain separate even when one person performs them:

- A change must be recorded at the correct impact tier.
- Production deployment must be traceable to a repository commit or release.
- Secrets must remain outside source control.
- A backup must exist before material deployment.
- A failed launch blocker cannot be self-waived without a written Founder disposition.
- Portal activation requires actual authentication and authorization testing.

## 4. Delegation Rule

A future developer, designer, contractor, agency, or AI system receives only the access needed for the assigned work.

No outside party receives permanent ownership of:

- The domain.
- Registrar account.
- DNS account.
- GitHub repository.
- Hosting master account.
- Primary recovery email.
- Production secrets.
- Google Workspace super-administrator account.

Delegation does not transfer Founder authority.

## 5. Access Review

The Technical Owner shall review access:

- Before a contractor begins.
- Immediately after a contractor ends.
- After an incident.
- Quarterly during active development.
- Annually after stable launch.

Unused accounts, keys, tokens, and collaborators shall be removed.
