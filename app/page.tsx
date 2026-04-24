"use client";

import { useState, useEffect } from "react";
import Background from "@/components/Background";
import GlassWindow from "@/components/GlassWindow";
import Dock from "@/components/Dock";

const tabs = ["home", "about", "skills", "projects", "blog", "contact"];

export default function Home() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const n = parseInt(e.key);
      if (n >= 1 && n <= 6) {
        setActive(tabs[n - 1]);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden">
      <Background />

      <div className="relative z-10 w-full px-6 flex flex-col items-center" style={{ paddingBottom: "100px" }}>
        <GlassWindow active={active} />
      </div>

      <Dock active={active} onChange={setActive} />
    </div>
  );
}
