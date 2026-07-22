"use client";

import { motion } from "framer-motion";
import BrowserMockup from "./BrowserMockup";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.article
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.35,
      }}
      className="cursor-hover group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
      {/* Background Glow */}
      <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute -left-24 -bottom-24 h-48 w-48 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative">
        <BrowserMockup
          image={project.image}
          title={project.title}
        />

        <div className="p-6">
          <h3 className="text-2xl font-bold text-white">
            {project.title}
          </h3>

          <p className="mt-4 leading-7 text-zinc-400">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-3">
            <button
              className="flex-1 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Live Demo
            </button>

            <button
              className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-medium text-white transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10"
            >
              GitHub
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}