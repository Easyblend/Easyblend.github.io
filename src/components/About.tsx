import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 sm:py-40 px-5 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionLabel>About</SectionLabel>

        {/* asymmetric: huge type left, small notes right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mt-10 grid lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-20"
        >
          <h2 className="serif text-[clamp(40px,7.5vw,108px)] leading-[0.95] text-fg">
            I build{" "}
            <span className="serif-it text-fg-mute">software</span>
            <br />
            that earns its{" "}
            <span className="serif-it text-fg-mute">keep</span>
            <span className="text-accent">.</span>
          </h2>

          <div className="space-y-6 text-fg-mute text-base sm:text-lg leading-relaxed lg:pt-6">
            <p className="text-fg">
              I'm a full-stack engineer in Paris. Most days I'm in{" "}
              <em className="serif-it text-fg">React + TypeScript</em>{" "}
              on the front and{" "}
              <em className="serif-it text-fg">Java/Spring</em> or{" "}
              <em className="serif-it text-fg">Python/FastAPI</em> on the back,
              with <em className="serif-it text-fg">Postgres</em> close to hand.
            </p>
            <p>
              I care about latency, test coverage, and what happens at 40
              concurrent users. I've shipped a realtime multiplayer game backend,
              a Web3 wallet, an ML pipeline for housing prices, a self-piloted
              drone control surface, and a SaaS of my own that's in production
              today.
            </p>
            <p>
              Currently doing platform reliability at{" "}
              <a
                href="https://www.shift-technology.com"
                target="_blank"
                rel="noreferrer"
                className="ulink text-fg"
              >
                Shift Technology
              </a>{" "}
              on Force — an AI fraud-detection SaaS used by AXA, Allstate and
              other tier-1 insurers.
            </p>
          </div>
        </motion.div>

        {/* numbers row, big and bare — no cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-bg-line pt-10"
        >
          <Stat value="5+" label="years writing prod code" />
          <Stat value="13" label="shipped projects" />
          <Stat value="3" label="production roles" />
          <Stat value="∞" label="cups of coffee" />
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="serif text-[clamp(48px,7vw,84px)] text-fg leading-none">
        {value}
      </span>
      <span className="mono text-[11px] uppercase tracking-widest text-fg-mute">
        {label}
      </span>
    </div>
  );
}

// Public so other sections share the visual rhythm
export function SectionLabel({
  children,
  number: _number,
}: {
  children: React.ReactNode;
  number?: string;
}) {
  return <span className="eyebrow">{children}</span>;
}
