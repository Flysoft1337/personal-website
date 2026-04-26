"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "RoamHub",
    desc: "独立开发的产品，提供反馈与问题追踪系统。",
    descEn: "An independently developed product with feedback and issue tracking.",
    tech: ["Kotlin", "JavaScript", "PHP"],
    github: "https://github.com/Flysoft1337/RoamHub_Feedback",
    featured: true,
  },
  {
    name: "智能报修平台",
    desc: "全栈智能报修系统，包含前后端完整实现。",
    descEn: "Full-stack smart repair system with complete frontend and backend.",
    tech: ["TypeScript", "Next.js", "Node.js"],
    github: "https://github.com/Flysoft1337/smart-repair-frontend",
    featured: true,
  },
  {
    name: "Android 内核构建",
    desc: "通过 GitHub Actions 为一加设备自动编译 KernelSU / SukiSU-Ultra 内核。",
    descEn: "Auto-build KernelSU/SukiSU-Ultra kernels for OnePlus via GitHub Actions.",
    tech: ["Shell", "GitHub Actions"],
    github: "https://github.com/Flysoft1337/Action-Build",
    featured: false,
  },
];

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function ProjectsSection() {
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
          项目
        </h2>
        <p className="text-slate-500 text-xs mb-8">Projects</p>

        <div className="space-y-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="group rounded-2xl p-5 transition-all duration-200 hover:-translate-y-1 relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {project.featured && (
                <div className="absolute top-0 left-8 right-8 h-px pointer-events-none" style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.5), rgba(139,92,246,0.5), transparent)" }} />
              )}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(59,130,246,0.1) 0%, transparent 60%)",
                }}
              />

              <div className="flex items-start justify-between mb-2 relative">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-slate-200 font-semibold text-sm">{project.name}</h3>
                    {project.featured && (
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background: "rgba(59,130,246,0.15)",
                          border: "1px solid rgba(59,130,246,0.25)",
                          color: "#93c5fd",
                        }}
                      >
                        Featured
                      </span>
                    )}
                  </div>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-white transition-colors"
                >
                  <GithubIcon />
                </a>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed mb-1">{project.desc}</p>
              <p className="text-slate-600 text-xs leading-relaxed mb-4">{project.descEn}</p>

              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-md"
                    style={{
                      background: "rgba(59,130,246,0.08)",
                      border: "1px solid rgba(59,130,246,0.15)",
                      color: "#93c5fd",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-center"
        >
          <a
            href="https://github.com/Flysoft1337"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-slate-500 hover:text-slate-300 transition-colors"
          >
            <GithubIcon />
            在 GitHub 查看更多 / More on GitHub
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
