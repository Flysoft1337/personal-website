"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function BlogSection() {
  return (
    <div className="h-full flex items-center justify-center px-8 py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-sm"
      >
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
          style={{
            background: "rgba(59,130,246,0.1)",
            border: "1px solid rgba(59,130,246,0.2)",
          }}
        >
          <BookOpen size={28} className="text-blue-400" />
        </div>
        <h2
          className="text-2xl font-bold mb-2"
          style={{
            background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          博客
        </h2>
        <p className="text-slate-500 text-sm mb-4">Blog</p>
        <p className="text-slate-500 text-sm leading-relaxed">
          文章正在撰写中，敬请期待。
          <br />
          <span className="text-slate-600 text-xs">Articles coming soon. Stay tuned.</span>
        </p>
        <div
          className="mt-6 inline-block px-4 py-1.5 rounded-full text-xs"
          style={{
            background: "rgba(59,130,246,0.1)",
            border: "1px solid rgba(59,130,246,0.2)",
            color: "#93c5fd",
          }}
        >
          即将发布 / Coming Soon
        </div>
      </motion.div>
    </div>
  );
}
