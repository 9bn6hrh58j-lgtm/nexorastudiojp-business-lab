# Personal Trainer Session Tracker - Public Review

This repository contains a public-safe sample of a spreadsheet-based digital product workflow.

The commercial listing assets, finished paid product files, Etsy launch materials, and business strategy notes are intentionally excluded from public release.

## What This Project Demonstrates

- CSV-based sample data for a personal trainer session tracker
- A lightweight script that can generate an Excel workbook from local CSV files
- A lightweight script that can generate basic product image source files and a simple PDF guide
- A repeatable structure for spreadsheet-based digital products

## Public-Safe Files

These files are suitable for public review:

- `README.md`
- `PUBLIC_REVIEW_README.md`
- `REPOSITORY_STRUCTURE.md`
- `clients.csv`
- `packages.csv`
- `sessions.csv`
- `payments.csv`
- `mobile-input.csv`
- `renewal-checklist.csv`
- `quick-start-guide.md`
- `quick-start-guide-final.md`
- `build_xlsx.py`
- `create_launch_assets.js`

## Files Not Included In Public Release

The following are intentionally excluded:

- Finished `.xlsx` paid product file
- Finished PDF guide
- Etsy listing copy
- Product images
- Launch checklists
- Sales experiment plans
- High-ticket market research
- Board reports
- Any payment, Payoneer, or sales platform notes

## Security Review

The local project was checked for:

- API keys
- Auth tokens
- Cookies
- Passwords
- Bank information
- Payoneer information
- Etsy credentials
- Private keys

No actual credentials were found in the source files. Some words such as `Etsy`, `Payoneer`, and `Bank Transfer` appear in strategy notes or sample data, but those files are excluded from public release where appropriate.

## Important Note

Do not publish this folder as-is without respecting `.gitignore`.

Before public release, run:

```bash
git status --ignored
```

Confirm that paid files, product images, Etsy assets, and business strategy documents are not staged.

