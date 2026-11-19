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
      "A personal portfolio and development journal that brings professional experience and six independent software projects into one clear, accessible presentation.",
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
    title: "FinTrack",
    category: "Data Tools / CSV Processing",
    description:
      "A browser-based CSV inspection workspace for importing, previewing, searching, and understanding tabular data without uploading files to a server.",
    outcome:
      "A vanilla JavaScript and Vite application with local CSV parsing for quoted fields, escaped quotes, commas, and embedded newlines; tabular preview; cross-column search; dataset row, column, and empty-cell counts; and Vitest coverage. The JavaScript rebuild is at v0.1.0, with data-quality, cleaning, export, and publishing milestones still ahead.",
    role: "Independent project · Product direction · Frontend development · CSV parsing and data handling · Privacy-conscious UX · Testing · Documentation",
    technologies: ["JavaScript", "HTML5", "CSS3", "Vite", "Vitest", "ES Modules"],
    status: "Rebuild in progress · v0.1.0",
    featured: true,
    github: "https://github.com/matteojose3112-bit/fintrack",
  },
  {
    title: "AgentForge",
    category: "AI Tooling / Go / Workflow Automation",
    description:
      "An experimental Go runtime exploring how AI models can use tools through a bounded, provider-independent execution flow with explicit permission checks.",
    outcome:
      "A bounded model/tool loop, OpenAI Responses API adapter, schema-validated tool inputs and outputs, default-deny permissions, and local echo, text, CSV, and CRM lead-pipeline analysis tools. Deterministic local tools work without an API key; model-backed execution requires a configured provider key. Early-stage project, not production-ready.",
    role: "Independent project · Runtime and permission design · Go development · Provider integration · Tool interfaces · Testing · Documentation",
    technologies: ["Go", "OpenAI Responses API", "net/http", "JSON Schema subset", "CLI", "GitHub Actions"],
    status: "Early-stage · v0.3.0",
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
      "Interactive task and exception workflows, overdue detection, KPI target comparisons, account-health views, search and status filters, plus Supabase authentication and shared task/exception storage.",
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
      "A customer-success workspace for reviewing account health, spotting potential risks, and keeping customer follow-up visible from one dashboard.",
    outcome:
      "A functional MVP with customer records, editable health scores and statuses, portfolio metrics, risk summaries, recent activity, search and filters, and browser-based persistence.",
    role: "Independent project · Customer-success workflow design · Product development · Frontend engineering · Data modeling",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Local Storage", "GitHub Pages"],
    status: "Live MVP",
    featured: true,
    github: "https://github.com/matteojose3112-bit/clientpulse",
    demo: "https://matteojose3112-bit.github.io/clientpulse/",
  },
];
