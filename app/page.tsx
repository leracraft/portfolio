"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Database, Github, Linkedin, Mail, ShieldCheck, TestTube2, Cloud, ExternalLink } from "lucide-react";

const projects = [
  { icon: Code2, title: "Real-Time Offer Negotiation", tech: "React · TypeScript · Node.js · PostgreSQL · Socket.io · Stripe", copy: "Built an end-to-end offer and counter-offer system with live updates, payment on acceptance, scheduled expiration, and bulk imports.", bg: "bg-[#f8dfd1]" },
  { icon: ShieldCheck, title: "Account Risk Controls", tech: "Node.js · Prisma · PostgreSQL · Redis · React", copy: "Developed automated account restrictions, configurable limits, refund workflows, and an internal review queue with an audit trail.", bg: "bg-[#f8eddc]" },
  { icon: TestTube2, title: "Browser-Based QA Automation", tech: "Browserbase · Playwright · TypeScript · Node.js", copy: "Replaced a 13-part manual release checklist with guided automated smoke tests and human review checkpoints.", bg: "bg-[#e8eddf]" },
  { icon: Database, title: "Unified Multi-Flow Cart", tech: "Node.js · Stripe · Prisma · React", copy: "Unified two purchasing flows, with per-item validation, vendor-level processing, and itemized transactional emails.", bg: "bg-[#f7e4dc]" },
  { icon: Cloud, title: "Secure AWS Data Protection", tech: "AWS S3 · CloudTrail · Athena · Terraform · IAM", copy: "Provisioned version-controlled cloud storage with versioning, Object Lock, replication, lifecycle policies, and audit monitoring.", bg: "bg-[#e8eddf]" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffaf2] text-[#252b27] selection:bg-[#f6cdb8]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#252b27]/5 bg-[#fffaf2]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#top" className="text-xl font-black tracking-[0.12em]">LERA SUANU</a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-[#252b27]/60 md:flex">
            <a href="#work" className="transition hover:text-[#d66f4a]">Projects</a>
            <a href="#experience" className="transition hover:text-[#d66f4a]">Experience</a>
            <a href="#about" className="transition hover:text-[#d66f4a]">About</a>
            <a href="#contact" className="transition hover:text-[#d66f4a]">Contact</a>
          </nav>
        </div>
      </header>

      <section id="top" className="flex min-h-screen items-center px-6 pb-16 pt-32 lg:px-10">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6 text-[11px] font-bold uppercase tracking-[0.26em] text-[#d66f4a] sm:mb-8 sm:text-xs">Software Engineer · Full-Stack · Cloud · Automation</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="text-[3.35rem] font-black leading-[0.99] tracking-[-0.055em] sm:text-7xl lg:text-8xl">Building software that makes <span className="text-[#d66f4a]">complex things simple.</span></motion.h1>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="mt-8 max-w-2xl text-lg leading-8 text-[#252b27]/60 sm:mt-10 sm:text-xl">I'm Lera, a full-stack software engineer building reliable products from database architecture and APIs to intuitive React experiences. I enjoy solving hard systems problems and making everyday workflows better.</motion.p>
            <a href="#work" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#68785b] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg">Explore my work <ArrowRight size={16} /></a>
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-[#f8dfd1] shadow-[0_16px_45px_rgba(37,43,39,0.08)]"><img src="/profile-v2.jpg" alt="Portrait of Lera Suanu" className="aspect-[4/5] h-full w-full object-cover" /></div>
        </div>
      </section>

      <section id="work" className="px-6 py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10"><p className="text-xs font-bold uppercase tracking-[0.3em] text-[#b85d3e]">Selected engineering work</p><h2 className="mt-5 max-w-3xl text-5xl font-black tracking-[-0.04em] sm:text-6xl">Real problems. Thoughtful solutions.</h2></div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projects.map(({ icon: Icon, title, tech, copy, bg }) => (
              <motion.article key={title} whileHover={{ y: -6, rotate: -0.35 }} transition={{ duration: 0.2 }} className={`${bg} min-h-72 rounded-[2rem] p-7 shadow-[0_10px_35px_rgba(37,43,39,0.05)]`}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#252b27]/10 bg-[#fffaf2]/70"><Icon size={22} strokeWidth={1.8} /></div>
                <h3 className="mt-7 text-xl font-bold">{title}</h3><p className="mt-2 text-xs font-medium leading-5 text-[#68785b]">{tech}</p><p className="mt-4 leading-7 text-[#252b27]/60">{copy}</p>
              </motion.article>
            ))}
          </div>
          <p className="mt-5 text-sm text-[#252b27]/50">Selected professional and independent work. Production implementations belong to their respective employers.</p>
        </div>
      </section>

      <section id="experience" className="px-6 py-12 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2.25rem] bg-[#e8eddf] p-8 sm:p-12 lg:grid-cols-[0.8fr_1.2fr] lg:p-16">
          <div><p className="text-xs font-bold uppercase tracking-[0.3em] text-[#68785b]">Professional experience</p><h2 className="mt-6 text-5xl font-black tracking-[-0.04em]">Engineering from idea to production.</h2></div>
          <div className="space-y-8">
            <div><p className="text-sm font-bold text-[#68785b]">2026 – Present</p><h3 className="mt-2 text-2xl font-bold">Software Engineer · ReefnBid</h3><p className="mt-3 leading-7 text-[#252b27]/65">Shipping full-stack commerce features, real-time systems, account safeguards, and automated release testing. Tackling concurrency, distributed caching, and data integrity across production services.</p></div>
            <div><p className="text-sm font-bold text-[#68785b]">2024 – 2025</p><h3 className="mt-2 text-2xl font-bold">Cloud & DevOps · Independent Projects</h3><p className="mt-3 leading-7 text-[#252b27]/65">Built AWS infrastructure with Terraform, Docker, Kubernetes, and CI/CD pipelines, with a focus on security and repeatable deployment.</p></div>
            <div><p className="text-sm font-bold text-[#68785b]">2021 – 2023</p><h3 className="mt-2 text-2xl font-bold">Programming Instructor · Dreamaker</h3><p className="mt-3 leading-7 text-[#252b27]/65">Taught Python, algorithms, object-oriented programming, and engineering fundamentals to more than 200 students.</p></div>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.65fr_1fr] md:items-center">
          <div className="overflow-hidden rounded-[2rem] bg-[#f8dfd1] shadow-[0_16px_45px_rgba(37,43,39,0.08)]"><img src="/profile-v2.jpg" alt="Lera Suanu" className="aspect-square h-full w-full object-cover" /></div>
          <div><p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d66f4a]">About me</p><h2 className="mt-6 text-5xl font-black tracking-[-0.04em]">Hi, I'm Lera.</h2><p className="mt-7 max-w-2xl text-lg leading-8 text-[#252b27]/60">I have an M.S. in Computer Science from the University of Bridgeport and a B.S. in Computer Science & Technology from Hebei University of Science & Technology. I work across TypeScript, React, Node.js, PostgreSQL, Redis, AWS, and infrastructure automation. I care about software that's useful, secure, and built to last.</p><p className="mt-5 leading-7 text-[#252b27]/60">My favorite challenges involve data integrity, real-time behavior, system design, and helping teams ship with confidence.</p><a href="https://github.com/leracraft" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 font-bold text-[#68785b]">See my GitHub <ExternalLink size={16}/></a></div>
        </div>
      </section>

      <section id="contact" className="px-6 pb-24 lg:px-10 lg:pb-28"><div className="mx-auto max-w-7xl rounded-[2.25rem] bg-[#f5e8bd] p-8 sm:p-12"><p className="text-xs font-bold uppercase tracking-[0.3em] text-[#8b772f]">Get in touch</p><h2 className="mt-6 max-w-3xl text-5xl font-black tracking-[-0.04em]">Let's build something meaningful.</h2><p className="mt-5 max-w-xl text-lg text-[#252b27]/60">I'm always happy to connect about engineering, collaboration, and interesting technical challenges.</p><div className="mt-10 flex items-center gap-4">{[{ href: "https://github.com/leracraft", label: "GitHub", icon: Github }, { href: "https://linkedin.com/in/lerabari-suanu-1a2b3c", label: "LinkedIn", icon: Linkedin }, { href: "mailto:lerabari65@gmail.com", label: "Email", icon: Mail }].map(({ href, label, icon: Icon }) => (<a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={label} className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fffaf2]/75 transition hover:-translate-y-1 hover:bg-white"><Icon size={20} /></a>))}</div></div></section>

      <footer className="border-t border-[#252b27]/10 px-6 py-8 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-[#252b27]/40 sm:flex-row sm:items-center sm:justify-between"><p className="font-bold tracking-[0.2em]">LERA SUANU</p><p>Software engineering · Cloud · Automation</p></div></footer>
    </main>
  );
}
