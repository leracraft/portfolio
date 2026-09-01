"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] text-[#17201c] selection:bg-[#dce7df]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[#f7f7f2]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#top" className="text-xl font-black tracking-[0.2em]">SUANARA</a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-black/60 md:flex">
            <a href="#work" className="hover:text-black">Work</a>
            <a href="#research" className="hover:text-black">Research</a>
            <a href="#about" className="hover:text-black">About</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </nav>
        </div>
      </header>

      <section id="top" className="flex min-h-screen items-center px-6 pb-16 pt-32 lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6 text-[11px] font-bold uppercase tracking-[0.26em] text-black/40 sm:mb-8 sm:text-xs sm:tracking-[0.3em]">
            Independent technology studio
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="max-w-5xl text-[3.6rem] font-black leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            Building technology that removes barriers to progress.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="mt-8 max-w-2xl text-lg leading-8 text-black/55 sm:mt-10 sm:text-xl">
            Suanara builds focused software products and explores difficult problems where existing systems create unnecessary friction.
          </motion.p>
          <a href="#work" className="mt-9 inline-flex items-center gap-3 border-b border-black pb-2 text-sm font-bold">
            Explore our work <FaArrowRight className="text-xs" />
          </a>
        </div>
      </section>

      <section id="work" className="border-t border-black/10 bg-[#17201c] px-6 py-24 text-[#f7f7f2] lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">What we build</p>
          <h2 className="mt-6 max-w-3xl text-5xl font-black tracking-[-0.04em] sm:text-6xl">Small products. Serious problems.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/55">We start with a real problem, learn from the people closest to it, and build only when the evidence says software can help.</p>
        </div>
      </section>

      <section id="research" className="px-6 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">Current research</p>
          <h2 className="mt-6 max-w-3xl text-5xl font-black tracking-[-0.04em]">The last mile of clinical data.</h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-black/55">We are learning how independent healthcare practices move information from in-office clinical equipment into the software they already use, and where that process still breaks down.</p>
          <p className="mt-5 max-w-2xl leading-7 text-black/45">Research conversations focus on technology and workflow only — not patient information.</p>
        </div>
      </section>

      <section id="about" className="border-y border-black/10 bg-white px-6 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.65fr_1fr] md:items-center">
          <div className="overflow-hidden bg-[#eef0eb]">
            <img src="/profile.jpg" alt="Lera Suanu, founder of Suanara" className="aspect-square h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">Founder</p>
            <h2 className="mt-6 text-5xl font-black tracking-[-0.04em]">Lera Suanu</h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/55">Lera is a software engineer focused on full-stack systems, cloud infrastructure, automation, and useful products. Suanara is the home for that work.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">Contact</p>
          <h2 className="mt-6 max-w-3xl text-5xl font-black tracking-[-0.04em]">Have a problem worth understanding?</h2>
          <div className="mt-10 flex items-center gap-7 text-2xl">
            <a href="https://github.com/leracraft" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://linkedin.com/in/lerabari-suanu" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="mailto:lerabari65@gmail.com" aria-label="Email"><FaEnvelope /></a>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-black/40 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-bold tracking-[0.2em]">SUANARA</p>
          <p>Independent software products and technology research.</p>
        </div>
      </footer>
    </main>
  );
}
