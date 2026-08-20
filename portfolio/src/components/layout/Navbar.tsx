import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#050505]/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="#"
          aria-label="Aster home"
          className="group flex items-center gap-3 text-sm font-semibold tracking-[0.18em] text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center border border-white/20 text-xs transition group-hover:border-white/60">
            A
          </span>
          <span>ASTER</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="aster-link text-xs font-medium uppercase tracking-[0.16em]"
            >
              <span className="mr-2 text-neutral-600">0{index + 1}</span>
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:border-white/60 hover:bg-white hover:text-black sm:block"
        >
          Let's talk ↗
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
