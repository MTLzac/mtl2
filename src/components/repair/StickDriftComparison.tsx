import React, { useState, useCallback, useRef } from "react";
import comparisonImage from "@/assets/repairs/controller-stick-drift-comparison.png";

/**
 * Interactive stick-drift comparison image.
 * On hover (desktop) or tap (mobile) the left-panel "drift" indicators
 * animate, then the right-panel "repaired" check pulses.
 */
export const StickDriftComparison: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const [active, setActive] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const trigger = useCallback(() => {
    if (active) return;
    setActive(true);
    // Total animation ~2.2s then reset
    timeoutRef.current = setTimeout(() => setActive(false), 2400);
  }, [active]);

  const handleMouseEnter = () => trigger();
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    trigger();
  };

  return (
    <div
      className={`relative select-none cursor-pointer ${className}`}
      onMouseEnter={handleMouseEnter}
      onTouchStart={handleTouchStart}
      role="img"
      aria-label="Before and after comparison of controller stick drift repair. Hover or tap to see animation."
    >
      {/* Base image */}
      <img
        src={comparisonImage}
        alt="Controller stick drift comparison — before showing unintended movement, after showing repaired controller"
        className="w-full h-auto rounded-xl"
        draggable={false}
      />

      {/* ── LEFT PANEL OVERLAYS (drift animation) ── */}

      {/* Drift arrows — rotating ring overlay on the left stick area */}
      <svg
        className={`absolute pointer-events-none transition-opacity duration-300 ${
          active ? "opacity-100" : "opacity-0"
        }`}
        style={{
          top: "52%",
          left: "14.5%",
          width: "8%",
          height: "auto",
          aspectRatio: "1",
        }}
        viewBox="0 0 40 40"
      >
        <g
          className={active ? "animate-drift-rotate" : ""}
          style={{ transformOrigin: "center" }}
        >
          {/* Circular drift arrows */}
          <path
            d="M20 6 L23 11 L17 11 Z"
            fill="hsl(var(--destructive))"
            opacity="0.85"
          />
          <path
            d="M34 20 L29 23 L29 17 Z"
            fill="hsl(var(--destructive))"
            opacity="0.85"
          />
          <path
            d="M20 34 L17 29 L23 29 Z"
            fill="hsl(var(--destructive))"
            opacity="0.85"
          />
          <path
            d="M6 20 L11 17 L11 23 Z"
            fill="hsl(var(--destructive))"
            opacity="0.85"
          />
        </g>
      </svg>

      {/* Stick tilt indicator — subtle dot that shifts forward */}
      <div
        className={`absolute rounded-full bg-destructive/60 pointer-events-none transition-all duration-700 ease-in-out ${
          active ? "opacity-80" : "opacity-0"
        }`}
        style={{
          top: active ? "50%" : "52%",
          left: "18%",
          width: "1.8%",
          height: "auto",
          aspectRatio: "1",
        }}
      />

      {/* Walking character indicator — small upward shimmer on the left screen */}
      <div
        className={`absolute pointer-events-none rounded transition-all ease-in-out ${
          active
            ? "opacity-70 translate-x-1 duration-1000"
            : "opacity-0 translate-x-0 duration-300"
        }`}
        style={{
          top: "12%",
          left: "15%",
          width: "6%",
          height: "18%",
          background:
            "linear-gradient(90deg, transparent, hsl(var(--destructive) / 0.15), transparent)",
        }}
      />

      {/* ── RIGHT PANEL OVERLAYS (repaired animation) ── */}

      {/* Green check pulse */}
      <div
        className={`absolute pointer-events-none flex items-center justify-center ${
          active ? "animate-check-pulse" : "opacity-0"
        }`}
        style={{
          top: "82%",
          right: "8%",
          width: "5%",
          height: "auto",
          aspectRatio: "1",
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

      {/* Calm centered-stick indicator on right panel */}
      <div
        className={`absolute pointer-events-none rounded-full border-2 transition-all ease-in-out ${
          active
            ? "opacity-60 scale-110 duration-700 delay-1000"
            : "opacity-0 scale-100 duration-300"
        }`}
        style={{
          top: "51%",
          right: "14%",
          width: "3%",
          height: "auto",
          aspectRatio: "1",
          borderColor: "hsl(var(--success))",
        }}
      />

      {/* Interaction hint */}
      <div
        className={`absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-foreground/70 text-background text-[10px] font-medium backdrop-blur-sm transition-opacity duration-500 ${
          active ? "opacity-0" : "opacity-60"
        }`}
      >
        Hover to see animation
      </div>
    </div>
  );
};
