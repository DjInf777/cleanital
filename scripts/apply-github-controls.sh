#!/usr/bin/env bash
set -euo pipefail

REPO="DjInf777/cleanital"

if ! command -v gh >/dev/null 2>&1; then
  echo "GitHub CLI is required: https://cli.github.com/" >&2
  exit 1
fi

gh auth status
gh repo view "$REPO" >/dev/null

# Require PRs without requiring a second person's approval while the Founder is the sole approver.
# The required approval count should be raised when a second qualified approver is appointed.
gh api \
  --method PUT \
  -H "Accept: application/vnd.github+json" \
  "repos/${REPO}/branches/main/protection" \
  --input - <<'JSON'
{
  "required_status_checks": {
    "strict": true,
    "contexts": ["governance-integrity"]
  },
  "enforce_admins": true,
  "required_pull_request_reviews": {
    "dismiss_stale_reviews": false,
    "require_code_owner_reviews": false,
    "required_approving_review_count": 0,
    "require_last_push_approval": false
  },
  "restrictions": null,
  "required_linear_history": true,
  "allow_force_pushes": false,
  "allow_deletions": false,
  "block_creations": false,
  "required_conversation_resolution": true,
  "lock_branch": false,
  "allow_fork_syncing": false
}
JSON

# Create deployment environment records. Secrets and reviewers are configured separately
# when the application and deployment workflow exist.
gh api --method PUT "repos/${REPO}/environments/staging" >/dev/null
gh api --method PUT "repos/${REPO}/environments/production" >/dev/null

echo "Applied main-branch protection and created staging/production environments."
