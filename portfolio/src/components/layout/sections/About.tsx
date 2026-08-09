function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-24 flex items-center"
    >
      <div className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
          About
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-6xl">
          Learning by building real things.
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
          Aster is a portfolio of software projects, experiments, and systems
          built while developing practical skills in modern web development.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 p-6">
            <h3 className="text-xl font-semibold">Build</h3>
            <p className="mt-3 text-slate-400">
              Turning ideas into working software and useful interfaces.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 p-6">
            <h3 className="text-xl font-semibold">Learn</h3>
            <p className="mt-3 text-slate-400">
              Learning through experimentation, iteration, and problem solving.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 p-6">
            <h3 className="text-xl font-semibold">Improve</h3>
            <p className="mt-3 text-slate-400">
              Refining projects into cleaner, more capable software.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;