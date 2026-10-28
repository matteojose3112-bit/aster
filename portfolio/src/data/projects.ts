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
};

export const projects: Project[] = [
  {
    title: "Aster",
    category: "Personal Portfolio / Frontend Engineering",
    description:
      "A production-style portfolio system built to demonstrate frontend engineering, API-ready architecture, automation, responsive UX, and deployment workflows.",
    outcome:
      "Responsive React application with reusable components, TypeScript, interactive UI, GitHub Actions deployment, accessibility-minded motion, and a maintainable project structure.",
    role: "Product design · Frontend engineering · Automation · Deployment",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "REST APIs", "GitHub Actions", "Git", "GitHub"],
    status: "Building",
    featured: true,
    github: "https://github.com/matteojose3112-bit/aster",
    demo: "https://matteojose3112-bit.github.io/aster/",
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
  {
    title: "Transcription & Content Toolkit",
    category: "Transcription / Captions / Content Production",
    description:
      "A practical toolkit for turning audio and video into accurate, readable transcripts, subtitles, captions, and voiceover-ready scripts.",
    outcome:
      "Includes transcript and voiceover templates, fictional transcript examples, SRT and WebVTT samples, and quality-control checklists for accuracy, timing, readability, and delivery.",
    role: "Workflow design · Content quality control · Documentation",
    technologies: ["Transcription workflows", "SRT", "WebVTT", "Voiceover scripting", "Quality assurance", "Markdown"],
    status: "Toolkit foundation",
    featured: true,
    github: "https://github.com/matteojose3112-bit/transcription-content-toolkit",
  },
  {
    title: "Research & Reporting Toolkit",
    category: "Business Research / Document Summaries / Reporting",
    description:
      "A developing toolkit for source-based research, document summaries, competitor comparisons, and concise decision-ready business reporting.",
    outcome:
      "Foundation and planning stage, with planned research briefs, source logs, competitor comparisons, executive summaries, and quality-review checklists. No completed research samples are claimed yet.",
    role: "Research workflow design · Source evaluation · Reporting standards",
    technologies: ["Source evaluation", "Fact-checking", "Document summarization", "Competitor research", "Markdown", "Structured reporting"],
    status: "Foundation & planning",
    featured: true,
    github: "https://github.com/matteojose3112-bit/research-reporting-toolkit",
  },
];
