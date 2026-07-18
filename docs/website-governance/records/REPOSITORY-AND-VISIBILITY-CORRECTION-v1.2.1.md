# Repository and Visibility Administrative Correction — v1.2.1

**Record ID:** CLN-WEB-COR-2026-001  
**Status:** Approved  
**Decision Date:** July 18, 2026  
**Effective Date:** Upon merge to `main`  
**Founder:** Edgar Henderson  
**Correction Release:** `website-governance-v1.2.1`  
**Normative Instrument Version:** 1.2.0  
**Canonical Repository:** `DjInf777/cleanital`  
**Approved Visibility:** Public

## 1. Purpose

This record corrects administrative repository metadata without changing the ten ratified Website Governance Phase 1.2 instruments.

## 2. Corrected Facts

### Repository Name

**Former planned name:** `DjInf777/cleanital-website`  
**Correct canonical name:** `DjInf777/cleanital`

### Repository Status

**Former status:** Prepared locally; remote creation pending  
**Correct status:** Active on GitHub

### Repository Visibility

**Former assumption:** Private  
**Founder decision:** Public

Public visibility is intentional and is not an exception taken merely to obtain branch-protection features.

## 3. Public Disclosure Controls

The public repository may contain public website source, public-facing content, governance instruments, and non-secret implementation controls.

It shall not contain:

- Secrets, credentials, tokens, keys, or recovery codes.
- Production environment files.
- Private client, worker, applicant, contractor, or tenant information.
- Contracts, invoices, pricing records, private operational evidence, or internal communications not approved for publication.
- Production databases, backups, private logs, or attachments.

A committed secret must be revoked or rotated even if it is later removed from the visible branch.

## 4. Release Treatment

The original tag `website-governance-v1.2.0` shall remain unchanged as historical ratification evidence.

The corrected release tag `website-governance-v1.2.1` shall point to the merge commit containing this record and the corrected administrative records.

The following remain unchanged:

- All ten normative governance instruments.
- Instrument version 1.2.0.
- `RATIFIED-SHA256SUMS.txt`.
- Corpus digest `4ed5dd8d75c42290d3a9f2fc0ab98a2ff244b130bcf8153197fdf7bdf1d75e59`.

## 5. Founder Disposition

**Decision:** Approve the canonical repository `DjInf777/cleanital` as public.  
**Rationale:** The repository is intended to govern and hold the public website source, while private data, secrets, and operational records remain prohibited.  
**Rollback:** Repository visibility may be changed by a later recorded Founder decision if public disclosure creates an unacceptable risk.  
**Supersedes:** Administrative assumptions that the canonical repository would be named `cleanital-website`, remain local, or be private.
