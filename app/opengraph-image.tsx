import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Flysoft — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #050810 0%, #0a1128 50%, #05080f 100%)",
          position: "relative",
        }}
      >
        {/* 背景光球 */}
        <div style={{
          position: "absolute", width: 600, height: 600,
          borderRadius: "50%", left: -100, top: -100,
          background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)",
          filter: "blur(40px)",
          display: "flex",
        }} />
        <div style={{
          position: "absolute", width: 500, height: 500,
          borderRadius: "50%", right: -80, bottom: -80,
          background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)",
          filter: "blur(40px)",
          display: "flex",
        }} />

        {/* 玻璃卡片 */}
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center",
          padding: "60px 80px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 32,
          backdropFilter: "blur(20px)",
        }}>
          {/* 头像 */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://avatars.githubusercontent.com/u/97880172?v=4"
            alt="Flysoft"
            width={100}
            height={100}
            style={{ borderRadius: "50%", border: "2px solid rgba(255,255,255,0.15)", marginBottom: 28 }}
          />

          {/* 名字 */}
          <div style={{
            fontSize: 72, fontWeight: 800, marginBottom: 16,
            background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
            backgroundClip: "text",
            color: "transparent",
            display: "flex",
          }}>
            Flysoft
          </div>

          {/* 副标题 */}
          <div style={{ fontSize: 28, color: "rgba(148,163,184,0.9)", marginBottom: 32, display: "flex" }}>
            Full-Stack Developer · TypeScript · Open Source
          </div>

          {/* 标签 */}
          <div style={{ display: "flex", gap: 12 }}>
            {["TypeScript", "Next.js", "React", "Node.js"].map((tag) => (
              <div key={tag} style={{
                padding: "8px 20px", borderRadius: 99,
                background: "rgba(59,130,246,0.15)",
                border: "1px solid rgba(59,130,246,0.3)",
                color: "#93c5fd", fontSize: 20,
                display: "flex",
              }}>
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* 底部域名 */}
        <div style={{
          position: "absolute", bottom: 36,
          color: "rgba(100,116,139,0.8)", fontSize: 22,
          display: "flex",
        }}>
          flysoft.top
        </div>
      </div>
    ),
    { ...size }
  );
}
