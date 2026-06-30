import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ArrowUpRight,
} from "lucide-react";
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
    <section
      id="contact"
      className="relative py-32 sm:py-48 px-5 sm:px-8 border-t border-bg-line"
    >
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Contact</SectionLabel>

        {/* The huge CTA as the wow — type as a button */}
        <motion.a
          href="mailto:emmanuel.kumah.dev@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="group mt-8 block"
        >
          <div className="serif text-[clamp(56px,12vw,200px)] leading-[0.9] text-fg-mute group-hover:text-fg transition-colors">
            Let's{" "}
            <span className="serif-it text-fg">build</span>{" "}
            something
            <span className="text-accent">.</span>
          </div>
          <span className="mt-6 inline-flex items-center gap-3 mono text-[11px] uppercase tracking-widest text-fg-mute group-hover:text-accent transition-colors">
            emmanuel.kumah.dev@gmail.com
            <ArrowUpRight
              size={14}
              className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
            />
          </span>
        </motion.a>

        {/* Channel list — small, bare, no cards */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-5 border-t border-bg-line">
          {channels.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group py-6 px-3 -mx-3 border-b sm:border-b-0 sm:border-r last:border-r-0 border-bg-line flex flex-col gap-3 hover:bg-bg-lift transition-colors"
            >
              <div className="flex items-center justify-between">
                <Icon size={16} className="text-fg-mute group-hover:text-accent transition-colors" />
                <ArrowUpRight
                  size={14}
                  className="text-fg-soft group-hover:text-fg group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                />
              </div>
              <div>
                <div className="mono text-[10px] uppercase tracking-widest text-fg-mute">
                  {label}
                </div>
                <div className="mt-1 text-fg text-sm break-all">{value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
