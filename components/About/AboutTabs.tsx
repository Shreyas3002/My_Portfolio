"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import Education from "./Education";
import Experience from "./Experience";
import Achievements from "./Achievements";

const tabs = [
  "Education",
  "Experience",
  "Achievements",
];

export default function AboutTabs() {
  const [active, setActive] = useState("Education");

  return (
    <div>

      <div className="flex gap-3 flex-wrap">

        {tabs.map((tab) => (

          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-6 py-3 rounded-full transition-all duration-300 ${
              active === tab
                ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30"
                : "bg-white/5 border border-white/10 hover:border-cyan-400"
            }`}
          >
            {tab}
          </button>

        ))}

      </div>

      <motion.div
        key={active}
        initial={{
          opacity:0,
          y:20
        }}
        animate={{
          opacity:1,
          y:0
        }}
        transition={{
          duration:.35
        }}
        className="mt-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
      >

        {active==="Education" && <Education/>}

        {active==="Experience" && <Experience/>}

        {active==="Achievements" && <Achievements/>}

      </motion.div>

    </div>
  );
}