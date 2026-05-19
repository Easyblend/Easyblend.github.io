// Auto-scrolling tech strip — Dribbble-style "as featured" marquee.
const items = [
  { icon: "devicon-react-original colored", label: "React" },
  { icon: "devicon-typescript-plain colored", label: "TypeScript" },
  { icon: "devicon-nextjs-original", label: "Next.js" },
  { icon: "devicon-tailwindcss-plain colored", label: "Tailwind" },
  { icon: "devicon-java-plain colored", label: "Java" },
  { icon: "devicon-spring-original colored", label: "Spring" },
  { icon: "devicon-python-plain colored", label: "Python" },
  { icon: "devicon-fastapi-plain colored", label: "FastAPI" },
  { icon: "devicon-postgresql-plain colored", label: "PostgreSQL" },
  { icon: "devicon-docker-plain colored", label: "Docker" },
  { icon: "devicon-jest-plain colored", label: "Jest" },
  { icon: "devicon-github-original", label: "GitHub Actions" },
  { icon: "devicon-jenkins-line colored", label: "Jenkins" },
  { icon: "devicon-vercel-original", label: "Vercel" },
];

export default function TechMarquee() {
  const row = [...items, ...items]; // duplicate for seamless loop
  return (
    <div className="relative py-8 border-y border-ink-900/8 bg-white/40 overflow-hidden marquee">
      {/* edge fades */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
        style={{
          background:
            "linear-gradient(to right, var(--color-cream-50), transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
        style={{
          background:
            "linear-gradient(to left, var(--color-cream-50), transparent)",
        }}
      />
      <div className="marquee-track gap-10 px-6">
        {row.map((item, i) => (
          <div
            key={`${item.label}-${i}`}
            className="flex items-center gap-2 text-ink-700 shrink-0"
            aria-hidden={i >= items.length}
          >
            <i className={`${item.icon} text-2xl`} />
            <span className="font-mono text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
