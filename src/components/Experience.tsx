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
      "Engineering quality and platform reliability for Force — an AI-powered fraud-detection SaaS used by tier-1 insurers (AXA, Allstate and others) with 10K+ monthly active users.",
    bullets: [
      "Led a multi-month tooling POC comparing K6 (CLI + Browser) vs OctoPerf for UI performance testing across React, Java, C# and Python services — selected and rolled out OctoPerf as Shift's official PT tool, aligning 20+ engineers across 5 countries.",
      "Designed and shipped the AXA FR performance test plan — 15-min loads from 10 → 40 VUs across login, alert, claim and comment flows; tracked P95/P99 iteration time, error rate, RPS and server-side CPU/RAM via Grafana on Azure (PWS1 / PDB3 / PCP3).",
      "Uncovered concrete backend bottlenecks: a document-upload saturation point at 40 VUs (CPU ~89%, 2.1% error rate) and search-endpoint timeouts past the 12-min mark — fed directly into the platform's scaling roadmap.",
      "Authored 20+ reusable K6 browser scripts and OctoPerf scenarios in the qa-automation repo, wired into Jenkins, GitHub Actions and Docker pipelines — cutting manual QA effort by 40% and lifting regression coverage by 30%.",
      "Wrote the team OctoPerf playbook: HAR + Firefox correlation rules, regex extractors, on-prem Docker setup, no-internet Azure VM deployments (scp + SSH port-forwarding), and custom-metric workarounds.",
      "Moved into the Services Squad (Dec 2025): now driving QA for SCIM rollout to US regions for Allstate, Document Storage deployment to Japan (JPE1), the Allstate external-worker service, and a doc-service 404 flakiness investigation.",
      "Hardened critical Force UI paths with Jest & React Testing Library to 90% coverage; drove a 15% page-load improvement and 10% engagement uplift through baseline KPIs and frontend perf work.",
    ],
    stack: ["React", "TypeScript", "Java", "C#", "Python", "K6", "OctoPerf", "Grafana", "Jenkins", "GitHub Actions", "Docker", "Azure"],
  },
  {
    role: "Frontend Software Engineer — Intern & Freelance",
    company: "STATION F · Kanop",
    url: "https://kanop.io",
    location: "Paris, France",
    period: "Mar 2024 — Feb 2025",
    blurb:
      "Owned end-to-end frontend delivery for Kanop's climate-tech web platform, partnering with Product, Design and a senior backend engineer.",
    bullets: [
      "Built type-safe React + TypeScript UI, integrating new REST APIs via React Query.",
      "Introduced Jest & React Testing Library — reached 90% coverage on critical user flows.",
      "Shipped UI/UX improvements that landed directly on product KPIs (dashboard usability, onboarding).",
    ],
    stack: ["React", "TypeScript", "React Query", "Jest", "Tailwind"],
  },
  {
    role: "Founder & Engineer",
    company: "CrowdTest.dev",
    url: "https://crowdtest.dev",
    location: "Side project · 2025 — Present",
    period: "2025 — Present",
    blurb:
      "A live SaaS (crowdtest.dev) that connects devs with real human testers for pre-launch bug-hunting — structured reports, triage workflow, screenshots and email digests.",
    bullets: [
      "Designed and shipped a Next.js 16 monorepo — a marketing site and an authenticated product app sharing one Postgres database via Prisma 7.",
      "Built a 3-role RBAC layer (DEV / TESTER / ADMIN) on top of Supabase Auth, enforced in edge middleware and per-route with HTTP-only JWT cookies (jose / bcrypt).",
      "Engineered the end-to-end bug pipeline: React Hook Form → Cloudinary upload → Prisma transaction (Bug + Screenshot[] + AuditLog) → owner notification, with a OPEN → IN_PROGRESS → RESOLVED → CLOSED triage flow.",
      "Wrote an append-only audit log (actor/owner snapshots, indexed on entity, project, action) surfaced through an admin dashboard for forensic queries.",
      "Built a secret-gated weekly Vercel Cron that groups OPEN/RESOLVED bugs per project owner and sends digest emails via Brevo SMTP.",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind 4", "Prisma", "PostgreSQL", "Supabase", "Cloudinary", "Brevo", "Vercel"],
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
