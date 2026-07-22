"use client";

import { contact } from "./contactData";
import {
  Mail,
  MapPin,
  Download,
  ArrowRight,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import SocialItem from "./SocialItem";

export default function ContactCard() {
  return (
    <div className="cursor-hover group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
      {/* Background Glow */}
      <div className="absolute -left-20 top-0 h-56 w-56 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-purple-500/10 blur-[120px]" />

      {/* Glass Reflection */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />

      <div className="relative space-y-6">

        {/* Email */}
        <SocialItem
          icon={<Mail size={22} />}
          title="Email"
          value={contact.email}
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
            contact.email
          )}`}
        />

        {/* LinkedIn */}
        <SocialItem
          icon={<FaLinkedin size={22} />}
          title="LinkedIn"
          value="linkedin.com/in/shreyas-r-9a481b394"
          href={contact.linkedin}
        />

        {/* GitHub */}
        <SocialItem
          icon={<FaGithub size={22} />}
          title="GitHub"
          value="github.com/Shreyas3002"
          href={contact.github}
        />

        {/* Resume */}
        <SocialItem
          icon={<Download size={22} />}
          title="Resume"
          value="Download Resume"
          href="/resume.pdf"
        />

        {/* Location */}
        <SocialItem
          icon={<MapPin size={22} />}
          title="Location"
          value="Bengaluru, Karnataka"
        />

        {/* CTA Button */}
        <div className="pt-6">
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
              contact.email
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group/button flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]"
          >
            Let's Talk

            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover/button:translate-x-1"
            />
          </a>
        </div>

      </div>
    </div>
  );
}