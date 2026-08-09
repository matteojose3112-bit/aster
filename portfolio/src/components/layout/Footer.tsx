function Footer() {
  return (
    <footer className="border-t border-slate-800 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Aster. Built while learning.</p>

        <div className="flex gap-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="#contact"
            className="hover:text-white transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;