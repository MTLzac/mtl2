import React, { useState, useRef, useCallback, useEffect } from "react";

interface BeforeAfterSliderProps {
  image: string;
  imageAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
  caption?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  image,
  imageAlt,
  beforeLabel = "Before",
  afterLabel = "After",
  caption,
}) => {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      setIsDragging(true);
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    },
    [isDragging, updatePosition]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div className="space-y-3">
      <div
        ref={containerRef}
        className="relative select-none overflow-hidden rounded-xl border border-border shadow-md cursor-col-resize"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        role="slider"
        aria-label="Before and after comparison"
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
      >
        {/* Full image (after / right side) */}
        <img
          src={image}
          alt={imageAlt}
          className="block w-full h-auto"
          draggable={false}
          loading="lazy"
        />

        {/* Before overlay (left side) — clip to reveal only left portion */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img
            src={image}
            alt=""
            className="block w-full h-auto"
            draggable={false}
            aria-hidden
          />
        </div>

        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white/90 shadow-lg transition-none"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          {/* Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center backdrop-blur-sm border border-white/50">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="text-foreground"
            >
              <path
                d="M6 10L3 7M3 7L6 4M3 7H9M14 10L17 7M17 7L14 4M17 7H11M3 13L6 16M6 16L9 13M6 16H3M17 13L14 16M14 16L11 13M14 16H17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 text-white text-xs font-medium backdrop-blur-sm">
          {beforeLabel}
        </span>
        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/60 text-white text-xs font-medium backdrop-blur-sm">
          {afterLabel}
        </span>
      </div>

      {caption && (
        <p className="text-xs text-muted-foreground text-center italic">
          {caption}
        </p>
      )}
    </div>
  );
};
