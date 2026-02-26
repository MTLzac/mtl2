import { motion, useMotionValue, useSpring } from "framer-motion";
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
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [hovered, setHovered] = useState(false);
  // Heavy-damped: high damping (30) kills bounce, lower stiffness for smooth pull
  const springX = useSpring(x, { stiffness: 120, damping: 30 });
  const springY = useSpring(y, { stiffness: 120, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - rect.left - rect.width / 2;
    const dy = e.clientY - rect.top - rect.height / 2;
    // Attenuate to ~40% for subtle pull
    x.set(dx * 0.4);
    y.set(dy * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  const glintOverlay = (
    <span
      className={`absolute inset-0 pointer-events-none overflow-hidden rounded-[inherit] z-10 ${hovered ? "animate-glint" : ""}`}
      aria-hidden
    >
      <span
        className="absolute inset-y-0 w-[40%] -left-[40%]"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.45) 40%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.45) 60%, transparent 100%)",
          animationFillMode: "forwards",
        }}
      />
    </span>
  );

  const sharedProps = {
    onMouseMove: handleMouseMove,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: handleMouseLeave,
    style: { x: springX, y: springY, position: "relative" as const, overflow: "hidden" as const },
    whileHover: { scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)" },
    whileTap: { scale: 0.97 },
    className,
  };

  if (href) {
    return (
      <motion.a href={href} target={target} rel={rel} {...sharedProps}>
        {glintOverlay}
        <span className="relative z-20">{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} {...sharedProps}>
      {glintOverlay}
      <span className="relative z-20">{children}</span>
    </motion.button>
  );
}
