export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  featured?: boolean;
  status?: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

export const featuredProject: Project = {
  title: "AI Scam Detection Platform",

  description:
    "An AI-powered cybersecurity platform that detects phishing URLs, fake QR codes, suspicious messages, and malicious websites using intelligent risk analysis.",

  image: "/projects/scam-dashboard.png",

  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Python",
    "FastAPI",
    "OpenCV",
    "Groq AI",
  ],

  github: "#",

  demo: "#",

  featured: true,

  status: "In Development",

  stats: [
    {
      label: "Modules",
      value: "6+",
    },
    {
      label: "Accuracy",
      value: "98%",
    },
    {
      label: "Status",
      value: "Beta",
    },
  ],
};

export const projects: Project[] = [
  {
    title: "Fake News Detection",

    description:
      "Machine learning application that classifies news articles as real or fake using NLP and TF-IDF vectorization.",

    image: "/projects/fake-news.png",

    technologies: [
      "Python",
      "Scikit-learn",
      "NLP",
      "TF-IDF",
    ],

    github: "#",

    demo: "#",
  },

  {
    title: "Smart Green Road Planner",

    description:
      "AI-assisted route optimization platform designed to reduce travel emissions through environmentally efficient navigation.",

    image: "/projects/road-planner.png",

    technologies: [
      "Python",
      "Pandas",
      "Maps API",
      "Machine Learning",
    ],

    github: "#",

    demo: "#",
  },

  {
    title: "Portfolio Website",

    description:
      "Modern animated portfolio inspired by Apple, Vercel, and Linear with immersive interactions and premium UI.",

    image: "/projects/portfolio.png",

    technologies: [
      "Next.js",
      "Framer Motion",
      "Tailwind CSS",
      "TypeScript",
    ],

    github: "#",

    demo: "#",
  },
];