"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Orb {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function Background() {
  const [orbs, setOrbs] = useState<Orb[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = [
      "radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 65%)",
      "radial-gradient(circle, rgba(139,92,246,0.30) 0%, transparent 65%)",
      "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 65%)",
      "radial-gradient(circle, rgba(16,185,129,0.18) 0%, transparent 65%)",
      "radial-gradient(circle, rgba(236,72,153,0.18) 0%, transparent 65%)",
    ];
    setOrbs(
      Array.from({ length: 6 }, (_, i) => ({
        id: i,
        x: 5 + Math.random() * 90,
        y: 5 + Math.random() * 90,
        size: 500 + Math.random() * 400,
        color: colors[i % colors.length],
        duration: 9 + Math.random() * 7,
        delay: Math.random() * 4,
      }))
    );
    setParticles(
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5,
        duration: 8 + Math.random() * 8,
        delay: Math.random() * 6,
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* 深色底 */}
      <div className="absolute inset-0 bg-[#070b14]" />

      {/* 网格 */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

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
            background: orb.color,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            x: [0, 60, -40, 20, 0],
            y: [0, -40, 60, -20, 0],
            scale: [1, 1.15, 0.9, 1.1, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 粒子 */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-blue-300/25"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [-12, 12, -12], opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
