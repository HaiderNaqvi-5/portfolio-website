# GitHub Portfolio Audit

**Account reviewed:** HaiderNaqvi-5  
**Scope:** every owned repository visible to the authenticated account, including private projects.  
**Audit method:** repository metadata, README files, directory structure, dependency manifests, migrations, tests, and deployment configuration. “Engineering response” describes what the implementation demonstrably addresses; it does **not** claim an unverified production incident.

## Portfolio shortlist

Use these as the primary case studies on the résumé site: **GA Traders**, **EMC Veritas**, **ScholarAI**, **EmbedIQ**, **InternFlow**, **CampaignIQ**, and **DocuMind**. They show the strongest evidence of complete product thinking: multi-role workflows, databases, security, testing, deployment, and operational constraints.

| Project | Best positioning | Evidence of maturity |
| --- | --- | --- |
| GA Traders | Production-oriented wholesale operations system | Live portal/API, React + Flutter clients, role-based backend, Cloudflare/Supabase architecture |
| EMC Veritas | Digital certificate issuance and verification platform | Document lifecycle, QR verification, Supabase Storage, migrations, CI and deployment design |
| ScholarAI | AI-assisted scholarship discovery platform | Defined product scope, modular monolith, curation states, hybrid recommendations, CI/smoke checks |
| EmbedIQ | Embeddable website-grounded AI assistant | Crawl → vector index → widget pipeline, worker queue, tenant isolation and guardrails tests |
| InternFlow | Internship operations hub | Full role-based workflow, WebSockets, reporting/certificates, Docker and a 36-check smoke suite |
| CampaignIQ | Grounded outreach campaign workspace | CRM sync, crawling/RAG, recipient review, Celery scheduling, SSRF and tenant-isolation tests |
| DocuMind | Guided document automation | DOCX/PDF generation, validation, signature capture, RBAC and tests |

## Repository briefs

### GA Traders — wholesale distribution operations

**What and why:** A role-based system for a wholesale business that centralizes shops, products, stock, field-order booking, invoicing, expenses, accounts, profitability, and audit reporting. It replaces disconnected manual operations with one source of truth for the office and field bookers.

**How it is built:** An Express REST API serves a React/Vite admin portal and a Flutter Android Booker app. The production design uses Cloudflare Pages for the portal, a Cloudflare Worker plus Hyperdrive for the API, and Supabase PostgreSQL; local development defaults to SQLite. The backend separates controllers, middleware, routes, data schema, and audit services.

**Stack:** JavaScript/Node.js, Express 5, PostgreSQL/Supabase, SQLite (local), Cloudflare Workers/Pages/Hyperdrive, React 19, Vite, Tailwind, Flutter/Dart, JWT, bcrypt, PDF/printing libraries.

**Engineering response:** The project models CP/TP/RP pricing separately and keeps cost/margin information off Booker views; server-side JWT role checks prevent the UI from being the security boundary. Batch-level inventory preserves historical purchase cost for margin reporting, while audit logs make changes traceable. The mobile client shares the live API rather than creating a second data silo.

**Value:** Helps a distributor make better stock and profit decisions, lets field staff book orders on mobile, and reduces pricing/accounting mistakes. **Portfolio angle:** multi-client business system with role-based security and real deployment architecture.

### EMC Veritas — certificate and leadership verification portal

**What and why:** A digital certificate, leadership-recognition, and public-verification portal for the Event Management Club at NFC-IET Multan. It makes achievement records easier to issue, validate, and retain than ad-hoc documents.

**How it is built:** A React/TypeScript/Vite frontend is paired with a FastAPI domain backend. Supabase PostgreSQL stores records and Supabase Storage persists templates, signatures, rendered previews, and PDFs. The repository contains Alembic migrations, document issuance/rendering services, template tooling, student/admin APIs, deployment definitions, CI, and a pre-push verification script.

