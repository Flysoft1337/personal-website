"use client";

import { motion } from "framer-motion";

const cards = [
  { label: "方向 / Focus", value: "全栈开发 · Full-Stack", icon: "⚡" },
  { label: "主语言 / Lang", value: "TypeScript · JS", icon: "💻" },
  { label: "爱好 / Hobby", value: "Android · 内核", icon: "📱" },
  { label: "网站 / Site", value: "flysoft.top", icon: "🌐" },
];

const stats = [
  { num: "9+", label: "仓库 / Repos" },
  { num: "8+", label: "语言 / Languages" },
  { num: "2022", label: "加入 / Since" },
];

export default function AboutSection() {
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
          关于我
        </h2>
        <p className="text-slate-500 text-xs mb-8">About Me</p>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-5">
            <p className="text-slate-300 leading-relaxed text-sm">
              你好，我是{" "}
              <span className="text-blue-400 font-medium">Flysoft</span>，一名全栈开发者，主要使用{" "}
              <span className="text-purple-400 font-medium">TypeScript</span> 进行前后端开发。
            </p>
            <p className="text-slate-400 leading-relaxed text-sm">
              Hello, I&apos;m Flysoft — a full-stack developer who builds web applications
              with TypeScript. I also enjoy tinkering with Android kernels (KernelSU / SukiSU-Ultra).
            </p>
            <blockquote className="border-l-2 border-blue-500/40 pl-4">
              <p className="text-slate-500 text-sm italic">苔锁深门非避世，留盏昏灯候叩扉</p>
            </blockquote>

            <div className="flex gap-6 pt-2">
              {stats.map((s) => (
                <div key={s.label}>
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
                  <p className="text-slate-500 text-xs mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {cards.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * i, duration: 0.35 }}
                className="rounded-xl p-4 transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <span className="text-xl mb-2 block">{item.icon}</span>
                <p className="text-slate-500 text-xs mb-1">{item.label}</p>
                <p className="text-slate-200 text-sm font-medium">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
