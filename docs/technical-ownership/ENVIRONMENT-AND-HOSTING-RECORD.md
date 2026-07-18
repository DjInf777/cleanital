# Cleanital Website Environment and Hosting Record

**Record ID:** CLN-WEB-ENV-001  
**Status:** Effective  
**Effective Date:** July 18, 2026  
**Owner:** Technical Owner

## 1. Environment Model

| Environment | Purpose | Public Indexing | Data Rule | Deployment Authority |
|---|---|---|---|---|
| Local development | Build and developer testing | Prohibited | Synthetic or approved test data only | Assigned developer |
| Staging | Integrated acceptance testing | Prohibited | No production secrets or unrestricted production data | Technical Owner |
| Production | Public website at `cleanital.com` | Permitted | Approved public content and governed submissions | Technical Owner after release checks |

## 2. Production Hosting Decision

The website remains on Hostinger for the current build cycle.

This is a hosting decision, not a domain-ownership decision. Domain registration, DNS, email, source control, and hosting shall remain independently controllable.

The existing live website is treated as the legacy production site until the replacement passes the ratified launch controls.

## 3. Staging

The intended staging hostname is:

`staging.cleanital.com`

Staging must:

- Be blocked from search indexing.
- Use authentication or access restriction where practical.
- Display a visible non-production indicator.
- Use separate secrets and configuration.
- Avoid sending real client communications.
- Avoid creating real Corp4ce operational records.
- Be replaceable without affecting production.

## 4. Deployment Doctrine

Production shall be deployed from an identifiable repository commit or release.

Direct unrecorded editing of production files is prohibited after the repository becomes canonical.

Each material deployment must record:

- Commit or release.
- Deployer.
- Date.
- Pre-deployment backup.
- Validation performed.
- Rollback target.
- Result.

## 5. Current Infrastructure Facts Requiring Account Verification

The control model is established, but the Technical Owner must verify within the provider accounts:

- Current registrar and transfer-lock status.
- Current authoritative nameservers.
- DNS account MFA and recovery ownership.
- Hostinger account MFA, renewal, and recovery ownership.
- Current email provider and MX ownership.
- Current production backup retention.
- Whether the legacy website uses a database.
- Whether staging can be provisioned separately.

Provider-account verification is not replaced by public DNS or website inspection.
