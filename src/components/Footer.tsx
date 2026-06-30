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
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t border-bg-line">
      {/* Giant watermark */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-10">
        <div
          aria-hidden
          className="serif leading-[0.85] text-fg-soft/30 select-none pointer-events-none"
          style={{ fontSize: "clamp(72px, 18vw, 240px)" }}
        >
          easyblend<span className="text-accent">.</span>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 text-sm text-fg-mute border-t border-bg-line pt-6">
          <div className="mono text-[11px] uppercase tracking-widest">
            © {year} Emmanuel Kumah · Paris, France
          </div>

          <div className="flex items-center gap-1">
            {socials.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="p-2 rounded-md text-fg-mute hover:text-fg hover:bg-bg-lift transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
            <a
              href="#top"
              aria-label="Back to top"
              className="ml-2 p-2 rounded-md text-fg-mute hover:text-fg hover:bg-bg-lift transition-colors"
            >
              <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
