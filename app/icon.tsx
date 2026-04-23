import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{
        width: 32, height: 32,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
        borderRadius: 8,
        color: "white",
        fontSize: 18,
        fontWeight: 800,
      }}>
        F
      </div>
    ),
    { ...size }
  );
}
