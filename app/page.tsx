"use client";

import { useState } from "react";
import Background from "@/components/Background";
import GlassWindow from "@/components/GlassWindow";
import Dock from "@/components/Dock";

export default function Home() {
  const [active, setActive] = useState("home");

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
