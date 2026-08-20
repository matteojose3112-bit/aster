import { projects } from "../../../data/projects";
import ProjectCard from "./ui/ProjectCard";

function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden px-6 py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="aster-section-label">02 — Selected work</p>
            <h2 className="mt-7 text-5xl font-semibold tracking-[-0.045em] md:text-7xl">
              Built to be
              <br />
              <span className="text-neutral-600">useful.</span>
            </h2>
            <p className="mt-8 max-w-md text-base leading-7 text-neutral-500">
              A growing collection of software, experiments, and digital systems.
              Each project is an opportunity to turn an idea into something real.
            </p>
            <div className="mt-10 hidden border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.2em] text-neutral-600 lg:block">
              <span>{String(projects.length).padStart(2, "0")} projects</span>
            </div>
          </div>

          <div className="space-y-5">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
