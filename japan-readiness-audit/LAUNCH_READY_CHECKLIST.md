# Japan Readiness Audit - Launch Ready Checklist

## Objective

Confirm whether the first 5 LinkedIn DMs can be sent.

Current KPI:

```text
DM sending starts
```

This checklist only covers final URL readiness.  
No new market research.  
No new product development.

## CEO Decision Update

The launch condition has changed.

Old condition:

```text
Google Form URL + Gumroad product URL complete
```

New condition:

```text
Google Form URL complete
```

Reason:

- current objective is first reply acquisition
- payment is not the KPI
- Gumroad payment link is only needed after Fit review
- Gumroad setup can proceed in parallel

## 1. Sample Report URL

Status:

```text
READY
```

URL:

```text
https://github.com/9bn6hrh58j-lgtm/nexorastudiojp-business-lab/blob/main/japan-readiness-audit/customer-facing/SAMPLE_AUDIT_REPORT.pdf
```

Notes:

- This URL is usable for the first outreach batch.
- It is a GitHub-hosted PDF, so the buyer experience is not perfect.
- It is acceptable for the first reply test because the KPI is reply acquisition, not polished conversion.

## 2. Application Form URL

Status:

```text
NOT READY
```

Current issue:

```text
FOUNDER_BETA_APPLICATION_URL_HERE
FORM_ENDPOINT_HERE
```

These placeholders still exist in the repo.

Required action:

1. Create the Google Form.
2. Copy the public form URL.
3. Replace `FOUNDER_BETA_APPLICATION_URL_HERE` in relevant files.
4. If using the static HTML page, replace `FORM_ENDPOINT_HERE` with a live form endpoint or stop using the HTML page for public outreach.

Fastest path:

```text
Use Google Form URL directly in DM replies.
```

Do not wait for the static HTML page if the goal is to start DMs today.

## 3. Gumroad Product URL

Status:

```text
NOT READY
```

Current issue:

```text
GUMROAD_PRODUCT_URL_HERE
```

This placeholder still exists in the repo.

Required action:

1. Create the Gumroad product.
2. Set price to `$49`.
3. Use English-only payment guidance.
4. Set Founder Beta copy to `10 Slots Available`.
5. Add the Google Form URL to the Gumroad post-purchase message.
6. Copy the live Gumroad product URL.
7. Replace `GUMROAD_PRODUCT_URL_HERE` in relevant files.

## 4. DM Send Readiness

Status:

```text
NOT READY
```

Reason:

The first DM can technically be sent without the form/payment URLs because it only asks whether the prospect wants the sample report.

However, the reply path requires:

```text
[APPLICATION_FORM_LINK]
```

That link is not finalized. Once the Google Form URL is finalized, the first 5 DMs can begin even if the Gumroad URL is still pending.

## URL Readiness Table

| Item | Required For First DM? | Required After Positive Reply? | Status |
|---|---:|---:|---|
| Sample report URL | Yes | Yes | READY |
| Application form URL | No | Yes | NOT READY |
| Gumroad product URL | No | After Fit review | PARALLEL WORK |
| Founder Beta slots copy | No | Yes | READY: `10 Slots Available` |
| English-only payment guidance | No | Yes | READY |

## Minimum To Start First 5 DMs

Strict interpretation:

```text
NOT READY
```

Reason:

The Google Form URL is not complete.

Practical interpretation:

```text
READY as soon as Google Form URL exists.
```

Gumroad does not block DM start because payment is only sent after Fit review.

## Final Blockers

| Priority | Blocker | Owner | Fix |
|---:|---|---|---|
| 1 | Application form URL missing | Codex CLI / CEO execution | Create Google Form and provide public URL |
| 2 | Gumroad product URL missing | Codex CLI / CEO execution | Parallel work; needed before Fit-approved payment |
| 3 | Placeholder replacement not complete | Codex CLI | Replace URLs in repo and push |
| 4 | OUTREACH_BATCH_01 follow-up links still placeholders | Codex CLI | Replace `[SAMPLE_REPORT_LINK]` and `[APPLICATION_FORM_LINK]` |

## Final Judgment

```text
NOT READY
```

The first 5 DMs should wait until the Google Form URL is finalized at minimum.

Once the Google Form URL exists, the first 5 DMs can start. Gumroad can follow in parallel because payment is only sent after Fit review.
