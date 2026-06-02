# MVP Spec V1

## Purpose

Define the minimum MVP specification for `Revenue Risk Scanner`.

This document is based on:

```text
REVENUE_RISK_SCORING_V1.md
```

Scope is intentionally limited to the first usable product.

## 1. URL Input

### Required Input

```json
{
  "url": "https://example-store.com"
}
```

### Optional Input

```json
{
  "target_country": "Japan",
  "email": "merchant@example.com"
}
```

### Validation

| Rule | Behavior |
|---|---|
| URL is missing | Return validation error |
| URL is malformed | Return validation error |
| URL does not use `http` or `https` | Return validation error |
| URL redirects | Follow redirect and store final URL |
| URL is unreachable | Return crawl error |

## 2. Crawl Target Pages

MVP crawls only public pages.

### Required Crawl Targets

| Page Type | Detection Method | Max Pages |
|---|---|---:|
| Home page | Submitted URL | 1 |
| Product pages | Links matching product-like paths | 3 |
| Shipping policy | Link text/path containing shipping/delivery | 1 |
| Return/refund policy | Link text/path containing return/refund | 1 |
| FAQ | Link text/path containing FAQ/help | 1 |
| Contact page | Link text/path containing contact/support | 1 |
| About page | Link text/path containing about/company/story | 1 |

### Crawl Limits

```text
max_pages: 10
max_timeout_seconds: 30
max_html_bytes_per_page: 500000
```

### Content Extracted

For each page:

```json
{
  "url": "https://example-store.com/policies/shipping-policy",
  "page_type": "shipping_policy",
  "title": "Shipping Policy",
  "text": "extracted visible text",
  "links": ["https://example-store.com/contact"],
  "status_code": 200
}
```

## 3. Revenue Risk Score Calculation

### Score Direction

```text
0 = low risk
100 = critical risk
```

### Risk Components

| Component | Weight |
|---|---:|
| Shipping & Delivery Risk | 15 |
| Duties & Taxes Risk | 12 |
| Return/Refund Risk | 15 |
| Support Trust Risk | 10 |
| Product Confidence Risk | 15 |
| Business Legitimacy Risk | 10 |
| Social Proof Risk | 8 |
| FAQ Gap Risk | 8 |
| Policy Access Risk | 5 |
| Payment Confidence Risk | 2 |

### Severity Multipliers

| Severity | Multiplier |
|---|---:|
| Critical | 1.00 |
| High | 0.75 |
| Medium | 0.50 |
| Low | 0.25 |

### Confidence Values

| Confidence | Value |
|---|---:|
| Strong | 1.00 |
| Medium | 0.70 |
| Weak | 0.40 |

### Formula

```text
risk_points = component_weight * severity_multiplier * confidence
revenue_risk_score = min(100, sum(risk_points))
```

### Risk Level

| Score | Risk Level |
|---:|---|
| 0-24 | Low |
| 25-49 | Moderate |
| 50-74 | High |
| 75-100 | Critical |

## 4. MVP Rules

MVP uses 12 rules only.

| Rule ID | Rule | Component | Default Severity |
|---|---|---|---|
| R001 | Shipping policy missing | Shipping & Delivery Risk | Critical |
| R002 | International shipping unclear | Shipping & Delivery Risk | High |
| R003 | Delivery timing missing | Shipping & Delivery Risk | Medium |
| R004 | Duties/taxes unclear | Duties & Taxes Risk | High |
| R005 | Return policy missing | Return/Refund Risk | Critical |
| R006 | International returns unclear | Return/Refund Risk | High |
| R007 | Return cost responsibility unclear | Return/Refund Risk | Medium |
| R008 | Contact/support hidden | Support Trust Risk | Critical |
| R009 | Product details insufficient | Product Confidence Risk | High |
| R010 | Business identity unclear | Business Legitimacy Risk | High |
| R011 | Reviews/social proof missing | Social Proof Risk | Medium |
| R012 | FAQ missing key objections | FAQ Gap Risk | Medium |

Each finding must include evidence. If evidence is missing, the finding is not scored.

## 5. Free Display Items

Free output shows:

```text
Revenue Risk Score
Risk Level
Top 3 Risks
Short Summary
Upgrade CTA
```

### Free Output Example

```json
{
  "revenue_risk_score": 62,
  "risk_level": "High",
  "summary": "Your store has several buyer-confidence gaps that may reduce international orders.",
  "top_risks": [
    {
      "rule_id": "R004",
      "title": "Duties/taxes are unclear",
      "revenue_loss_type": "Checkout Abandonment"
    },
    {
      "rule_id": "R006",
      "title": "International returns are unclear",
      "revenue_loss_type": "International Order Loss"
    },
    {
      "rule_id": "R008",
      "title": "Contact/support is hard to find",
      "revenue_loss_type": "Conversion Loss"
    }
  ],
  "upgrade_cta": "Unlock the full report to see evidence links and recommended fixes."
}
```

