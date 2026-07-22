"use client";

import { motion } from "framer-motion";
import { featuredProject, projects } from "./projectData";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

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

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden pt-40 pb-32"
    >
      {/* Background Effects */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Cyan Glow */}
        <div className="absolute left-[-250px] top-10 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[180px]" />

        {/* Purple Glow */}
        <div className="absolute right-[-250px] bottom-0 h-[520px] w-[520px] rounded-full bg-purple-600/10 blur-[180px]" />

        {/* Soft Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >

          {/* Section Label */}

          <div className="mb-6 flex items-center gap-4">

            <span className="text-sm font-semibold tracking-[0.4em] text-cyan-400">
              02
            </span>

            <div className="h-px w-24 bg-gradient-to-r from-cyan-400 to-transparent" />

            <span className="text-sm uppercase tracking-[0.4em] text-cyan-400">
              Selected Work
            </span>

          </div>

          {/* Heading */}

          <h2 className="max-w-5xl text-4xl font-black leading-[1.08] tracking-tight text-white md:text-5xl xl:text-6xl">
            Turning Ideas
            <br />
            Into Intelligent Products
          </h2>

          {/* Description */}

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
            A curated collection of AI-powered applications,
            full-stack experiences, and modern digital products
            built with performance, scalability, and thoughtful
            design at their core.
          </p>

        </motion.div>

        {/* Featured Project */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <FeaturedProject
            project={featuredProject}
          />
        </motion.div>

        {/* Project Grid */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
            >
              <ProjectCard
                project={project}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}