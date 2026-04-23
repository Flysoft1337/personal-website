"use client";

import { motion, AnimatePresence } from "framer-motion";
import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import BlogSection from "./sections/BlogSection";
import ContactSection from "./sections/ContactSection";

const sectionMap: Record<string, React.ReactNode> = {
  home:     <HomeSection />,
  about:    <AboutSection />,
  skills:   <SkillsSection />,
  projects: <ProjectsSection />,
  blog:     <BlogSection />,
  contact:  <ContactSection />,
};

interface Props { active: string; }

export default function GlassWindow({ active }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.93, y: 28 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-5xl mx-auto"
      style={{ height: "min(640px, 76vh)" }}
    >
      {/* 外层漫射光晕 */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ inset: "-80px", borderRadius: "50%" }}
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div style={{
          width: "100%", height: "100%",
          background: "radial-gradient(ellipse 80% 60% at 35% 40%, rgba(59,130,246,0.25) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 70% 65%, rgba(139,92,246,0.22) 0%, transparent 55%)",
          filter: "blur(8px)",
        }} />
      </motion.div>

      {/* 渐变边框 */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ inset: 0, borderRadius: "24px", padding: "1px",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor", maskComposite: "exclude",
        }}
        animate={{
          background: [
            "linear-gradient(135deg, rgba(99,130,246,0.7), rgba(139,92,246,0.5), rgba(236,72,153,0.3), rgba(59,130,246,0.4))",
            "linear-gradient(225deg, rgba(139,92,246,0.7), rgba(236,72,153,0.5), rgba(59,130,246,0.4), rgba(99,130,246,0.3))",
            "linear-gradient(315deg, rgba(59,130,246,0.6), rgba(99,130,246,0.7), rgba(139,92,246,0.4), rgba(236,72,153,0.35))",
            "linear-gradient(135deg, rgba(99,130,246,0.7), rgba(139,92,246,0.5), rgba(236,72,153,0.3), rgba(59,130,246,0.4))",
          ],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      {/* 主玻璃面板 */}
      <div
        className="relative w-full h-full overflow-hidden flex flex-col"
        style={{
          borderRadius: "24px",
          background: "rgba(8, 12, 28, 0.18)",
          backdropFilter: "blur(48px) saturate(220%) brightness(1.05)",
          WebkitBackdropFilter: "blur(48px) saturate(220%) brightness(1.05)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 40px 80px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,0,0.15)",
        }}
      >
        {/* 顶部高光条 */}
        <div
          className="absolute top-0 left-20 right-20 h-px pointer-events-none z-20"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), rgba(255,255,255,0.15), transparent)" }}
        />

        {/* 扫光动画 */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-20"
          style={{ borderRadius: "24px", overflow: "hidden" }}
          initial={false}
        >
          <motion.div
            style={{
              position: "absolute", top: 0, bottom: 0, width: "30%",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)",
              transform: "skewX(-15deg)",
            }}
            animate={{ left: ["-30%", "130%"] }}
            transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
          />
        </motion.div>

        {/* 内部彩色折射层 */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: "linear-gradient(135deg, rgba(59,130,246,0.06) 0%, transparent 40%, rgba(139,92,246,0.05) 70%, transparent 100%)",
            borderRadius: "24px",
          }}
        />

        {/* 左边缘发光 */}
        <div className="absolute top-6 left-0 bottom-6 w-px pointer-events-none z-10"
          style={{ background: "linear-gradient(180deg, transparent, rgba(99,130,246,0.6), rgba(139,92,246,0.3), transparent)" }} />

        {/* 右边缘发光 */}
        <div className="absolute top-6 right-0 bottom-6 w-px pointer-events-none z-10"
          style={{ background: "linear-gradient(180deg, transparent, rgba(139,92,246,0.5), rgba(59,130,246,0.3), transparent)" }} />

        {/* 底部边缘微光 */}
        <div className="absolute bottom-0 left-12 right-12 h-px pointer-events-none z-10"
          style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.2), transparent)" }} />

        {/* 内容 */}
        <div className="flex-1 overflow-hidden relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {sectionMap[active]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
