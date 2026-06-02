# Japan Readiness Audit - Launch Blockers

## Objective

Prepare the minimum operational setup required to start LinkedIn outreach for the first paid Japan Readiness Audit.

This is not market research.  
This is not new product research.  
The only goal is to remove launch blockers so the first audit customer can apply and pay.

## Current Decision

Use the fastest low-cost stack:

1. Application form: Google Forms
2. Payment: Gumroad
3. Sample report: existing GitHub PDF link
4. Outreach: LinkedIn manual DM
5. Tracking: existing target company tracker

Reason:

- technically simple
- free or low-cost
- can be configured in under 30 minutes
- no engineering dependency
- enough for the first validation cycle

## Current Blockers

| Priority | Blocker | Impact | Solution | Estimated Time | Owner |
|---:|---|---|---|---:|---|
| 1 | No live application form | Prospects cannot submit website URL or context | Create Google Form and link responses to Google Sheets | 10 min | CEO / Codex Chat support |
| 2 | No live payment link | Buyers cannot pay | Create Gumroad product at $49 and copy product URL | 10-15 min | CEO |
| 3 | Application page has placeholders | Public page cannot be shared safely | Replace `FORM_ENDPOINT_HERE`, `GUMROAD_PRODUCT_URL_HERE`, and `FOUNDER_BETA_APPLICATION_URL_HERE` after URLs exist | 5 min | Codex Chat / CLI |
| 4 | Sample report link is GitHub-facing | Trust proof works, but buyer experience is not polished | Use current GitHub PDF link for now; upgrade later to a cleaner hosted page if needed | 0 min now | Codex Chat |
| 5 | Outreach tracker must be ready before sending DMs | Replies and objections may be lost | Use existing `TARGET_COMPANY_LIST_TEMPLATE.xlsx` | 2 min | CEO |
| 6 | Founder Beta remaining slots not updated | Scarcity is weaker | Start with "10 beta slots available" and update manually after each sale | 2 min | CEO |

## 1. Fastest Way To Prepare The Application Form

### Recommended Option: Google Forms

Use Google Forms first.

Why:

- fastest setup
- no coding
- free with a Google account
- responses can be saved to Google Sheets
- familiar to prospects
- easy to edit later

Google's official help states Google Forms can be used to create forms, send them to others, and analyze responses in real time. It also supports creating a form from Google Sheets so responses are saved in a sheet.

Source: https://support.google.com/docs/answer/6281888

### Form Title

```text
Japan Readiness Audit - Founder Beta Application
```

### Form Description

```text
Apply for the $49 Founder Beta Japan Readiness Audit.

This audit reviews your current website from a Japanese buyer-readiness perspective and identifies trust, localization, FAQ, payment, shipping, and return issues that may block Japanese customers.

This is not legal, tax, customs, regulatory, or sales-guarantee advice.
```

### Required Fields

1. Name
2. Email
3. Company name
4. Website URL
5. Country
6. Product/service category
7. Are you currently selling to Japan?
8. Do you currently ship to Japan?
9. What are you planning for Japan?
10. What do you most want reviewed?
11. Consent checkbox:

```text
I understand this audit is not legal, tax, customs, regulatory, or sales-guarantee advice.
```

### Confirmation Message

```text
Thanks for applying. If your website is a fit for the Founder Beta, you will receive the $49 payment link and next steps.
```

### Time Required

10 minutes.

### Alternative: Tally

Tally is also a strong option because its official pricing page states it offers unlimited forms and submissions for free within fair usage guidelines.

Source: https://tally.so/pricing

However, Google Forms is still the fastest if the goal is to start today.

## 2. Fastest Way To Prepare The Payment Flow

### Recommended Option: Gumroad

Use Gumroad for the first payment link.

Why:

- no monthly charge
- product page can be created quickly
- works for digital/service-style deliverables
- easy direct payment link
- acceptable for first validation
- Gumroad handles tax complexity as merchant of record according to its pricing page

Gumroad's official pricing page states direct/profile sales are charged at 10% + $0.50 per transaction, and that there are no monthly charges.

