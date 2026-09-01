"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffaf2] text-[#252b27] selection:bg-[#f6cdb8]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#252b27]/5 bg-[#fffaf2]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#top" className="text-xl font-black tracking-[0.22em]">SUANARA</a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-[#252b27]/60 md:flex">
            <a href="#work" className="transition hover:text-[#d66f4a]">Work</a><a href="#research" className="transition hover:text-[#d66f4a]">Research</a><a href="#about" className="transition hover:text-[#d66f4a]">About</a><a href="#contact" className="transition hover:text-[#d66f4a]">Contact</a>
          </nav>
        </div>
      </header>

      <section id="top" className="flex min-h-screen items-center px-6 pb-16 pt-32 lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6 text-[11px] font-bold uppercase tracking-[0.26em] text-[#d66f4a] sm:mb-8 sm:text-xs">Independent technology studio</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }} className="max-w-5xl text-[3.35rem] font-black leading-[.99] tracking-[-.055em] sm:text-7xl lg:text-8xl">Building technology that removes barriers to <span className="text-[#d66f4a]">progress.</span></motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .18 }} className="mt-8 max-w-2xl text-lg leading-8 text-[#252b27]/60 sm:mt-10 sm:text-xl">Suanara builds focused software products and explores difficult problems where existing systems create unnecessary friction.</motion.p>
          <a href="#work" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#68785b] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5">Explore our work <FaArrowRight className="text-xs" /></a>
        </div>
      </section>

      <section id="work" className="px-6 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#f8dfd1] p-8 sm:p-12 lg:p-16">
          <p className="text-xs font-bold uppercase tracking-[.3em] text-[#b85d3e]">What we build</p>
          <h2 className="mt-6 max-w-3xl text-5xl font-black tracking-[-.04em] sm:text-6xl">Small products. Serious problems.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#252b27]/60">We start with a real problem, learn from the people closest to it, and build only when the evidence says software can help.</p>
        </div>
      </section>

      <section id="research" className="px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] bg-[#e8eddf] p-8 sm:p-12 lg:grid-cols-[1fr_.8fr] lg:p-16">
          <div><p className="text-xs font-bold uppercase tracking-[.3em] text-[#68785b]">Current research</p><h2 className="mt-6 max-w-3xl text-5xl font-black tracking-[-.04em]">The last mile of clinical data.</h2><p className="mt-7 max-w-2xl text-lg leading-8 text-[#252b27]/60">We are learning how independent healthcare practices move information from in-office clinical equipment into the software they already use, and where that process still breaks down.</p><p className="mt-5 max-w-2xl text-sm leading-7 text-[#252b27]/45">Research conversations focus on technology and workflow only — not patient information.</p></div>
          <div className="flex items-center justify-center"><div className="flex w-full items-center justify-between gap-3 text-center text-xs font-bold"><div className="rounded-3xl bg-[#fffaf2] p-5">Clinical<br/>equipment</div><span className="text-[#68785b]">→</span><div className="rounded-full bg-[#68785b] p-6 text-xl text-white">S</div><span className="text-[#68785b]">→</span><div className="rounded-3xl bg-[#fffaf2] p-5">Existing<br/>software</div></div></div>
        </div>
      </section>

      <section id="about" className="px-6 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[.65fr_1fr] md:items-center">
          <div className="overflow-hidden rounded-[2rem] bg-[#f8dfd1]"><img src="/profile.jpg" alt="Lera Suanu, founder of Suanara" className="aspect-square h-full w-full object-cover" /></div>
          <div><p className="text-xs font-bold uppercase tracking-[.3em] text-[#d66f4a]">Founder</p><h2 className="mt-6 text-5xl font-black tracking-[-.04em]">Lera Suanu</h2><p className="mt-7 max-w-2xl text-lg leading-8 text-[#252b27]/60">Lera is a software engineer focused on full-stack systems, cloud infrastructure, automation, and useful products. Suanara is the home for that work.</p></div>
        </div>
      </section>

      <section id="contact" className="px-6 pb-24 lg:px-10 lg:pb-28"><div className="mx-auto max-w-7xl rounded-[2rem] bg-[#f5e8bd] p-8 sm:p-12"><p className="text-xs font-bold uppercase tracking-[.3em] text-[#8b772f]">Contact</p><h2 className="mt-6 max-w-3xl text-5xl font-black tracking-[-.04em]">Have a problem worth understanding?</h2><div className="mt-10 flex items-center gap-7 text-2xl"><a href="https://github.com/leracraft" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a><a href="https://linkedin.com/in/lerabari-suanu" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a><a href="mailto:lerabari65@gmail.com" aria-label="Email"><FaEnvelope /></a></div></div></section>

      <footer className="border-t border-[#252b27]/10 px-6 py-8 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-[#252b27]/40 sm:flex-row sm:items-center sm:justify-between"><p className="font-bold tracking-[.2em]">SUANARA</p><p>Independent software products and technology research.</p></div></footer>
    </main>
  );
}