**Stack:** Python, FastAPI, SQLAlchemy, Alembic, PostgreSQL/Supabase, Supabase Storage, React, TypeScript, Vite, TanStack Query, Tailwind, ReportLab, PyMuPDF, Pillow, OCR, QR code generation, Argon2, Render, Cloudflare Pages, GitHub Actions.

**Engineering response:** QR and hashing services support verifiable issued documents; storage is deliberately external because Render’s disk is non-durable. Snapshot migrations preserve the activity/leadership context that justified an issued document. Rate limiting, Argon2, student-account recovery, audit endpoints, and a frontend that remains usable while the API warms up address security and hosting realities.

**Value:** Reduces verification friction and document fraud risk for students and institutions. **Portfolio angle:** durable document workflow with public verification and well-defined ownership across collaborators.

### ScholarAI Platform — scholarship discovery and preparation

**What and why:** An AI-assisted platform helping students discover scholarships, check eligibility, plan applications, improve documents, and practise interviews. Its v0.1 scope is intentionally Canada-first for MS Data Science, AI, and Analytics, preventing an unmanageable “all scholarships” product.

**How it is built:** A modular-monolith FastAPI backend and Next.js/React/TypeScript frontend use PostgreSQL + pgvector, Celery + Redis, Alembic, Playwright/Pandas/Pydantic ingestion, Docker Compose, and GitHub Actions. It includes public browse/search/detail pages, profiles/onboarding, explainable seeded recommendations, saved opportunities, document/interview flows, and a curator pipeline with raw → validated → published states.

**Stack:** Python, FastAPI, PostgreSQL, pgvector, Celery, Redis, Alembic, Next.js, React, TypeScript, Tailwind, Playwright, Pandas, Pydantic, Docker, GitHub Actions.

**Engineering response:** Policy-critical facts are kept in structured validated data instead of being invented by an LLM. The repository separates validated scholarship facts, retrieved writing guidance, generated guidance, and limitations at the API level. Documentation-led scope control, capability-based RBAC, database migrations, seeded demos, and browser smoke checks reduce the risk of scope creep and unreliable guidance.

**Value:** Makes scholarship research and preparation more accessible while treating high-stakes eligibility information carefully. **Portfolio angle:** responsible AI design with data governance and a substantial product roadmap.

### EmbedIQ — embeddable website knowledge assistant

**What and why:** A platform that turns a company website into a searchable knowledge base and embeddable AI chat widget, avoiding the cost of building a chatbot stack from scratch.

**How it is built:** A FastAPI backend crawls sites, extracts/chunks content, creates embeddings, stores vectors in PostgreSQL/pgvector, and uses retrieval-grounded generation. Redis/Celery handles background crawling/indexing. A Next.js dashboard manages brands and bots; a widget and embed script deliver the customer-facing experience.

**Stack:** Python, FastAPI, SQLAlchemy/Alembic, PostgreSQL + pgvector, Redis, Celery, Next.js, TypeScript, Tailwind, Docker Compose, OpenAI-compatible LLM/embedding providers.

**Engineering response:** SSRF-guard and URL-normalization services protect crawling; tenant-isolation, rate-limit, retrieval, chunking, and integration tests show the important boundaries were considered. A documented 50-page validation crawl yielded 81 chunks, and unrelated questions were rejected by the website-scoped fallback—evidence that grounding, rather than generic chat, is the design goal.

**Value:** Gives small teams a useful site assistant without training a bespoke model, while keeping answers tied to their own published information. **Portfolio angle:** end-to-end RAG product with an embedded delivery channel.

### InternFlow — internship operations hub

**What and why:** A full-stack platform for running internships from onboarding through task delivery, submissions, attendance, reviews, reports, certificates, and completion outcomes.

**How it is built:** React 19/Vite/TypeScript powers role-specific dashboards; FastAPI/SQLAlchemy/Alembic powers the API. PostgreSQL stores the operational data, and an authenticated WebSocket hub drives live notifications. Docker Compose supplies database, API, and web services; the backend seeds repeatable demo data.

