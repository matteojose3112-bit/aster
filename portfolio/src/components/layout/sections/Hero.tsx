function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-8">
      <div className="max-w-4xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-slate-400">
          Aster
        </p>

        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
          Building software.
          <br />
          Learning by creating.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          A portfolio of projects, experiments, and systems built while
          learning modern software development.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-white px-6 py-3 font-medium text-slate-950 transition hover:bg-slate-200"
          >
            View Projects
          </a>

          <a
            href="#about"
            className="rounded-lg border border-slate-700 px-6 py-3 font-medium text-white transition hover:border-slate-500"
          >
            About Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;