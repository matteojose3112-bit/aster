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
      "A conceptual operations intelligence platform connecting CRM data, SQL reporting, automated workflows, and Power BI dashboards into a single operating view.",
    outcome:
      "Designed to turn fragmented sales and operations data into automated pipelines, KPI reporting, exception alerts, and actionable daily work queues.",
    role: "Business analysis · SQL data modeling · BI · Workflow automation",
    technologies: ["SQL", "Power BI", "REST APIs", "Power Automate", "CRM", "Python", "ETL", "Data Modeling"],
    status: "Concept",
    featured: true,
  },
  {
    title: "ClientPulse",
    category: "Customer Success / SaaS / Automation",
    description:
      "A conceptual customer-success operations platform combining customer health data, API integrations, automated onboarding workflows, and renewal-risk intelligence.",
    outcome:
      "Connects CRM and product signals to customer health scoring, automated tasks, onboarding milestones, escalation alerts, and executive retention reporting.",
    role: "Customer journey · Automation architecture · API integration · Analytics",
    technologies: ["SQL", "Power BI", "REST APIs", "Webhooks", "Zapier", "CRM", "Python", "Data Visualization"],
    status: "Concept",
    featured: true,
  },
];
