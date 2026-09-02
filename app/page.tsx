"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Cable,
  Code2,
  Github,
  Laptop,
  Linkedin,
  Mail,
  Search,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const work = [
  { icon: Code2, title: "Software products", copy: "Focused tools built around real problems and real workflows.", bg: "bg-[#f8dfd1]" },
  { icon: Cable, title: "System integration", copy: "We connect systems that should work together but currently do not.", bg: "bg-[#f8eddc]" },
  { icon: ShieldCheck, title: "Infrastructure", copy: "Reliable foundations for products that need to keep working.", bg: "bg-[#e8eddf]" },
  { icon: Search, title: "Research", copy: "Studying difficult problems before deciding what should be built.", bg: "bg-[#f7e4dc]" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffaf2] text-[#252b27] selection:bg-[#f6cdb8]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#252b27]/5 bg-[#fffaf2]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#top" className="text-xl font-black tracking-[0.22em]">SUANARA</a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-[#252b27]/60 md:flex">
            <a href="#work" className="transition hover:text-[#d66f4a]">Work</a>
            <a href="#research" className="transition hover:text-[#d66f4a]">Research</a>
            <a href="#about" className="transition hover:text-[#d66f4a]">About</a>
            <a href="#contact" className="transition hover:text-[#d66f4a]">Contact</a>
          </nav>
        </div>
      </header>

      <section id="top" className="flex min-h-screen items-center px-6 pb-16 pt-32 lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6 text-[11px] font-bold uppercase tracking-[0.26em] text-[#d66f4a] sm:mb-8 sm:text-xs">Independent technology studio</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="max-w-5xl text-[3.35rem] font-black leading-[0.99] tracking-[-0.055em] sm:text-7xl lg:text-8xl">Building technology that removes barriers to <span className="text-[#d66f4a]">progress.</span></motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="mt-8 max-w-2xl text-lg leading-8 text-[#252b27]/60 sm:mt-10 sm:text-xl">Suanara builds focused software products and explores difficult problems where existing systems create unnecessary friction.</motion.p>
          <a href="#work" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#68785b] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg">Explore our work <ArrowRight size={16} /></a>
        </div>
      </section>

      <section id="work" className="px-6 py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-8"><div><p className="text-xs font-bold uppercase tracking-[0.3em] text-[#b85d3e]">What we build</p><h2 className="mt-5 max-w-3xl text-5xl font-black tracking-[-0.04em] sm:text-6xl">Small products. Serious problems.</h2></div><div className="hidden text-4xl text-[#e6b965] md:block">☀︎</div></div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {work.map(({ icon: Icon, title, copy, bg }) => (
              <motion.article key={title} whileHover={{ y: -6, rotate: -0.35 }} transition={{ duration: 0.2 }} className={`${bg} min-h-64 rounded-[2rem] p-7 shadow-[0_10px_35px_rgba(37,43,39,0.05)]`}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#252b27]/10 bg-[#fffaf2]/70"><Icon size={22} strokeWidth={1.8} /></div>
                <h3 className="mt-8 text-xl font-bold">{title}</h3><p className="mt-4 leading-7 text-[#252b27]/60">{copy}</p><ArrowRight className="ml-auto mt-7" size={18} />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="research" className="px-6 py-12 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2.25rem] bg-[#e8eddf] p-8 sm:p-12 lg:grid-cols-[1fr_0.95fr] lg:p-16">
          <div><p className="text-xs font-bold uppercase tracking-[0.3em] text-[#68785b]">Current research</p><h2 className="mt-6 max-w-3xl text-5xl font-black tracking-[-0.04em]">The last mile of clinical data.</h2><p className="mt-7 max-w-2xl text-lg leading-8 text-[#252b27]/60">We are learning how independent healthcare practices move information from in-office clinical equipment into the software they already use, and where that process still breaks down.</p><p className="mt-5 max-w-2xl text-sm leading-7 text-[#252b27]/45">Research conversations focus only on technology and workflow. We do not request patient information.</p></div>
          <div className="flex items-center justify-center"><div className="w-full rounded-[2rem] bg-[#fffaf2]/65 p-6 sm:p-8"><div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-3 text-center"><div className="flex flex-col items-center gap-3"><div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#68785b]/25 bg-[#fffaf2]"><Stethoscope size={27} /></div><span className="text-[11px] font-bold uppercase tracking-[0.12em]">Clinical equipment</span></div><ArrowRight className="text-[#68785b]" size={18} /><div className="flex flex-col items-center gap-3"><div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#68785b] text-3xl font-black text-white">S</div><span className="text-[11px] font-bold uppercase tracking-[0.12em]">Suanara</span></div><ArrowRight className="text-[#68785b]" size={18} /><div className="flex flex-col items-center gap-3"><div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#68785b]/25 bg-[#fffaf2]"><Laptop size={27} /></div><span className="text-[11px] font-bold uppercase tracking-[0.12em]">Existing software</span></div></div></div></div>
        </div>
      </section>

      <section id="about" className="px-6 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.65fr_1fr] md:items-center"><div className="overflow-hidden rounded-[2rem] bg-[#f8dfd1] shadow-[0_16px_45px_rgba(37,43,39,0.08)]"><img src="/profile-v2.jpg" alt="Lera Suanu, founder of Suanara" className="aspect-square h-full w-full object-cover" /></div><div><p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d66f4a]">Founder</p><h2 className="mt-6 text-5xl font-black tracking-[-0.04em]">Lera Suanu</h2><p className="mt-7 max-w-2xl text-lg leading-8 text-[#252b27]/60">Lera is a software engineer focused on full-stack systems, cloud infrastructure, automation, and useful products. Suanara is the home for that work.</p></div></div>
      </section>

      <section id="contact" className="px-6 pb-24 lg:px-10 lg:pb-28"><div className="mx-auto max-w-7xl rounded-[2.25rem] bg-[#f5e8bd] p-8 sm:p-12"><p className="text-xs font-bold uppercase tracking-[0.3em] text-[#8b772f]">Contact</p><h2 className="mt-6 max-w-3xl text-5xl font-black tracking-[-0.04em]">Have a problem worth understanding?</h2><div className="mt-10 flex items-center gap-4">{[{ href: "https://github.com/leracraft", label: "GitHub", icon: Github }, { href: "https://linkedin.com/in/lerabari-suanu", label: "LinkedIn", icon: Linkedin }, { href: "mailto:lerabari65@gmail.com", label: "Email", icon: Mail }].map(({ href, label, icon: Icon }) => (<a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={label} className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fffaf2]/75 transition hover:-translate-y-1 hover:bg-white"><Icon size={20} /></a>))}</div></div></section>

      <footer className="border-t border-[#252b27]/10 px-6 py-8 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-[#252b27]/40 sm:flex-row sm:items-center sm:justify-between"><p className="font-bold tracking-[0.2em]">SUANARA</p><p>Independent software products and technology research.</p></div></footer>
    </main>
  );
}
