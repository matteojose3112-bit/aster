function Contact() {
  const links = [
    {
      label: "LinkedIn",
      detail: "Professional network",
      href: "https://www.linkedin.com/in/matteo-jose-velez-09628641a",
    },
    {
      label: "GitHub",
      detail: "Projects and code",
      href: "https://github.com/matteojose3112-bit",
    },
    {
      label: "Upwork",
      detail: "Freelance projects",
      href: "https://www.upwork.com/freelancers/~016feff03a0c8dbb71?mp_source=share",
    },
    {
      label: "Fiverr",
      detail: "Freelance services",
      href: "https://www.fiverr.com/s/p3311zN",
    },
  ];

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
                Open to remote opportunities, freelance projects, and collaborations where business operations and technology meet.
              </p>
            </div>
            <div className="lg:pt-3">
              <div className="border-y border-white/10">
                <a
                  href="mailto:matteo.jose3112@gmail.com"
                  className="group flex items-center justify-between border-b border-white/10 py-6"
                >
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-neutral-600">Get in touch</p>
                    <p className="mt-2 text-sm text-neutral-300 transition group-hover:text-white md:text-base">Send me an email</p>
                  </div>
                  <span className="text-xl text-neutral-600 transition group-hover:translate-x-1 group-hover:text-white" aria-hidden="true">↗</span>
                </a>
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between border-b border-white/10 py-5 last:border-b-0"
                  >
                    <div>
                      <p className="text-sm text-neutral-300 transition group-hover:text-white md:text-base">{link.label}</p>
                      <p className="mt-1 text-xs text-neutral-600">{link.detail}</p>
                    </div>
                    <span className="text-xl text-neutral-600 transition group-hover:translate-x-1 group-hover:text-white" aria-hidden="true">↗</span>
                  </a>
                ))}
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
