import type { Project } from "../../../../data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

function ProjectCard({ project, index }: ProjectCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="group relative overflow-hidden border border-white/10 bg-[#0A0A0A] p-7 transition duration-500 hover:-translate-y-1 hover:border-white/25 md:p-9">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.08),transparent_32%)] opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative">
        <div className="flex items-center justify-between border-b border-white/10 pb-5 text-[10px] uppercase tracking-[0.2em] text-neutral-600">
          <span>{number} / WORK</span>
          <span className="flex items-center gap-2 text-neutral-500">
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-500" />
            {project.status}
          </span>
        </div>

        <div className="mt-10 flex items-start justify-between gap-6">
          <div>
            <h3 className="text-3xl font-semibold tracking-[-0.035em] text-white transition duration-300 group-hover:translate-x-1 md:text-4xl">
              {project.title}
            </h3>
            <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-500 md:text-base">
              {project.description}
            </p>
          </div>

          <span
            aria-hidden="true"
            className="hidden h-12 w-12 shrink-0 items-center justify-center border border-white/10 text-lg text-neutral-500 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-white/40 group-hover:text-white sm:flex"
          >
            ↗
          </span>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 pt-5">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="text-[11px] uppercase tracking-[0.12em] text-neutral-600 transition group-hover:text-neutral-400"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="aster-link text-xs font-semibold uppercase tracking-[0.14em]"
            >
              GitHub ↗
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="aster-link text-xs font-semibold uppercase tracking-[0.14em]"
            >
              Live demo ↗
            </a>
          )}
          {!project.github && !project.demo && (
            <span className="text-xs uppercase tracking-[0.14em] text-neutral-700">
              More soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
