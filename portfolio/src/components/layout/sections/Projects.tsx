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
            <div className="mt-8 max-w-md space-y-5 text-base leading-7 text-neutral-500">
              <p>
                I build software around practical problems: keeping customer
                relationships organized, making day-to-day operations easier to
                manage, improving sales and service workflows, and turning repetitive
                work into clearer systems. The goal is not to build technology
                for its own sake, but to make useful ideas tangible through tools
                people can explore and work with.
              </p>
              <p>
                This collection brings together five independent software projects, alongside
                this portfolio: tools for business and customer operations, controlled
                AI-assisted workflows, and practical business problem-solving. Each
                project takes an idea beyond a concept: define the problem, shape the
                experience, build the working parts, test what I can, and document
                what still needs attention.
              </p>
              <p>
                My background in sales, service, CRM, and business operations
                informs the problems I choose to work on. Building the software
                develops the other side of that perspective: translating real
                workflows into interfaces, data structures, and dependable
                functionality. These projects are independent work and learning
                in progress, presented with their current capabilities and
                limitations in view.
              </p>
            </div>
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
