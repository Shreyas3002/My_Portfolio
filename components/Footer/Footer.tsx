"use client";

import { motion } from "framer-motion";
import { ArrowUp, Heart, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 py-20">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative mx-auto flex max-w-7xl flex-col items-center px-6 text-center"
      >
        <h2 className="text-4xl font-black tracking-tight">
          <span className="text-white">Shreyas</span>
          <span className="text-cyan-400">.R</span>
        </h2>

        <p className="mt-4 text-lg text-zinc-400">
          AI & Full Stack Developer
        </p>

        <p className="mt-2 max-w-xl text-zinc-500">
          Building intelligent software experiences with Artificial Intelligence,
          modern web technologies, and thoughtful design.
        </p>

        {/* Divider */}
        <div className="my-10 h-px w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

        {/* Social Links */}
        <div className="flex gap-6">
          {/* GitHub */}
          <a
            href="https://github.com/Shreyas3002"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="cursor-hover rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
          >
            <FaGithub size={22} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/shreyas-r-9a481b394/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="cursor-hover rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
          >
            <FaLinkedin size={22} />
          </a>

          {/* Email */}
          <a
            href="mailto:shreyasrkumar30@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Shreyas,%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
            aria-label="Email"
            className="cursor-hover rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
          >
            <Mail size={22} />
          </a>
        </div>

        <div className="mt-12 flex items-center gap-2 text-zinc-500">
          <span>Crafted with</span>

          <Heart
            size={16}
            className="fill-red-500 text-red-500"
          />

          <span>
            Shreyas R using Next.js • Tailwind CSS • Framer Motion •
            TypeScript
          </span>
        </div>

        <p className="mt-4 text-sm text-zinc-600">
          © 2026 Shreyas R. All rights reserved.
        </p>

        {/* Back To Top */}
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="mt-10 flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-6 py-3 text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-500/20"
        >
          Back to Top
          <ArrowUp size={18} />
        </button>
      </motion.div>
    </footer>
  );
}