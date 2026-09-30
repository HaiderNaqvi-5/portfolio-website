# Portfolio architecture

## Chosen foundation

The site is an **Astro static site** deployed to Cloudflare Pages.

- Astro renders content to HTML at build time for fast, JavaScript-independent core pages.
- TypeScript modules hold site-wide copy and structured project metadata.
- MDX files in `src/content/case-studies/` will hold long-form case studies once Phase 0 has approved their claims and assets.
- A small browser script handles the light/dark preference only; the content remains readable without it.
- CSS design tokens provide a deliberately designed light and dark theme without a UI framework.

## Route map

| Route | Purpose |
| --- | --- |
| `/` | Recruiter-first single-page portfolio with anchored sections |
| `/case-studies/` | Case-study index |
| `/case-studies/[slug]/` | Individual, static case-study pages |
| `/privacy/` | Contact and analytics privacy notice |
| `/404` | Branded recovery page |

## Content boundaries

- `src/data/site.ts`: approved identity, navigation, process, skills, experience, and controlled placeholders.
- `src/content/case-studies/`: MDX case studies with title, summary, reading time, and SEO frontmatter.
- `public/assets/`: approved CV, portrait, screenshots, architecture diagrams, and Open Graph image only.

No client material, private repository links, project screenshots, or outcome claims are added until the PRD's Phase 0 project approval matrix has a source of truth and publication permission.

## Contact architecture (pending tech-spec decision)

The frontend form is designed now. Before launch, a Cloudflare Pages Function or equivalent server endpoint will implement Turnstile verification, honeypot handling, per-IP rate limiting, secure persistence, email delivery, failure alerting, and the 12-month deletion workflow required by the PRD.

## Quality gates

- `npm run check`: Astro and TypeScript validation
- `npm run build`: static production build
- production: Lighthouse mobile checks, keyboard/reduced-motion checks, theme checks, and the PRD contact-form checklist
