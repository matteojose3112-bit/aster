import type { Project } from "../../../../data/projects";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-950 p-8 transition duration-300 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-900">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-2xl font-semibold text-white">
  {project.title}
</h3>

        <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400">
          {project.status}
        </span>
      </div>

      <p className="mt-4 leading-7 text-slate-400">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md bg-slate-800 px-3 py-1 text-sm text-slate-300"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-8 flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            GitHub →
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-white hover:text-slate-300"
          >
            Live Demo →
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;