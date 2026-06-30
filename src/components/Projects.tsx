import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, type Project } from "../data";
import { SectionLabel } from "./About";

const tabs = ["All", "Featured", "Web", "Backend", "ML / Data"] as const;
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
  return tags;
}

function Tile({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.04 }}
      className="tile group flex flex-col"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="cover absolute inset-0 w-full h-full object-cover"
        />
        {project.featured && (
          <span className="absolute top-3 left-3 mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-bg/80 backdrop-blur border border-bg-line text-accent">
            Featured
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col gap-3 flex-1">
        <h3 className="serif text-2xl leading-tight text-fg">
          {project.title}
        </h3>
        <p className="text-sm text-fg-mute leading-relaxed flex-1">
          {project.description}
        </p>
        <div className="pt-4 mt-2 border-t border-bg-line flex items-center justify-between">
          <span className="mono text-[10px] uppercase tracking-widest text-fg-mute inline-flex items-center gap-1.5">
            <Github size={12} /> Source
          </span>
          <ArrowUpRight
            size={16}
            className="text-fg-mute group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
          />
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const [tab, setTab] = useState<Tab>("All");
  const filtered = projects.filter((p) => classify(p).includes(tab));

  return (
    <section
      id="projects"
      className="relative py-28 sm:py-40 px-5 sm:px-8 border-t border-bg-line"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <SectionLabel>Selected work</SectionLabel>
            <h2 className="mt-8 serif text-[clamp(40px,7.5vw,108px)] leading-[0.95] text-fg">
              Things I've{" "}
              <span className="serif-it text-fg-mute">shipped</span>
              <span className="text-accent">.</span>
            </h2>
            <p className="mt-6 max-w-xl text-fg-mute">
              A mix of products, experiments, and weekend rabbit holes — all
              open-source on GitHub. Filter to narrow by domain.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`mono text-[11px] uppercase tracking-widest px-3 py-2 rounded-full border transition-colors ${
                  tab === t
                    ? "border-accent bg-accent text-bg"
                    : "border-bg-line text-fg-mute hover:text-fg hover:border-fg-soft"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <Tile key={p.title} project={p} index={i} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/easyblend"
            target="_blank"
            rel="noreferrer"
            className="cta-ghost"
          >
            <Github size={14} /> See more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
