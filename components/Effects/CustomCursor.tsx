"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [desktop, setDesktop] = useState(false);
  const [hover, setHover] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const ringX = useSpring(mouseX, {
    stiffness: 450,
    damping: 32,
  });

  const ringY = useSpring(mouseY, {
    stiffness: 450,
    damping: 32,
  });

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setDesktop(true);
    }

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const enter = () => setHover(true);
    const leave = () => setHover(false);

    window.addEventListener("mousemove", move);

    const elements = document.querySelectorAll(
      "a,button,.cursor-hover"
    );

    elements.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);

      elements.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  if (!desktop) return null;

  return (
    <>
      {/* Ring */}

      <motion.div
        animate={{
          width: hover ? 30 : 10,
          height: hover ? 30 : 10,
          borderColor: hover
            ? "#22d3ee"
            : "rgba(34,211,238,.6)",
          boxShadow: hover
            ? "0 0 30px rgba(34,211,238,.45)"
            : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{
          duration: 0.22,
        }}
        style={{
          x: ringX,
          y: ringY,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full border"
      />

      {/* Dot */}

      <motion.div
        animate={{
          scale: hover ? 1.8 : 1,
        }}
        transition={{
          duration: 0.2,
        }}
        style={{
          x: mouseX,
          y: mouseY,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_18px_4px_rgba(34,211,238,.6)]"
      />
    </>
  );
}