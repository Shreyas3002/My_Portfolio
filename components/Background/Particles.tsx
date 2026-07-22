"use client";

import { loadSlim } from "@tsparticles/slim";
import {
  Particles,
  ParticlesProvider,
  useParticlesProvider,
} from "@tsparticles/react";

function ParticleCanvas() {
  const { loaded } = useParticlesProvider();

  if (!loaded) return null;

  return (
    <Particles
      id="particles"
      className="absolute inset-0"
      options={{
        fullScreen: {
          enable: false,
        },
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        detectRetina: true,

        particles: {
          number: {
            value: 80,
          },

          color: {
            value: "#67e8f9",
          },

          links: {
            enable: true,
            color: "#22d3ee",
            distance: 150,
            opacity: 0.12,
          },

          move: {
            enable: true,
            speed: 0.4,
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
      }}
    />
  );
}

export default function ParticleBackground() {
  return (
    <ParticlesProvider
      init={async (engine) => {
        await loadSlim(engine);
      }}
    >
      <ParticleCanvas />
    </ParticlesProvider>
  );
}