#!/usr/bin/env bash
set -euo pipefail

# Usage: ./scripts/set_form_url.sh <google_form_url>
#
# Replaces all Google Form URL placeholders across the repo.
# Run from the repo root after obtaining the public Google Form URL.

FORM_URL="${1:?Usage: ./scripts/set_form_url.sh <google_form_url>}"
REPO="$(cd "$(dirname "$0")/.." && pwd)"

echo "Replacing Google Form URL placeholders with: $FORM_URL"

# Files and their placeholder patterns
sed -i '' "s|PENDING_GOOGLE_FORM_URL|${FORM_URL}|g" \
  "$REPO/japan-readiness-audit/READY_TO_SEND.md"

sed -i '' "s|PENDING_GOOGLE_FORM_URL|${FORM_URL}|g" \
  "$REPO/japan-readiness-audit/SEND_READY_REPORT.md"

sed -i '' "s|\[GOOGLE_FORM_URL\]|${FORM_URL}|g" \
  "$REPO/japan-readiness-audit/OUTREACH_EXECUTION_PLAN.md"

sed -i '' "s|\[APPLICATION_FORM_LINK\]|${FORM_URL}|g" \
  "$REPO/japan-readiness-audit/OUTREACH_BATCH_01.md"

sed -i '' \
  "s|FOUNDER_BETA_APPLICATION_URL_HERE|${FORM_URL}|g" \
  "$REPO/japan-readiness-audit/LAUNCH_READY_CHECKLIST.md"

sed -i '' \
  "s|FOUNDER_BETA_APPLICATION_URL_HERE|${FORM_URL}|g" \
  "$REPO/japan-readiness-audit/LAUNCH_BLOCKERS.md"

sed -i '' \
  "s|FOUNDER_BETA_APPLICATION_URL_HERE|${FORM_URL}|g" \
  "$REPO/japan-readiness-audit/sales/GUMROAD_PRODUCT_PAGE.md"

echo "Done. Verify changes with: git diff"
echo ""
echo "Next: git add -A && git commit -m 'Set live Google Form URL' && git push"
