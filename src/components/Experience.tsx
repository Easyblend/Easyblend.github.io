import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
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
      "Led a multi-month tooling POC comparing K6 vs OctoPerf for UI performance testing across React, Java, C# and Python services — selected and rolled out OctoPerf as Shift's official PT tool, aligning 20+ engineers across 5 countries.",
      "Designed and shipped the AXA FR performance test plan — 15-min loads from 10 → 40 VUs across login, alert, claim and comment flows; tracked P95/P99 iteration time, error rate, RPS and server CPU/RAM via Grafana on Azure.",
      "Uncovered concrete backend bottlenecks: a document-upload saturation point at 40 VUs (CPU ~89%, 2.1% error rate) and search-endpoint timeouts past 12 minutes — fed directly into the platform's scaling roadmap.",
      "Authored 20+ reusable K6 and OctoPerf scripts in the qa-automation repo, wired into Jenkins, GitHub Actions and Docker pipelines — cut manual QA effort by 40% and lifted regression coverage by 30%.",
      "Now driving QA for SCIM rollout to US regions (Allstate), Document Storage deployment to Japan, the Allstate external-worker service, and a doc-service 404 flakiness investigation.",
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
    location: "Side project",
    period: "2025 — Present",
    blurb:
      "A live SaaS that connects devs with real human testers for pre-launch bug-hunting — structured reports, triage workflow, screenshots, email digests.",
    bullets: [
      "Designed and shipped a Next.js 16 monorepo — marketing site + authenticated product app sharing one Postgres database via Prisma 7.",
      "Built a 3-role RBAC layer (DEV / TESTER / ADMIN) on top of Supabase Auth, enforced in edge middleware and per-route with HTTP-only JWT cookies.",
      "Engineered the end-to-end bug pipeline: React Hook Form → Cloudinary upload → Prisma transaction → owner notification, with an OPEN → IN_PROGRESS → RESOLVED → CLOSED triage flow.",
      "Built a secret-gated weekly Vercel Cron that groups OPEN/RESOLVED bugs per project owner and sends digest emails via Brevo SMTP.",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind 4", "Prisma", "PostgreSQL", "Supabase", "Cloudinary", "Brevo", "Vercel"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-40 px-5 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Experience</SectionLabel>

        <h2 className="mt-8 serif text-[clamp(40px,7.5vw,108px)] leading-[0.95] text-fg max-w-5xl">
          Where I've been{" "}
          <span className="serif-it text-fg-mute">shipping</span>
          <span className="text-accent">.</span>
        </h2>

        <ol className="mt-16 relative pl-8">
          <span className="tl-line" aria-hidden />
          {experience.map((job, i) => (
            <motion.li
              key={job.role + job.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className="relative pb-16 last:pb-0"
            >
              <span
                className={`tl-dot ${job.current ? "is-current" : ""}`}
                aria-hidden
              />

              <div className="mono text-[11px] uppercase tracking-widest text-fg-mute">
                {job.period}
                {job.current && (
                  <span className="ml-2 text-accent">· Currently</span>
                )}
              </div>

              <h3 className="mt-3 serif text-[clamp(28px,3.5vw,42px)] leading-tight text-fg">
                {job.role}
              </h3>

              <p className="mt-2 text-fg-mute">
                {job.url ? (
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noreferrer"
                    className="ulink text-fg inline-flex items-center gap-1"
                  >
                    {job.company} <ExternalLink size={12} />
                  </a>
                ) : (
                  <span className="text-fg">{job.company}</span>
                )}
                <span> · {job.location}</span>
              </p>

              <p className="mt-6 max-w-3xl text-fg text-lg leading-relaxed">
                {job.blurb}
              </p>

              <ul className="mt-6 space-y-2.5 max-w-3xl text-fg-mute">
                {job.bullets.map((b) => (
                  <li key={b} className="grid grid-cols-[auto_1fr] gap-3">
                    <span className="text-accent mt-2 select-none">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {job.stack.map((s) => (
                  <span
                    key={s}
                    className="mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-full border border-bg-line text-fg-mute"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
