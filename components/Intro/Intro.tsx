"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Intro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>

      {show && (

        <motion.div
          exit={{
            y: "-100%",
            transition: {
              duration: 1,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
        >

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >

            <motion.h1
              initial={{
                letterSpacing: "40px",
                opacity: 0,
              }}
              animate={{
                letterSpacing: "4px",
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
              className="text-6xl md:text-8xl font-black"
            >
              SHREYAS
              <span className="text-cyan-400">.R</span>
            </motion.h1>

            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: 220,
              }}
              transition={{
                delay: .7,
                duration: .8,
              }}
              className="mx-auto h-[2px] bg-cyan-400 mt-6"
            />

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1,
              }}
              className="mt-8 text-zinc-400 tracking-[8px]"
            >
              AI • ML • FULL STACK
            </motion.p>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}