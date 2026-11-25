export type Project = {
  title: string;
  category: string;
  description: string;
  outcome: string;
  role: string;
  technologies: string[];
  status: string;
  featured?: boolean;
  github?: string;
  demo?: string;
  caseStudy?: string;
};

export const projects: Project[] = [
  {
    title: "Aster",
    category: "Portfolio / Frontend Engineering",
    description:
      "A personal portfolio and development journal that brings professional experience and five independent software projects into one clear, accessible presentation.",
    outcome:
      "A responsive React and TypeScript site with reusable sections, structured project data, interactive project cards, accessibility foundations, and an automated GitHub Pages deployment workflow.",
    role: "Independent project · Product direction · UI design · Frontend development · Accessibility · CI/CD · Documentation",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Structured Data", "GitHub Actions", "Git", "GitHub"],
    status: "Complete · Maintenance",
    featured: true,
    github: "https://github.com/matteojose3112-bit/aster",
    demo: "https://matteojose3112-bit.github.io/aster/",
    caseStudy: "https://github.com/matteojose3112-bit/aster/blob/master/docs/case-studies/aster.md",
  },
  {
    title: "AgentForge",
    category: "AI Tooling / Go / Workflow Automation",
    description:
      "A lightweight Go runtime for controlled model/tool execution, with a bounded provider-independent orchestration layer and explicit permission checks.",
    outcome:
      "A bounded model/tool loop, OpenAI Responses API adapter, schema-validated tool inputs and outputs, default-deny permissions, deterministic text/CSV/CRM analysis, a read-only Sales Operations report, bounded CRM CSV inspection, and a guided workspace connected to a bearer-protected Go API on Render. Authenticated sample CSV inspection is verified; authenticated report generation and a real provider-backed model/tool cycle remain unverified. Early-stage project, not production-ready.",
    role: "Independent project · Runtime and permission design · Go development · Provider integration · Tool interfaces · Testing · Documentation",
    technologies: ["Go", "OpenAI Responses API", "net/http", "JSON Schema subset", "CLI", "HTTP API", "Render", "GitHub Pages", "GitHub Actions"],
    status: "Early-stage · v0.4 workflow",
    featured: true,
    github: "https://github.com/matteojose3112-bit/agentforge",
    demo: "https://matteojose3112-bit.github.io/agentforge/",
  },
  {
    title: "Solution Studio",
    category: "Business Tools / Full-Stack Application",
    description:
      "A modular business-solutions workspace that brings practical research, document handling, data processing, text automation, and website-starter tasks together in one interface.",
    outcome:
      "Five focused studios delivered through a FastAPI backend and lightweight JavaScript frontend. The project records 58 passing backend tests, GitHub Actions checks, and a public Render deployment. Production smoke tests passed for Research, Automation, and Development; live browser file-picker QA for Data and Documents remains outstanding.",
    role: "Independent project · Product and workflow design · Full-stack development · API implementation · Testing · Deployment · Documentation",
    technologies: ["Python", "FastAPI", "JavaScript", "HTML", "CSS", "pytest", "GitHub Actions", "Render"],
    status: "Deployed MVP · QA follow-up",
    featured: true,
    github: "https://github.com/matteojose3112-bit/solution-studio",
    demo: "https://solution-studio-secb.onrender.com",
    caseStudy: "https://github.com/matteojose3112-bit/aster/blob/master/docs/case-studies/solution-studio.md",
  },
  {
    title: "OpsFlow",
    category: "Business Operations / RevOps",
    description:
      "An operations dashboard for teams that need a practical view of tasks, exceptions, account health, and performance against operating targets.",
    outcome:
      "Supabase authentication and workspace-scoped task and exception reads and status updates, role-aware controls, overdue detection, KPI comparisons, search, and filters. Account health, KPI snapshots, and recent activity use illustrative sample data; shared-workspace and live authorization validation remain outstanding. Not yet production-validated.",
    role: "Independent project · Operations workflow design · Product development · Frontend engineering · Data modeling · Supabase integration",
    technologies: ["React", "TypeScript", "Vite", "Supabase", "PostgreSQL", "GitHub Actions", "GitHub Pages"],
    status: "Live MVP",
    featured: true,
    github: "https://github.com/matteojose3112-bit/opsflow",
    demo: "https://matteojose3112-bit.github.io/opsflow/",
  },
  {
    title: "ClientPulse",
    category: "Customer Success / CRM Operations",
    description:
      "A frontend-only customer-success dashboard for exploring illustrative account health, identifying potential risks, and organizing customer follow-up in a single browser.",
    outcome:
      "A single-browser MVP with illustrative customer records, editable health statuses and scores, portfolio metrics, risk summaries, a static sample activity feed, search and filters, and local-storage persistence. It has no authentication, backend, database, multi-user sync, or live CRM integration; records are demonstration data only.",
    role: "Independent project · Customer-success workflow design · Product development · Frontend engineering · Data modeling",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Local Storage", "GitHub Pages"],
    status: "Live MVP",
    featured: true,
    github: "https://github.com/matteojose3112-bit/clientpulse",
    demo: "https://matteojose3112-bit.github.io/clientpulse/",
  },
  {
    title: "FinTrack",
    category: "Personal Finance / Financial Data",
    description:
      "A personal-finance workspace that models the everyday money lifecycle: account balances, income and expenses, CSV-based transaction intake, budgets, savings goals, recurring obligations, transfers, and investment holdings.",
    outcome:
      "Implemented account-linked ledger calculations, integer-minor-unit money arithmetic, and paired internal transfers that reconcile account balances without distorting income or expense totals. The transaction workflow supports bounded CSV import, column mapping, validation previews, exact-duplicate detection, conservative possible-match review with explicit keep-or-skip decisions, and a timestamped import activity trail. Spreadsheet-safe CSV export and recurring-rule creation/pause controls are also in place; recurring rules remain reminders and do not post transactions automatically. The published demo uses illustrative data and browser-local persistence: production authentication, hosted user records, live bank/brokerage feeds, market pricing, and trade execution are not provided.",
    role: "Independent project · Personal-finance product design · Financial domain modeling · Ledger and data workflows · Validation and reconciliation · Test development · Documentation",
    technologies: ["JavaScript", "HTML5", "CSS3", "Vite", "Vitest", "Integer Minor-Unit Arithmetic", "CSV Processing", "Browser Storage", "GitHub Actions", "GitHub Pages"],
    status: "Active development · v0.4",
    featured: true,
    github: "https://github.com/matteojose3112-bit/fintrack",
    demo: "https://matteojose3112-bit.github.io/fintrack/",
  },
];
