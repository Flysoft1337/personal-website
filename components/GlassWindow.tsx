"use client";

import { memo, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const HomeSection = lazy(() => import("./sections/HomeSection"));
const AboutSection = lazy(() => import("./sections/AboutSection"));
const SkillsSection = lazy(() => import("./sections/SkillsSection"));
const ProjectsSection = lazy(() => import("./sections/ProjectsSection"));
const BlogSection = lazy(() => import("./sections/BlogSection"));
const ContactSection = lazy(() => import("./sections/ContactSection"));

const sectionComponents: Record<string, React.LazyExoticComponent<() => React.JSX.Element>> = {
  home: HomeSection,
  about: AboutSection,
  skills: SkillsSection,
  projects: ProjectsSection,
  blog: BlogSection,
  contact: ContactSection,
};

interface Props { active: string; }

function GlassWindow({ active }: Props) {
  const reduced = useReducedMotion();
  const ActiveComponent = sectionComponents[active];

  return (
    <motion.div
      initial={{ opacity: 0, scale: reduced ? 1 : 0.93, y: reduced ? 0 : 28 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: reduced ? 0.2 : 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-5xl mx-auto"
      style={{ height: "min(640px, 76vh)" }}
    >
      {/* 外层静态光晕 */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: 0,
          borderRadius: "24px",
          background: "radial-gradient(ellipse 80% 60% at 35% 40%, rgba(59,130,246,0.18) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 70% 65%, rgba(139,92,246,0.15) 0%, transparent 55%)",
          filter: "blur(8px)",
        }}
      />

      {/* 主玻璃面板 */}
      <div
        className="relative w-full h-full overflow-hidden flex flex-col"
        style={{
          borderRadius: "24px",
          background: "rgba(8, 12, 28, 0.22)",
          backdropFilter: "blur(16px) saturate(160%)",
          WebkitBackdropFilter: "blur(16px) saturate(160%)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 40px 80px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,0,0.15)",
          contain: "layout style paint",
        }}
      >
        {/* 顶部高光条 */}
        <div
          className="absolute top-0 left-20 right-20 h-px pointer-events-none z-20"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), rgba(255,255,255,0.15), transparent)" }}
        />

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
          style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.08), transparent)" }} />

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
              <Suspense fallback={null}>
                <ActiveComponent />
              </Suspense>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default memo(GlassWindow);
