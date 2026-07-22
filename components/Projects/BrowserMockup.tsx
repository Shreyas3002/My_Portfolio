"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface BrowserMockupProps {
  image: string;
  title: string;
}

export default function BrowserMockup({
  image,
  title,
}: BrowserMockupProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        duration: 0.35,
      }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 shadow-2xl"
    >
      {/* Browser Header */}
      <div className="flex items-center justify-between border-b border-white/10 bg-zinc-900 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        <div className="rounded-full border border-white/10 bg-black/30 px-4 py-1 text-xs text-zinc-400">
          localhost:3000
        </div>

        <div className="w-14" />
      </div>

      {/* Screenshot */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          priority={false}
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>
    </motion.div>
  );
}