"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaCloud, FaCode, FaDatabase, FaUserAstronaut } from "react-icons/fa";

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // State for mouse tracking
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);

  // Update mouse position for the glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollTo = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleResumeSubmit = async () => {
    if (!email) return alert("Please enter an email");
    setLoading(true);

    try {
      // Logic for Resend API Call
      const res = await fetch("/api/send-resume", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email, company: company || "Unknown" }), // Defaults to 'Unknown' if empty
});

      if (res.ok) {
        alert("Resume sent! I'll track the delivery through Resend.");
        setShowModal(false);
        setEmail("");
      } else {
        const error = await res.json();
        alert(`Error: ${error.message || "Check your Resend configuration"}`);
      }
    } catch (err) {
      alert("Network error. Make sure your API route is set up.");
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Common button style to ensure uniformity
  const btnStyle = "px-8 py-4 rounded-2xl bg-slate-900 text-white font-bold hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center min-w-[160px]";

  return (
    <main className="relative bg-[#fcfdfe] text-slate-900 font-sans selection:bg-purple-100 overflow-x-hidden">
      
      {/* INTERACTIVE MOUSE GLOW */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 hidden lg:block"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(168, 85, 247, 0.15), transparent 80%)`
        }}
      />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-white via-purple-50 to-white">
        {/* Animated Background Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-150 h-150 bg-purple-200/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-125 h-125 bg-blue-100/40 rounded-full blur-[120px]" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center z-10 px-4"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-block py-1 px-4 rounded-full bg-purple-100 text-purple-700 font-bold text-xs uppercase tracking-widest mb-6 border border-purple-200"
          >
            Software Engineer • Cloud • AI
          </motion.span>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 bg-linear-to-r from-slate-900 via-purple-700 to-slate-800 bg-clip-text text-transparent">
            Lerabari Suanu
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            I build modern digital experiences with <span className="text-purple-600 font-semibold">cloud-native architecture</span> and clean, maintainable code.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => scrollTo(projectsRef)} className={btnStyle}>
              My Projects
            </button>
            <button onClick={() => setShowModal(true)} className={btnStyle}>
              Get Resume
            </button>
            <button onClick={() => scrollTo(aboutRef)} className={btnStyle}>
              About Me
            </button>
            <button onClick={() => scrollTo(contactRef)} className={btnStyle}>
              Contact
            </button>
          </div>
        </motion.div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section ref={projectsRef} className="py-32 px-6 bg-slate-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-4xl font-black text-slate-900">Featured Projects</h2>
              <p className="text-slate-500 mt-2 text-lg">A collection of systems I've designed and deployed.</p>
            </div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8"
          >
            <ProjectCard 
              icon={<FaCloud className="text-purple-600" />}
              title="AWS Cloud Infrastructure"
              description="Engineered a secure, production-grade environment using EC2, S3, and Lambda. Implemented role-based access control (IAM)."
              tags={['Terraform', 'S3', 'IAM']}
            />
            <ProjectCard 
              icon={<FaCode className="text-blue-600" />}
              title="Cloud-Native CI/CD"
              description="Built an automated pipeline containerizing web apps with Docker and deploying via CircleCI to DockerHub."
              tags={['Docker', 'CircleCI', 'DevOps']}
            />
            <ProjectCard 
              icon={<FaDatabase className="text-emerald-600" />}
              title="Registration Engine"
              description="A full-stack system managing enrollment and payments. Designed a relational schema for data integrity."
              tags={['SQL', 'Node.js', 'React']}
            />
            <ProjectCard 
              icon={<FaUserAstronaut className="text-indigo-600" />}
              title="Fresh Air Portfolio"
              description="This site uses Next.js 15, Framer Motion, and Resend for professional mail delivery and tracking."
              tags={['Next.js', 'Resend', 'Framer']}
              featured
            />
          </motion.div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section ref={aboutRef} className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative"
          >
            <div className="aspect-4/5 bg-purple-50 rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
              <img 
                src="/profile.jpg" 
                alt="Lerabari Suanu" 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl z-0" />
          </motion.div>

<motion.div 
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <h2 className="text-5xl font-black mb-8 text-slate-900 uppercase tracking-tighter">
    Building Resilient Systems.
  </h2>
  <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
    <p>
      I am a Technology Professional with a Master’s in CS from the University of Bridgeport. While my degree provided a rigorous foundation in Cloud Architecture and Full-Stack Development, I believe true engineering happens in the trenches of debugging and optimization.
    </p>
    
    <p className="border-l-4 border-purple-200 pl-4 py-2 bg-purple-50/50 rounded-r-xl text-slate-700 italic">
      "I have a Master’s in CS, which mostly means I’m qualified to stare at a screen until the red error messages go away. I build cloud systems and full-stack apps, usually powered by caffeine and way too many open browser tabs."
    </p>

    <p>
      I focus on architecting solutions that scale. Whether I’m automating CI/CD pipelines, securing AWS infrastructure, or designing relational databases, my goal is to build reliable systems that solve real-world problems—leveraging every tool available to get the job done right.
    </p>
  </div>
</motion.div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section ref={contactRef} className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto px-6 text-center relative z-10"
        >
          <h2 className="text-5xl font-black mb-6">Let's Build Something.</h2>
          <p className="text-slate-400 mb-12 text-xl">Currently looking for roles in Software Engineering and Cloud Systems.</p>
          
          <div className="flex gap-10 justify-center text-4xl mb-16">
            <a href="https://github.com/leracraft" target="_blank" className="hover:text-purple-400 transition-all"><FaGithub /></a>
            <a href="https://linkedin.com/in/lerabari-suanu" target="_blank" className="hover:text-purple-400 transition-all"><FaLinkedin /></a>
            <a href="mailto:lerabari65@gmail.com" className="hover:text-purple-400 transition-all"><FaEnvelope /></a>
          </div>

          <a
            href="mailto:lerabari65@gmail.com"
            className="inline-block px-12 py-5 bg-purple-600 text-white rounded-2xl font-black text-lg hover:bg-purple-500 transition-all shadow-xl"
          >
            Start a Conversation
          </a>
        </motion.div>
      </section>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xl flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="bg-white p-10 rounded-[2.5rem] w-full max-w-md shadow-2xl border border-slate-100"
          >
            <h3 className="text-3xl font-black mb-2 text-slate-900">Get My Resume</h3>
            <p className="text-slate-500 mb-8">Using <strong>Resend</strong> to deliver my CV directly to your inbox and track requests.</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-5 bg-slate-50 border border-slate-200 rounded-2xl mb-4 focus:ring-4 focus:ring-purple-100 outline-none transition"
              placeholder="name@company.com"
            />
            <button
              onClick={handleResumeSubmit}
              disabled={loading}
              className="w-full bg-purple-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-purple-700 transition shadow-lg"
            >
              {loading ? "Processing..." : "Send Resume"}
            </button>
            <button onClick={() => setShowModal(false)} className="w-full mt-6 text-slate-400 hover:text-slate-600 font-medium uppercase tracking-tighter text-xs">Close</button>
          </motion.div>
        </div>
      )}
    </main>
  );
}

// Sub-component for Project Cards
function ProjectCard({ icon, title, description, tags, featured = false }: any) {
  return (
    <motion.div 
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
      className={`group bg-white p-8 rounded-4xl border border-slate-200/60 shadow-sm hover:shadow-2xl transition-all ${featured ? 'hover:border-purple-200' : 'hover:border-blue-200'}`}
    >
      <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag: any) => (
          <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-slate-100 rounded-lg text-slate-500 group-hover:bg-purple-50 group-hover:text-purple-600 transition-colors">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}