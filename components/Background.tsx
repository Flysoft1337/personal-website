"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Orb { id: number; x: number; y: number; size: number; color: string; duration: number; delay: number; }
interface Particle { id: number; x: number; y: number; size: number; duration: number; delay: number; }

export default function Background() {
  const [orbs, setOrbs] = useState<Orb[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const defs = [
      { color: "#3b82f6", x: 10,  y: 15,  size: 700 },
      { color: "#8b5cf6", x: 80,  y: 10,  size: 650 },
      { color: "#ec4899", x: 90,  y: 75,  size: 580 },
      { color: "#06b6d4", x: 5,   y: 80,  size: 620 },
      { color: "#6366f1", x: 50,  y: 45,  size: 500 },
      { color: "#f59e0b", x: 55,  y: 85,  size: 400 },
    ];
    setOrbs(defs.map((d, i) => ({
      id: i,
      x: d.x + (Math.random() - 0.5) * 8,
      y: d.y + (Math.random() - 0.5) * 8,
      size: d.size,
      color: d.color,
      duration: 11 + Math.random() * 7,
      delay: i * 0.8,
    })));
    setParticles(Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.8 + 0.5,
      duration: 7 + Math.random() * 9,
      delay: Math.random() * 5,
    })));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* 深色底 */}
      <div className="absolute inset-0" style={{ background: "#050810" }} />

      {/* 光球 */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: orb.size,
            height: orb.size,
            transform: "translate(-50%, -50%)",
            background: `radial-gradient(circle at 40% 40%, ${orb.color}70 0%, ${orb.color}30 35%, transparent 68%)`,
            filter: "blur(50px)",
            mixBlendMode: "screen",
          }}
          animate={{
            x: [0, 80, -60, 40, -20, 0],
            y: [0, -60, 80, -30, 50, 0],
            scale: [1, 1.25, 0.85, 1.15, 0.95, 1],
          }}
          transition={{ duration: orb.duration, delay: orb.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* 全局色调叠加，让颜色更鲜艳 */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 120% 80% at 50% 50%, transparent 30%, rgba(5,8,16,0.5) 100%)",
        }}
      />

      {/* 网格 */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* 粒子 */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, background: "rgba(200,210,255,0.5)" }}
          animate={{ y: [-14, 14, -14], opacity: [0.08, 0.5, 0.08] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
