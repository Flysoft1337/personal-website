"use client";

import { motion } from "framer-motion";

function HomeIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>;
}
function AboutIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>;
}
function SkillsIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
}
function ProjectsIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>;
}
function BlogIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>;
}
function ContactIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22 6 12 13 2 6"/></svg>;
}

const tabs = [
  { id: "home",     label: "首页", Icon: HomeIcon },
  { id: "about",    label: "关于", Icon: AboutIcon },
  { id: "skills",   label: "技能", Icon: SkillsIcon },
  { id: "projects", label: "项目", Icon: ProjectsIcon },
  { id: "blog",     label: "博客", Icon: BlogIcon },
  { id: "contact",  label: "联系", Icon: ContactIcon },
];

interface Props {
  active: string;
  onChange: (id: string) => void;
}

export default function Dock({ active, onChange }: Props) {
  return (
    <motion.div
      initial={{ y: 120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
      className="fixed bottom-7 left-1/2 -translate-x-1/2 z-50"
    >
      <div
        className="flex items-center gap-0.5 px-2 py-2 rounded-2xl"
        style={{
          background: "rgba(5, 8, 20, 0.35)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.2)",
        }}
      >
        {tabs.map(({ id, label, Icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => onChange(id)}
              title={label}
              className="relative flex flex-col items-center justify-center w-14 h-12 rounded-xl outline-none transition-all duration-200 hover:scale-105 active:scale-95"
              style={{ color: isActive ? "#fff" : "rgba(148,163,184,0.7)" }}
            >
              {isActive && (
                <motion.div
                  layoutId="dock-pill"
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(59,130,246,0.4), rgba(139,92,246,0.3))",
                    border: "1px solid rgba(99,130,246,0.35)",
                    boxShadow: "0 0 20px rgba(59,130,246,0.25), inset 0 1px 0 rgba(255,255,255,0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 450, damping: 32 }}
                />
              )}
              {!isActive && (
                <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-200" style={{ background: "rgba(255,255,255,0.06)" }} />
              )}
              <span className="relative z-10 mb-0.5"><Icon /></span>
              <span className="relative z-10 text-[10px] leading-none font-medium tracking-wide whitespace-nowrap">
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
