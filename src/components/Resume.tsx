import { useState } from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink, Maximize2, Minimize2 } from "lucide-react";
import { SectionLabel } from "./About";

export default function Resume() {
  const [full, setFull] = useState(false);

  return (
    <section
      id="resume"
      className="relative py-28 sm:py-40 px-5 sm:px-8 border-t border-bg-line"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <SectionLabel>Resume</SectionLabel>
            <h2 className="mt-8 serif text-[clamp(40px,7.5vw,108px)] leading-[0.95] text-fg">
              The CV, on the{" "}
              <span className="serif-it text-fg-mute">page</span>
              <span className="text-accent">.</span>
            </h2>
            <p className="mt-6 max-w-xl text-fg-mute">
              Read it inline, expand to full width, or grab the PDF — whichever
              you prefer.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/cv.pdf"
              download="Emmanuel_Kumah_CV.pdf"
              className="cta-primary"
            >
              <Download size={14} /> Download PDF
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="cta-ghost"
            >
              <ExternalLink size={14} /> Open
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className={`mt-14 mx-auto overflow-hidden rounded-2xl border border-bg-line bg-bg-lift transition-[max-width] duration-500 ${
            full ? "max-w-6xl" : "max-w-3xl"
          }`}
        >
          <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-bg-line">
            <div className="mono text-[11px] uppercase tracking-widest text-fg-mute">
              Emmanuel_Kumah_CV.pdf · A4
            </div>
            <button
              onClick={() => setFull((f) => !f)}
              className="mono text-[11px] uppercase tracking-widest inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-fg-mute hover:text-fg transition-colors"
              aria-label={full ? "Shrink CV" : "Expand CV"}
            >
              {full ? <Minimize2 size={12} /> : <Maximize2 size={12} />}
              {full ? "Shrink" : "Expand"}
            </button>
          </div>

          <div className="w-full bg-bg" style={{ aspectRatio: "1 / 1.414" }}>
            <object
              data="/cv.pdf#view=FitH&toolbar=0&navpanes=0"
              type="application/pdf"
              className="w-full h-full"
            >
              <iframe
                src="/cv.pdf#view=FitH&toolbar=0&navpanes=0"
                title="Emmanuel Kumah CV"
                className="w-full h-full border-0"
              />
              <div className="p-8 text-center text-fg-mute">
                Your browser can't display PDFs inline.{" "}
                <a href="/cv.pdf" className="ulink text-fg">
                  Download the CV
                </a>{" "}
                instead.
              </div>
            </object>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
