"use client";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#050816]/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        <a
          href="#home"
          className="text-4xl font-black tracking-tight"
        >
          Shreyas<span className="text-cyan-400">.R</span>
        </a>

        <nav className="hidden md:flex gap-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-zinc-300 hover:text-cyan-400 transition duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
}