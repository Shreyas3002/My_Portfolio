"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Briefcase,
  MapPin,
  Sparkles,
} from "lucide-react";

export default function HeroCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 80,
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: {
          duration: 0.8,
          delay: 0.8,
        },
        x: {
          duration: 0.8,
          delay: 0.8,
        },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="relative w-full max-w-[360px]"
    >
      {/* Glow */}

      <div className="absolute inset-0 rounded-3xl bg-cyan-500/20 blur-3xl" />

      {/* Card */}

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-2xl">

        {/* Left Gradient */}

        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500" />

        {/* Header */}

        <div className="flex items-center gap-3 mb-8">

          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

          <span className="text-cyan-300 font-semibold">
            Available for Internships
          </span>

        </div>

        {/* Content */}

        <div className="space-y-8">

          <div className="flex items-start gap-4">

            <div className="rounded-xl bg-cyan-500/10 p-3">
              <BrainCircuit className="text-cyan-400" size={22} />
            </div>

            <div>

              <p className="text-sm text-zinc-500">
                Specialization
              </p>

              <h4 className="font-semibold mt-1">
                Artificial Intelligence
              </h4>

              <p className="text-zinc-400 text-sm">
                Machine Learning
              </p>

            </div>

          </div>

          <div className="flex items-start gap-4">

            <div className="rounded-xl bg-cyan-500/10 p-3">
              <Briefcase className="text-cyan-400" size={22} />
            </div>

            <div>

              <p className="text-sm text-zinc-500">
                Focus
              </p>

              <h4 className="font-semibold mt-1">
                Full Stack Development
              </h4>

            </div>

          </div>

          <div className="flex items-start gap-4">

            <div className="rounded-xl bg-cyan-500/10 p-3">
              <MapPin className="text-cyan-400" size={22} />
            </div>

            <div>

              <p className="text-sm text-zinc-500">
                Location
              </p>

              <h4 className="font-semibold mt-1">
                Bengaluru, India
              </h4>

            </div>

          </div>

          <div className="flex items-start gap-4">

            <div className="rounded-xl bg-cyan-500/10 p-3">
              <Sparkles className="text-cyan-400" size={22} />
            </div>

            <div>

              <p className="text-sm text-zinc-500">
                Mission
              </p>

              <h4 className="font-semibold mt-1">
                Building Intelligent
              </h4>

              <p className="text-zinc-400 text-sm">
                Digital Products
              </p>

            </div>

          </div>

        </div>

      </div>

    </motion.div>
  );
}