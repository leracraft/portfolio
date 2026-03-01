"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResumeSubmit = async () => {
    setLoading(true);

    const res = await fetch("/api/send-resume", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      alert("Resume sent successfully!");
      setShowModal(false);
      setEmail("");
    } else {
      alert("Error sending resume.");
    }

    setLoading(false);
  };

  return (
    <main className="text-white">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute w-200 h-200 bg-purple-600/30 blur-3xl rounded-full -top-50 -left-50" />
        <div className="absolute w-175 h-175 bg-blue-600/30 blur-3xl rounded-full -bottom-50 -right-50" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center max-w-3xl"
        >
          <h1 className="text-6xl font-bold mb-6 bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Lerabari Suanu
          </h1>

          <p className="text-xl text-gray-400 mb-10">
            Software Engineer | Cloud | Data | Full Stack Development
          </p>

          <div className="flex gap-6 justify-center">
            <button
              onClick={() => scrollTo(projectsRef)}
              className="px-6 py-3 rounded-xl border border-white/30 hover:bg-white hover:text-black transition"
            >
              View Projects
            </button>

            <button
              onClick={() => setShowModal(true)}
              className="px-6 py-3 rounded-xl bg-white text-black hover:scale-105 transition"
            >
              Download Resume
            </button>
          </div>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section
        ref={projectsRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f0c29]"
      >
        <div className="absolute w-175 h-175 bg-purple-700/30 blur-3xl rounded-full -top-50 -right-37.5" />

        <div className="relative text-center">
          <h2 className="text-4xl font-bold mb-8 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-gray-300">Projects coming next...</p>
        </div>
      </section>

      {/* ABOUT */}
      <section
        ref={aboutRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a192f]"
      >
        <div className="absolute w-175 h-175 bg-cyan-500/20 blur-3xl rounded-full -bottom-50 -left-37.5" />

        <div className="relative text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6 bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-300">
            Passionate engineer focused on scalable systems, cloud computing, and modern full-stack development.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        ref={contactRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      >
        <div className="absolute w-175 h-175 bg-red-600/20 blur-3xl rounded-full -top-37.5 -left-37.5" />

        <div className="relative text-center">
          <h2 className="text-4xl font-bold mb-6 bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Contact
          </h2>
          <p className="text-gray-300">Contact form coming next...</p>
        </div>
      </section>

      {/* RESUME MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white text-black p-8 rounded-2xl w-96 shadow-2xl">
            <h3 className="text-xl font-bold mb-4">Enter your email</h3>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg mb-4"
              placeholder="your@email.com"
            />

            <button
              onClick={handleResumeSubmit}
              disabled={loading}
              className="w-full bg-black text-white py-3 rounded-lg hover:opacity-80 transition"
            >
              {loading ? "Sending..." : "Send Resume"}
            </button>

            <button
              onClick={() => setShowModal(false)}
              className="mt-4 text-sm text-gray-500"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

    </main>
  );
}