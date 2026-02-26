import React, { useState } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className: string;
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export function MagneticButton({ children, className, href, onClick, target, rel }: MagneticButtonProps) {
  const [hovered, setHovered] = useState(false);

  const glintOverlay = (
    <span
      className={`absolute inset-0 pointer-events-none overflow-hidden rounded-[inherit] z-10 ${hovered ? "animate-glint" : ""}`}
      aria-hidden
    >
      <span
        className="absolute inset-y-0 w-[40%] -left-[40%]"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0.65) 50%, rgba(255,255,255,0.4) 60%, transparent 100%)",
        }}
      />
    </span>
  );

  const combinedClass = `relative overflow-hidden transition-all duration-300 ${hovered ? "shadow-2xl" : ""} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={combinedClass}
      >
        {glintOverlay}
        <span className="relative z-20">{children}</span>
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={combinedClass}
    >
      {glintOverlay}
      <span className="relative z-20">{children}</span>
    </button>
  );
}
