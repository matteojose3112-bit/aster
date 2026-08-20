import "./App.css";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/sections/Hero";
import About from "./components/layout/sections/About";
import Projects from "./components/layout/sections/Projects";
import Experience from "./components/layout/sections/Experience";
import Contact from "./components/layout/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
