"use client";

import { motion, AnimatePresence } from "framer-motion";
import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import BlogSection from "./sections/BlogSection";
import ContactSection from "./sections/ContactSection";

const sectionMap: Record<string, React.ReactNode> = {
  home: <HomeSection />,
  about: <AboutSection />,
  skills: <SkillsSection />,
  projects: <ProjectsSection />,
  blog: <BlogSection />,
  contact: <ContactSection />,
};

interface Props {
  active: string;
}

export default function GlassWindow({ active }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-2xl mx-auto"
      style={{ height: "min(640px, 76vh)" }}
    >
      {/* 底层漫射光晕 */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: "-40px",
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(59,130,246,0.12) 0%, rgba(139,92,246,0.08) 50%, transparent 100%)",
          filter: "blur(20px)",
        }}
      />

      {/* 彩色渐变边框层 */}
      <div
        className="absolute rounded-3xl pointer-events-none"
        style={{
          inset: "-1px",
          background:
            "linear-gradient(135deg, rgba(59,130,246,0.5) 0%, rgba(139,92,246,0.4) 40%, rgba(59,130,246,0.1) 80%, rgba(139,92,246,0.3) 100%)",
          borderRadius: "25px",
          padding: "1px",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* 主玻璃面板 */}
      <div
        className="relative w-full h-full rounded-3xl overflow-hidden flex flex-col"
        style={{
          background:
            "linear-gradient(145deg, rgba(15,20,40,0.45) 0%, rgba(8,12,26,0.6) 50%, rgba(12,16,36,0.5) 100%)",
          backdropFilter: "blur(48px) saturate(180%)",
          WebkitBackdropFilter: "blur(48px) saturate(180%)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow:
            "0 40px 100px rgba(0,0,0,0.55), 0 0 0 0.5px rgba(255,255,255,0.05) inset, inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.25)",
        }}
      >
        {/* 顶部高光条 */}
        <div
          className="absolute top-0 left-12 right-12 h-px pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), rgba(255,255,255,0.08), transparent)",
          }}
        />

        {/* 左侧边缘内发光 */}
        <div
          className="absolute top-0 left-0 bottom-0 w-px pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(99,130,246,0.4) 0%, rgba(139,92,246,0.2) 50%, transparent 100%)",
          }}
        />

        {/* 右侧边缘内发光 */}
        <div
          className="absolute top-0 right-0 bottom-0 w-px pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(139,92,246,0.2) 50%, rgba(59,130,246,0.15) 100%)",
          }}
        />

        {/* 内容噪点质感叠加 */}
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
            backgroundSize: "128px",
          }}
        />

        {/* 内容区域 */}
        <div className="flex-1 overflow-hidden relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
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