**Stack:** Python, FastAPI, SQLAlchemy 2, Alembic, PostgreSQL, React 19, TypeScript, Vite, React Router, TanStack Query, Tailwind, WebSockets, JWT/Argon2, ReportLab, Docker.

**Engineering response:** Permission scopes limit interns to their own records, supervisors to their batches, and administration to sensitive reports/settings. The app covers multipart submission uploads, review workflows, leave decisions, notification preferences, audit access logs, and PDF generation. Automated unit/API tests, Ruff checks, frontend type checks, and a documented 36-check smoke suite improve confidence across a wide workflow.

**Value:** Replaces fragmented spreadsheets and messaging with accountable internship operations. **Portfolio angle:** broad multi-role operations software with real-time UX.

### CampaignIQ — grounded campaign outreach workspace

**What and why:** A workspace for producing personalized, reviewable outreach campaigns from CRM contacts and the prospective recipient’s public website context.

**How it is built:** FastAPI, SQLAlchemy/Alembic, PostgreSQL/pgvector, Redis/Celery, and a Next.js/Tailwind dashboard implement the pipeline: authentication → HubSpot sync → website crawl/index → retrieval-grounded campaign drafting → human review → email delivery/follow-ups.

**Stack:** Python, FastAPI, SQLAlchemy, Alembic, PostgreSQL + pgvector, Redis, Celery, Next.js, TypeScript, Tailwind, HubSpot OAuth/API, Docker.

**Engineering response:** The backend has dedicated services for HubSpot OAuth, recipient snapshots, crawl safety/SSRF protection, extraction, embeddings, retrieval, writing style, and scheduling. Tests cover tenant isolation, rate limiting, HubSpot sync/OAuth, recipient selection, delivery tasks, prompts, and retrieval. The README correctly avoids claiming a live HubSpot connection in the local showcase.

**Value:** Makes outreach more relevant without letting unreviewed AI text send externally. **Portfolio angle:** CRM integration plus RAG, scheduling, and human-in-the-loop controls.

### DocuMind — validated template-to-document workflow

**What and why:** A guided document-generation application that turns reusable DOCX/PDF templates into validated, signed documents. Administrators control templates and field mappings; users complete published forms and receive generated documents.

**How it is built:** A FastAPI/PostgreSQL app stores users and templates, parses DOCX/PDF files, detects only approved personal fields, validates input, captures signatures, generates output, and serves a static web interface for admins and users.

**Stack:** Python, FastAPI, PostgreSQL, OpenAI-assisted analysis, DOCX/PDF handlers, HTML/CSS/JavaScript, JWT, automated pytest suite.

**Engineering response:** An explicit allowlist prevents the analyzer from mistaking arbitrary resume content for editable fields. CNIC and Pakistani phone validation address the target context. RBAC, owner-restricted file access, storage separation, upload limits, and tests for validators/field schemas/handlers address privacy and document-integrity concerns.

**Value:** Makes repeatable paperwork faster and less error-prone while retaining review and validation. **Portfolio angle:** practical AI assistance constrained by deterministic rules.

### QSScope — local-first quality, security, and testing intelligence

**What and why:** A developer-facing platform that scans local projects for quality, security, runtime readiness, and test signals, then produces actionable findings and professional reports without automatically sending source code away.

**How it is built:** A FastAPI backend discovers project technology and orchestrates locally available tooling; a Next.js dashboard presents findings, scores, baselines, and release readiness. It exports JSON, Markdown, HTML, DOCX, optional PDF, and CycloneDX SBOM reports.

**Stack:** Python, FastAPI, SQLAlchemy, Alembic, SQLite/aiosqlite, Playwright, Next.js, React, TypeScript, Tailwind, Zustand, SWR, Jest, Playwright, Docker-oriented scripts.

