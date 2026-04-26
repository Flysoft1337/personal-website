"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Track {
  name: string;
  artist: string;
  cover: string;
  id: number;
}

export default function MusicStatus() {
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    fetch("/api/music")
      .then((r) => r.json())
      .then((data) => {
        if (data?.tracks?.length) setTracks(data.tracks);
      })
      .catch(() => {});
  }, []);

  if (tracks.length === 0) return null;

  return (
    <div>
      <p className="text-slate-600 text-xs mb-2 flex items-center gap-1.5">
        <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        最近常听 / Recently Played
      </p>
      <div className="flex flex-col gap-1.5">
        {tracks.map((track, i) => (
          <motion.a
            key={track.id}
            href={`https://music.163.com/song?id=${track.id}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.08 }}
            className="flex items-center gap-3 px-3 py-2 rounded-xl group transition-all duration-200 hover:-translate-y-0.5 relative overflow-hidden"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "radial-gradient(circle at 0% 50%, rgba(34,197,94,0.08) 0%, transparent 60%)" }} />
            {track.cover && (
              <img
                src={`${track.cover}?param=40y40`}
                alt={track.name}
                className="w-8 h-8 rounded-lg shrink-0 relative"
              />
            )}
            <div className="flex-1 min-w-0 relative">
              <p className="text-slate-300 text-xs truncate">{track.name}</p>
              <p className="text-slate-600 text-xs truncate">{track.artist}</p>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" className="text-slate-700 group-hover:text-green-400 transition-colors shrink-0 relative">
              <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
            </svg>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
