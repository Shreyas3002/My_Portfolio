"use client";

import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    (async () => {
      await loadSlim(window);
      setInit(true);
    })();
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="particles"
      options={{
        fullScreen: false,

        background: {
          color: {
            value: "transparent",
          },
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 80,
          },

          color: {
            value: "#67e8f9",
          },

          opacity: {
            value: 0.35,
          },

          size: {
            value: {
              min: 1,
              max: 3,
            },
          },

          move: {
            enable: true,
            speed: 0.4,
          },

          links: {
            enable: true,
            distance: 150,
            color: "#22d3ee",
            opacity: 0.12,
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },

          modes: {
            grab: {
              distance: 180,
            },
          },
        },

        detectRetina: true,
      }}
      className="absolute inset-0"
    />
  );
}