**Engineering response:** Quick/Standard/Full scan plans select relevant local tools, and approval-gated ZAP/k6/JMeter capabilities avoid unexpected execution. Baselines expose regressions; adapters normalize evidence from APIs, browser readiness, dependency inventory, accessibility/performance, and test tools. AI review is opt-in and bounded.

**Value:** Gives teams repeatable quality evidence without sacrificing source-code privacy. **Portfolio angle:** sophisticated developer tooling and security-minded local execution.

### FlowChat API — persistent LLM chat backend

**What and why:** A reusable API backend for chat products that preserves conversation history and supports complete or streaming replies.

**How it is built:** FastAPI routes create/list conversations and messages. A LangGraph workflow loads PostgreSQL history, calls a Groq-hosted model through LangChain, persists the assistant response, and can return server-sent events for streaming.

**Stack:** Python, FastAPI, LangChain, LangGraph, Groq, PostgreSQL, Tortoise ORM, Pydantic Settings, pytest, SSE.

**Engineering response:** Separating controller, history, LLM, and graph-node layers makes the LLM flow testable. Tests override the LLM dependency rather than calling Groq, keeping the suite deterministic and inexpensive. Readiness endpoints distinguish database availability from simple process liveness.

**Value:** A solid backend foundation for applications needing durable, responsive AI conversations. **Portfolio angle:** focused LLM workflow orchestration and streaming API design.

### ContextVault — grounded local-document Q&A

**What and why:** A lightweight RAG assistant for asking questions over a user’s own text documents, rather than relying on an open-ended chatbot.

**How it is built:** Text is ingested, chunked, embedded, stored in PostgreSQL with pgvector, semantically retrieved, and supplied to an LLM. FastAPI exposes ingestion, listing, deletion, and question-answer APIs, while a static frontend is served by the same process.

**Stack:** Python, FastAPI, PostgreSQL + pgvector, psycopg, OpenAI embeddings/chat models, HTML/CSS, pytest.

**Engineering response:** Configurable chunk length, overlap, top-k, and minimum similarity score make retrieval behavior tunable. The design explicitly restricts answers to retrieved context; tests cover ingestion, retrieval, and RAG behavior.

**Value:** Useful for small private knowledge collections such as internship FAQs or internal guides. **Portfolio angle:** concise, understandable RAG implementation.

### ByteScore — HEC NSCT preparation platform *(private fork)*

**What and why:** A mobile-first preparation product for Pakistan’s HEC National Skills Competency Test for IT graduates. It plans topic practice, official-weightage mock exams, mistake review, progress analytics, and admin visibility.

**How it is built:** The repository contains a Next.js/React/TypeScript/Tailwind application with Supabase Auth/SSR integration, Zustand state management, Framer Motion, Vitest, seed scripts, and JSON question banks. The product requirements define 149 topics and 11,000+ questions, selected to match the mock-test weight distribution.

**Stack:** Next.js 16, React 19, TypeScript, Tailwind 4, Supabase Auth/Database tooling, Zustand, Framer Motion, Vitest.

**Engineering response:** Topic/difficulty filtering supports targeted practice, while mock selection follows subject-level weightage rather than arbitrary random questions. Admin creation is intentionally not self-service and role middleware protects privileged routes.

**Value:** Gives IT graduates structured, exam-specific preparation and feedback. **Portfolio caution:** GitHub marks this repository as a fork; only present features you personally implemented, and acknowledge the upstream base where appropriate.

### Twitter Project — MERN social-network clone

**What and why:** A social-media learning project implementing familiar Twitter/X-style interaction: identity, posts, follows, likes, comments, notifications, and profile media.

**How it is built:** Express/MongoDB controllers, models, route middleware, JWT generation, and Cloudinary integration provide the backend. A React/Vite/Tailwind frontend uses React Query, loading skeletons, reusable post/profile components, and mutation hooks.

**Stack:** MongoDB, Express, React, Node.js, JavaScript, Tailwind, JWT, React Query, Cloudinary.

