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
    category: "Personal Portfolio / Frontend Engineering",
    description:
      "A production-style portfolio system built to demonstrate frontend engineering, structured project data, responsive UX, accessibility-minded interactions, and deployment workflows.",
    outcome:
      "Responsive React application with reusable components, TypeScript, interactive UI, GitHub Actions deployment, accessibility-minded motion, and a maintainable project structure.",
    role: "Product design · Frontend engineering · Automation · Deployment",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Structured Data", "GitHub Actions", "Git", "GitHub"],
    status: "Complete · Maintenance",
    featured: true,
    github: "https://github.com/matteojose3112-bit/aster",
    demo: "https://matteojose3112-bit.github.io/aster/",
    caseStudy: "https://github.com/matteojose3112-bit/aster/blob/master/docs/case-studies/aster.md",
  },
  {
    title: "FinTrack",
    category: "Personal Finance / Full-Stack Engineering",
    description:
      "A full-stack personal finance platform for tracking income, expenses, budgets, savings goals, and cash-flow insights with account-scoped data.",
    outcome:
      "React frontend and FastAPI backend with PostgreSQL, authenticated user workspaces, transaction and budget workflows, savings goals, analytics, CSV export, database migrations, and automated frontend/backend tests. Deployed on Render; live end-to-end acceptance testing remains in progress.",
    role: "Product development · Full-stack engineering · API design · Database modeling · Testing · Deployment",
    technologies: ["React", "Vite", "Tailwind CSS", "Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "JWT", "pytest", "Vitest", "Render"],
    status: "Deployed MVP · E2E testing",
    featured: true,
    github: "https://github.com/matteojose3112-bit/fintrack",
    demo: "https://fintrack-web-int6.onrender.com",
    caseStudy: "https://github.com/matteojose3112-bit/aster/blob/master/docs/case-studies/fintrack.md",
  },
  {
    title: "AgentForge",
    category: "AI Agents / Developer Tools / Workflow Automation",
    description:
      "A lightweight Go runtime for model-driven tool execution, with explicit permissions and a provider-independent orchestration layer.",
    outcome:
      "Includes a bounded model/tool loop, OpenAI Responses API adapter, schema-validated tool inputs and outputs, default-deny permissions, and local echo, text, CSV, and CRM lead-pipeline analysis tools. Local deterministic tools run without an API key; live model execution requires a configured provider key. Early-stage project, not production-ready.",
    role: "Runtime design · Go development · Provider integration · Tool execution · Testing · Documentation",
    technologies: ["Go", "OpenAI Responses API", "net/http", "JSON Schema subset", "CLI", "GitHub Actions"],
    status: "Early-stage · v0.3.0",
    featured: true,
    github: "https://github.com/matteojose3112-bit/agentforge",
    demo: "https://matteojose3112-bit.github.io/agentforge/",
  },
  {
    title: "OpsFlow",
    category: "Operations / RevOps / Business Intelligence",
    description:
      "A functional operations dashboard for turning structured business data into operational visibility, performance indicators, and actionable priorities.",
    outcome:
      "Interactive task and exception workflows, overdue detection, KPI target comparisons, account-health views, search and status filters, plus Supabase authentication and shared task/exception storage.",
    role: "Product development · Frontend engineering · Operations workflows · Data modeling",
    technologies: ["React", "TypeScript", "Vite", "Supabase", "PostgreSQL", "GitHub Actions", "GitHub Pages"],
    status: "Live MVP",
    featured: true,
    github: "https://github.com/matteojose3112-bit/opsflow",
    demo: "https://matteojose3112-bit.github.io/opsflow/",
  },
  {
    title: "ClientPulse",
    category: "Customer Success / SaaS / Automation",
    description:
      "A functional customer-success operations MVP for monitoring customer health, reviewing account risk, and managing follow-up from a centralized dashboard.",
    outcome:
      "Interactive customer records, editable health statuses and scores, live portfolio metrics, search and filtering, risk summaries, recent activity, and browser-based persistence.",
    role: "Product development · Frontend engineering · Data modeling · Customer-success workflows",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Local Storage", "GitHub Pages"],
    status: "Live MVP",
    featured: true,
    github: "https://github.com/matteojose3112-bit/clientpulse",
    demo: "https://matteojose3112-bit.github.io/clientpulse/",
  },
];