## 6. Paid Display Items

Paid output shows:

```text
Revenue Risk Score
Risk Level
Full Score Breakdown
Top 10 Findings
Evidence URLs
Evidence Snippets
Revenue Loss Type
Recommended Fixes
Suggested Copy
```

### Paid Output Example

```json
{
  "revenue_risk_score": 62,
  "risk_level": "High",
  "score_breakdown": [
    {
      "component": "Return/Refund Risk",
      "risk_points": 12,
      "max_points": 15,
      "status": "High"
    }
  ],
  "findings": [
    {
      "rule_id": "R006",
      "title": "International returns are unclear",
      "severity": "High",
      "component": "Return/Refund Risk",
      "revenue_loss_type": ["Conversion Loss", "International Order Loss"],
      "risk_points": 11.25,
      "evidence_url": "https://example-store.com/policies/refund-policy",
      "evidence_snippet": "Returns are accepted within 14 days.",
      "why_it_matters": "Cross-border buyers may hesitate if they do not know whether international returns are accepted or who pays return shipping.",
      "recommended_fix": "Add a short international returns section explaining eligibility, return window, return shipping cost responsibility, and refund timing.",
      "suggested_copy": "International customers may request a return within 14 days of delivery. Return shipping costs are the responsibility of the customer unless the item arrives damaged or incorrect."
    }
  ]
}
```

## 7. JSON Output Format

### Successful Scan

```json
{
  "scan_id": "scan_123",
  "input_url": "https://example-store.com",
  "final_url": "https://example-store.com",
  "scan_status": "completed",
  "scanned_at": "2026-06-03T00:00:00Z",
  "crawl": {
    "pages_scanned": 7,
    "pages_failed": 0,
    "page_types_found": [
      "home",
      "product",
      "shipping_policy",
      "return_policy",
      "faq",
      "contact",
      "about"
    ]
  },
  "score": {
    "revenue_risk_score": 62,
    "risk_level": "High"
  },
  "free_result": {
    "summary": "Your store has several buyer-confidence gaps that may reduce international orders.",
    "top_risks": []
  },
  "paid_result": {
    "score_breakdown": [],
    "findings": []
  }
}
```

### Finding Object

```json
{
  "rule_id": "R004",
  "title": "Duties/taxes are unclear",
  "component": "Duties & Taxes Risk",
  "severity": "High",
  "confidence": "Medium",
  "risk_points": 6.3,
  "revenue_loss_type": ["Checkout Abandonment"],
  "evidence_url": "https://example-store.com/policies/shipping-policy",
  "evidence_snippet": "International shipping is available.",
  "recommended_fix": "Explain whether duties and taxes are included at checkout or paid by the customer on delivery."
}
```

## 8. Error Behavior

### Error Response Format

```json
{
  "scan_status": "failed",
  "error_code": "URL_UNREACHABLE",
  "message": "The submitted URL could not be reached.",
  "retry_allowed": true
}
```

### Error Codes

| Error Code | When It Happens | Behavior |
|---|---|---|
| `INVALID_URL` | URL is missing or malformed | Do not start scan |
| `URL_UNREACHABLE` | Site cannot be reached | Show retry option |
| `ROBOTS_BLOCKED` | Crawl is blocked by robots or access rules | Show limited-scan unavailable message |
| `TIMEOUT` | Crawl exceeds time limit | Return partial result if at least home page was scanned |
| `NO_TEXT_EXTRACTED` | Pages load but no usable text is extracted | Return failed scan |
| `NO_ECOMMERCE_SIGNAL` | Store does not appear ecommerce-related | Return warning and allow manual retry |
| `SCAN_PARTIAL` | Some pages fail but enough data exists | Return partial score with warning |

### Partial Scan Behavior

If at least the home page and 2 additional pages are scanned:

```text
Return partial score.
Set scan_status to "partial".
Show warning that score may be incomplete.
```

If fewer than 3 pages are scanned:

```text
Do not calculate score.
Return crawl error or insufficient data error.
```

## MVP Completion Criteria

MVP is complete when:

```text
User can submit URL
Crawler scans up to 10 public pages
12 rules run
Revenue Risk Score is calculated
Free JSON output is returned
Paid JSON output structure exists
Errors return consistent JSON
```
