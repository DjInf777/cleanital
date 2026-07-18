#!/usr/bin/env bash
set -euo pipefail

REPO="DjInf777/cleanital"

if ! command -v gh >/dev/null 2>&1; then
  echo "GitHub CLI is required: https://cli.github.com/" >&2
  exit 1
fi

gh auth status

if gh repo view "$REPO" >/dev/null 2>&1; then
  echo "Repository $REPO already exists."
  if git remote get-url origin >/dev/null 2>&1; then
    git remote set-url origin "git@github.com:${REPO}.git"
  else
    git remote add origin "git@github.com:${REPO}.git"
  fi
else
  gh repo create "$REPO" \
    --public \
    --description "Canonical source for the Cleanital public website" \
    --source=. \
    --remote=origin
fi

git push -u origin main
git push origin website-governance-v1.2.0

echo "Published $REPO and tag website-governance-v1.2.0."
