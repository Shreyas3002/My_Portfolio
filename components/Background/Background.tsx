"use client";

import FloatingOrbs from "./FloatingOrbs";
import Stars from "./Stars";
import MouseGlow from "./MouseGlow";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050816]">
      <MouseGlow />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      
      {/*<Stars />*/}

      <FloatingOrbs />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,.5))]" />

    </div>
  );
}