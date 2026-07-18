# Cleanital Website Backup, Restore, and Rollback Plan

**Record ID:** CLN-WEB-BKP-001  
**Status:** Effective  
**Effective Date:** July 18, 2026  
**Owner:** Technical Owner

## 1. Required Backup Layers

1. **Repository history:** All website source and governance changes are committed.
2. **Release artifact:** Each production deployment has a reproducible artifact or tagged commit.
3. **Pre-deployment backup:** Production files, configuration, and database—when present—are backed up before a material deployment.
4. **Hosting backup:** Hostinger backup capability is enabled and its retention is documented.
5. **Off-host backup:** At least one encrypted copy exists outside the production hosting account.

## 2. Minimum Schedule

- Pre-deployment: before every material production release.
- Production content/configuration: daily when the site changes dynamically; otherwise after every release.
- Full off-host backup: weekly during active build and monthly after stable launch.
- Restore test: before first replacement-site launch, after backup-system changes, and at least quarterly during the first year.

## 3. Recovery Objectives

Initial operational targets:

- **Recovery Point Objective:** No more than one approved production release or one day of governed submission data, whichever is more restrictive.
- **Recovery Time Objective:** Restore a safe public website or maintenance page within one business day.

These are initial internal targets, not public guarantees.

## 4. Rollback Procedure

For a failed release:

1. Stop further deployment.
2. Preserve logs and evidence.
3. Disable affected forms or integrations if they create risk.
4. Restore the previous known-good release.
5. Restore compatible configuration and database state where required.
6. Validate Home, assessment form, portal routes, TLS, and critical navigation.
7. Record the failure and disposition at the applicable governance tier.
8. Resume changes only after root cause and corrective action are understood.

## 5. Backup Security

Backups shall:

- Exclude unnecessary secrets where possible.
- Be encrypted in transit and at rest where supported.
- Have access limited to the Technical Owner and approved recovery personnel.
- Be deleted under the applicable retention rule.
- Never be placed in a public repository.
