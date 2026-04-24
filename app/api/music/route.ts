import { NextResponse } from "next/server";

const UID = "1754951328";

interface Track {
  name: string;
  artist: string;
  cover: string;
  id: number;
}

export async function GET() {
  try {
    const res = await fetch(
      `https://music.163.com/api/v1/play/record?uid=${UID}&type=1`,
      { next: { revalidate: 300 } }
    );
    const data = await res.json();
    const weekData = data?.weekData || [];

    const tracks: Track[] = weekData.slice(0, 5).map((item: { song: { name: string; id: number; ar: { name: string }[]; al: { picUrl: string } } }) => {
      const song = item.song;
      return {
        name: song.name,
        artist: song.ar?.map((a: { name: string }) => a.name).join(" / ") || "未知",
        cover: (song.al?.picUrl || "").replace("http://", "https://"),
        id: song.id,
      };
    });

    return NextResponse.json({ tracks });
  } catch {
    return NextResponse.json({ tracks: [] });
  }
}
