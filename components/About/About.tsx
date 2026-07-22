"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import LayoutContainer from "../ui/LayoutContainer";
import AboutTabs from "./AboutTabs";
import Skills from "./Skills";
import Tools from "./Tools";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[180px]" />

      <LayoutContainer>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[8px] text-cyan-400">
            Get To Know Me
          </p>

          <h2 className="mt-4 text-5xl font-black md:text-6xl">
            About
            <span className="text-cyan-400"> Me</span>
          </h2>
        </motion.div>

        {/* Main Grid */}

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-[340px_1fr]">

          {/* LEFT CARD */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="sticky top-28 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">

              {/* Photo */}

              <Image
                src="/profile.jpg"
                alt="Shreyas"
                width={520}
                height={620}
                className="h-auto w-full object-cover"
              />

              {/* Details */}

              <div className="p-7">

                <h3 className="text-3xl font-black">
                  Shreyas R
                </h3>

                <p className="mt-2 text-cyan-400">
                  AI & Full Stack Developer
                </p>

                <p className="mt-5 leading-8 text-zinc-400">
                  Passionate about Artificial Intelligence,
                  Machine Learning, Full Stack Development,
                  and building premium digital experiences
                  using modern technologies.
                </p>

                {/* Stats */}

                <div className="mt-8 grid grid-cols-2 gap-5">

                  <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40">

                    <h4 className="text-3xl font-black text-cyan-400">
                      4+
                    </h4>

                    <p className="mt-1 text-sm text-zinc-400">
                      Projects
                    </p>

                  </div>

                  <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40">

                    <h4 className="text-3xl font-black text-cyan-400">
                      8.35
                    </h4>

                    <p className="mt-1 text-sm text-zinc-400">
                      CGPA
                    </p>

                  </div>

                </div>

              </div>

            </div>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <AboutTabs />

            <div className="mt-8">
              <Skills />
            </div>

            <div className="mt-10">
              <Tools />
            </div>

          </motion.div>

        </div>

      </LayoutContainer>
    </section>
  );
}