"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export default function PremiumBackground() {
  const stars = useMemo(() => {
  return Array.from({ length: 140 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size:
      Math.random() > 0.92
        ? 2.2
        : Math.random() > 0.72
        ? 1.5
        : 0.8,
    opacity:
      Math.random() > 0.9
        ? 1
        : Math.random() > 0.7
        ? 0.65
        : 0.18,
    duration: 2 + Math.random() * 5,
    delay: Math.random() * 5,
  }));
}, []);
const dustParticles = useMemo(() => {
  return Array.from({ length: 28 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 5,
    opacity: 0.015 + Math.random() * 0.02,
    duration: 35 + Math.random() * 40,
    delay: Math.random() * 20,
  }));
}, []);
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#02040A]">

      {/* Base Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
  radial-gradient(circle at 48% 20%, rgba(18,38,75,0.22), transparent 58%),
  radial-gradient(circle at 12% 82%, rgba(0,160,255,0.05), transparent 42%),
  radial-gradient(circle at 88% 20%, rgba(135,85,255,0.05), transparent 40%),
  linear-gradient(
    180deg,
    #01030A 0%,
    #020611 35%,
    #02040A 70%,
    #010208 100%
  )
`
        }}
      />
      <motion.div
  className="absolute left-1/2 top-[-260px] h-[700px] w-[1400px] -translate-x-1/2 rounded-full blur-[180px]"
  animate={{
    opacity: [0.05, 0.08, 0.05],
    scale: [1, 1.04, 1],
  }}
  transition={{
    duration: 24,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  style={{
    background:
      "radial-gradient(circle, rgba(255,255,255,0.05), transparent 72%)",
  }}
/>

      {/* Atmospheric Layer */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(255,255,255,0.015), transparent 35%),
            radial-gradient(circle at 80% 60%, rgba(255,255,255,0.012), transparent 45%)
          `,
        }}
      />

      {/* Aurora Ribbon 1 */}
<motion.div
  animate={{
    x: [-80, 40, -80],
    y: [-30, 30, -30],
    rotate: [-8, 4, -8],
    scale: [1, 1.08, 1],
  }}
  transition={{
    duration: 75,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute left-[-18%] top-[-12%] h-[900px] w-[1100px]"
>
  <div
    className="h-full w-full rounded-full blur-[170px]"
    style={{
      background:
        "linear-gradient(115deg, rgba(34,211,238,0.14), rgba(56,189,248,0.05), transparent 75%)",
      transform: "rotate(-18deg)",
    }}
  />
</motion.div>

{/* Aurora Ribbon 2 */}
<motion.div
  animate={{
    x: [60, -50, 60],
    y: [20, -20, 20],
    rotate: [6, -6, 6],
    scale: [1, 1.1, 1],
  }}
  transition={{
    duration: 90,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute right-[-22%] top-[8%] h-[900px] w-[1100px]"
>
  <div
    className="h-full w-full rounded-full blur-[180px]"
    style={{
      background:
        "linear-gradient(250deg, rgba(168,85,247,0.12), rgba(99,102,241,0.05), transparent 72%)",
      transform: "rotate(18deg)",
    }}
  />
</motion.div>

{/* Aurora Ribbon 3 */}
<motion.div
  animate={{
    x: [-30, 40, -30],
    y: [40, -40, 40],
    rotate: [0, 8, 0],
    scale: [1, 1.05, 1],
  }}
  transition={{
    duration: 105,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute left-[15%] bottom-[-30%] h-[850px] w-[1000px]"
>
  <div
    className="h-full w-full rounded-full blur-[180px]"
    style={{
      background:
        "linear-gradient(120deg, rgba(6,182,212,0.08), rgba(124,58,237,0.07), transparent 74%)",
      transform: "rotate(-12deg)",
    }}
  />
</motion.div>

      {/* Floating Light 1 */}
<motion.div
  className="absolute left-[-12%] top-[18%] h-[520px] w-[520px] rounded-full bg-cyan-400/[0.022] blur-[160px]"
  animate={{
    x: [-40, 35, -40],
    y: [-20, 30, -20],
    scale: [1, 1.08, 1],
  }}
  transition={{
    duration: 70,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

{/* Floating Light 2 */}
<motion.div
  className="absolute right-[-10%] top-[12%] h-[620px] w-[620px] rounded-full bg-violet-500/[0.015] blur-[180px]"
  animate={{
    x: [30, -40, 30],
    y: [20, -30, 20],
    scale: [1, 1.12, 1],
  }}
  transition={{
    duration: 80,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

{/* Floating Light 3 */}
<motion.div
  className="absolute left-[28%] top-[45%] h-[420px] w-[420px] rounded-full bg-sky-400/[0.012] blur-[150px]"
  animate={{
    y: [-30, 30, -30],
    x: [-20, 20, -20],
  }}
  transition={{
    duration: 65,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

{/* Floating Light 4 */}
<motion.div
  className="absolute right-[18%] bottom-[12%] h-[480px] w-[480px] rounded-full bg-purple-400/[0.012] blur-[170px]"
  animate={{
    y: [25, -30, 25],
    x: [20, -25, 20],
  }}
  transition={{
    duration: 75,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

{/* Floating Light 5 */}
<motion.div
  className="absolute left-[55%] top-[8%] h-[320px] w-[320px] rounded-full bg-cyan-300/[0.01] blur-[130px]"
  animate={{
    scale: [1, 1.15, 1],
    rotate: [0, 8, 0],
  }}
  transition={{
    duration: 60,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

{/* Floating Light 6 */}
<motion.div
  className="absolute left-[12%] bottom-[8%] h-[360px] w-[360px] rounded-full bg-indigo-400/[0.01] blur-[140px]"
  animate={{
    scale: [1, 1.1, 1],
    x: [-20, 20, -20],
    y: [20, -20, 20],
  }}
  transition={{
    duration: 90,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

      {/* Premium Starfield */}

<div className="absolute inset-0">

  {stars.map((star) => (

    <motion.div
      key={star.id}
      className="absolute rounded-full bg-white"
      style={{
        left: `${star.x}%`,
        top: `${star.y}%`,
        width: star.size,
        height: star.size,
        opacity: star.opacity,
        filter:
          star.size > 2
            ? "blur(0.3px)"
            : "none",
      }}
      animate={{
        opacity: [
          star.opacity * 0.35,
          star.opacity,
          star.opacity * 0.35,
        ],
        scale: [1, 1.9, 1],
      }}
      transition={{
        duration: star.duration,
        delay: star.delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

  ))}

</div>
{/* Hero Stars */}

<div className="absolute inset-0">

  {[...Array(18)].map((_, i) => (

    <motion.div
      key={i}
      className="absolute rounded-full bg-cyan-100"
      style={{
        left: `${12 + Math.random() * 30}%`,
        top: `${18 + Math.random() * 45}%`,
        width: 2,
        height: 2,
        opacity: 0.7,
        filter: "blur(.4px)",
      }}
      animate={{
        opacity: [0.2, 0.8, 0.2],
        scale: [1, 1.7, 1],
      }}
      transition={{
        duration: 4 + Math.random() * 3,
        repeat: Infinity,
        delay: Math.random() * 4,
      }}
    />

  ))}

</div>

      {/* Atmospheric Dust */}

<div className="absolute inset-0">

  {dustParticles.map((particle) => (

    <motion.div
      key={particle.id}
      className="absolute rounded-full bg-white"
      style={{
        left: `${particle.x}%`,
        top: `${particle.y}%`,
        width: particle.size,
        height: particle.size,
        opacity: particle.opacity,
        filter: "blur(2px)",
      }}
      animate={{
        y: [-20, -140],
        x: [-8, 8, -8],
        opacity: [
          particle.opacity,
          particle.opacity * 1.5,
          particle.opacity,
        ],
      }}
      transition={{
        duration: particle.duration,
        delay: particle.delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />

  ))}

</div>
{/* Floating Haze */}

<motion.div
  className="absolute left-[-15%] top-[20%] h-[650px] w-[650px] rounded-full bg-white/[0.015] blur-[180px]"
  animate={{
    x: [-30, 20, -30],
    y: [-20, 20, -20],
    scale: [1, 1.08, 1],
  }}
  transition={{
    duration: 50,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

<motion.div
  className="absolute right-[-15%] bottom-[10%] h-[600px] w-[600px] rounded-full bg-cyan-300/[0.012] blur-[190px]"
  animate={{
    x: [20, -20, 20],
    y: [20, -20, 20],
    scale: [1, 1.06, 1],
  }}
  transition={{
    duration: 58,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

      {/* Premium Film Grain */}

<motion.div
  className="absolute inset-0 opacity-[0.025] mix-blend-soft-light"
  animate={{
    x: [0, -6, 4, -3, 0],
    y: [0, 5, -4, 2, 0],
  }}
  transition={{
    duration: 18,
    repeat: Infinity,
    ease: "linear",
  }}
  style={{
    backgroundImage: `
      radial-gradient(circle, rgba(255,255,255,.9) .45px, transparent .55px)
    `,
    backgroundSize: "7px 7px",
  }}
/>
<motion.div
  className="absolute inset-0 opacity-[0.012]"
  animate={{
    x: [0, 2, -2, 0],
    y: [0, -2, 2, 0],
  }}
  transition={{
    duration: 25,
    repeat: Infinity,
    ease: "linear",
  }}
  style={{
    backgroundImage: `
      radial-gradient(circle, rgba(255,255,255,.8) .3px, transparent .45px)
    `,
    backgroundSize: "3px 3px",
  }}
/>

      {/* Light Shaft Left */}

<motion.div
  className="absolute left-[-10%] top-[-25%] h-[1600px] w-[340px] rotate-[-28deg]"
  animate={{
    x: [-30, 20, -30],
    opacity: [0.035, 0.06, 0.035],
  }}
  transition={{
    duration: 34,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <div
    className="h-full w-full blur-[70px]"
    style={{
      background:
        "linear-gradient(to bottom, rgba(34,211,238,0.22), transparent 75%)",
    }}
  />
</motion.div>

{/* Light Shaft Right */}

<motion.div
  className="absolute right-[-12%] top-[-15%] h-[1500px] w-[300px] rotate-[24deg]"
  animate={{
    x: [20, -25, 20],
    opacity: [0.03, 0.055, 0.03],
  }}
  transition={{
    duration: 40,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <div
    className="h-full w-full blur-[65px]"
    style={{
      background:
        "linear-gradient(to bottom, rgba(168,85,247,0.18), transparent 80%)",
    }}
  />
</motion.div>
{/* Hero Spotlight */}

<motion.div
  className="absolute left-[10%] top-[8%] h-[650px] w-[650px] rounded-full blur-[200px]"
  animate={{
    scale: [1, 1.02, 1],
    opacity: [0.04, 0.06, 0.04],
  }}
  transition={{
    duration: 20,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  style={{
    background:
      "radial-gradient(circle, rgba(255,255,255,0.045), transparent 72%)",
  }}
/>

      {/* Premium Edge Vignette */}

<div
  className="absolute inset-0"
  style={{
    background: `
      radial-gradient(
        ellipse at center,
        transparent 45%,
        rgba(0,0,0,0.08) 70%,
        rgba(0,0,0,0.28) 100%
      )
    `,
  }}
/>

{/* Top Fade */}

<div
  className="absolute inset-x-0 top-0 h-48"
  style={{
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.28), transparent)",
  }}
/>

{/* Bottom Fade */}

<div
  className="absolute inset-x-0 bottom-0 h-64"
  style={{
    background:
      "linear-gradient(to top, rgba(0,0,0,0.36), transparent)",
  }}
/>

{/* Left Fade */}

<div
  className="absolute inset-y-0 left-0 w-44"
  style={{
    background:
      "linear-gradient(to right, rgba(0,0,0,0.22), transparent)",
  }}
/>

{/* Right Fade */}

<div
  className="absolute inset-y-0 right-0 w-44"
  style={{
    background:
      "linear-gradient(to left, rgba(0,0,0,0.22), transparent)",
  }}
/>
{/* Glass Reflection */}

<motion.div
  className="absolute inset-0"
  animate={{
    opacity: [0.015, 0.03, 0.015],
  }}
  transition={{
    duration: 16,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  style={{
    background: `
      linear-gradient(
        110deg,
        transparent 15%,
        rgba(255,255,255,0.018) 35%,
        transparent 55%
      )
    `,
  }}
/>

    </div>
  );
}