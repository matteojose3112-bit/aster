export type Project = {
  title: string;
  description: string;
  technologies: string[];
  status: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Aster",
    description:
      "A personal software portfolio built to document projects, experiments, and the process of learning modern web development.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    status: "In Progress",
    github: "",
    demo: "",
  },

  {
    title: "Project Two",
    description:
      "A software project built to practice problem solving, application architecture, and modern development workflows.",
    technologies: ["React", "TypeScript"],
    status: "Planned",
    github: "",
    demo: "",
  },

  {
    title: "Project Three",
    description:
      "An experimental project focused on learning, building, and turning a practical idea into working software.",
    technologies: ["TypeScript", "Vite"],
    status: "Planned",
    github: "",
    demo: "",
  },
];