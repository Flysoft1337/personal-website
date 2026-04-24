"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface GithubEvent {
  type: string;
  repo: string;
  message: string;
  time: string;
}

export default function GithubActivity() {
  const [events, setEvents] = useState<GithubEvent[]>([]);

  useEffect(() => {
    fetch("/api/github")
      .then((r) => r.json())
      .then((data) => {
        if (data?.events?.length) setEvents(data.events);
      })
      .catch(() => {});
  }, []);

  if (events.length === 0) return null;

  return (
    <div>
      <p className="text-slate-600 text-xs mb-1.5">最近动态 / Activity</p>
      <div className="flex flex-col gap-1.5">
        {events.map((e, i) => (
          <motion.div
            key={`${e.repo}-${i}`}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.08 }}
            className="flex items-center gap-2 px-3 py-2 rounded-xl"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <span className="text-xs shrink-0" style={{ color: typeColor(e.type) }}>
              {typeIcon(e.type)}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-slate-300 text-xs truncate">{e.message}</p>
              <p className="text-slate-600 text-xs">{e.repo} · {timeAgo(e.time)}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function typeIcon(type: string) {
  switch (type) {
    case "push": return "⬆";
    case "pr": return "⇌";
    case "create": return "✦";
    default: return "●";
  }
}

function typeColor(type: string) {
  switch (type) {
    case "push": return "#3b82f6";
    case "pr": return "#8b5cf6";
    case "create": return "#10b981";
    default: return "#64748b";
  }
}

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}分钟前`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}小时前`;
  const days = Math.floor(hours / 24);
  return `${days}天前`;
}
