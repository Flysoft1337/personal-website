"use client";

import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://hits.sh/flysoft.top.json")
      .then((r) => r.json())
      .then((data) => {
        if (data?.total) setCount(data.total.toString());
      })
      .catch(() => {});
  }, []);

  if (!count) return null;

  return (
    <div className="flex items-center gap-1.5 text-slate-600 text-xs">
      <span className="w-1 h-1 rounded-full bg-slate-600" />
      <span>访问 {count}</span>
    </div>
  );
}
