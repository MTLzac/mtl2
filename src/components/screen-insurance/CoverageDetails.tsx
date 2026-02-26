import { motion } from "framer-motion";
import { CheckCircle2, XCircle, ShieldCheck, Shield } from "lucide-react";
import { COVERAGE_INCLUDED, COVERAGE_EXCLUDED } from "@/lib/screen-insurance-data";

interface CoverageCardProps {
  title: string;
  items: string[];
  type: "covered" | "not-covered";
}

const CoverageCard = ({ title, items, type }: CoverageCardProps) => {
  const isCovered = type === "covered";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, type: "spring" }}
      whileHover={{ y: -8, scale: isCovered ? 1.03 : 1.01 }}
      className={`flex-1 p-10 rounded-[48px] backdrop-blur-2xl relative overflow-hidden transition-all duration-700 ${
        isCovered
          ? "bg-white/60 border-[3px] border-green-500/40 shadow-[0_40px_80px_-15px_rgba(34,197,94,0.2),inset_0_0_25px_rgba(34,197,94,0.03)] z-10"
          : "bg-white/30 border border-destructive/20 shadow-[0_20px_40px_-15px_rgba(239,68,68,0.1)] opacity-80"
      }`}
    >
      {/* Glass Specular Sweep */}
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 5, repeat: Infinity, repeatDelay: 4, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 pointer-events-none"
      />

      {/* Warranty Seal (Covered Only) */}
      {isCovered && (
        <div className="absolute top-6 right-6 flex flex-col items-center group/seal">
          <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-md flex items-center justify-center text-green-600 shadow-sm transition-transform group-hover/seal:scale-110">
            <ShieldCheck size={20} strokeWidth={3} />
          </div>
          <span className="text-[7px] font-black uppercase tracking-[0.2em] mt-2 text-green-600/60 text-center leading-none">
            Lifetime
            <br />
            Warranty
          </span>
        </div>
      )}

      <div className="flex items-center gap-4 mb-10 relative z-10">
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

      <ul className="space-y-5 relative z-10">
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
                {isPremium && <Shield size={14} className="text-destructive fill-destructive/20" />}
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
      {/* Adaptive Ambient Lighting with radial mask for organic bleed */}
      <div
        className="absolute top-1/2 left-0 w-[60%] h-full bg-green-500/5 blur-[140px] rounded-full -translate-y-1/2 pointer-events-none"
        style={{ maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/2 right-0 w-[40%] h-full bg-destructive/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none"
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

        <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto items-stretch">
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
