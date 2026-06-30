import { useEffect, useRef, type CSSProperties } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);

  // Cursor-tracked spotlight on the hero (wow moment #2 after the giant type).
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="home"
      ref={root}
      className="relative min-h-[100svh] flex flex-col justify-end pb-16 pt-32 sm:pb-24"
      style={{ "--mx": "50%", "--my": "30%" } as CSSProperties}
    >
      <div className="spotlight" aria-hidden />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        {/* small intro line, ticker-style, top-left */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-16 flex flex-wrap items-center gap-x-6 gap-y-2 mono text-[11px] uppercase tracking-widest text-fg-mute"
        >
          <span className="flex items-center gap-2 text-fg">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Available 2026
          </span>
          <span>Full-stack engineer · Paris</span>
          <span className="hidden md:inline">Currently @ Shift Technology</span>
        </motion.div>

        {/* THE moment: name set as big as it can go */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
          className="gianttype text-fg"
        >
          Emmanuel
          <br />
          Kumah<span className="text-accent">.</span>
        </motion.h1>

        {/* Subline + lockup, sat at the bottom edge of the name */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-xl text-lg sm:text-xl text-fg-mute leading-snug"
          >
            I design and ship full-stack products end&#8209;to&#8209;end —
            <span className="serif-it text-fg"> calm interfaces</span>,
            resilient backends, software that holds up under load.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            <a href="#projects" className="cta-primary">
              See the work <ArrowDownRight size={14} />
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="cta-ghost"
            >
              Read CV <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
