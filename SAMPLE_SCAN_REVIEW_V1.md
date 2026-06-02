# Sample Scan Review V1

## Positioning Adopted

Revenue Risk Scanner is fixed as:

```text
A URL-only pre-audit that instantly explains why buyers may not purchase, beyond what analytics tools can explain.
```

It is not:

- a GA4 replacement
- a Microsoft Clarity replacement
- a Hotjar replacement
- a full CRO consultant replacement

The product must provide:

- specific risks
- evidence
- fixable recommendations
- a clear revenue-risk frame

## Test Summary

| Item | Result |
|---|---|
| App | `apps/revenue-risk-scanner` |
| Build | Passed |
| Local server | Passed |
| Local URL | `http://localhost:3000` |
| API endpoint | `POST /api/scan` |
| Sample URL | `https://www.allbirds.com` |
| Scan result | Passed |
| Saved result | `samples/revenue-risk-scanner/allbirds-scan-2026-06-03.json` |

## Target URL

```text
https://www.allbirds.com
```

Final scanned URL:

```text
https://www.allbirds.com/
```

## Scan Result

| Item | Value |
|---|---:|
| Revenue Risk Score | `41.97 / 100` |
| Risk Level | `moderate` |
| Decision | `needs_fix` |
| Crawled Pages | `2` |
| Findings | `9` |

Summary returned by the scanner:

```text
Moderate risk detected. Several buyer-confidence gaps may reduce conversion.
```

## Crawled Pages

| Page | Title |
|---|---|
| `https://www.allbirds.com/` | `Allbirds: Comfortable, Sustainable Shoes & Apparel` |
| `https://www.allbirds.com/pages/help` | `Help Page` |

## Detected Risks

| Risk | Category | Severity | Risk Points |
|---|---|---|---:|
| International shipping unclear | Shipping & Delivery Risk | high | 7.87 |
| Delivery timing missing | Shipping & Delivery Risk | medium | 5.25 |
| Duties/taxes unclear | Duties & Taxes Risk | high | 9.00 |
| Return cost responsibility unclear | Return/Refund Risk | medium | 5.25 |
| International returns unclear | Return/Refund Risk | high | 4.50 |
| Reviews/social proof missing | Social Proof Risk | medium | 4.00 |
| FAQ missing | FAQ Gap Risk | medium | 4.00 |
| Policy links hidden | Policy Access Risk | medium | 1.75 |
| Payment reassurance weak | Payment Confidence Risk | low | 0.35 |

## Evidence

### 1. International Shipping Unclear

Evidence URL:

```text
https://www.allbirds.com/
```

Evidence snippet:

```text
FREE shipping & returns. Men's Shoes Customer Favorites Apparel & Accessories...
```

Human review:

The scanner correctly found general shipping language, but the evidence is not strong enough. It did not prove that international shipping is unclear; it proved that the homepage snippet does not explain international shipping. This is useful as a first-pass warning, but not enough for a paid report unless the scanner also checks shipping policy pages.

Fix:

```text
State supported countries, international shipping availability, and delivery expectations in a visible shipping section.
```

### 2. Delivery Timing Missing

Evidence URL:

```text
https://www.allbirds.com/
```

Evidence snippet:

```text
FREE shipping & returns...
```

Human review:

This finding is directionally useful. A buyer may want delivery timing before purchase. However, the scanner needs to crawl a shipping policy page or delivery FAQ before scoring this as a meaningful issue.

Fix:

```text
Add estimated delivery windows near shipping messaging and in the shipping policy.
```

### 3. Duties / Taxes Unclear

Evidence URL:

```text
https://www.allbirds.com/
```

Evidence snippet:

```text
Allbirds: Comfortable, Sustainable Shoes & Apparel...
```

Human review:

This is an important cross-border revenue-risk category. The current evidence is weak because it is based on absence from the crawled text. The finding becomes valuable if the scanner explicitly reports:

```text
No duties, taxes, customs, import fee, or VAT language was found in the crawled pages.
```

Fix:

```text
Add clear language explaining whether duties, taxes, customs, or import fees may apply and who pays them.
```

### 4. Return Cost Responsibility Unclear

Evidence URL:

```text
https://www.allbirds.com/
```

Evidence snippet:

```text
FREE shipping & returns...
```

Human review:

This is potentially valuable because buyers care who pays return shipping. The scanner needs policy-page evidence to avoid false positives.

Fix:

```text
State whether return shipping is free, customer-paid, or condition-dependent.
```

### 5. International Returns Unclear

Evidence URL:

```text
https://www.allbirds.com/
```

Evidence snippet:

```text
FREE shipping & returns...
```

Human review:

This is a good cross-border category, but current confidence should remain low until international return language is checked on a return policy page.

Fix:

```text
Add a short international returns section for overseas buyers.
```

### 6. Reviews / Social Proof Missing

Evidence URL:

```text
https://www.allbirds.com/
```

Evidence snippet:

