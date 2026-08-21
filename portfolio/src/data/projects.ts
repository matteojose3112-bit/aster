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
    category: "Personal Portfolio / Frontend",
    description:
      "A dark, interaction-focused portfolio designed to turn a broad operations and customer-facing background into a modern digital proof of work.",
    outcome:
      "A responsive portfolio system with reusable React components, animated navigation, accessible motion, and GitHub Pages deployment.",
    role: "Product design · Frontend development · Deployment",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "GitHub Pages"],
    status: "Building",
    featured: true,
    github: "https://github.com/matteojose3112-bit/aster",
    demo: "https://matteojose3112-bit.github.io/aster/",
  },
  {
    title: "OpsFlow",
    category: "Business Operations / RevOps",
    description:
      "A conceptual operations command center for tracking leads, customer handoffs, pipeline health, and recurring operational tasks in one place.",
    outcome:
      "Designed to reduce fragmented workflows by turning CRM activity and operational signals into a simple daily action queue.",
    role: "Business analysis · Workflow design · Product concept",
    technologies: ["React", "TypeScript", "CRM", "Dashboards", "Automation"],
    status: "Concept",
    featured: true,
  },
  {
    title: "ClientPulse",
    category: "Customer Success / SaaS",
    description:
      "A conceptual customer-success workspace for onboarding, account health, renewal risk, and proactive client communication.",
    outcome:
      "A focused customer view that connects onboarding milestones, health signals, open actions, and next-best actions for a CSM.",
    role: "Customer journey · UX design · Product concept",
    technologies: ["React", "TypeScript", "Customer Success", "UX", "Data Visualization"],
    status: "Concept",
    featured: true,
  },
];
