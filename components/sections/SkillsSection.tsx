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
      { name: "Java", color: "#f89820", icon: "JV" },
      { name: "HTML / CSS", color: "#e34c26", icon: "HT" },
    ],
  },
  {
    category: "前端 / Frontend",
    skills: [
      { name: "React", color: "#61dafb", icon: "⚛" },
      { name: "Next.js", color: "#fff", icon: "▲" },
      { name: "Tailwind CSS", color: "#06b6d4", icon: "TW" },
      { name: "Framer Motion", color: "#ff4154", icon: "FM" },
      { name: "Flutter", color: "#54c5f8", icon: "FL" },
      { name: "Vite", color: "#646cff", icon: "VT" },
    ],
  },
  {
    category: "后端 / Backend",
    skills: [
      { name: "Node.js", color: "#339933", icon: "ND" },
      { name: "REST API", color: "#6366f1", icon: "API" },
      { name: "MySQL", color: "#4479a1", icon: "SQL" },
      { name: "Laravel", color: "#ff2d20", icon: "LV" },
      { name: "Prisma", color: "#2d3748", icon: "PR" },
    ],
  },
  {
    category: "工具 / Tools",
    skills: [
      { name: "Git / GitHub", color: "#f05032", icon: "GIT" },
      { name: "GitHub Actions", color: "#2088ff", icon: "GA" },
      { name: "Linux", color: "#fcc624", icon: "LX" },
      { name: "Vercel", color: "#fff", icon: "▲" },
      { name: "Docker", color: "#2496ed", icon: "DK" },
      { name: "VS Code", color: "#007acc", icon: "VS" },
    ],
  },
];

const learning = ["Rust", "Go", "gRPC", "WebAssembly"];

export default function SkillsSection() {
  return (
    <div className="h-full overflow-y-auto px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto space-y-6"
      >
        {/* 标题 */}
        <div>
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
          <p className="text-slate-500 text-xs">Skills & Technologies</p>
        </div>

        {/* 技能分组 */}
        <div className="grid md:grid-cols-2 gap-4">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: gi * 0.07, duration: 0.4 }}
              className="rounded-2xl p-5"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
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
                    transition={{ delay: gi * 0.07 + si * 0.03, duration: 0.3 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <span className="text-xs font-bold font-mono min-w-[24px] text-center" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    <span className="text-slate-300 text-xs">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 当前在学 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.4 }}
          className="rounded-2xl p-5"
          style={{ background: "rgba(59,130,246,0.05)", border: "1px solid rgba(59,130,246,0.15)" }}
        >
          <h3 className="text-slate-400 text-xs uppercase tracking-widest mb-3 pb-3 border-b border-blue-500/10">
            当前在学 / Currently Learning
          </h3>
          <div className="flex flex-wrap gap-2">
            {learning.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.05 }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
                style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-blue-300 text-xs">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
