"use client";

const skills = [
  "Python",
  "Java",
  "C++",
  "React",
  "Next.js",
  "JavaScript",
  "HTML",
  "CSS",
  "Machine Learning",
  "Data Structures",
  "Algorithms",
  "OOP",
];

export default function Skills() {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6">
        Skills
      </h3>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="
              px-5 py-3
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-500/10
              transition-all
              duration-300
              hover:scale-110
              hover:bg-cyan-500/20
              hover:border-cyan-400
              hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}