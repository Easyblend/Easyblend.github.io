import { motion } from "framer-motion";
import { Briefcase, ExternalLink } from "lucide-react";
import { SectionLabel } from "./About";

interface Job {
  role: string;
  company: string;
  url?: string;
  location: string;
  period: string;
  current?: boolean;
  blurb: string;
  bullets: string[];
  stack: string[];
}

const experience: Job[] = [
  {
    role: "Software Engineer — Quality & Platform",
    company: "Shift Technology",
    url: "https://www.shift-technology.com",
    location: "Paris, France",
    period: "Mar 2025 — Present",
    current: true,
    blurb:
      "Engineering quality and platform reliability for an AI-powered fraud detection SaaS used by large enterprise insurers worldwide.",
    bullets: [
      "Led a performance testing tool evaluation (k6 vs OctoPerf) and drove company-wide adoption of OctoPerf as the standard solution across multiple engineering teams.",
      "Designed and executed performance testing strategies for critical Insurance oriented user journeys (authentication, alerts, claims, collaboration features), validating system behavior under load using key observability metrics.",
      "Identified backend performance bottlenecks under high concurrency, including service saturation and request timeouts, contributing to platform scalability improvements.",
      "Built reusable performance testing assets integrated into CI/CD workflows, reducing manual QA effort and improving regression reliability.",
      "Expanded QA coverage across new product areas during enterprise rollout initiatives, supporting feature validation across distributed deployments.",
    ],
    stack: ["React", "TypeScript", "Java", "C#", "Python", "K6", "OctoPerf", "Grafana", "Azure"],
  },
  {
    role: "Frontend Software Engineer — Intern & Freelance",
    company: "STATION F · Kanop",
    url: "https://kanop.io",
    location: "Paris, France",
    period: "Mar 2024 — Feb 2025",
    blurb:
      "Delivered frontend features for a climate-tech SaaS platform, working across product and engineering teams.",
    bullets: [
      "Built and maintained React + TypeScript interfaces integrated with backend APIs.",
      "Improved frontend reliability by introducing unit and integration testing with Jest and React Testing Library.",
      "Delivered UI improvements that enhanced usability and contributed to better product engagement.",
    ],
    stack: ["React", "TypeScript", "React Query", "Jest", "Tailwind"],
  },
  {
    role: "Founder & Engineer",
    company: "CrowdTest.dev",
    url: "https://crowdtest.dev",
    location: "Side project",
    period: "2025 — Present",
    blurb:
      "Built a SaaS platform connecting developers with real testers to improve pre-release software quality through structured bug reporting workflows.",
    bullets: [
      "Designed and built a full-stack SaaS platform with authentication, role-based access control, and multi-tenant architecture.",
      "Implemented an end-to-end bug reporting workflow including uploads, structured triage states, and automated notifications.",
      "Developed an audit logging system for tracking system actions and improving traceability for teams.",
      "Built automated weekly reporting workflows to summarize project activity and improve visibility for product owners.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Prisma", "PostgreSQL", "Supabase", "Cloudinary", "Vercel"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <SectionLabel number="02">Experience</SectionLabel>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-black leading-tight">
            Where I've been{" "}
            <span className="shimmer-text">shipping</span>.
          </h2>
          <p className="mt-3 text-ink-600">
            From a climate-tech startup at Station F to a global AI fraud-detection
            platform — and a SaaS of my own on the side.
          </p>
        </div>

        <div className="mt-14 relative">
          {/* timeline rail */}
          <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-accent-500/60 via-electric-500/40 to-transparent" />
          <ul className="space-y-10">
            {experience.map((job, i) => (
              <motion.li
                key={job.role + job.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-14 md:pl-20"
              >
                <span
                  className={`absolute left-0 md:left-2 top-1.5 w-8 h-8 rounded-xl bg-gradient-to-br from-accent-500 to-electric-500 flex items-center justify-center text-white shadow-lg shadow-accent-500/25 ${
                    job.current ? "ring-4 ring-accent-500/20" : ""
                  }`}
                  aria-hidden
                >
                  <Briefcase size={14} />
                </span>

                <div className="glass card-glow rounded-2xl p-6 sticker">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-lg text-ink-900">
                        {job.role}
                      </h3>
                      <p className="text-sm text-ink-700 mt-0.5">
                        {job.url ? (
                          <a
                            href={job.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-accent-600 hover:underline inline-flex items-center gap-1"
                          >
                            {job.company} <ExternalLink size={12} />
                          </a>
                        ) : (
                          <span className="text-accent-600">{job.company}</span>
                        )}
                        <span className="text-ink-400"> · {job.location}</span>
                      </p>
                    </div>
                    <span
                      className={`text-xs font-mono px-2.5 py-1 rounded-full border ${
                        job.current
                          ? "border-mint/40 text-emerald-700 bg-mint/15"
                          : "border-ink-900/10 text-ink-500 bg-white/60"
                      }`}
                    >
                      {job.current && (
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-mint mr-1.5 animate-pulse align-middle" />
                      )}
                      {job.period}
                    </span>
                  </div>

                  <p className="mt-3 text-ink-700 text-[15px]">{job.blurb}</p>

                  <ul className="mt-4 space-y-2 text-sm text-ink-600">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="text-accent-500 mt-1">▹</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {job.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] font-mono px-2 py-1 rounded-md bg-ink-900/5 text-ink-700 border border-ink-900/5"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
