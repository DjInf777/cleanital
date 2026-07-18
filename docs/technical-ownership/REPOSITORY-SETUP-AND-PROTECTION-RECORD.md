# Repository Setup and Protection Record

**Record ID:** CLN-WEB-REP-001  
**Status:** Effective; remote enforcement applied  
**Effective Date:** July 18, 2026  
**Repository Owner:** `DjInf777`  
**Repository Name:** `cleanital`  
**Intended Visibility:** Public  
**Default Branch:** `main`

## 1. Canonical Repository

The prepared local repository is the source package for:

`DjInf777/cleanital`

The repository is published at `DjInf777/cleanital` with the main-branch protection in Section 2 applied.

## 2. Required Main-Branch Protection

Apply the following controls to `main`:

- Require a pull request before merging.
- Required approving reviews: **0 while Edgar Henderson is the sole approver**.
- Do not require Code Owner approval while only one eligible approver exists.
- Require the `governance-integrity` status check.
- Require conversation resolution.
- Require linear history.
- Apply protections to administrators.
- Block force pushes.
- Block branch deletion.
- Allow squash merge as the default merge method.
- Disable automatic branch deletion only if release or audit needs require preservation; otherwise deleting merged feature branches is permitted.

The approval count shall become at least one when a second qualified approver is appointed.

## 3. Repository Files Enforcing Ownership

- `.github/CODEOWNERS` assigns repository ownership to `@DjInf777`.
- `.github/workflows/governance-integrity.yml` validates the ratified governance corpus.
- `.github/pull_request_template.md` requires scope, risk, validation, and rollback disclosure.
- `RATIFIED-SHA256SUMS.txt` detects unauthorized changes to the ratified instruments.

## 4. Remote Publication

Use the supplied `scripts/publish-repository.sh` from the repository root after installing and authenticating GitHub CLI.

Then run `scripts/apply-github-controls.sh`.

The scripts do not store credentials.
