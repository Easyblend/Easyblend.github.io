import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-4 sm:px-6 transition-all ${
          scrolled ? "" : ""
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 ${
            scrolled ? "glass shadow-lg shadow-ink-900/8" : ""
          }`}
        >
          <a
            href="#home"
            className="font-display font-bold text-lg tracking-tight flex items-center gap-2"
          >
            <span className="inline-block w-8 h-8 rounded-lg bg-gradient-to-br from-accent-500 via-electric-500 to-cyan-glow shadow-lg shadow-electric-500/30" />
            <span className="shimmer-text">Easyblend</span>
          </a>

          <nav className="hidden md:flex items-center gap-0">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-2.5 lg:px-3 py-2 text-sm text-ink-600 hover:text-ink-900 transition-colors group whitespace-nowrap"
              >
                {l.label}
                <span className="absolute left-2.5 right-2.5 lg:left-3 lg:right-3 -bottom-0.5 h-px bg-gradient-to-r from-accent-500 to-electric-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </nav>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 text-sm px-3.5 py-2 rounded-xl bg-gradient-to-r from-accent-500 to-electric-500 text-white font-semibold shadow-lg shadow-accent-500/25 hover:shadow-accent-500/50 hover:-translate-y-0.5 transition-all whitespace-nowrap"
          >
            <Download size={14} />
            <span className="hidden lg:inline">Download CV</span>
            <span className="lg:hidden">CV</span>
          </a>

          <button
            className="md:hidden text-ink-900 p-2"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="md:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-1"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-lg text-ink-700 hover:bg-ink-900/5"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-2 text-center px-4 py-2 rounded-xl bg-gradient-to-r from-accent-500 to-electric-500 font-semibold"
              >
                Download CV
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