```text
Allbirds: Comfortable, Sustainable Shoes & Apparel...
```

Human review:

This is the weakest finding in the sample. Allbirds is a known brand and may have social proof or reviews elsewhere. The scanner only crawled two pages, so this can become a false positive.

Fix:

```text
Only score social proof after crawling product pages or checking visible review/testimonial modules.
```

### 7. FAQ Missing

Evidence URL:

```text
https://www.allbirds.com/
```

Evidence snippet:

```text
Allbirds: Comfortable, Sustainable Shoes & Apparel...
```

Human review:

This is useful if the scanner clearly distinguishes between `FAQ not found in crawled pages` and `FAQ does not exist`. The current language is too absolute.

Fix:

```text
Change finding language to "FAQ not found in scanned pages" unless a full-site crawl confirms absence.
```

### 8. Policy Links Hidden

Evidence URL:

```text
https://www.allbirds.com/
```

Evidence snippet:

```text
https://www.allbirds.com/ https://www.allbirds.com/search https://www.allbirds.com/collections/mens...
```

Human review:

This finding may be technically true for the limited crawl result, but the evidence snippet is not customer-facing enough. A buyer should see a clear explanation of which expected policy links were missing from navigation/footer crawl results.

Fix:

```text
Show the expected policy links checked and which ones were not found.
```

### 9. Payment Reassurance Weak

Evidence URL:

```text
https://www.allbirds.com/
```

Evidence snippet:

```text
Allbirds: Comfortable, Sustainable Shoes & Apparel...
```

Human review:

This is low priority and should not be prominent in the free MVP. Checkout and payment methods are difficult to inspect from URL-only public HTML.

Fix:

```text
Keep payment reassurance low-weight until checkout-adjacent data is available.
```

## Human Review

### What Worked

- The app builds successfully.
- The local server starts successfully.
- The scan API returns structured JSON.
- URL-only scan produces a Revenue Risk Score.
- Findings include categories, severity, evidence URL, revenue-loss type, and recommended fixes.
- The product direction is consistent with the fixed positioning.

### What Did Not Work Well Enough

- Only 2 pages were crawled, despite the MVP spec targeting up to 10 pages.
- Evidence snippets are often generic homepage text rather than precise proof.
- Several findings are based on absence from a small crawl set, which creates false-positive risk.
- Phone extraction produced numbers that appear unrelated to real customer support phone numbers.
- The scanner did not crawl dedicated shipping, return, policy, FAQ, or product pages deeply enough.
- The output is useful for internal validation, but not yet strong enough as a paid standalone report.

## Is This Worth Paying For?

### Current MVP Output

```text
No, not yet as a paid standalone scan.
```

Reason:

The current scan proves the technical flow, but paid value requires stronger evidence. A customer would likely challenge some findings because they are based on shallow crawl coverage and generic snippets.

### Free Lead Magnet

```text
Yes.
```

Reason:

As a free scan, the output is already useful enough to create curiosity. It can show a score, identify broad risk categories, and invite the user to unlock a better report.

### Paid Version Requirement

For a paid report, the scanner must reliably provide:

- precise evidence snippets
- page-specific proof
- fewer false positives
- policy-page crawling
- product-page crawling
- copy-ready fixes
- priority order based on buyer impact

## MVP Hypothesis Result

| Hypothesis | Result | Notes |
|---|---|---|
| URL-only scan can run | Passed | API returned a valid result |
| URL-only scan can produce findings | Passed | 9 findings returned |
| Findings are specific enough | Partially passed | Categories are specific; evidence is too generic |
| Findings are evidence-backed | Partially passed | Evidence URLs exist; snippets need improvement |
| Findings are fixable | Passed | Recommendations are actionable |
| Current output is paid-worthy | Failed | Needs stronger proof and fewer false positives |
| Current output is free-scan-worthy | Passed | Good enough for lead capture and learning |

## Required Next Fixes

Priority 1:

```text
Increase crawl coverage from 2 pages to dedicated policy, product, FAQ, contact, about, and shipping/return pages.
```

Priority 2:

```text
Improve evidence snippets so each finding shows the exact missing/weak buyer-facing text.
```

Priority 3:

```text
Change absence-based findings to say "not found in scanned pages" unless full coverage is confirmed.
```

Priority 4:

```text
Remove or improve phone-number extraction to avoid false support signals.
```

Priority 5:

```text
Separate free output from paid output. Free output should show score + top 3 risks. Paid output should show full evidence and copy-ready fixes.
```

## Final Judgment

```text
TECHNICAL STATUS: PASSED
SCAN QUALITY: PARTIAL
PAID VALUE: NOT YET
FREE MVP VALUE: YES
NEXT ACTION: IMPROVE EVIDENCE QUALITY BEFORE PAID POSITIONING
```

The product is moving in the right direction, but the CEO should not pretend the current sample is paid-report quality.

The correct next milestone is:

```text
One sample scan where at least 3 findings are specific, evidence-backed, and hard for the merchant to dismiss.
```
