function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-32 lg:px-10">
      <div className="aster-glow bottom-[-300px] left-1/2 -translate-x-1/2" aria-hidden="true" />
      <div className="mx-auto max-w-7xl">
        <div className="border-t border-white/10 pt-10">
          <p className="aster-section-label">05 — Contact</p>
          <div className="mt-12 grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
            <div>
              <h2 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl lg:text-8xl">
                Let's build<br />something <span className="text-neutral-600">useful.</span>
              </h2>
              <p className="mt-8 max-w-xl text-base leading-7 text-neutral-500 md:text-lg">
                Have a role, project, idea, or opportunity in mind? Send me a message and I'll get back to you.
              </p>
            </div>
            <div className="lg:pt-3">
              <div className="border-y border-white/10">
                <a href="mailto:matteo.jose3112@gmail.com" className="group flex items-center justify-between border-b border-white/10 py-6">
                  <div><p className="text-[10px] uppercase tracking-[0.18em] text-neutral-600">Email</p><p className="mt-2 text-sm text-neutral-300 transition group-hover:text-white md:text-base">matteo.jose3112@gmail.com</p></div>
                  <span className="text-xl text-neutral-600 transition group-hover:translate-x-1 group-hover:text-white">↗</span>
                </a>
                <a href="tel:+573108870211" className="group flex items-center justify-between py-6">
                  <div><p className="text-[10px] uppercase tracking-[0.18em] text-neutral-600">Phone</p><p className="mt-2 text-sm text-neutral-300 transition group-hover:text-white md:text-base">+57 310 887 0211</p></div>
                  <span className="text-xl text-neutral-600 transition group-hover:translate-x-1 group-hover:text-white">↗</span>
                </a>
              </div>
              <a href="mailto:matteo.jose3112@gmail.com" data-magnetic className="aster-button aster-button-primary mt-8 w-full sm:w-auto">
                Start a conversation <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
