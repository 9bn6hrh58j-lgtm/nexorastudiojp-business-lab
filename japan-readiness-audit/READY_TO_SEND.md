# Japan Readiness Audit - Ready To Send

## Objective

Move to DM execution as soon as the Google Form URL is finalized.

Current goal:

```text
DM sending starts
```

Current KPI:

- 1 reply
- 1 form response

No new market research.  
No new product development.  
No new business ideas.

## 1. Google Form URL

Status:

```text
NOT READY
```

URL:

```text
PENDING_GOOGLE_FORM_URL
```

Blocking issue:

- The live Google Form URL is not yet present in the repository.
- DM follow-up cannot be fully executed until this URL exists.

Required action:

- Codex CLI completes Google Form.
- Codex CLI obtains the public Google Form URL.
- Codex CLI replaces `PENDING_GOOGLE_FORM_URL`, `[GOOGLE_FORM_URL]`, and `[APPLICATION_FORM_LINK]` where needed.
- Codex CLI updates `BOARD_REPORT.md` and pushes to GitHub.

## 2. Sample Report URL

Status:

```text
READY
```

URL:

```text
https://github.com/9bn6hrh58j-lgtm/nexorastudiojp-business-lab/blob/main/japan-readiness-audit/customer-facing/SAMPLE_AUDIT_REPORT.pdf
```

Use:

- Send after a positive reply.
- Do not include in the first cold DM unless the prospect asks for it.

## 3. DM Send Targets - Top 5

| Send Order | Company | URL | Main Angle |
|---:|---|---|---|
| 1 | Petite Skin Co. | https://www.petiteskinco.com | Skincare safety, suitability, shipping, and return reassurance for Japanese buyers |
| 2 | Daeskin Global | https://www.daeskinglobal.com | Japan shipping, DDU duties, and return limitations |
| 3 | DEVATA Jewelry | https://devata.com | Jewelry trust signals, duties, delivery timing, and return clarity |
| 4 | EVE Oslo | https://evestore.com | Whether international reassurances are visible early enough for Japanese buyers |
| 5 | The AllureK | https://theallurek.com | K-beauty interest in Japan plus overseas trust and purchase-confidence questions |

## 4. Final DM Copy

### 1. Petite Skin Co.

```text
Hi [Name], I came across Petite Skin Co. and noticed you support Asia/Japan shipping.

One thing that may matter for Japanese buyers: skincare shoppers here often look for safety, suitability, shipping, and return reassurance before buying from an overseas brand.

I am putting together a small Founder Beta for Japan Readiness Audits.

Would you like me to send a sample report so you can see what I mean?
```

### 2. Daeskin Global

```text
Hi [Name], I came across Daeskin Global and noticed your FAQ includes Japan shipping.

One thing that stood out: DDU duties and return limitations can create hesitation for Japanese buyers, even when the products are attractive.

I am running a small Founder Beta for Japan Readiness Audits to flag these trust and purchase-flow issues before brands invest more in Japan.

Would you like me to send a sample report?
```

### 3. DEVATA Jewelry

```text
Hi [Name], I came across DEVATA and noticed you already support Japan shipping.

For jewelry, Japanese buyers may check trust signals, duties, delivery timing, and return clarity before purchasing from an overseas store.

I am running a small Founder Beta for Japan Readiness Audits and thought DEVATA looked like a relevant fit.

Would you like me to send a sample report?
```

### 4. EVE Oslo

```text
Hi [Name], I came across EVE Oslo and noticed your international policy includes Japan/Asia-Pacific shipping.

Your policy looks more prepared than many small brands. The question I would check is whether those reassurances are visible early enough in the buyer journey for Japanese customers.

I am running a small Founder Beta for Japan Readiness Audits.

Would you like me to send a sample report?
```

### 5. The AllureK

```text
Hi [Name], I came across The AllureK and noticed you support Japan shipping.

K-beauty has interest in Japan, but overseas stores still need to answer trust, shipping, return, and purchase-confidence questions very clearly.

I am running a small Founder Beta for Japan Readiness Audits for brands considering Japan.

Would you like me to send a sample report?
```

## 5. KPI

Primary KPI:

```text
1 reply
```

Secondary KPI:

```text
1 form response
```

Not a KPI:

```text
sale
```

The current objective is not revenue.

## 6. Tracking After Sending

Use the target company tracker:

```text
japan-readiness-audit/validation-assets/TARGET_COMPANY_LIST_TEMPLATE.xlsx
```

Track:

- DM sent date
- sent by
- reply status
- reply date
- sample report sent
- Google Form URL sent
- form response received
- Fit status
- next action
- objection/notes

## Reply Handling

### If They Say Yes

```text
Thanks. Here is the sample report:
https://github.com/9bn6hrh58j-lgtm/nexorastudiojp-business-lab/blob/main/japan-readiness-audit/customer-facing/SAMPLE_AUDIT_REPORT.pdf

If you want me to check whether [Company] is a fit for the Founder Beta, you can apply here:
PENDING_GOOGLE_FORM_URL

Founder Beta currently has 10 slots available. I review fit before sending the payment link so the first audits stay focused and useful.
```

### If They Ask About Price

```text
Founder Beta is $49 for the first 10 slots.

I review fit first, then send the payment link if the site is a good match.

The written audit is delivered within 3-5 business days after payment.
```

### If They Are Not Focused On Japan

```text
Totally understood.

If Japan becomes active later, I would start by checking whether the site clearly answers shipping, duties, returns, support, and trust questions for Japanese buyers before spending on translation or ads.

Happy to reconnect when Japan is closer on your roadmap.
```

## Final Judgment

```text
NOT READY
```

Reason:

Google Form URL is not finalized.

Once the Google Form URL is added, this report should be updated to:

```text
READY
```
