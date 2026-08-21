import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import MouseEffects from "./components/layout/MouseEffects";
import Hero from "./components/layout/sections/Hero";
import About from "./components/layout/sections/About";
import Projects from "./components/layout/sections/Projects";
import Experience from "./components/layout/sections/Experience";
import Toolkit from "./components/layout/sections/Toolkit";
import Contact from "./components/layout/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
    sections.forEach((section) => section.classList.add("aster-scroll-reveal"));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black">
      <MouseEffects />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Toolkit />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