**Engineering response:** Protected-route middleware and owner-only deletion protect common social actions; Cloudinary moves uploaded images out of the application server; notifications provide feedback for social interactions.

**Value:** Demonstrates full CRUD, authentication, media upload, and stateful frontend patterns. **Portfolio caution:** The README identifies a tutorial source; describe this as a guided learning implementation unless the code has been substantially extended independently.

### WhatsApp Flutter UI — responsive UI exercise *(private)*

**What and why:** A responsive Flutter UI that switches between compact WhatsApp-like app layouts and a larger-screen web/desktop layout.

**How it is built:** Flutter/Dart has separate mobile and web layout screens, a responsive layout utility, shared colors, and Android/iOS/web targets.

**Stack:** Flutter, Dart, Android/Kotlin, iOS/Swift, web.

**Engineering response:** Separate viewport-specific layouts solve the very different navigation and density needs of phone versus desktop screens.

**Value:** Shows cross-platform responsive UI fundamentals. **Portfolio caution:** The README credits an external tutorial/author, so do not present the visual concept as fully original without documenting your own changes.

### Auth App — Express authentication fundamentals

**What and why:** A small login/signup application built to learn the core authentication flow.

**How it is built:** Express serves static HTML/CSS and JSON API routes, with controllers/services handling validation and `bcryptjs` hashing passwords before they enter an in-memory user store.

**Stack:** Node.js, Express, bcryptjs, JavaScript, HTML, CSS, Postman.

**Engineering response:** Passwords are not stored in plain text; route/controller/service separation demonstrates basic backend layering. The intentionally in-memory storage is documented as demo-only.

**Value:** A clean foundation for explaining authentication basics. **Portfolio angle:** include only as an early learning project, not a flagship.

### Todo App — CRUD and database fundamentals

**What and why:** A REST API for creating, reading, updating, and deleting todos, created to practise persistence and conventional backend structure.

**How it is built:** Express routes/controllers/services sit over Prisma and PostgreSQL; Prisma schema/migration files define data evolution.

**Stack:** Node.js, Express, Prisma, PostgreSQL, JavaScript, dotenv.

**Engineering response:** Prisma generation and migrations make schema changes reproducible rather than manual; the project exposes a complete CRUD endpoint set.

**Value:** A compact demonstration of API/database fundamentals. **Portfolio angle:** archive or list under “foundational projects,” rather than feature it prominently.

### GitHub profile repository — developer profile

**What and why:** The account’s profile README repository, with a banner and a GitHub Actions snake workflow.

**Stack:** Markdown, GitHub Actions.

**Value:** Supports personal branding and contribution visibility, but it is not a product case study.

### langchainbot — empty private placeholder

GitHub returns no default branch or source tree. There is no implementation to assess. Keep private or archive; do not include it in the portfolio.

### test — empty private experiment

The repository contains only two small test files and is described as a GitHub experiment. Exclude it from the portfolio; archive or delete it only if you want a cleaner public account.

## Recommended résumé-site taxonomy

- **Featured case studies:** GA Traders, EMC Veritas, ScholarAI, EmbedIQ.
- **More projects:** InternFlow, CampaignIQ, DocuMind, QSScope, FlowChat API, ContextVault.
- **Learning/foundational work:** ByteScore (subject to fork attribution), Twitter Project (tutorial attribution), WhatsApp UI (tutorial attribution), Auth App, Todo App.
- **Exclude:** profile repository, langchainbot, test.

## Before publishing

1. Confirm your personal contribution and collaborator roles for team projects—EMC Veritas explicitly documents shared ownership.
2. Do not disclose private URLs, credentials, demo accounts, internal architecture details, or private source code on the public site.
3. Add one screenshot, one measurable result, and one short “decision I made” per featured project. The strongest verified metrics currently available are EmbedIQ’s 50-page/81-chunk validation run and InternFlow’s 36-check smoke suite.
4. For fork/tutorial-derived work, credit the source and foreground your own modifications; otherwise omit it from the flagship grid.
