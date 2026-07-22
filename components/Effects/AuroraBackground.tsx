"use client";

import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

      {/* Cyan Aurora */}
      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="absolute left-[-15%] top-[10%] h-[700px] w-[700px] rounded-full bg-cyan-500/12 blur-[170px]"
      />

      {/* Purple Aurora */}
      <motion.div
        animate={{
          x: [0, -120, 90, 0],
          y: [0, 70, -50, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="absolute right-[-20%] bottom-[5%] h-[750px] w-[750px] rounded-full bg-purple-500/12 blur-[190px]"
      />

      {/* Blue Accent */}
      <motion.div
        animate={{
          y: [0, 80, -60, 0],
          x: [0, -50, 40, 0],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-[35%] h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[150px]"
      />

    </div>
  );
}