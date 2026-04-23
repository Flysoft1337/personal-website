"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const projects = [
  {
    name: "RoamHub",
    nameEn: "RoamHub",
    desc: "独立开发的产品，提供反馈与问题追踪系统。",
    descEn: "An independently developed product with feedback and issue tracking.",
    tech: ["TypeScript"],
    github: "https://github.com/Flysoft1337/RoamHub_Feedback",
    demo: null,
    featured: true,
  },
  {
    name: "智能报修平台",
    nameEn: "Smart Repair Platform",
    desc: "全栈智能报修系统，包含前后端完整实现。",
    descEn: "Full-stack smart repair system with complete frontend and backend.",
    tech: ["TypeScript", "Next.js", "Node.js"],
    github: "https://github.com/Flysoft1337/smart-repair-frontend",
    demo: null,
    featured: true,
  },
  {
    name: "Android 内核构建",
    nameEn: "Android Kernel Builder",
    desc: "通过 GitHub Actions 为一加设备自动编译 KernelSU / SukiSU-Ultra 内核，支持 SUSFS、KPM、ZRAM 等特性。",
    descEn: "Auto-build KernelSU/SukiSU-Ultra kernels for OnePlus devices via GitHub Actions, supporting SUSFS, KPM, ZRAM.",
    tech: ["Shell", "GitHub Actions"],
    github: "https://github.com/Flysoft1337/Action-Build",
    demo: null,
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="gradient-text">项目</span>
            </h2>
            <p className="text-slate-500 text-sm">Projects</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass glass-hover rounded-2xl p-6 flex flex-col relative overflow-hidden"
              >
                {project.featured && (
                  <span className="absolute top-4 right-4 text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/20">
                    Featured
                  </span>
                )}
                <h3 className="text-white font-semibold text-base mb-0.5 pr-16">{project.name}</h3>
                <p className="text-slate-500 text-xs mb-3">{project.nameEn}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-2 flex-1">{project.desc}</p>
                <p className="text-slate-600 text-xs leading-relaxed mb-4">{project.descEn}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition"
                  >
                    <GithubIcon size={14} />
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-blue-400 transition"
                    >
                      <ExternalLink size={14} />
                      Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://github.com/Flysoft1337"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition glass px-6 py-3 rounded-full glass-hover"
            >
              <GithubIcon size={16} />
              在 GitHub 查看更多 / More on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
