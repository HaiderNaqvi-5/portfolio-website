# Launch readiness audit

**Last audited:** 2026-10-01  
**Current branch:** `main`  
**Scope:** PRD v3 requirements versus repository evidence.

| Requirement | Current evidence | Status | Required next action |
| --- | --- | --- | --- |
| Single-page recruiter-first portfolio | `src/pages/index.astro` includes hero, about, experience, selected work, other projects, process, skills, certificates, writing, and contact | Implemented | Replace approved-content placeholders in Phase 0 |
| Separate case-study pages | MDX collection, dynamic route, and case-study index exist | Implemented | Add two approved non-draft MDX case studies |
| Project claims, metrics, and client constraints | `PHASE_0_CONTENT_SHEET.md` and project data preserve review state | Blocked by approval | Complete project approval matrix and select three featured projects |
| CV, portrait, LinkedIn | UI supports contact details; no approved CV, portrait, or LinkedIn URL exists | Blocked by assets/details | Supply the three approved items |
| Contact form | Client states and Pages Function contract exist; D1/KV/Turnstile/Resend bindings are not configured | Blocked by provider setup | Create resources, add deployment secrets, then run production contact checklist |
| Privacy notice | Placeholder privacy page and documented data policy exist | Partial | Name real providers after selection/configuration |
| Responsive and keyboard foundation | Responsive CSS, semantic sections, skip link, focus states, reduced-motion rules | Implemented locally | Verify at 375px against production deployment |
| Light and dark themes | Tokenized themes with persisted client preference | Implemented locally | Verify every production state in both themes |
| SEO / social metadata | Per-page title/description, sitemap, robots, Open Graph SVG | Implemented locally | Replace temporary Pages URL with deployment URL/domain |
| Performance target | Local fonts, static Astro output, production build | Partial | Run three production mobile Lighthouse measurements after deploy |
| CI | GitHub Actions runs `npm ci`, checks, build, static tests | Verified | Keep green after content/deployment changes |

## Verified commands

```text
npm run check      # Astro, Worker TypeScript checks
npm run build      # static production output
npm run test:static
```

GitHub Actions last verified the equivalent checks on commit `c4f3571` and later commits should continue to be checked through the same workflow.

## Launch is not yet authorized

Do not enable `PUBLIC_CONTACT_FORM_ENABLED` or label the site as launched until the blocked rows above have verified evidence. The direct email and WhatsApp routes remain valid fallbacks.
