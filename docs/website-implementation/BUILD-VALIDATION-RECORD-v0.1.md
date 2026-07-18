# Release Candidate Build Validation Record

**Record ID:** CLN-WEB-VAL-001  
**Status:** Local source and intake validation passed; GitHub production build pending  
**Date:** July 18, 2026  
**Source Commit:** `b97e8f8b5f95a413076601b2ba653b00a6225fd6`

## Completed validation

- Form validation accepted a valid commercial assessment submission.
- Invalid email, honeypot completion, and implausibly fast submission were rejected.
- Durable JSON Lines storage completed successfully.
- The stored abuse record did not contain the raw test IP address.
- Release source validation confirmed the required core files.
- Approved service and state-level territory identifiers were present.
- Prohibited city-route and “near me” patterns were absent.
- The primary `Request an Assessment` conversion and commercial-facility positioning were present.

## Environment limitation

The local execution environment used for preparation did not have internet access and could not install Astro dependencies. The GitHub `Site CI` workflow is therefore the authoritative initial Astro 7 / Node 24 production-build validation for this branch.

A generated and reviewed dependency lock file remains required before production deployment.
