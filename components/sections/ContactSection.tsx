"use client";

import { motion } from "framer-motion";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="22 7 12 13 2 7" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

const contacts = [
  {
    icon: <MailIcon />,
    label: "Email",
    value: "Flysoft1337@gmail.com",
    href: "mailto:Flysoft1337@gmail.com",
    color: "#f87171",
  },
  {
    icon: <SendIcon />,
    label: "Telegram",
    value: "@Flysoft1337",
    href: "https://t.me/Flysoft1337",
    color: "#38bdf8",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    label: "GitHub",
    value: "Flysoft1337",
    href: "https://github.com/Flysoft1337",
    color: "#e2e8f0",
  },
];

export default function ContactSection() {
  return (
    <div className="h-full flex items-center justify-center px-8 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm"
      >
        <h2
          className="text-2xl font-bold mb-1"
          style={{
            background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          联系
        </h2>
        <p className="text-slate-500 text-xs mb-2">Contact</p>
        <p className="text-slate-400 text-sm mb-8">
          有任何想法或合作意向，欢迎联系。
          <br />
          <span className="text-slate-600 text-xs">Feel free to reach out anytime.</span>
        </p>

        <div className="space-y-3">
          {contacts.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.35 }}
              className="flex items-center gap-4 px-5 py-4 rounded-xl group transition-all duration-200 hover:-translate-y-1 relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `radial-gradient(circle at 0% 50%, ${item.color}12 0%, transparent 60%)` }} />
              <span className="relative w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110" style={{ background: `${item.color}15`, color: item.color }}>
                {item.icon}
              </span>
              <div className="flex-1 relative">
                <p className="text-slate-500 text-xs">{item.label}</p>
                <p className="text-slate-200 text-sm font-medium">{item.value}</p>
              </div>
              <span className="text-slate-700 group-hover:text-slate-400 transition-colors text-sm relative">→</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
