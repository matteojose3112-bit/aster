function Navbar() {
  return (
    <nav className="border-b border-slate-800 px-4 py-5 sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold text-white sm:text-2xl"
        >
          Aster
        </a>

        <div className="flex gap-4 text-sm text-slate-300 sm:gap-8 sm:text-base">
          <a
            href="#about"
            className="transition hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            About
          </a>

          <a
            href="#projects"
            className="transition hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="transition hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;