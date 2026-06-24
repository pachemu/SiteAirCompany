import type { ReactElement } from "react";

import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE } from "@/shared/config/site";

export function SeoImageTemplate(): ReactElement {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px",
        background:
          "linear-gradient(135deg, #0f172a 0%, #0ea5e9 48%, #e2e8f0 100%)",
        color: "#ffffff",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div
          style={{
            display: "flex",
            height: "88px",
            width: "88px",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "24px",
            background: "rgba(255,255,255,0.14)",
            border: "1px solid rgba(255,255,255,0.2)",
            fontSize: "34px",
            fontWeight: 800,
          }}
        >
          IK
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div style={{ fontSize: "28px", opacity: 0.82 }}>Климатическая техника</div>
          <div style={{ fontSize: "42px", fontWeight: 800 }}>{SITE_NAME}</div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          maxWidth: "980px",
        }}
      >
        <div style={{ fontSize: "68px", lineHeight: 1.05, fontWeight: 800 }}>
          {SITE_TITLE}
        </div>
        <div
          style={{
            fontSize: "30px",
            lineHeight: 1.35,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          {SITE_DESCRIPTION}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "18px",
          fontSize: "24px",
          color: "rgba(255,255,255,0.86)",
        }}
      >
        <div>Симферополь</div>
        <div>Крым</div>
        <div>Монтаж и установка</div>
        <div>Гарантия</div>
      </div>
    </div>
  );
}
