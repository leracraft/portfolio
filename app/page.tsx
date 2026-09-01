"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const products = [
  {
    label: "PRODUCT STUDIO",
    title: "Focused products for real friction.",
    description:
      "Suanara explores and builds software around problems where existing tools leave people doing unnecessary work.",
  },
  {
    label: "HEALTHCARE RESEARCH",
    title: "Understanding the last mile of clinical data.",
    description:
      "We are researching how independent specialty practices move information from clinical equipment into the systems they already use.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] text-[#17201c] selection:bg-[#dce7df]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[#f7f7f2]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#top" className="text-xl font-black tracking-[0.2em]">SUANARA</a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-black/60 md:flex">
            <a href="#products" className="hover:text-black">Products</a>
            <a href="#research" className="hover:text-black">Research</a>
            <a href="#about" className="hover:text-black">About</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </nav>
        </div>
      </header>

      <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 lg:px-10">
        <div className="absolute -right-32 top-28 h-96 w-96 rounded-full bg-[#dbe8df] blur-3xl" />
        <div className="mx-auto w-full max-w-7xl">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8 text-xs font-bold uppercase tracking-[0.3em] text-black/45">
            Independent technology studio
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-5xl text-6xl font-black leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            Building technology that removes barriers to progress.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-10 max-w-2xl text-lg leading-8 text-black/55 sm:text-xl">
            Suanara builds focused software products and investigates difficult infrastructure problems where existing systems fail to work together cleanly.
          </motion.p>
          <a href="#products" className="mt-10 inline-flex items-center gap-3 border-b border-black pb-2 text-sm font-bold">
            Explore our work <FaArrowRight className="text-xs" />
          </a>
        </div>
      </section>

      <section id="products" className="border-t border-black/10 bg-[#17201c] px-6 py-28 text-[#f7f7f2] lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">What we build</p>
          <h2 className="mt-6 max-w-3xl text-5xl font-black tracking-[-0.04em] sm:text-6xl">Small products. Serious problems.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/55">Suanara is an umbrella for independent products and technical research. We start narrow, learn from the people closest to the problem, and build from evidence.</p>
          <div className="mt-16 grid gap-px bg-white/15 md:grid-cols-2">
            {products.map((product) => (
              <article key={product.label} className="bg-[#17201c] p-8 md:p-12">
                <p className="text-[11px] font-bold tracking-[0.25em] text-white/35">{product.label}</p>
                <h3 className="mt-8 text-3xl font-bold tracking-tight">{product.title}</h3>
                <p className="mt-5 leading-7 text-white/50">{product.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="research" className="px-6 py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">Current research</p>
            <h2 className="mt-6 max-w-3xl text-5xl font-black tracking-[-0.04em]">Understanding the last mile of clinical data.</h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/55">We are speaking with independent healthcare practices to understand what happens to information produced by in-office clinical equipment after a test is completed, and where existing technology creates unnecessary manual work.</p>
            <p className="mt-5 max-w-2xl leading-7 text-black/50">This is early-stage discovery, not a sales program. The goal is to understand the workflow before deciding what should be built.</p>
          </div>
          <aside className="border border-black/10 bg-white p-8 shadow-sm md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/35">Research principle</p>
            <p className="mt-6 text-2xl font-bold leading-9">No patient information is needed.</p>
            <p className="mt-4 leading-7 text-black/50">Conversations focus only on technology, equipment, and operational workflows. We do not request patient names, records, images, screenshots, or other identifiable patient information.</p>
          </aside>
        </div>
      </section>

      <section id="about" className="border-y border-black/10 bg-white px-6 py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.65fr_1fr] md:items-center">
          <div className="overflow-hidden rounded-sm bg-[#eef0eb]">
            <img src="/profile.jpg" alt="Lera Suanu, founder of Suanara" className="aspect-[4/5] h-full w-full object-cover grayscale" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">Founder</p>
            <h2 className="mt-6 text-5xl font-black tracking-[-0.04em]">Lera Suanu</h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/55">Lera is a software engineer focused on full-stack systems, cloud infrastructure, automation, and products that remove practical barriers. Suanara is the home for that work: a place to investigate real problems, build focused solutions, and let evidence determine what grows.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">Contact</p>
          <h2 className="mt-6 max-w-3xl text-5xl font-black tracking-[-0.04em]">Have a problem worth understanding?</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-black/55">We are interested in conversations about difficult workflows, disconnected systems, and useful software.</p>
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
