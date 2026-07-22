"use client";

import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";

const tools = [
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
  { icon: SiNodedotjs, name: "Node.js", color: "#5FA04E" },
  { icon: SiExpress, name: "Express", color: "#FFFFFF" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
  { icon: SiGit, name: "Git", color: "#F05032" },
  { icon: SiGithub, name: "GitHub", color: "#FFFFFF" },
  { icon: SiFigma, name: "Figma", color: "#F24E1E" },
];

export default function Tools() {
  return (
    <div className="mt-14">
      <h3 className="mb-8 text-2xl font-bold">
        Tech Stack
      </h3>

      <div className="flex flex-wrap gap-6">
        {tools.map((tool) => {
          const Icon = tool.icon;

          return (
            <div
              key={tool.name}
              className="group flex w-20 flex-col items-center"
            >
              <div
                className="
                  flex h-16 w-16 items-center justify-center
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-cyan-400/50
                  hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
                "
              >
                <Icon
                  size={32}
                  style={{ color: tool.color }}
                />
              </div>

              <span className="mt-3 text-center text-sm text-zinc-300 transition-colors group-hover:text-cyan-400">
                {tool.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}