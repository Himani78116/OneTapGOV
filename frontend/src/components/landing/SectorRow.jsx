"use client";

import { useState } from "react";
import { SectorIcon } from "../ui/Icons";

export default function SectorRow({ sector, isLast }) {
  const [hovered, setHovered] = useState(false);

  const isActive = hovered;

  // ✅ Take only first 2 schemes
  const previewSchemes = (sector.schemes || []).slice(0, 2);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderBottom: isLast ? "none" : `1px solid ${hovered ? "var(--blue)" : "var(--border)"}`,
        borderLeft: isActive ? "3px solid var(--blue)" : "3px solid transparent",
        background: isActive ? "#F8FAFF" : "transparent",
        transition: "all 200ms ease",
      }}
    >
      {/* NON-CLICKABLE ROW */}
      <div
        style={{
          width: "100%",
          padding: "24px 20px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          textAlign: "left",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            background: isActive ? "#EFF6FF" : "var(--bg)",
            border: `1px solid ${isActive ? "#BFDBFE" : "var(--border)"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: isActive ? "var(--blue)" : "var(--teal)",
            flexShrink: 0,
            transition: "all 200ms ease",
          }}
        >
          <SectorIcon type={sector.id} size={24} />
        </div>

        {/* Text */}
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontSize: "17px",
              fontWeight: "600",
              color: isActive ? "var(--blue)" : "var(--navy)",
              transition: "color 200ms ease",
              marginBottom: "4px",
            }}
          >
            {sector.title}
          </p>

          {/* ✅ SHOW ONLY 2 + "and many more" */}
          <p
            style={{
              fontSize: "14px",
              color: "var(--text-muted)",
              lineHeight: "1.5",
            }}
          >
            {previewSchemes.join(", ")}
            {sector.schemes.length > 2 && " and many more"}
          </p>
        </div>
      </div>
    </div>
  );
}
