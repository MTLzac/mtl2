import React, { useRef, useEffect, useState } from "react";
import comparisonImage from "@/assets/repairs/controller-stick-drift-comparison.png";

/**
 * Stick-drift comparison image with a continuously looping
 * drift animation on the LEFT panel only. The RIGHT panel
 * stays completely static to emphasise the contrast.
 *
 * Animation auto-plays when the element enters the viewport
 * (works on mobile without hover). Pauses when off-screen.
 */
export const StickDriftComparison: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Intersection Observer — start/stop loop when in viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative select-none ${className}`}
      role="img"
      aria-label="Before and after comparison of controller stick drift repair. The left panel animates to show stick drift; the right panel remains stable."
    >
      {/* Base image */}
      <img
        src={comparisonImage}
        alt="Controller stick drift comparison — before showing unintended movement, after showing repaired controller"
        className="w-full h-auto rounded-xl"
        draggable={false}
      />

      {/* ═══════════════════════════════════════════
          LEFT PANEL — looping drift overlays
          ═══════════════════════════════════════════ */}

      {/* Drift arrows — slow continuous rotation */}
      <svg
        className="absolute pointer-events-none"
        style={{
          top: "52%",
          left: "14.5%",
          width: "8%",
          height: "auto",
          aspectRatio: "1",
          opacity: visible ? 0.85 : 0,
          transition: "opacity 0.4s ease",
        }}
        viewBox="0 0 40 40"
      >
        <g
          style={{
            transformOrigin: "center",
            animation: visible
              ? "drift-arrows-spin 4.5s cubic-bezier(0.4,0,0.2,1) infinite"
              : "none",
          }}
        >
          <path d="M20 6 L23 11 L17 11 Z" fill="hsl(var(--destructive))" />
          <path d="M34 20 L29 23 L29 17 Z" fill="hsl(var(--destructive))" />
          <path d="M20 34 L17 29 L23 29 Z" fill="hsl(var(--destructive))" />
          <path d="M6 20 L11 17 L11 23 Z" fill="hsl(var(--destructive))" />
        </g>
      </svg>

      {/* Stick tilt — drifts forward then wobbles back */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          left: "18%",
          width: "2%",
          aspectRatio: "1",
          background: "hsl(var(--destructive) / 0.55)",
          animation: visible
            ? "stick-drift-tilt 4.5s ease-in-out infinite"
            : "none",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />

      {/* Character walk shimmer on the left gameplay screen */}
      <div
        className="absolute pointer-events-none rounded"
        style={{
          top: "8%",
          left: "14%",
          width: "8%",
          height: "22%",
          background:
            "linear-gradient(180deg, transparent 30%, hsl(var(--destructive) / 0.12) 50%, transparent 70%)",
          animation: visible
            ? "character-walk 4.5s ease-in-out infinite"
            : "none",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />

      {/* AUTO-MOVE label inside the left gameplay window */}
      <div
        className="absolute pointer-events-none flex items-center justify-center"
        style={{
          top: "5%",
          left: "10%",
          width: "16%",
          height: "6%",
        }}
      >
        <span
          className="px-1.5 py-0.5 rounded text-[7px] sm:text-[9px] font-bold tracking-wider uppercase"
          style={{
            background: "hsl(var(--destructive) / 0.8)",
            color: "hsl(var(--destructive-foreground))",
            animation: visible
              ? "auto-move-pulse 4.5s ease-in-out infinite"
              : "none",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        >
          AUTO-MOVE
        </span>
      </div>

      {/* ═══════════════════════════════════════════
          RIGHT PANEL — completely static
          ═══════════════════════════════════════════ */}

      {/* Static green check — always visible */}
      <div
        className="absolute pointer-events-none flex items-center justify-center"
        style={{
          top: "82%",
          right: "8%",
          width: "4.5%",
          height: "auto",
          aspectRatio: "1",
          opacity: 0.85,
        }}
      >
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <circle
            cx="12"
            cy="12"
            r="11"
            fill="hsl(var(--success) / 0.2)"
            stroke="hsl(var(--success))"
            strokeWidth="1.5"
          />
          <path
            d="M7 12.5L10.5 16L17 9"
            stroke="hsl(var(--success))"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};
