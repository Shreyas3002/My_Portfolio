"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BrowserMockup from "./BrowserMockup";

interface Stat {
  label: string;
  value: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  status?: string;
  stats?: Stat[];
}

interface Props {
  project: Project;
}

export default function FeaturedProject({ project }: Props) {
  return (
    <motion.div
  whileHover={{ y: -6 }}
  
      transition={{ duration: 0.35 }}
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      {/* Glow */}
      <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="relative grid gap-12 p-8 lg:grid-cols-2 lg:p-12">
        {/* Left */}
        <div>
          <BrowserMockup
            image={project.image}
            title={project.title}
          />
        </div>

        {/* Right */}
        <div className="flex flex-col justify-center">
          <span className="mb-4 w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300">
            ⭐ Featured Project
          </span>

          <h3 className="text-4xl font-bold text-white">
            {project.title}
          </h3>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mt-8 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Stats */}
          {project.stats && (
            <div className="mt-10 grid grid-cols-3 gap-4">
              {project.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-black/20 p-5 text-center"
                >
                  <h4 className="text-2xl font-bold text-white">
                    {stat.value}
                  </h4>

                  <p className="mt-2 text-sm text-zinc-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-semibold text-white transition hover:scale-105">
              Live Demo
            </button>

            <button className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:bg-cyan-400/10">
              GitHub
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}