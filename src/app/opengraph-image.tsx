import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

// The preview card LinkedIn / WhatsApp / X show when you share the link.
export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between",
          background: "#F6F6F1", color: "#15172B", padding: 72, border: "16px solid #15172B",
        }}
      >
        <div style={{ display: "flex", alignSelf: "flex-start", padding: "10px 24px", borderRadius: 999, background: "#FF8A3D", border: "4px solid #15172B", fontSize: 30, fontWeight: 800 }}>
          {profile.role}
        </div>
        <div style={{ display: "flex", fontSize: 150, fontWeight: 900, color: "#2F45C9", letterSpacing: -6, lineHeight: 1 }}>
          {profile.firstName}
          <span style={{ color: "#FF8A3D" }}>.</span>
        </div>
        <div style={{ display: "flex", fontSize: 40, fontWeight: 600 }}>UI → API → Database. Come take the road trip.</div>
      </div>
    ),
    size,
  );
}
