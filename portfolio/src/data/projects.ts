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
      "A practical service workflow for transcripts, subtitles, captions, and voiceover-ready scripts, supported by reusable templates and structural quality checks.",
    outcome:
      "Includes intake and delivery templates, transcript examples, SRT/WebVTT samples, a Python caption validator with unit tests, service packages, and a marketplace listing draft. Transcript examples are clearly labeled as fictional demonstrations; a reviewed real-media sample remains a launch task.",
    role: "Workflow design · Content quality control · Python utility development · Documentation",
    technologies: ["Python", "unittest", "SRT", "WebVTT", "Markdown", "GitHub Actions"],
    status: "Functional workflow MVP",
    featured: true,
    github: "https://github.com/matteojose3112-bit/transcription-content-toolkit",
  },
  {
    title: "Research & Reporting Toolkit",
    category: "Business Research / Document Summaries / Reporting",
    description:
      "A source-based research workflow for business briefs, competitor comparisons, document summaries, and concise decision-ready reporting.",
    outcome:
      "Includes a sourced CRM comparison sample and source log, reusable templates, a Python input-audit utility with unit tests, service packages, and a marketplace listing draft. Vendor details are dated and the sample clearly states its limitations.",
    role: "Research workflow design · Source evaluation · Python utility development · Reporting standards",
    technologies: ["Python", "unittest", "Source evaluation", "CSV", "Markdown", "GitHub Actions"],
    status: "Functional service MVP",
    featured: true,
    github: "https://github.com/matteojose3112-bit/research-reporting-toolkit",
  },
];
