# External Launch Gate Register

**Record ID:** CLN-WEB-GATE-001  
**Status:** Open  
**Date:** July 18, 2026  
**Owner:** Website Business Owner

The repository-controlled release candidate is implemented. Production replacement of the current live website is prohibited until the following evidence is completed and recorded.

| Gate | Evidence required | Owner | Status |
|---|---|---|---|
| Legal review | Written disposition covering privacy, terms, accessibility, form consent, retention, careers, contractors, and communication practices | Founder + qualified legal reviewer | Open |
| Public fallback contact | Approved monitored email address and telephone number for form failure, privacy, and accessibility use | Founder | Open |
| Provider controls | Registrar, DNS, Hostinger, MFA, recovery, renewal, TLS, and account ownership evidence | Technical Owner | Open |
| Production configuration | Secret `FORM_IP_HASH_KEY`, non-public storage directory, allowed origins, and optional notification route | Technical Owner | Open |
| Intake monitoring | Named person and procedure for daily review, follow-up, retention, and incident escalation | Website Business Owner | Open |
| Dependency resolution | Successful Node 24 dependency install, generated lock file, review, and commit | Technical Owner | Open |
| Production build | Successful Astro production build and repository tests | Technical Owner | Open |
| Accessibility review | Manual WCAG 2.2 AA implementation review and correction record | Technical Owner + reviewer | Open |
| Deployed form validation | Assessment, contact, career, and contractor success, failure, duplicate, rate, and fallback tests | Technical Owner | Open |
| Backup and restore | Pre-deployment backup and successful restore rehearsal | Technical Owner | Open |
| Launch authorization | Written Founder authorization identifying the release commit and rollback target | Founder | Open |

No open item in this register is represented as complete merely because the underlying code exists.
