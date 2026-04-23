"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const roles = [
  { zh: "全栈开发者", en: "Full-Stack Developer" },
  { zh: "Android 玩家", en: "Android Enthusiast" },
  { zh: "独立开发者", en: "Independent Maker" },
];

function ParticleField() {
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number; size: number; duration: number; delay: number }[]
  >([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 8 + 6,
        delay: Math.random() * 5,
      }))
    );
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-blue-400/20"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [-10, 10, -10], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden"
    >
      <ParticleField />

      {/* 背景光晕 */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* 头像 */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-1 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #3b82f6)",
                padding: "2px",
              }}
            />
            <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 blur-xl" />
            <Image
              src="https://avatars.githubusercontent.com/u/97880172?v=4"
              alt="Flysoft"
              width={130}
              height={130}
              className="relative rounded-full border-2 border-white/10 z-10"
            />
          </div>
        </motion.div>

        {/* 名字 */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="gradient-text">Flysoft</span>
        </motion.h1>

        {/* 角色切换动画 */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-14 flex flex-col items-center justify-center mb-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={roleIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <p className="text-slate-200 text-xl md:text-2xl font-medium">
                {roles[roleIndex].zh}
              </p>
              <p className="text-slate-500 text-sm mt-0.5">{roles[roleIndex].en}</p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* 座右铭 */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="glass rounded-2xl px-8 py-4 inline-block mb-10 max-w-lg"
        >
          <p className="text-slate-300 text-sm md:text-base italic">
            &ldquo;代码是思想的具体化，优雅的实现胜过暴力&rdquo;
          </p>
          <p className="text-slate-600 text-xs mt-1 italic">
            Elegance over brute force.
          </p>
        </motion.div>

        {/* 按钮 */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
          >
            查看项目 / Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full glass glass-hover text-slate-300 font-medium"
          >
            联系我 / Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
