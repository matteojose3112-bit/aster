function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-28 lg:px-10">
      <div className="aster-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="aster-glow right-[-220px] top-[18%]" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="aster-reveal max-w-5xl">
          <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-neutral-500">
            <span className="aster-status-dot" aria-hidden="true" />
            Available for opportunities
          </div>

          <p className="aster-section-label mb-6">Business × Technology × Systems</p>

          <h1 className="max-w-6xl text-[clamp(4rem,11vw,10rem)] font-semibold leading-[0.84] tracking-[-0.065em] text-white">
            Matteo
            <br />
            Jose<span className="text-neutral-600">.</span>
          </h1>

          <div className="mt-10 flex flex-col gap-8 border-t border-white/10 pt-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-lg leading-8 text-neutral-400 md:text-xl">
              I build practical systems, digital experiences, and software at the
              intersection of business and technology.
            </p>

            <div className="flex shrink-0 gap-3">
              <a href="#projects" className="aster-button aster-button-primary">
                View work <span aria-hidden="true">↘</span>
              </a>
              <a href="#about" className="aster-button aster-button-secondary">
                About me <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 flex items-center justify-between border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.2em] text-neutral-600">
          <span>01 / 04</span>
          <a href="#about" className="transition hover:text-neutral-300">
            Scroll to explore ↓
          </a>
          <span className="hidden sm:inline">Aster / 2026</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
