"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const roles = [
  { zh: "全栈开发者", en: "Full-Stack Developer" },
  { zh: "开源探索者", en: "Open Source Explorer" },
  { zh: "独立开发者", en: "Independent Maker" },
];

const stats = [
  { label: "仓库", value: "9+" },
  { label: "语言", value: "8+" },
  { label: "加入", value: "2022" },
  { label: "状态", value: "活跃" },
];

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function HomeSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [timezone, setTimezone] = useState("");
  const reduced = useReducedMotion();

  useEffect(() => {
    const t = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2800);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimezone(tz.replace(/_/g, " "));
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
      setDate(now.toLocaleDateString([], { month: "short", day: "numeric", weekday: "short" }));
    };
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="h-full flex flex-col px-5 py-5 gap-4 overflow-y-auto scrollbar-hidden">

      {/* 顶部栏 */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between shrink-0"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-slate-400 text-xs">在线 / Online</span>
        </div>
        {time && (
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <span className="text-slate-500 text-xs hidden sm:block">{date}</span>
            <span className="text-slate-200 text-xs font-mono tracking-widest">{time}</span>
            <span className="text-slate-600 text-xs hidden md:block">{timezone}</span>
          </div>
        )}
      </motion.div>

      {/* 主体：移动端垂直堆叠 / 桌面端左右分列 */}
      <div className="flex flex-col md:flex-row gap-5 flex-1 min-h-0">

        {/* 左列 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-row md:flex-col items-center md:justify-center gap-4 md:w-44 shrink-0"
        >
          {/* 头像 */}
          <div className="relative shrink-0">
            <motion.div
              animate={reduced ? {} : { rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-1.5 rounded-full opacity-60"
              style={{ background: "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)", borderRadius: "50%" }}
            />
            <div className="absolute -inset-3 rounded-full bg-blue-500/10 blur-xl" />
            <Image
              src="https://avatars.githubusercontent.com/u/97880172?v=4"
              alt="Flysoft"
              width={80}
              height={80}
              className="relative rounded-full border border-white/10 z-10 md:!w-[100px] md:!h-[100px]"
            />
          </div>

          {/* 名字 + 角色 */}
          <div className="text-left md:text-center flex-1 md:flex-none">
            <h1
              className="text-2xl md:text-3xl font-bold"
              style={{
                background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Flysoft
            </h1>
            <div className="h-9 flex items-center md:justify-center mt-0.5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-slate-300 text-xs font-medium">{roles[roleIndex].zh}</p>
                  <p className="text-slate-600 text-xs mt-0.5">{roles[roleIndex].en}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* 按钮 */}
          <div className="flex flex-row md:flex-col gap-2 md:w-full">
            <a
              href="https://github.com/Flysoft1337"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-white transition-all hover:scale-105 hover:brightness-110"
              style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", boxShadow: "0 4px 16px rgba(59,130,246,0.3)" }}
            >
              <GithubIcon /> GitHub
            </a>
            <a
              href="mailto:Flysoft1337@gmail.com"
              className="flex items-center justify-center px-3 py-2 rounded-xl text-xs font-medium text-slate-300 transition-all hover:scale-105 hover:text-white"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}
            >
              联系我
            </a>
          </div>
        </motion.div>

        {/* 右列 */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col gap-3 flex-1 min-w-0 justify-center"
        >
          {/* 座右铭 */}
          <div
            className="rounded-2xl px-5 py-4"
            style={{ background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.15)" }}
          >
            <p className="text-slate-300 text-sm italic leading-relaxed">
              &ldquo;代码是思想的具体化，优雅的实现胜过暴力&rdquo;
            </p>
            <p className="text-slate-600 text-xs mt-1 italic">Elegance over brute force.</p>
          </div>

          {/* 简介 */}
          <div
            className="rounded-2xl px-5 py-4"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p className="text-slate-300 text-xs leading-relaxed">
              写 <span className="text-blue-400">TypeScript</span>，做全栈，偶尔钻进内核里折腾。
              喜欢把一个想法从零跑起来，从数据库到界面，自己说了算。
            </p>
            <p className="text-slate-600 text-xs leading-relaxed mt-2">
              TypeScript full-stack dev. I build things end-to-end and occasionally hack Android kernels for fun.
            </p>
          </div>

          {/* 统计 */}
          <div className="grid grid-cols-4 gap-2">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.06 }}
                className="rounded-xl py-3 text-center"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <p
                  className="text-lg font-bold"
                  style={{
                    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {s.value}
                </p>
                <p className="text-slate-500 text-xs mt-0.5">{s.label}</p>
              </motion.div>
            ))}
          </div>

          {/* 技术栈 */}
          <div>
            <p className="text-slate-600 text-xs mb-2">技术栈 / Stack</p>
            <div className="flex flex-wrap gap-1.5">
              {["TypeScript", "Next.js", "React", "Node.js", "Kotlin", "Dart", "PHP", "Python", "Linux", "Shell", "GitHub Actions", "Vercel"].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.04 }}
                  className="px-2.5 py-1 rounded-lg text-xs text-slate-300"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>

          {/* 最近项目 */}
          <div>
            <p className="text-slate-600 text-xs mb-2">最近项目 / Recent Projects</p>
            <div className="flex flex-col gap-1.5">
              {[
                { name: "RoamHub", desc: "独立产品 · Kotlin + JS", href: "https://github.com/Flysoft1337/RoamHub_Feedback" },
                { name: "Smart Repair", desc: "全栈系统 · TypeScript", href: "https://github.com/Flysoft1337/smart-repair-frontend" },
              ].map((p, i) => (
                <motion.a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-center justify-between px-3 py-2 rounded-xl group transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div>
                    <p className="text-slate-200 text-xs font-medium">{p.name}</p>
                    <p className="text-slate-600 text-xs">{p.desc}</p>
                  </div>
                  <span className="text-slate-700 group-hover:text-slate-400 transition-colors text-xs">→</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* 诗句 */}
          <div className="pt-1 border-t border-white/5">
            <p className="text-slate-600 text-xs italic">苔锁深门非避世，留盏昏灯候叩扉</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
