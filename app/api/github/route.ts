import { NextResponse } from "next/server";

interface GithubEvent {
  type: string;
  repo: string;
  message: string;
  time: string;
}

export async function GET() {
  try {
    const res = await fetch(
      "https://api.github.com/users/Flysoft1337/events/public?per_page=10",
      { next: { revalidate: 300 } }
    );
    const data = await res.json();
    if (!Array.isArray(data)) return NextResponse.json({ events: [] });

    const events: GithubEvent[] = [];
    for (const e of data) {
      if (events.length >= 3) break;
      if (e.type === "PushEvent") {
        const commits = e.payload?.commits;
        if (commits?.length) {
          events.push({
            type: "push",
            repo: e.repo.name.replace("Flysoft1337/", ""),
            message: commits[commits.length - 1].message.split("\n")[0],
            time: e.created_at,
          });
        }
      } else if (e.type === "CreateEvent") {
        events.push({
          type: "create",
          repo: e.repo.name.replace("Flysoft1337/", ""),
          message: `创建了 ${e.payload.ref_type} ${e.payload.ref || ""}`.trim(),
          time: e.created_at,
        });
      } else if (e.type === "PullRequestEvent" && e.payload.action === "opened") {
        events.push({
          type: "pr",
          repo: e.repo.name.replace("Flysoft1337/", ""),
          message: e.payload.pull_request.title,
          time: e.created_at,
        });
      }
    }

    return NextResponse.json({ events });
  } catch {
    return NextResponse.json({ events: [] });
  }
}
