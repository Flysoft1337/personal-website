"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Orb { id: number; x: number; y: number; size: number; color: string; duration: number; delay: number; }
interface Particle { id: number; x: number; y: number; size: number; duration: number; delay: number; }

export default function Background() {
  const [orbs, setOrbs] = useState<Orb[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const reduced = useReducedMotion();

  useEffect(() => {
    const defs = [
      { color: "#3b82f6", x: 10, y: 15, size: 600 },
      { color: "#8b5cf6", x: 80, y: 10, size: 560 },
      { color: "#ec4899", x: 88, y: 78, size: 500 },
      { color: "#06b6d4", x: 5,  y: 80, size: 520 },
    ];
    setOrbs(defs.map((d, i) => ({
      id: i,
      x: d.x + (Math.random() - 0.5) * 8,
      y: d.y + (Math.random() - 0.5) * 8,
      size: d.size,
      color: d.color,
      duration: 14 + Math.random() * 8,
      delay: i * 1.2,
    })));
    setParticles(Array.from({ length: reduced ? 0 : 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      duration: 10 + Math.random() * 8,
      delay: Math.random() * 5,
    })));
  }, [reduced]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ willChange: "transform" }}>
      <div className="absolute inset-0" style={{ background: "#050810" }} />

      {/* 光球 — 去掉 mixBlendMode，改用透明度叠加，减少 GPU 合成层 */}
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
            background: `radial-gradient(circle at 40% 40%, ${orb.color}50 0%, ${orb.color}20 40%, transparent 70%)`,
            filter: "blur(60px)",
            willChange: "transform",
          }}
          animate={reduced ? {} : {
            x: [0, 60, -40, 20, 0],
            y: [0, -40, 60, -20, 0],
          }}
          transition={{ duration: orb.duration, delay: orb.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 120% 80% at 50% 50%, transparent 30%, rgba(5,8,16,0.5) 100%)" }}
      />

      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {!reduced && particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, background: "rgba(200,210,255,0.4)", willChange: "transform, opacity" }}
          animate={{ y: [-12, 12, -12], opacity: [0.06, 0.4, 0.06] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
