"use client";

import { motion } from "framer-motion";
import ContactCard from "./ContactCard";

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

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden pt-36 pb-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute left-[-220px] bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute right-[-220px] top-0 h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-[180px]" />

      </div>

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">

        {/* Left */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >

          <div className="mb-6 flex items-center gap-4">

            <span className="text-sm font-semibold tracking-[0.4em] text-cyan-400">
              03
            </span>

            <div className="h-px w-24 bg-gradient-to-r from-cyan-400 to-transparent" />

            <span className="text-sm uppercase tracking-[0.35em] text-cyan-400">
              Contact
            </span>

          </div>

          <h2 className="max-w-xl text-5xl font-black leading-[1.05] tracking-tight text-white md:text-6xl">
            Let's Build
            <br />
            Something Amazing.
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            I'm always excited to collaborate on AI products,
            full-stack applications, internships, and innovative
            software projects.
          </p>

          {/* Availability */}

          <div className="mt-10 inline-flex w-fit items-center gap-3 rounded-full border border-green-500/20 bg-green-500/10 px-5 py-3">

            <span className="relative flex h-3 w-3">

              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />

              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />

            </span>

            <span className="font-medium text-green-300">
              Available for Internships & AI Roles
            </span>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ContactCard />
        </motion.div>

      </div>
    </section>
  );
}