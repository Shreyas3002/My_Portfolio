import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.vercel.app"), // Replace after deployment

  title: {
    default: "Shreyas R | AI & Full Stack Developer",
    template: "%s | Shreyas R",
  },

  description:
    "Portfolio of Shreyas R — AI & Full Stack Developer specializing in Artificial Intelligence, Machine Learning, Full Stack Development, and modern web experiences.",

  keywords: [
    "Shreyas R",
    "AI Developer",
    "Full Stack Developer",
    "Machine Learning",
    "Artificial Intelligence",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
  ],

  authors: [
    {
      name: "Shreyas R",
    },
  ],

  creator: "Shreyas R",

  openGraph: {
    title: "Shreyas R | AI & Full Stack Developer",
    description:
      "AI & Full Stack Developer building intelligent, modern web experiences.",
    url: "https://your-domain.vercel.app",
    siteName: "Shreyas Portfolio",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shreyas R Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Shreyas R | AI & Full Stack Developer",
    description:
      "AI & Full Stack Developer building intelligent software and modern digital experiences.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-[#050816] text-white antialiased">
        {children}
      </body>
    </html>
  );
}