Source: https://gumroad.com/pricing

### Product Setup

Product name:

```text
Japan Readiness Audit - Founder Beta
```

Price:

```text
$49
```

Product type:

```text
Digital product / service-style audit deliverable
```

Button copy:

```text
Apply for the $49 Founder Beta Audit
```

Product description:

Use:

```text
japan-readiness-audit/sales/GUMROAD_PRODUCT_PAGE.md
```

### Post-Purchase Message

```text
Thank you for purchasing the Japan Readiness Audit Founder Beta.

Please submit your website and launch context here:
FOUNDER_BETA_APPLICATION_URL_HERE

Your written audit report will be delivered within 3-5 business days after your application details are received.
```

### Time Required

10-15 minutes.

## 3. Required Work Before LinkedIn Outreach

### Must Finish Before Sending DMs

| Priority | Task | Done When | Estimated Time |
|---:|---|---|---:|
| 1 | Create Google Form | Public form URL exists | 10 min |
| 2 | Create Gumroad product | Live payment URL exists | 10-15 min |
| 3 | Update application/Gumroad docs | Placeholder URLs replaced in repo | 5 min |
| 4 | Confirm sample report link opens | PDF link works without login | 2 min |
| 5 | Prepare first 25 target companies | Rows exist in tracker | 15-30 min |
| 6 | Prepare first DM batch | 10 personalized observations ready | 20-30 min |

### Not Required Before First Outreach

These can wait:

- custom domain
- polished landing page
- Notion page
- email automation
- CRM
- paid ads
- full Japan Market Entry Toolkit
- new market research
- new product research

## Priority Order

### Priority 1: Make application possible

Create Google Form.

Without this, buyer intent cannot be captured.

### Priority 2: Make payment possible

Create Gumroad product.

Without this, interest cannot become validation.

### Priority 3: Replace placeholders

Update:

- `FORM_ENDPOINT_HERE`
- `GUMROAD_PRODUCT_URL_HERE`
- `FOUNDER_BETA_APPLICATION_URL_HERE`

Without this, the funnel is still not operational.

### Priority 4: Start direct outreach

Do not wait for a perfect page.

Start with 25 highly targeted companies and use personalized observations.

## Recommended 30-Minute Setup Plan

### Minute 0-10

Create Google Form and copy the public form URL.

### Minute 10-25

Create Gumroad product, paste the product copy, upload or link the sample report, and copy the product URL.

### Minute 25-30

Replace placeholder URLs in repository files and push.

## Operational Flow For First Outreach

Use this simple sequence:

```text
LinkedIn personalized DM
-> sample report link
-> Google Form application
-> Gumroad payment link
-> audit delivery
-> follow-up
```

If the prospect is already high-intent, use:

```text
LinkedIn personalized DM
-> Gumroad payment link
-> Google Form intake
-> audit delivery
```

## Drop-Off Risks

### 1. LinkedIn DM ignored

Most likely drop-off.

Mitigation:

- use one specific website issue
- do not pitch generically
- send to founder/owner/growth lead

### 2. Sample report viewed but no application

Mitigation:

- include clear CTA after sharing sample
- explain first 10 beta slots
- ask one direct question: "Would you like me to review your site?"

### 3. Application submitted but no payment

Most important validation point.

Mitigation:

- send payment link quickly
- remind them delivery starts after payment
- keep the price at $49 for first 10 only

### 4. Payment made but intake incomplete

Mitigation:

- Gumroad post-purchase message must link to Google Form
- send manual follow-up within 24 hours

## Today Decision

### Can outreach start today?

**Yes, if the three live URLs are created and inserted today.**

Required live URLs:

1. Google Form URL
2. Gumroad product URL
3. Public application page or form URL

### Final Judgment

**Yes**

Today outreach is realistic because the remaining blockers are operational, not strategic or technical.

The only hard stop is whether the CEO can create the Google Form and Gumroad product links. If those links are created, the first LinkedIn outreach batch can begin today.
