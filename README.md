# Haider Naqvi portfolio

Recruiter-first portfolio website for Syed Muhammad Haider Abbas Naqvi.

## Architecture

Astro generates static, SEO-friendly pages for Cloudflare Pages. Content and sensitive project claims are separated from the UI so the PRD's Phase 0 approval matrix can be enforced before publication.

See [ARCHITECTURE.md](ARCHITECTURE.md) and [PHASE_0_CONTENT_SHEET.md](PHASE_0_CONTENT_SHEET.md).

## Commands

```bash
npm install
npm run dev
npm run check
npm run build
```

## Before deployment

1. Complete the Phase 0 project approval matrix.
2. Configure contact delivery, Turnstile, storage, retention, and alerts in the provider's secret store.
3. Add the CV, approved portrait, approved project visuals, and approved case-study MDX files.
4. Run the PRD's production accessibility, performance, and contact-form checks.
