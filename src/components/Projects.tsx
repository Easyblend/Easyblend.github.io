import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { projects, type Project } from "../data";
import { SectionLabel } from "./About";

const plainIcons = new Set([
  "devicon-threejs-original",
  "devicon-socketio-plain",
  "devicon-scikitlearn-plain",
  "devicon-java-plain",
]);

function TiltCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rxs = useSpring(rx, { stiffness: 200, damping: 18 });
  const rys = useSpring(ry, { stiffness: 200, damping: 18 });
  const rotateX = useTransform(rxs, (v) => `${v}deg`);
  const rotateY = useTransform(rys, (v) => `${v}deg`);

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    rx.set(-y * 8);
    ry.set(x * 10);
  };
  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={project.link}
      target="_blank"
      rel="noreferrer"
      onMouseMove={handleMove}
      onMouseLeave={reset}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: (index % 6) * 0.05 }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="group relative rounded-2xl overflow-hidden glass card-glow flex flex-col"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/25 to-transparent" />
        {project.featured && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-full bg-accent-500 text-white shadow-md">
            <Sparkles size={10} /> Featured
          </span>
        )}
        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 flex-wrap">
          {project.tech.map((t) => (
            <span
              key={t}
              className="w-7 h-7 rounded-md bg-white/85 backdrop-blur flex items-center justify-center border border-ink-900/10 shadow-sm"
            >
              <i className={`${t} ${plainIcons.has(t) ? "" : "colored"} text-sm`} />
            </span>
          ))}
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg text-ink-900 group-hover:text-accent-600 transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-ink-600 leading-relaxed flex-1">
          {project.description}
        </p>
        <div className="mt-4 flex items-center justify-between text-xs">
          <span className="inline-flex items-center gap-1 text-ink-500">
            <Github size={14} /> View source
          </span>
          <ExternalLink
            size={16}
            className="text-accent-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </div>
      </div>
    </motion.a>
  );
}

const tabs = ["All", "Featured", "Web", "Backend", "ML / Data", "Java"] as const;
type Tab = (typeof tabs)[number];

function classify(p: Project): Tab[] {
  const tags: Tab[] = ["All"];
  if (p.featured) tags.push("Featured");
  const t = p.tech.join(" ");
  if (/react|javascript|typescript|html|threejs|materialui|bootstrap|tailwindcss/.test(t))
    tags.push("Web");
  if (/spring|fastapi|socketio|postgresql|firebase|terraform|docker/.test(t))
    tags.push("Backend");
  if (/scikitlearn|pandas|numpy|chartjs/.test(t)) tags.push("ML / Data");
  if (/java|javafx|sqlite/.test(t) && /\bdevicon-java-plain\b/.test(t))
    tags.push("Java");
  return tags;
}

export default function Projects() {
  const [tab, setTab] = useState<Tab>("All");
  const { ref } = useInView({ threshold: 0.05, triggerOnce: true });
  const filtered = projects.filter((p) => classify(p).includes(tab));

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6" ref={ref}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <SectionLabel number="04">Selected work</SectionLabel>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-black leading-tight">
              Things I've <span className="shimmer-text">shipped</span>.
            </h2>
            <p className="mt-3 text-ink-600 max-w-xl">
              A mix of products, experiments, and weekend rabbit holes — all
              open-source on GitHub.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`text-xs sm:text-sm font-mono px-3 py-2 rounded-xl border transition-all ${
                  tab === t
                    ? "border-accent-500 bg-accent-500 text-white shadow-md shadow-accent-500/25"
                    : "border-ink-900/10 text-ink-600 hover:text-ink-900 hover:border-ink-900/20 bg-white/60"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <TiltCard key={p.title} project={p} index={i} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="https://github.com/easyblend"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass text-ink-900 hover:bg-white/85 transition-all"
          >
            <Github size={16} /> See more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
