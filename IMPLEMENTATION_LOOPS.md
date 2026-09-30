# Implementation loops

The goal remains completion of the approved portfolio PRD. Each loop requires implementation, verification, a commit, and a push before the next loop is treated as done.

| Loop | Scope | Verification | Status |
| --- | --- | --- | --- |
| 1 | Astro architecture, repository hygiene, GitHub remote, base responsive site | `npm run check`, `npm run build`, remote verification | Complete — `1cec5bb` |
| 2 | Complete homepage IA: work, other projects, certificates, case-study index, navigation and states | Static route build, browser accessibility-tree smoke check, desktop visual review | Complete — pending commit |
| 3 | Content system and two approved case studies | MDX schema, routes, SEO, content review | Waiting for Phase 0 approvals |
| 4 | Contact delivery: Turnstile, rate limit, storage, email, retention, monitoring | Provider integration tests and production checklist | Waiting for provider credentials |
| 5 | Launch quality: accessibility, performance, SEO, OG image, deployment | Production Lighthouse and end-to-end contact test | In progress |

## Rules

- A project claim, screenshot, metric, or external link is not published until it has an approved source of truth in `PHASE_0_CONTENT_SHEET.md`.
- Contact secrets live only in Cloudflare/environment secret storage.
- Every completed loop is committed and pushed to `HaiderNaqvi-5/portfolio-website`.
