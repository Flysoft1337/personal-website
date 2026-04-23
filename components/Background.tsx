"use client";

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
      delay: -(i * 3),
    })));
    setParticles(Array.from({ length: reduced ? 0 : 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      duration: 10 + Math.random() * 8,
      delay: -(Math.random() * 5),
    })));
  }, [reduced]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0" style={{ background: "#050810" }} />

      {/* 光球 — 纯 CSS 动画 */}
      {orbs.map((orb, i) => (
        <div
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
            animation: reduced ? "none" : `orb-${i} ${orb.duration}s ${orb.delay}s ease-in-out infinite`,
            willChange: "transform",
          }}
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

      {/* 粒子 — 纯 CSS 动画 */}
      {!reduced && particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: "rgba(200,210,255,0.4)",
            animation: `particle ${p.duration}s ${p.delay}s ease-in-out infinite`,
            willChange: "transform, opacity",
          }}
        />
      ))}

      {/* CSS keyframes */}
      <style>{`
        @keyframes orb-0 {
          0%, 100% { transform: translate(-50%, -50%) translate(0px, 0px); }
          25%       { transform: translate(-50%, -50%) translate(60px, -40px); }
          50%       { transform: translate(-50%, -50%) translate(-40px, 60px); }
          75%       { transform: translate(-50%, -50%) translate(20px, -20px); }
        }
        @keyframes orb-1 {
          0%, 100% { transform: translate(-50%, -50%) translate(0px, 0px); }
          25%       { transform: translate(-50%, -50%) translate(-50px, 50px); }
          50%       { transform: translate(-50%, -50%) translate(60px, -30px); }
          75%       { transform: translate(-50%, -50%) translate(-20px, 40px); }
        }
        @keyframes orb-2 {
          0%, 100% { transform: translate(-50%, -50%) translate(0px, 0px); }
          25%       { transform: translate(-50%, -50%) translate(-60px, -40px); }
          50%       { transform: translate(-50%, -50%) translate(40px, 50px); }
          75%       { transform: translate(-50%, -50%) translate(30px, -50px); }
        }
        @keyframes orb-3 {
          0%, 100% { transform: translate(-50%, -50%) translate(0px, 0px); }
          25%       { transform: translate(-50%, -50%) translate(50px, -60px); }
          50%       { transform: translate(-50%, -50%) translate(-30px, -40px); }
          75%       { transform: translate(-50%, -50%) translate(60px, 30px); }
        }
        @keyframes particle {
          0%, 100% { transform: translateY(-12px); opacity: 0.06; }
          50%       { transform: translateY(12px);  opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}
