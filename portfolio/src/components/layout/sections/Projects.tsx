import { projects } from "../../../data/projects";
import ProjectCard from "./ui/ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-32 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-6 text-sm font-medium tracking-[0.35em] text-slate-400">
          PROJECTS
        </p>

        <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
          Things I've built.
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
          A selection of projects built to practice, experiment, and solve
          real problems with software.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;