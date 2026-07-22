"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "4+",
    label: "Projects",
  },
  {
    value: "2",
    label: "Internships",
  },
  {
    value: "15+",
    label: "Technologies",
  },
  {
    value: "8.35",
    label: "CGPA",
  },
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">

      {stats.map((item, i) => (

        <motion.div
          key={item.label}
          initial={{
            opacity:0,
            y:30
          }}
          animate={{
            opacity:1,
            y:0
          }}
          transition={{
            delay:1.1+i*.15
          }}
          whileHover={{
            y:-8,
            scale:1.04
          }}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
        >

          <h3 className="text-4xl font-black text-cyan-400">
            {item.value}
          </h3>

          <p className="text-zinc-400 mt-2">
            {item.label}
          </p>

        </motion.div>

      ))}

    </div>
  );
}