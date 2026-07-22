import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
  primary?: boolean;
}

export default function Button({
  text,
  href,
  primary = true,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-500 transform hover:-translate-y-1 ${
        primary
          ? "bg-cyan-500 text-white shadow-[0_0_35px_rgba(34,211,238,0.35)] hover:bg-cyan-400 hover:shadow-[0_0_50px_rgba(34,211,238,0.55)]"
          : "border border-cyan-400/60 text-cyan-400 backdrop-blur-md bg-white/5 hover:bg-cyan-400 hover:text-black hover:border-cyan-400"
      }`}
    >
      {text}
    </Link>
  );
}