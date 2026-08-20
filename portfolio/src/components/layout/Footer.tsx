function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 text-xs text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold tracking-[0.18em] text-neutral-300">ASTER</p>
          <p className="mt-2">© 2026 Matteo Jose. Built with intent.</p>
        </div>

        <div className="flex flex-wrap items-center gap-6 uppercase tracking-[0.14em]">
          <a href="https://github.com/matteojose3112-bit/aster" target="_blank" rel="noreferrer" className="transition hover:text-white">
            GitHub ↗
          </a>
          <a href="mailto:matteo.jose3112@gmail.com" className="transition hover:text-white">
            Email ↗
          </a>
          <a href="#" className="transition hover:text-white">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
