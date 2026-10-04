import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.shortName} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg, #0b1120 55%, #064e3b 100%)",
          color: "#e6edf7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 40, fontWeight: 700, display: "flex" }}>
          {profile.initials}
          <span style={{ color: "#34d399" }}>.</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>{profile.shortName}</div>
          <div style={{ fontSize: 40, color: "#34d399", marginTop: 12 }}>{profile.role}</div>
          <div style={{ fontSize: 28, color: "#94a3b8", marginTop: 24 }}>
            {`React · TypeScript · VTEX IO · ${profile.location}`}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
