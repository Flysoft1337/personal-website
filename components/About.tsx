"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="gradient-text">关于我</span>
            </h2>
            <p className="text-slate-500 text-sm">About Me</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* 左侧文字 */}
            <div className="space-y-6">
              <p className="text-slate-300 leading-relaxed text-base">
                你好，我是 <span className="text-blue-400 font-medium">Flysoft</span>，一名全栈开发者，主要使用{" "}
                <span className="text-purple-400 font-medium">TypeScript</span> 进行前后端开发。
              </p>
              <p className="text-slate-400 leading-relaxed text-base">
                Hello, I&apos;m Flysoft — a full-stack developer who builds web applications with TypeScript.
                I also enjoy tinkering with Android kernels (KernelSU / SukiSU-Ultra).
              </p>
              <blockquote className="border-l-2 border-blue-500/50 pl-4">
                <p className="text-slate-500 text-sm italic">苔锁深门非避世，留盏昏灯候叩扉</p>
              </blockquote>

              {/* 统计数字 */}
              <div className="flex gap-8 pt-2">
                {[
                  { num: "9+", label: "仓库 / Repos" },
                  { num: "4+", label: "语言 / Languages" },
                  { num: "2022", label: "加入 / Since" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-bold gradient-text">{s.num}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 右侧卡片 */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "方向 / Focus", value: "全栈开发 · Full-Stack", icon: "⚡" },
                { label: "主语言 / Lang", value: "TypeScript · JS", icon: "💻" },
                { label: "爱好 / Hobby", value: "Android · 内核", icon: "📱" },
                { label: "网站 / Site", value: "flysoft.top", icon: "🌐" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="glass glass-hover rounded-xl p-4"
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
    </section>
  );
}
