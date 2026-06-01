# Public Release Checklist

## Goal

Prepare this project for GitHub public review without exposing paid product files, Etsy launch assets, payment-related notes, private business strategy, or credentials.

## 1. File Inclusion Check

Public-safe files:

- [ ] `README.md`
- [ ] `PUBLIC_REVIEW_README.md`
- [ ] `REPOSITORY_STRUCTURE.md`
- [ ] `clients.csv`
- [ ] `packages.csv`
- [ ] `sessions.csv`
- [ ] `payments.csv`
- [ ] `mobile-input.csv`
- [ ] `renewal-checklist.csv`
- [ ] `quick-start-guide.md`
- [ ] `quick-start-guide-final.md`
- [ ] `build_xlsx.py`
- [ ] `create_launch_assets.js`

## 2. Exclusion Check

Do not publish:

- [ ] `personal-trainer-session-tracker.xlsx`
- [ ] `quick-start-guide.pdf`
- [ ] `images/`
- [ ] `image-sources/`
- [ ] `etsy-listing.md`
- [ ] `etsy-launch-assets.md`
- [ ] `etsy-image-layouts.md`
- [ ] `thumbnail-brief.md`
- [ ] `launch-checklist.md`
- [ ] `READY_TO_LAUNCH.md`
- [ ] `WAITING_PERIOD_TASKS.md`
- [ ] `POST_LAUNCH_CHECKLIST.md`
- [ ] `sales-experiment-plan.md`
- [ ] `competitive-advantage.md`
- [ ] `HIGH_TICKET_MARKET_RESEARCH.md`
- [ ] `JAPAN_MARKET_OPPORTUNITIES.md`
- [ ] `HIGH_TICKET_IDEAS.md`
- [ ] `BOARD_REPORT.md`
- [ ] `GITHUB_READY.md`

## 3. Sensitive Information Check

Before staging files, search for:

```bash
rg -n -i "api[_-]?key|secret|token|password|cookie|authorization|bearer|payoneer|bank|routing|account number|stripe|paypal|etsy|client_secret|access_token|refresh_token|private key|BEGIN .*PRIVATE" .
```

Confirm that no credentials or private payment information are present in staged files.

## 4. Git Staging Check

Run:

```bash
git status --ignored
```

Confirm:

- [ ] Paid `.xlsx` file is ignored
- [ ] PDF guide is ignored
- [ ] Product images are ignored
- [ ] Etsy listing assets are ignored
- [ ] Strategy documents are ignored
- [ ] `.DS_Store` is ignored

## 5. Final Release Check

- [ ] GitHub README is public-safe
- [ ] No Etsy sales copy is included
- [ ] No Payoneer notes are included
- [ ] No personal account data is included
- [ ] No API keys or auth tokens are included
- [ ] No product image PNG files are included
- [ ] No finished paid product file is included

## Final Public Release Status

Do not publish until every checkbox above is verified.

