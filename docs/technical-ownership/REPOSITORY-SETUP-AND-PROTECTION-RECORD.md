# Repository Setup and Protection Record

**Record ID:** CLN-WEB-REP-001  
**Status:** Active; public; protection verification pending  
**Effective Date:** July 18, 2026  
**Repository Owner:** `DjInf777`  
**Repository Name:** `cleanital`  
**Approved Visibility:** Public  
**Default Branch:** `main`

## 1. Canonical Repository

The canonical repository is:

`DjInf777/cleanital`

The repository is active on GitHub and is intentionally public by explicit Founder decision.

The earlier planned repository name `DjInf777/cleanital-website` is superseded and shall not be used in current instructions, records, remotes, or release metadata.

## 2. Public Repository Doctrine

Public visibility is approved because the repository is intended to contain public website source, public-facing content, governance instruments, and non-secret implementation controls.

Public visibility does not authorize publication of:

- Secrets, credentials, tokens, private keys, or recovery codes.
- Production environment files.
- Client, worker, applicant, contractor, or tenant records.
- Private contracts, pricing, invoices, or operational evidence.
- Database exports, backups, logs containing personal data, or private attachments.
- Security-sensitive infrastructure details beyond what is safe and necessary for implementation.

Before any new file class is introduced, the contributor shall determine whether it is appropriate for permanent public disclosure.

## 3. Required Main-Branch Protection

Apply and maintain the following controls on `main`:

- Require a pull request before merging.
- Required approving reviews: **0 while Edgar Henderson is the sole qualified approver**.
- Do not require Code Owner approval while only one eligible approver exists.
- Require the `governance-integrity` status check for affected changes.
- Require conversation resolution.
- Require linear history.
- Apply protections to administrators.
- Block force pushes.
- Block branch deletion.
- Allow squash merge as the default merge method.

The approval count shall become at least one when a second qualified approver is appointed.

The Founder reports that the repository-control script has been run. Independent verification through GitHub settings or API remains required before branch protection is marked fully verified.

## 4. Repository Files Enforcing Ownership

- `.github/CODEOWNERS` assigns repository ownership to `@DjInf777`.
- `.github/workflows/governance-integrity.yml` validates the ratified governance corpus.
- `.github/pull_request_template.md` requires scope, risk, validation, and rollback disclosure.
- `RATIFIED-SHA256SUMS.txt` detects unauthorized changes to the ratified instruments.
- `.gitignore` excludes common secret, environment, backup, and production-export files.

## 5. Release Control

- Preserve `website-governance-v1.2.0` as historical ratification evidence.
- Use `website-governance-v1.2.1` for the corrected repository and visibility records.
- Do not force-move or overwrite the original tag.
- Future tags must point to the exact approved release commit.

## 6. Remote Publication Status

Remote publication is complete.

The publication and control scripts now target `DjInf777/cleanital`. They remain available for verification, disaster recovery, or a clean repository re-bootstrap, but routine repository work shall proceed through protected branches and pull requests.
