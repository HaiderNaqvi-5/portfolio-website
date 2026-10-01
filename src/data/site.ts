export const site = {
  name: 'Syed Muhammad Haider Abbas Naqvi',
  shortName: 'Haider Naqvi',
  role: 'Python / AI Engineer',
  description: 'Backend and AI systems built around real workflows, reliable data, and clear outcomes.',
  email: 'haidernaqvi7989@gmail.com',
  whatsapp: 'https://wa.me/923136314125',
  links: {
    github: 'https://github.com/HaiderNaqvi-5',
    linkedin: '#',
  },
};

export const navigation = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Work', '#work'],
  ['Process', '#process'],
  ['Skills', '#skills'],
  ['Contact', '#contact'],
] as const;

export const experience = [
  {
    period: 'Aug 2026 — Sep 2026',
    role: 'AI Automation Intern',
    organization: 'Cyberify',
    note: 'Contribution details are being prepared from verified internship material.',
  },
  {
    period: '2026',
    role: 'President',
    organization: 'Event Management Club, NFC-IET Multan',
    note: 'Leadership experience and project context are being documented for publication.',
  },
  {
    period: 'Graduated Aug 2026',
    role: 'BS Computer Science',
    organization: 'NFC-IET University',
    note: 'Academic foundation in computer science and applied software systems.',
  },
];

export const process = [
  ['01', 'Understand', 'Start with the operating context, constraints, and the people who will rely on the system.'],
  ['02', 'Identify', 'Find the actual pain points before deciding which technology or interface belongs in the solution.'],
  ['03', 'Break down', 'Turn a large problem into small, testable system boundaries and deliberate delivery steps.'],
  ['04', 'Build', 'Prioritize backend architecture, data integrity, and core behavior before visual polish.'],
  ['05', 'Present', 'Make the working system understandable through a focused, usable interface and clear documentation.'],
] as const;

export const skills = [
  ['Languages', 'Python, TypeScript, JavaScript, SQL', 'Build APIs, services, data models, and full-stack product foundations.'],
  ['Backend & data', 'FastAPI, PostgreSQL, SQLAlchemy, Alembic, Redis', 'Design dependable workflows with durable schemas, migrations, and background work.'],
  ['AI systems', 'RAG, embeddings, pgvector, LangChain, LangGraph', 'Build grounded AI features that work from relevant context rather than generic output.'],
  ['Frontend & delivery', 'React, Next.js, Vite, Docker, Cloudflare', 'Ship technical systems through responsive interfaces and repeatable deployment paths.'],
] as const;

export const projects = [
  { name: 'CampaignIQ', kind: 'Grounded AI workspace', summary: 'A review-first outreach workflow that connects CRM contacts, website intelligence, and personalized campaigns.', technologies: 'FastAPI · Next.js · pgvector · Redis', state: 'Public repository', href: 'https://github.com/HaiderNaqvi-5/CampaignIQ' },
  { name: 'QSScope', kind: 'Developer tooling', summary: 'Local-first quality, security, and testing intelligence for software projects.', technologies: 'FastAPI · Next.js · Playwright · SQLite', state: 'Public repository', href: 'https://github.com/HaiderNaqvi-5/QSScope' },
  { name: 'Aidwise', kind: 'AI platform', summary: 'A scholarship discovery and application-support platform with grounded retrieval and asynchronous workflows.', technologies: 'FastAPI · Next.js · pgvector · Celery', state: 'Live preview · repository: scholarai-platform', href: 'https://github.com/HaiderNaqvi-5/scholarai-platform' },
  { name: 'InternFlow', kind: 'Operations platform', summary: 'An internship operations hub for onboarding, tasks, attendance, reviews, reporting, and certificates.', technologies: 'FastAPI · React · PostgreSQL · WebSockets', state: 'Public repository', href: 'https://github.com/HaiderNaqvi-5/InternFlow' },
  { name: 'DocuMind', kind: 'Document workflow', summary: 'Document generation and approval workflows for teams that need repeatable, auditable output.', technologies: 'FastAPI · PostgreSQL · DOCX · PDF', state: 'Public repository', href: 'https://github.com/HaiderNaqvi-5/DocuMind' },
  { name: 'FlowChat API', kind: 'AI backend', summary: 'A focused API surface for conversational AI workflows and service integration.', technologies: 'Python · FastAPI · AI services', state: 'Public repository', href: 'https://github.com/HaiderNaqvi-5/FlowChat-Api' },
  { name: 'ContextVault', kind: 'AI knowledge system', summary: 'A context-management experiment for preserving useful information across AI interactions.', technologies: 'Python · RAG · vector search', state: 'Public repository', href: 'https://github.com/HaiderNaqvi-5/ContextVault' },
] as const;

export const featuredProjects = [
  { name: 'GA Traders', kind: 'Client operations system', problem: 'A wholesale distributor needed one dependable operating layer for stock, field orders, invoicing, expenses, and reporting.', system: 'A role-based system connecting an admin portal, a Booker mobile app, and a shared backend around operational workflows.', outcome: 'A clearer, more traceable route from field order to business reporting—presented text-only to protect client confidentiality.', technologies: 'Express · React · Flutter · PostgreSQL · Cloudflare', href: '/case-studies/ga-traders/', action: 'Read case study' },
  { name: 'EmbedIQ', kind: 'Embeddable AI assistant', problem: 'Website visitors need answers grounded in the business’s own content, not generic chatbot responses.', system: 'A crawling, chunking, embedding, retrieval, and widget-delivery pipeline with a dashboard for managing the knowledge base.', outcome: 'An end-to-end RAG product demonstrated against a 50-page crawl and 81 indexed knowledge chunks.', technologies: 'FastAPI · Next.js · Celery · Redis · pgvector', href: 'https://github.com/HaiderNaqvi-5/EmbedIQ', action: 'View repository' },
  { name: 'Aidwise', kind: 'Scholarship intelligence platform', problem: 'Students need scholarship guidance that respects high-stakes eligibility facts instead of presenting ungrounded AI advice.', system: 'A Canada-first, modular-monolith platform that combines validated scholarship data, curation workflows, explainable recommendations, and bounded document and interview guidance.', outcome: 'A live public frontend backed by a structured, retrieval-aware product foundation, with CI and an explicit demo-readiness process.', technologies: 'FastAPI · Next.js · PostgreSQL · pgvector · Celery · Redis', href: 'https://scholarai-platform.vercel.app', action: 'Open live preview' },
] as const;

export const certificates = [
  ['Certificate of Appreciation', 'TechXhibit 2026 Final Year Project Competition', 'Air University Multan · 2026'],
  ['Mobile App Development Certification', 'Issuer verification pending', 'Year verification pending'],
] as const;
