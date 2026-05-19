import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import TechMarquee from "./components/TechMarquee";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div id="top" className="relative min-h-screen text-ink-900 grain">
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] origin-left bg-gradient-to-r from-accent-500 via-electric-500 to-cyan-glow z-[60]"
      />
      <Cursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <TechMarquee />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
