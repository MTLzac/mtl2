import { motion } from "framer-motion";
import { CheckCircle2, XCircle, ShieldCheck } from "lucide-react";
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
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, type: "spring" }}
      className={`flex-1 p-8 rounded-[40px] backdrop-blur-2xl border shadow-[0_10px_15px_-3px_rgba(0,0,0,0.02),0_20px_40px_-10px_rgba(0,0,0,0.05)] ${
        isCovered
          ? "bg-green-50/10 border-green-500/20"
          : "bg-destructive/5 border-destructive/20"
      }`}
    >
      <div className="flex items-center gap-3 mb-8">
        <div
          className={`p-2 rounded-lg ${
            isCovered ? "bg-green-600 text-white" : "bg-destructive text-white"
          }`}
        >
          {isCovered ? <CheckCircle2 size={20} /> : <XCircle size={20} />}
        </div>
        <h3
          className={`text-2xl font-black italic uppercase tracking-tight ${
            isCovered ? "text-green-600" : "text-destructive"
          }`}
        >
          {title}
        </h3>
      </div>

      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <div className="mt-0.5 flex-shrink-0">
              {isCovered ? (
                <CheckCircle2 size={16} className="text-green-500/60" />
              ) : (
                <XCircle size={16} className="text-destructive/50" />
              )}
            </div>
            <span className="text-foreground/80 font-medium text-sm sm:text-base leading-tight">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export function CoverageDetails() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-[#fcfcfd]">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,_hsl(var(--destructive)/0.02)_0%,_transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted text-muted-foreground font-bold text-[10px] uppercase tracking-[0.2em]">
            <ShieldCheck size={12} />
            Transparency First
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground tracking-tighter">
            What's <span className="text-destructive">Covered.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium max-w-xl mx-auto">
            Clear, no-surprises coverage for your device. We believe in being upfront about exactly how you're protected.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          <CoverageCard title="Covered" items={COVERAGE_INCLUDED} type="covered" />
          <CoverageCard title="Not Covered" items={COVERAGE_EXCLUDED} type="not-covered" />
        </div>
      </div>
    </section>
  );
}