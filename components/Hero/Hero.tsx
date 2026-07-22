"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import LayoutContainer from "../ui/LayoutContainer";
import Button from "../ui/Button";
import HeroCard from "./HeroCard";
import HeroStats from "./HeroStats";

export default function Hero() {
  const { scrollY } = useScroll();

const opacity = useTransform(
  scrollY,
  [0, 80],
  [1, 0]
);
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden pt-24"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[180px] rounded-full" />

      <LayoutContainer>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}

          <div className="relative z-10">

            {/* Badge */}

            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-400/20 bg-white/5 backdrop-blur-xl"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

              <span className="uppercase text-xs tracking-[4px] text-cyan-400">
                Available for Internships
              </span>
            </motion.div>

            {/* Small Heading */}

            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: .2 }}
              className="mt-12 uppercase tracking-[8px] text-cyan-400 font-semibold text-sm"
            >
              AI • MACHINE LEARNING • FULL STACK
            </motion.p>

            {/* Name */}

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .35 }}
              className="mt-6 text-6xl md:text-7xl xl:text-8xl font-black leading-[0.88]"
            >
              SHREYAS
              <span className="text-cyan-400">.R</span>
            </motion.h1>

            {/* Main Heading */}

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .5 }}
              className="mt-10 text-4xl md:text-6xl font-bold leading-tight"
            >
              Building
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-cyan-400">
                Intelligent Digital
              </span>
              <br />
              Experiences.
            </motion.h2>

            {/* Paragraph */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .7 }}
              className="mt-10 max-w-xl text-zinc-400 text-lg leading-9"
            >
              Passionate AI Engineer and Full Stack Developer creating
              intelligent software, scalable web applications and immersive
              digital experiences using modern technologies.
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .9 }}
              className="mt-14 flex flex-wrap gap-6"
            >
              <Button
                text="Explore Projects"
                href="#projects"
              />

              <Button
                text="Contact Me"
                href="#contact"
                primary={false}
              />
            </motion.div>

            {/* Stats */}

            <HeroStats />

          </div>

          {/* RIGHT SIDE */}

          <div className="flex justify-center lg:justify-end mt-16 lg:mt-0">
            <HeroCard />
</div>

        </div>

        {/* Scroll */}

        <motion.div
  style={{ opacity }}
  animate={{
    y: [0, 12, 0],
  }}
  transition={{
    repeat: Infinity,
    duration: 2,
  }}
  className="flex justify-center mt-20"
>
  <a
    href="#about"
    className="text-cyan-400 hover:text-white transition-all duration-300"
  >
    ↓ Scroll to Explore
  </a>
</motion.div>

      </LayoutContainer>
    </section>
  );
}