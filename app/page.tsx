"use client";

import { useState, useRef } from "react";
import Background from "@/components/Background";
import GlassWindow from "@/components/GlassWindow";
import Dock from "@/components/Dock";

const tabOrder = ["home", "about", "skills", "projects", "blog", "contact"];

export default function Home() {
  const [active, setActive] = useState("home");
  const [direction, setDirection] = useState(0);
  const prevIndex = useRef(0);

  const handleChange = (id: string) => {
    const newIndex = tabOrder.indexOf(id);
    setDirection(newIndex > prevIndex.current ? 1 : -1);
    prevIndex.current = newIndex;
    setActive(id);
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden">
      <Background />

      <div className="relative z-10 w-full px-6 flex flex-col items-center" style={{ paddingBottom: "100px" }}>
        <GlassWindow active={active} direction={direction} />
      </div>

      <Dock active={active} onChange={handleChange} />
    </div>
  );
}
