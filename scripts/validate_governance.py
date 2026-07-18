#!/usr/bin/env python3
"""Validate the ratified Cleanital website-governance corpus."""

from __future__ import annotations

import hashlib
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
GOV = ROOT / "docs" / "website-governance"
INSTRUMENTS = GOV / "instruments"
SUMS = GOV / "records" / "RATIFIED-SHA256SUMS.txt"

EXPECTED_COUNT = 10
ID_PATTERN = re.compile(r"\*\*Document ID:\*\*\s*(CLN-WEB-(?:CON|POL|STD|REG|CTL)-\d{3})")
REF_PATTERN = re.compile(r"\bCLN-WEB-(?:CON|POL|STD|REG|CTL)-\d{3}\b")


def fail(message: str) -> None:
    print(f"ERROR: {message}", file=sys.stderr)
    raise SystemExit(1)


files = sorted(INSTRUMENTS.glob("*.md"))
if len(files) != EXPECTED_COUNT:
    fail(f"Expected {EXPECTED_COUNT} instruments; found {len(files)}")

id_to_file: dict[str, Path] = {}
all_refs: set[str] = set()

for path in files:
    text = path.read_text(encoding="utf-8")
    match = ID_PATTERN.search(text)
    if not match:
        fail(f"Missing Document ID: {path}")
    doc_id = match.group(1)
    if doc_id in id_to_file:
        fail(f"Duplicate Document ID {doc_id}: {path} and {id_to_file[doc_id]}")
    id_to_file[doc_id] = path
    all_refs.update(REF_PATTERN.findall(text))

missing_refs = sorted(all_refs - set(id_to_file))
if missing_refs:
    fail(f"Unresolved governance references: {', '.join(missing_refs)}")

expected: dict[str, str] = {}
for raw in SUMS.read_text(encoding="utf-8").splitlines():
    if not raw.strip():
        continue
    digest, rel = raw.split("  ", 1)
    expected[rel] = digest

for path in files:
    rel = f"instruments/{path.name}"
    if rel not in expected:
        fail(f"No ratified checksum for {rel}")
    actual = hashlib.sha256(path.read_bytes()).hexdigest()
    if actual != expected[rel]:
        fail(f"Ratified checksum mismatch for {rel}")

unexpected = sorted(set(expected) - {f"instruments/{p.name}" for p in files})
if unexpected:
    fail(f"Checksum file contains unexpected entries: {', '.join(unexpected)}")

print(f"Validated {len(files)} ratified governance instruments.")
print(f"Validated {len(id_to_file)} unique document IDs.")
print("All governance references resolve.")
print("All ratified SHA-256 checksums match.")
