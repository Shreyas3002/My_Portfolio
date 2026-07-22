export default function Achievements() {
  const achievements = [
    {
      title: "Zynex National Level Hackathon",
      description:
        "Selected among the Top 25 teams in India for the offline finals of the Zynex National Level Hackathon organized by Google Developer Groups.",
      emoji: "🏆",
    },
    {
      title: "2nd Topper Award",
      description:
        "Awarded 2nd Topper in the 5th Semester of B.E. Artificial Intelligence & Machine Learning at Ghousia College of Engineering.",
      emoji: "🎓",
    },
    {
      title: "College Cricket Champion",
      description:
        "Won the inter-college cricket tournament representing Ghousia College of Engineering, demonstrating teamwork and leadership.",
      emoji: "🏏",
    },
    {
      title: "AI & Full Stack Projects",
      description:
        "Built multiple AI, Machine Learning and Full Stack applications including scam detection, fake news detection and modern web platforms.",
      emoji: "💻",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {achievements.map((item) => (
        <div
          key={item.title}
          className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
        >
          <div className="text-4xl">{item.emoji}</div>

          <h3 className="mt-4 text-xl font-bold text-cyan-400">
            {item.title}
          </h3>

          <p className="mt-3 leading-7 text-zinc-400">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}