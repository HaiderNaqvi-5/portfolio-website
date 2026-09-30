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
