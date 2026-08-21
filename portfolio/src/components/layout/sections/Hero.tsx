function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-28 lg:px-10">
      <div className="aster-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="aster-glow right-[-220px] top-[18%]" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="aster-reveal max-w-6xl">
          <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs uppercase tracking-[0.2em] text-neutral-500">
            <span className="flex items-center gap-3"><span className="aster-status-dot" aria-hidden="true" />Available for opportunities</span>
            <span className="hidden text-neutral-700 sm:inline">/</span>
            <span>Operations · RevOps · Customer Success</span>
          </div>

          <p className="aster-section-label mb-7">Business × Technology × Systems</p>

          <h1 className="max-w-6xl text-[clamp(3.8rem,9vw,9rem)] font-semibold leading-[0.86] tracking-[-0.065em] text-white">
            Matteo Jose<span className="text-neutral-600">.</span>
          </h1>

          <div className="mt-10 max-w-4xl">
            <h2 className="text-3xl font-medium leading-tight tracking-[-0.035em] text-neutral-200 md:text-5xl lg:text-6xl">
              I turn <span className="text-white">workflows, data, and customer processes</span> into systems that are easier to manage, measure, and scale.
            </h2>
          </div>

          <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="max-w-2xl text-base leading-7 text-neutral-500 md:text-lg">
                Operations-minded and technically fluent, with a focus on automation, CRM, SQL, APIs, analytics, and practical digital products.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-600">
                <span>Operations</span><span>RevOps</span><span>Customer Success</span><span>Automation</span><span>SQL</span><span>Power BI</span><span>APIs</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#projects" data-magnetic className="aster-button aster-button-primary">View work <span aria-hidden="true">↘</span></a>
              <a href="#contact" data-magnetic className="aster-button aster-button-secondary">Let's connect <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>

        <div className="mt-20 flex items-center justify-between border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.2em] text-neutral-600">
          <span>01 / 04</span>
          <a href="#about" className="transition hover:text-neutral-300">Scroll to explore ↓</a>
          <span className="hidden sm:inline">Aster / 2026</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
