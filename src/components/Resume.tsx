import { useState } from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink, FileText, Maximize2, Minimize2 } from "lucide-react";
import { SectionLabel } from "./About";

export default function Resume() {
  const [full, setFull] = useState(false);

  return (
    <section id="resume" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <SectionLabel number="05">Resume</SectionLabel>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-black leading-tight">
              My <span className="shimmer-text">CV</span>, on the page.
            </h2>
            <p className="mt-3 text-ink-600 max-w-xl">
              Read it inline, expand to full width, or grab the PDF — whichever
              you prefer.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/cv.pdf"
              download="Emmanuel_Kumah_CV.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-accent-500 to-electric-500 text-white font-semibold shadow-lg shadow-accent-500/25 hover:shadow-accent-500/45 hover:-translate-y-0.5 transition-all"
            >
              <Download size={16} /> Download PDF
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass text-ink-900 hover:bg-white/85 transition-all"
            >
              <ExternalLink size={16} /> Open in new tab
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className={`mt-10 glass card-glow rounded-2xl overflow-hidden mx-auto ${
            full ? "max-w-6xl" : "max-w-3xl"
          } transition-[max-width] duration-500`}
        >
          <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-ink-900/8 bg-cream-100">
            <div className="flex items-center gap-2 text-sm text-ink-700">
              <FileText size={16} className="text-accent-600" />
              <span className="font-mono">Emmanuel_Kumah_CV.pdf</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-ink-400 font-mono hidden sm:inline">
                A4 · PDF
              </span>
              <button
                onClick={() => setFull((f) => !f)}
                className="text-xs inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-ink-700 hover:text-ink-900 hover:bg-ink-900/5 border border-ink-900/10"
                aria-label={full ? "Shrink CV" : "Expand CV"}
              >
                {full ? <Minimize2 size={12} /> : <Maximize2 size={12} />}
                {full ? "Shrink" : "Expand"}
              </button>
            </div>
          </div>

          {/* A4 aspect ratio (1 : √2) so the PDF fits without horizontal scroll */}
          <div
            className="bg-cream-50 w-full"
            style={{ aspectRatio: "1 / 1.414" }}
          >
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
              <div className="p-8 text-center text-ink-700">
                Your browser can't display PDFs inline.{" "}
                <a href="/cv.pdf" className="text-accent-600 underline">
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
