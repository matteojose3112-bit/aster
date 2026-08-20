function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="aster-section-label">01 — About</p>
            <div className="mt-8 text-[10px] uppercase tracking-[0.2em] text-neutral-600">
              Matteo Jose / Aster
            </div>
          </div>

          <div>
            <h2 className="max-w-5xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
              I work at the intersection of
              <span className="text-neutral-600"> technology, business, and systems.</span>
            </h2>

            <div className="mt-12 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-6 text-base leading-8 text-neutral-400 md:text-lg">
                <p>
                  My approach is simple: understand the problem, build something
                  useful, learn from it, and keep improving it.
                </p>
                <p>
                  Aster is where I bring that mindset together — from software and
                  digital experiences to the systems and workflows behind them.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="border-l border-white/20 pl-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">01</p>
                  <h3 className="mt-2 text-lg font-medium text-white">Build</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-500">
                    Turn ideas and requirements into practical, working solutions.
                  </p>
                </div>
                <div className="border-l border-white/20 pl-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">02</p>
                  <h3 className="mt-2 text-lg font-medium text-white">Connect</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-500">
                    Bridge technical execution with business and user needs.
                  </p>
                </div>
                <div className="border-l border-white/20 pl-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">03</p>
                  <h3 className="mt-2 text-lg font-medium text-white">Improve</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-500">
                    Iterate toward clearer, faster, and more useful systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-2 border-t border-white/10 pt-6">
              {["Technology", "Operations", "Customer Experience", "Systems", "Automation"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="border border-white/10 px-3 py-2 text-[11px] uppercase tracking-[0.12em] text-neutral-500 transition hover:border-white/30 hover:text-neutral-200"
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
