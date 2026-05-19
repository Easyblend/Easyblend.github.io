import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: "13+", label: "Projects shipped" },
  { value: "4+", label: "Years coding" },
  { value: "10+", label: "Tech stacks" },
  { value: "∞", label: "Cups of coffee" },
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-[1fr_1.3fr] gap-12 items-center"
        >
          <div>
            <SectionLabel number="01">About</SectionLabel>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-black leading-tight">
              I turn complex ideas into{" "}
              <span className="shimmer-text">simple, beautiful</span> software.
            </h2>
          </div>
          <div className="text-ink-700 text-lg leading-relaxed space-y-4">
            <p>
              I'm a Software engineer with a soft spot for elegant interfaces
              and rock-solid backends. I've shipped products spanning realtime
              multiplayer games, Web3 wallets, lab sample management systems,
              and ML-driven web apps.
            </p>
            <p>
              My day-to-day is{" "}
              <span className="font-mono text-accent-600">React</span> /{" "}
              <span className="font-mono text-accent-600">TypeScript</span> on
              the front,{" "}
              <span className="font-mono text-electric-600">Java/Spring</span>{" "}
              or{" "}
              <span className="font-mono text-electric-600">Python/FastAPI</span>{" "}
              on the back, and{" "}
              <span className="font-mono text-cyan-glow">Postgres</span>{" "}
              everywhere it makes sense. I care about DX, performance, and
              shipping things users love.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass card-glow rounded-2xl p-6 text-center sticker"
            >
              <div className="font-serif text-4xl font-black shimmer-text">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-ink-500 uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function SectionLabel({
  children,
  number,
}: {
  children: React.ReactNode;
  number?: string;
}) {
  return (
    <span className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-accent-600">
      {number && (
        <span className="text-ink-300 font-serif font-black text-lg leading-none">
          {number}
        </span>
      )}
      <span className="w-8 h-px bg-accent-500" />
      {children}
    </span>
  );
}
