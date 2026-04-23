"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
      { name: "Next.js", color: "#ffffff", icon: "▲" },
      { name: "Tailwind CSS", color: "#06b6d4", icon: "TW" },
      { name: "Framer Motion", color: "#ff4154", icon: "FM" },
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
      { name: "Vercel", color: "#ffffff", icon: "▲" },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="gradient-text">技能</span>
            </h2>
            <p className="text-slate-500 text-sm">Skills & Technologies</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: gi * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <h3 className="text-slate-400 font-semibold text-xs uppercase tracking-widest mb-5 pb-3 border-b border-white/5">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: gi * 0.1 + si * 0.04 }}
                      className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-white/4 border border-white/6 hover:border-white/15 transition-all duration-200 hover:bg-white/7"
                    >
                      <span
                        className="text-xs font-bold font-mono min-w-[24px] text-center"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </span>
                      <span className="text-slate-300 text-sm">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
