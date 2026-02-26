import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
}

export function TiltCard({ children, className = "", index = 0 }: TiltCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-150, 150], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-150, 150], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, type: "spring", stiffness: 100, damping: 20 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative rounded-[28px] overflow-hidden border backdrop-blur-xl bg-white/40 border-white/20 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-shadow duration-500 ${className}`}
    >
      {/* Fresnel corners */}
      <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-white/40 rounded-tl-[28px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-white/40 rounded-tr-[28px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-white/30 rounded-bl-[28px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-white/30 rounded-br-[28px] pointer-events-none" />
      {children}
    </motion.div>
  );
}
