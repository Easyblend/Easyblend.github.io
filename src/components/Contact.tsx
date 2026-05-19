import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Instagram, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./About";

const channels = [
  {
    label: "Email",
    value: "emmanuel.kumah.dev@gmail.com",
    href: "mailto:emmanuel.kumah.dev@gmail.com",
    Icon: Mail,
  },
  {
    label: "GitHub",
    value: "@easyblend",
    href: "https://github.com/easyblend",
    Icon: Github,
  },
  {
    label: "LinkedIn",
    value: "Emmanuel Kumah",
    href: "https://www.linkedin.com/in/emmanuel-kumah-692431224/",
    Icon: Linkedin,
  },
  {
    label: "Twitter / X",
    value: "@bug_inspector",
    href: "https://twitter.com/bug_inspector",
    Icon: Twitter,
  },
  {
    label: "Instagram",
    value: "@easy_blend93",
    href: "https://www.instagram.com/easy_blend93/",
    Icon: Instagram,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl glass card-glow p-8 sm:p-14"
        >
          <div className="pointer-events-none absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-accent-300/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-electric-300/40 blur-3xl" />
          <div className="relative grid lg:grid-cols-[1fr_1fr] gap-10 items-center">
            <div>
              <SectionLabel number="06">Let's talk</SectionLabel>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-black leading-tight">
                Got an idea? <span className="shimmer-text">Let's build it.</span>
              </h2>
              <p className="mt-4 text-ink-700 max-w-md">
                Whether it's a product launch, a tricky technical problem, or
                just a friendly hello — my inbox is always open.
              </p>
              <a
                href="mailto:emmanuel.kumah.dev@gmail.com"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent-500 to-electric-500 text-white font-semibold shadow-lg shadow-accent-500/25 hover:shadow-accent-500/45 hover:-translate-y-0.5 transition-all"
              >
                <Mail size={16} /> Say hello
              </a>
            </div>

            <ul className="grid gap-2">
              {channels.map(({ label, value, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-4 p-4 rounded-2xl border border-ink-900/8 bg-white/60 hover:border-accent-500/50 hover:bg-white transition-all sticker"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-500/15 to-electric-500/15 flex items-center justify-center text-accent-600">
                        <Icon size={18} />
                      </span>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-ink-500">
                          {label}
                        </div>
                        <div className="text-sm font-mono text-ink-900">
                          {value}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-ink-400 group-hover:text-accent-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
