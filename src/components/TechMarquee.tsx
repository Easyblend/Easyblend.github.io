// Word marquee — replaces the icon strip with a typographic loop.
// The text IS the texture; that's the whole point of the duotone.
const words = [
  "Frontend",
  "Backend",
  "TypeScript",
  "Java",
  "Python",
  "Next.js",
  "Spring",
  "FastAPI",
  "Postgres",
  "Docker",
  "Performance",
  "Reliability",
  "Test coverage",
  "Shipped",
];

export default function TypeMarquee() {
  const row = [...words, ...words];
  return (
    <section
      aria-label="What I work with"
      className="relative py-12 sm:py-16 type-marquee-wrap overflow-hidden border-y border-bg-line"
    >
      <div className="type-marquee gap-10 sm:gap-14 items-center whitespace-nowrap">
        {row.map((w, i) => (
          <span
            key={`${w}-${i}`}
            className="serif text-fg-mute text-[clamp(40px,7vw,96px)] leading-none flex items-center gap-10 sm:gap-14"
            aria-hidden={i >= words.length}
          >
            {w}
            <span
              aria-hidden
              className="text-accent text-[0.65em] leading-none translate-y-[-0.15em]"
            >
              ✦
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
