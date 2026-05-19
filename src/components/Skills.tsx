import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skillGroups } from "../data";
import { SectionLabel } from "./About";

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6" ref={ref}>
        <div className="text-center max-w-2xl mx-auto">
          <SectionLabel number="03">Toolkit</SectionLabel>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-black leading-tight">
            Tools I reach for <span className="shimmer-text">every day</span>.
          </h2>
          <p className="mt-4 text-ink-600">
            A pragmatic stack honed across products of every shape and size.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
              className="glass card-glow rounded-2xl p-6 sticker"
            >
              <div className="text-sm font-mono uppercase tracking-widest text-ink-500">
                {group.label}
              </div>
              <div className="mt-5 grid grid-cols-3 gap-4">
                {group.items.map((s) => (
                  <div
                    key={s.name}
                    className="group flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-ink-900/5 transition-all"
                  >
                    <i
                      className={`${s.icon} text-4xl transition-transform group-hover:scale-110 group-hover:-translate-y-0.5`}
                    />
                    <span className="text-xs text-ink-600">{s.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
