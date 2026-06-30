import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skillGroups } from "../data";
import { SectionLabel } from "./About";

const lvl: Record<string, "DAILY" | "STRONG" | "WORKING"> = {
  React: "DAILY",
  TypeScript: "DAILY",
  JavaScript: "DAILY",
  Tailwind: "DAILY",
  HTML5: "DAILY",
  CSS3: "DAILY",
  Git: "DAILY",
  Java: "STRONG",
  Spring: "STRONG",
  Python: "STRONG",
  FastAPI: "STRONG",
  "Node.js": "STRONG",
  PostgreSQL: "STRONG",
  Docker: "STRONG",
  Firebase: "STRONG",
  "Three.js": "WORKING",
  "Socket.IO": "WORKING",
  SQLite: "WORKING",
  Terraform: "WORKING",
};

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-28 sm:py-40 px-5 sm:px-8 border-t border-bg-line"
    >
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Stack</SectionLabel>

        <h2 className="mt-8 serif text-[clamp(40px,7.5vw,108px)] leading-[0.95] text-fg max-w-5xl">
          What I reach for{" "}
          <span className="serif-it text-fg-mute">when it's time</span>
          <span className="text-accent">.</span>
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-x-12 gap-y-10">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
            >
              <div className="flex items-baseline justify-between border-b border-fg-soft pb-3">
                <h3 className="serif text-2xl text-fg">{group.label}</h3>
                <span className="mono text-[10px] uppercase tracking-widest text-fg-mute">
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </div>

              <ul>
                {group.items.map((s, i) => (
                  <li key={s.name} className="skill-row">
                    <span className="num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="name">{s.name}</span>
                    <span className="lvl">{lvl[s.name] ?? "WORKING"}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
