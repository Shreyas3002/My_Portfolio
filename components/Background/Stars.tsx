"use client";

import { motion } from "framer-motion";

export default function Stars() {
  const stars = Array.from({ length: 120 });

  return (
    <>
      {stars.map((_, index) => (
        <motion.div
          key={index}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="absolute w-[2px] h-[2px] rounded-full bg-white"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </>
  );
}