import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

const socials = [
  { href: "https://github.com/easyblend", Icon: Github, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/emmanuel-kumah-692431224/",
    Icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "https://twitter.com/bug_inspector", Icon: Twitter, label: "Twitter" },
  { href: "mailto:emmanuel.kumah.dev@gmail.com", Icon: Mail, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-ink-900/10 mt-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        {/* Big watermark name */}
        <div
          aria-hidden
          className="font-serif font-black tracking-tighter leading-none select-none pointer-events-none"
          style={{
            fontSize: "clamp(3rem, 12vw, 9rem)",
            background:
              "linear-gradient(180deg, rgba(13,13,24,0.08), transparent 80%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          easyblend.
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ink-500">
          <span>
            © {new Date().getFullYear()} Emmanuel Kumah · Crafted with React +{" "}
            <span className="text-accent-500">♥</span>
          </span>

          <div className="flex items-center gap-2">
            {socials.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="p-2 rounded-lg text-ink-500 hover:text-ink-900 hover:bg-ink-900/5 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
            <a
              href="#top"
              aria-label="Back to top"
              className="ml-2 p-2 rounded-lg bg-ink-900/5 text-ink-700 hover:text-ink-900 hover:-translate-y-0.5 transition-all"
            >
              <ArrowUp size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
