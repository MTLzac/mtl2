import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CheckCircle2, XCircle, ShieldCheck, Shield } from "lucide-react";
import { COVERAGE_INCLUDED, COVERAGE_EXCLUDED } from "@/lib/screen-insurance-data";

interface CoverageCardProps {
  title: string;
  items: string[];
  type: "covered" | "not-covered";
}

const CoverageCard = ({ title, items, type }: CoverageCardProps) => {
  const isCovered = type === "covered";

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX / rect.width - 0.5 - rect.left / rect.width);
    y.set(e.clientY / rect.height - 0.5 - rect.top / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`flex-1 p-10 rounded-[48px] backdrop-blur-2xl relative overflow-hidden transition-shadow duration-500 ${
        isCovered
          ? "bg-white/70 border-[3px] border-green-500/40 z-10 shadow-[0_40px_80px_-15px_rgba(34,197,94,0.2),inset_0_0_25px_rgba(34,197,94,0.03)]"
          : "bg-white/40 border border-destructive/20 opacity-90 shadow-[0_20px_40px_-15px_rgba(239,68,68,0.1)]"
      }`}
    >
      {/* Specular Sweep */}
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 6, repeat: Infinity, repeatDelay: 3, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
      />

      {/* Warranty Seal */}
      {isCovered && (
        <div
          className="absolute top-8 right-8 flex flex-col items-center"
          style={{ transform: "translateZ(40px)" }}
        >
          <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-md flex items-center justify-center text-green-600 shadow-sm">
            <ShieldCheck size={24} strokeWidth={3} />
          </div>
          <span className="text-[8px] font-black uppercase tracking-[0.2em] mt-2 text-green-600/60 text-center leading-none">
            Lifetime
            <br />
            Warranty
          </span>
        </div>
      )}

      <div
        className="flex items-center gap-4 mb-10 relative z-10"
        style={{ transform: "translateZ(30px)" }}
      >
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg ${
            isCovered
              ? "bg-green-600 text-white shadow-green-500/20"
              : "bg-destructive text-white shadow-destructive/20"
          }`}
        >
          {isCovered ? (
            <CheckCircle2 size={24} strokeWidth={2.5} />
          ) : (
            <XCircle size={24} strokeWidth={2.5} />
          )}
        </div>
        <h3
          className={`text-2xl font-black italic uppercase tracking-tighter ${
            isCovered ? "text-green-600" : "text-destructive"
          }`}
        >
          {title}
        </h3>
      </div>

      <ul
        className="space-y-6 relative z-10"
        style={{ transform: "translateZ(20px)" }}
      >
        {items.map((item) => {
          const isPremium = item.includes("Premium-quality");
          return (
            <li key={item} className="flex items-start gap-4">
              <div className="mt-0.5 flex-shrink-0">
                {isCovered ? (
                  <CheckCircle2 size={18} className="text-green-500" />
                ) : (
                  <XCircle size={18} className="text-destructive/60" />
                )}
              </div>
              <span
                className={`text-foreground/80 text-sm sm:text-base leading-snug tracking-tight ${
                  isPremium ? "font-bold flex items-center gap-2" : "font-semibold"
                }`}
              >
                {isPremium && (
                  <Shield size={16} className="text-destructive fill-destructive/20" />
                )}
                {item}
              </span>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export function CoverageDetails() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-[#fcfcfd]">
      {/* Liquid Parallax Ambient Glows */}
      <div
        className="absolute top-1/2 left-0 w-[60%] h-full bg-green-500/[0.03] blur-[140px] rounded-full -translate-y-1/2 pointer-events-none"
        style={{ maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/2 right-0 w-[40%] h-full bg-destructive/[0.03] blur-[120px] rounded-full -translate-y-1/2 pointer-events-none"
        style={{ maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-20 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/20 shadow-sm text-muted-foreground font-black text-[10px] uppercase tracking-[0.2em]">
            <ShieldCheck size={14} className="text-destructive" />
            The MTL Promise
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground tracking-tighter leading-none">
            No Fine <span className="text-destructive">Print.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-xl mx-auto leading-relaxed">
            Everything you need to know. Nothing you don't. Clear, upfront coverage for your peace of mind.
          </p>
        </motion.div>

        <div
          className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto items-stretch"
          style={{ perspective: "1000px" }}
        >
          <CoverageCard title="Covered" items={COVERAGE_INCLUDED} type="covered" />
          <CoverageCard title="Not Covered" items={COVERAGE_EXCLUDED} type="not-covered" />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16 md:mt-20 text-center text-muted-foreground font-bold text-[10px] uppercase tracking-[0.3em] max-w-2xl mx-auto leading-loose"
        >
          *Coverage begins immediately after Premium Setup. Lifetime warranty applies to the replacement part manufacturer defects only. Physical and liquid damage are excluded.
        </motion.p>
      </div>
    </section>
  );
}
