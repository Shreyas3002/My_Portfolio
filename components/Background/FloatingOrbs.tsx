"use client";

import { motion } from "framer-motion";

const orbs = [
  {
    size: 320,
    left: "10%",
    top: "20%",
    color: "bg-cyan-400/20",
    duration: 18,
  },
  {
    size: 420,
    left: "70%",
    top: "10%",
    color: "bg-blue-500/20",
    duration: 24,
  },
  {
    size: 280,
    left: "35%",
    top: "70%",
    color: "bg-indigo-500/20",
    duration: 20,
  },
];

export default function FloatingOrbs() {
  return (
    <>
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute rounded-full blur-[120px] ${orb.color}`}
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.left,
            top: orb.top,
          }}
        />
      ))}
    </>
  );
}