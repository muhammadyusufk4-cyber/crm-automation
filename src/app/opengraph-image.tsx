import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "SummitOps — CRM Automation, AI Agents & Revenue Operations";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #05070d 0%, #0a0e1a 60%, #12163a 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 40,
            fontWeight: 600,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg, #3b6bff, #8b5cf6)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            S
          </div>
          SummitOps
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 56,
            fontWeight: 600,
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.15,
          }}
        >
          Automate Your CRM. Close More Deals.
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 26,
            color: "rgba(255,255,255,0.6)",
            textAlign: "center",
            maxWidth: 780,
          }}
        >
          CRM Automation · AI Agents · RevOps Consulting
        </div>
      </div>
    ),
    { ...size },
  );
}
