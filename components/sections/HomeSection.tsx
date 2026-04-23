"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const roles = [
  { zh: "全栈开发者", en: "Full-Stack Developer" },
  { zh: "开源探索者", en: "Open Source Explorer" },
  { zh: "独立开发者", en: "Independent Maker" },
];

export default function HomeSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8 py-12">
      {/* 头像 */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-7 relative"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-1.5 rounded-full opacity-70"
          style={{
            background: "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #3b82f6)",
            padding: "2px",
            borderRadius: "50%",
          }}
        />
        <div className="absolute -inset-4 rounded-full bg-blue-500/15 blur-2xl" />
        <Image
          src="https://avatars.githubusercontent.com/u/97880172?v=4"
          alt="Flysoft"
          width={120}
          height={120}
          className="relative rounded-full border-2 border-white/10 z-10"
        />
      </motion.div>

      {/* 名字 */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="text-5xl md:text-6xl font-bold mb-5"
        style={{
          background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Flysoft
      </motion.h1>

      {/* 角色切换 */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="h-14 flex flex-col items-center justify-center mb-7"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={roleIndex}
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -16, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="text-center"
          >
            <p className="text-slate-200 text-xl font-medium">{roles[roleIndex].zh}</p>
            <p className="text-slate-500 text-sm mt-0.5">{roles[roleIndex].en}</p>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* 座右铭 */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="max-w-md mb-9 px-6 py-4 rounded-2xl"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <p className="text-slate-300 text-sm italic">
          &ldquo;代码是思想的具体化，优雅的实现胜过暴力&rdquo;
        </p>
        <p className="text-slate-600 text-xs mt-1 italic">Elegance over brute force.</p>
      </motion.div>

      {/* 链接 */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.5 }}
        className="flex gap-3"
      >
        <a
          href="https://github.com/Flysoft1337"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-all hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
            boxShadow: "0 4px 20px rgba(59,130,246,0.3)",
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </a>
        <a
          href="mailto:Flysoft1337@gmail.com"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-slate-300 transition-all hover:scale-105 hover:text-white"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          联系我 / Contact
        </a>
      </motion.div>
    </div>
  );
}
