import { useEffect, useRef, useState, type CSSProperties } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";

const phrases = [
  "Be simple, be creative.",
  "Less code, fewer bugs.",
  "Automate it all.",
  "Ship beautiful software.",
];

function useTypewriter(words: string[], typeMs = 70, holdMs = 1600) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    let timeout: number;
    if (!deleting && text === current) {
      timeout = window.setTimeout(() => setDeleting(true), holdMs);
    } else if (deleting && text === "") {
      setDeleting(false);
      setI((p) => p + 1);
      timeout = window.setTimeout(() => {}, 200);
    } else {
      timeout = window.setTimeout(() => {
        setText((t) =>
          deleting ? current.substring(0, t.length - 1) : current.substring(0, t.length + 1)
        );
      }, deleting ? typeMs / 2 : typeMs);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, i, words, typeMs, holdMs]);

  return text;
}

export default function Hero() {
  const text = useTypewriter(phrases);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // lightweight particle field
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const setSize = () => {
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
    };
    setSize();
    window.addEventListener("resize", setSize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.6 + 0.4,
    }));

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * dpr, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(91, 98, 228, 0.55)";
        ctx.fill();
      }
      // connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          const max = 130 * dpr;
          if (d2 < max * max) {
            const alpha = 1 - Math.sqrt(d2) / max;
            ctx.strokeStyle = `rgba(230, 57, 149, ${alpha * 0.35})`;
            ctx.lineWidth = 0.6 * dpr;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", setSize);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* aurora blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-[36rem] h-[36rem] rounded-full bg-accent-300/40 blur-3xl aurora" />
        <div className="absolute top-20 -right-32 w-[32rem] h-[32rem] rounded-full bg-electric-300/40 blur-3xl aurora" />
        <div className="absolute bottom-0 left-1/3 w-[28rem] h-[28rem] rounded-full bg-cyan-glow/20 blur-3xl aurora" />
        <div className="absolute inset-0 grid-bg opacity-70" />
      </div>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full -z-10 opacity-60"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center w-full">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider glass text-ink-700"
          >
            <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
            Available for new opportunities
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.02] font-black"
          >
            Hi, I'm{" "}
            <span className="shimmer-text">Emmanuel Kumah.</span>
            <br />
            <span className="text-ink-900">I build delightful software.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg text-ink-700 max-w-xl"
          >
            Full-stack engineer crafting fast, scalable products end-to-end —
            from polished React interfaces to resilient Java &amp; Python
            backends.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 font-mono text-sm sm:text-base text-electric-600 h-7"
          >
            <span className="text-ink-400">$ ~/portfolio &gt;</span>{" "}
            <span>{text}</span>
            <span className="inline-block w-2 h-5 align-middle bg-electric-500 ml-1 animate-pulse" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="cta-arrow inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-accent-500 to-electric-500 text-white font-semibold shadow-lg shadow-accent-500/25 hover:shadow-accent-500/45 hover:-translate-y-0.5 transition-all"
            >
              View my work <span className="arrow"><ArrowDown size={16} /></span>
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass text-ink-900 hover:bg-white/85 transition-all"
            >
              <Download size={16} /> Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex items-center gap-4 text-ink-500"
          >
            {[
              { href: "https://github.com/easyblend", Icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/emmanuel-kumah-692431224/", Icon: Linkedin, label: "LinkedIn" },
              { href: "https://twitter.com/bug_inspector", Icon: Twitter, label: "Twitter" },
              { href: "https://www.instagram.com/easy_blend93/", Icon: Instagram, label: "Instagram" },
              { href: "mailto:emmanuel.kumah.dev@gmail.com", Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg hover:text-ink-900 hover:bg-ink-900/5 transition-all"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: terminal card with floating sticker chips */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative float-slow"
        >
          {/* Floating chips */}
          <span
            className="chip-pill drift absolute -top-5 -left-4 z-20"
            style={{ ['--r' as never]: '-6deg' } as CSSProperties}
          >
            <i className="devicon-react-original colored text-lg" /> React
          </span>
          <span
            className="chip-pill drift absolute -top-3 right-6 z-20"
            style={{
              ['--r' as never]: '4deg',
              animationDelay: '0.8s',
            } as CSSProperties}
          >
            <i className="devicon-typescript-plain colored text-lg" /> TypeScript
          </span>
          <span
            className="chip-pill drift absolute -bottom-4 -right-3 z-20"
            style={{
              ['--r' as never]: '6deg',
              animationDelay: '1.4s',
            } as CSSProperties}
          >
            <i className="devicon-java-plain colored text-lg" /> Java
          </span>
          <span
            className="chip-pill drift absolute bottom-10 -left-6 z-20"
            style={{
              ['--r' as never]: '-4deg',
              animationDelay: '2.1s',
            } as CSSProperties}
          >
            <i className="devicon-python-plain colored text-lg" /> Python
          </span>

          <div className="card-glow rounded-2xl glass p-5 font-mono text-sm sticker">
            <div className="flex items-center gap-2 pb-3 border-b border-ink-900/8">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-amber-warm" />
              <span className="w-3 h-3 rounded-full bg-mint" />
              <span className="ml-3 text-ink-400 text-xs">~/emmanuel.ts</span>
            </div>
            <pre className="mt-4 text-[13px] leading-6 whitespace-pre-wrap text-ink-800">
<span className="text-electric-600">const</span> <span className="text-cyan-glow">engineer</span> = {"{"}{"\n"}
{"  "}<span className="text-accent-600">name</span>: <span className="text-mint">"Emmanuel Kumah"</span>,{"\n"}
{"  "}<span className="text-accent-600">role</span>: <span className="text-mint">"Full-Stack Engineer"</span>,{"\n"}
{"  "}<span className="text-accent-600">stack</span>: [<span className="text-mint">"React"</span>, <span className="text-mint">"TS"</span>, <span className="text-mint">"Java"</span>, <span className="text-mint">"Python"</span>],{"\n"}
{"  "}<span className="text-accent-600">loves</span>: [<span className="text-mint">"clean APIs"</span>, <span className="text-mint">"smooth UX"</span>],{"\n"}
{"  "}<span className="text-accent-600">superpower</span>: () =&gt; <span className="text-mint">"shipping fast"</span>,{"\n"}
{"}"};
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
