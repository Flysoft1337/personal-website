"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "语言 / Languages",
    skills: [
      { name: "TypeScript", color: "#3178c6", icon: "TS" },
      { name: "JavaScript", color: "#f7df1e", icon: "JS" },
      { name: "PHP", color: "#777bb4", icon: "PHP" },
      { name: "Kotlin", color: "#7f52ff", icon: "KT" },
      { name: "Dart", color: "#00b4ab", icon: "DA" },
      { name: "C / C++", color: "#a8b9cc", icon: "C" },
      { name: "Python", color: "#3776ab", icon: "PY" },
      { name: "Shell", color: "#89e051", icon: "SH" },
    ],
  },
  {
    category: "前端 / Frontend",
    skills: [
      { name: "React", color: "#61dafb", icon: "⚛" },
      { name: "Next.js", color: "#fff", icon: "▲" },
      { name: "Tailwind CSS", color: "#06b6d4", icon: "TW" },
      { name: "Flutter", color: "#02569b", icon: "FL" },
    ],
  },
  {
    category: "后端 / Backend",
    skills: [
      { name: "Node.js", color: "#339933", icon: "ND" },
      { name: "REST API", color: "#6366f1", icon: "API" },
    ],
  },
  {
    category: "工具 / Tools",
    skills: [
      { name: "Git / GitHub", color: "#f05032", icon: "GIT" },
      { name: "GitHub Actions", color: "#2088ff", icon: "GA" },
      { name: "Linux", color: "#fcc624", icon: "LX" },
      { name: "Vercel", color: "#fff", icon: "▲" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <div className="h-full overflow-y-auto px-8 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <h2
          className="text-2xl font-bold mb-1"
          style={{
            background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          技能
        </h2>
        <p className="text-slate-500 text-xs mb-8">Skills & Technologies</p>

        <div className="grid md:grid-cols-2 gap-4">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: gi * 0.08, duration: 0.4 }}
              className="rounded-2xl p-5"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <h3 className="text-slate-400 text-xs uppercase tracking-widest mb-4 pb-3 border-b border-white/5">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: gi * 0.08 + si * 0.04, duration: 0.3 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <span
                      className="text-xs font-bold font-mono min-w-[20px] text-center"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </span>
                    <span className="text-slate-300 text-xs">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
