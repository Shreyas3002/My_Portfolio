"use client";

import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

interface SocialItemProps {
  icon: ReactNode;
  title: string;
  value: string;
  href?: string;
}

export default function SocialItem({
  icon,
  title,
  value,
  href,
}: SocialItemProps) {
  const content = (
    <div className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.06] hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]">

      {/* Left */}

      <div className="flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-cyan-500/10 text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-500/20">
          {icon}
        </div>

        <div>
          <p className="text-sm uppercase tracking-wider text-zinc-500">
            {title}
          </p>

          <p className="mt-1 text-base font-medium text-white">
            {value}
          </p>
        </div>

      </div>

      {href && (
        <ArrowUpRight
          size={20}
          className="text-zinc-500 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan-400"
        />
      )}

    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {content}
    </a>
  );
}