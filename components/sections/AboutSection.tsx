"use client";

import { motion } from "framer-motion";

const cards = [
  { label: "方向", labelEn: "Focus",    value: "全栈开发", valueEn: "Full-Stack Dev" },
  { label: "主语言", labelEn: "Language", value: "TypeScript", valueEn: "JavaScript" },
  { label: "爱好", labelEn: "Hobby",    value: "折腾与探索", valueEn: "Hacking & Exploring" },
  { label: "状态", labelEn: "Status",   value: "开放合作", valueEn: "Open to Collab" },
];

const stats = [
  { num: "9+", label: "仓库", labelEn: "Repos" },
  { num: "8+", label: "语言", labelEn: "Languages" },
  { num: "2022", label: "加入", labelEn: "Since" },
];

const interests = ["Web 全栈", "Android 内核", "开源项目", "独立产品", "系统底层"];

export default function AboutSection() {
  return (
    <div className="h-full overflow-y-auto px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto space-y-7"
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
            关于我
          </h2>
          <p className="text-slate-500 text-xs">About Me</p>
        </div>

        {/* 介绍 */}
        <div
          className="rounded-2xl p-5 space-y-3"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-slate-300 leading-relaxed text-sm">
            我是 <span className="text-blue-400 font-medium">Flysoft</span>，一名专注于{" "}
            <span className="text-purple-400 font-medium">TypeScript</span> 的全栈开发者。
            热衷于将想法落地成可运行的产品，享受从设计到部署的完整构建过程。
          </p>
          <p className="text-slate-500 leading-relaxed text-xs">
            I&apos;m Flysoft, a full-stack developer focused on TypeScript. I love turning ideas
            into working products — from design to deployment. I also dig deep into Android
            kernel development (KernelSU / SukiSU-Ultra) in my spare time.
          </p>
          <blockquote className="border-l-2 border-blue-500/40 pl-4 pt-1">
            <p className="text-slate-500 text-xs italic">苔锁深门非避世，留盏昏灯候叩扉</p>
          </blockquote>
        </div>

        {/* 统计 */}
        <div className="grid grid-cols-3 gap-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.35 }}
              className="rounded-xl p-4 text-center"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <p
                className="text-2xl font-bold"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.num}
              </p>
              <p className="text-slate-400 text-xs mt-0.5">{s.label}</p>
              <p className="text-slate-600 text-xs">{s.labelEn}</p>
            </motion.div>
          ))}
        </div>

        {/* 信息卡片 */}
        <div className="grid grid-cols-2 gap-3">
          {cards.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.08 * i, duration: 0.35 }}
              className="rounded-xl p-4 transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <p className="text-slate-500 text-xs mb-1">
                {item.label} <span className="text-slate-700">/ {item.labelEn}</span>
              </p>
              <p className="text-slate-200 text-sm font-medium">{item.value}</p>
              <p className="text-slate-600 text-xs mt-0.5">{item.valueEn}</p>
            </motion.div>
          ))}
        </div>

        {/* 兴趣标签 */}
        <div>
          <p className="text-slate-500 text-xs mb-3">兴趣领域 / Interests</p>
          <div className="flex flex-wrap gap-2">
            {interests.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05 * i, duration: 0.3 }}
                className="px-3 py-1 rounded-full text-xs text-slate-300"
                style={{
                  background: "rgba(59,130,246,0.1)",
                  border: "1px solid rgba(59,130,246,0.2)",
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
