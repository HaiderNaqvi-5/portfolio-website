# Contact delivery technical specification

## Decision

Use a **Cloudflare Pages Function** for the public contact endpoint, Cloudflare Turnstile for bot verification, a durable database for submissions, and an email provider for delivery. The endpoint receives form input only after client-side validation; all trust decisions remain server-side.

## Required bindings

| Binding | Purpose | Secret / resource |
| --- | --- | --- |
| `TURNSTILE_SECRET_KEY` | Server-side CAPTCHA verification | Secret |
| `CONTACT_DATABASE_URL` | Durable submission storage | Secret |
| `EMAIL_API_KEY` | Delivery and failure notifications | Secret |
| `EMAIL_FROM` | Verified sender address | Secret/config |
| `EMAIL_TO` | Haider's receiving address | Secret/config |
| `CONTACT_DB` | D1 binding for submissions | Provider resource |
| `CONTACT_RATE_LIMIT` | KV binding for per-IP five-per-hour enforcement | Provider resource |

## Request sequence

1. Reject malformed JSON, invalid fields, and a filled honeypot.
2. Check the five-submissions-per-hour limit without storing a durable IP address.
3. Verify Turnstile server-side.
4. Store the message with an encrypted transport connection and status `pending_delivery`.
5. Deliver email; mark `delivered` on success.
6. On failure, retain the stored message, mark it `delivery_failed`, and alert Haider within 15 minutes.

## Retention and privacy

- Only Haider may access submissions.
- The application does not send sender email or message body to analytics.
- A scheduled deletion job removes records after 12 months; its pre-launch test uses a seeded expired submission.
- The public privacy page must be updated with provider names before the form is enabled.

## Pre-launch blocker

Provider account access, verified sender/domain, storage resource, and production secrets have not been supplied. The public form remains deliberately disabled until these are configured and the PRD's production checklist is completed.

## Implemented endpoint

`functions/api/contact.ts` implements the Pages Function contract, including payload validation, honeypot behavior, KV-backed rate limiting, Turnstile verification, D1 persistence, and Resend delivery state updates. It cannot be live-tested until the bindings and credentials above exist. The 12-month cleanup and 15-minute failure alert need a scheduled Worker/monitoring resource before launch.
