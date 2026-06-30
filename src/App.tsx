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
import TypeMarquee from "./components/TechMarquee";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div id="top" className="relative min-h-screen bg-bg text-fg">
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-px origin-left bg-accent z-[60]"
      />
      <Cursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <TypeMarquee />
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
