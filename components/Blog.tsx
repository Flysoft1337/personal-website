"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen } from "lucide-react";

const posts = [
  {
    title: "敬请期待 / Coming Soon",
    titleEn: "Stay tuned for upcoming articles",
    date: "2026",
    tag: "即将发布",
    tagEn: "Upcoming",
  },
];

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="gradient-text">博客</span>
            </h2>
            <p className="text-slate-500 text-sm">Blog</p>
          </div>

          <div className="max-w-2xl mx-auto">
            {posts.map((post, i) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-8 text-center"
              >
                <BookOpen size={40} className="mx-auto mb-4 text-slate-600" />
                <h3 className="text-slate-300 font-medium text-lg mb-1">{post.title}</h3>
                <p className="text-slate-500 text-sm">{post.titleEn}</p>
                <span className="mt-4 inline-block text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {post.tag} / {post.tagEn}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
