import { motion } from "framer-motion";
import { Smartphone, Layers, Tablet, Monitor, ArrowRight } from "lucide-react";
import { TiltCard } from "./TiltCard";

const SERIES = [
  {
    icon: Smartphone,
    title: "Galaxy S Series",
    description: "Samsung's flagship phones. AMOLED screen replacements and battery service for all S series generations.",
    models: ["S24 Ultra", "S24+", "S24", "S23 Ultra", "S23+", "S23", "S23 FE", "S22 Ultra", "S22+", "S22", "S21 Ultra", "S21+", "S21", "S21 FE", "S20 Ultra", "S20+", "S20", "S20 FE", "S10+", "S10", "S10e"],
  },
  {
    icon: Layers,
    title: "Galaxy Z Fold & Z Flip",
    description: "Foldable phone specialists. Inner screen, outer screen, hinge, and flex cable repairs.",
    models: ["Z Fold 5", "Z Fold 4", "Z Fold 3", "Z Flip 5", "Z Flip 4", "Z Flip 3"],
  },
  {
    icon: Tablet,
    title: "Galaxy A Series",
    description: "Budget-friendly repairs for Samsung's mid-range lineup. Same quality service, lower cost parts.",
    models: ["A54", "A53", "A52", "A51", "A34", "A33", "A32", "A14", "A13", "A12"],
  },
  {
    icon: Monitor,
    title: "Galaxy Note Series",
    description: "S Pen and stylus functionality preserved. Screen and battery repairs for all Note models.",
    models: ["Note 20 Ultra", "Note 20", "Note 10+", "Note 10"],
  },
];

const REPAIR_URL = "https://shop.mobiletechlab.ca/pages/repair2";

export function ModelSeriesCards() {
  return (
    <section id="models" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.015] to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/20 shadow-sm text-muted-foreground font-black text-[10px] uppercase tracking-[0.2em]">
            Full Coverage
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tighter leading-[0.9]">
            All Samsung Phone Models{" "}
            <span className="text-primary">We Repair in Winnipeg</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
            We repair all Samsung Galaxy phone models including the S series, Z Fold, Z Flip, A series, and Note series.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {SERIES.map((s, i) => (
            <TiltCard key={i} index={i}>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{s.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.models.slice(0, 8).map((m) => (
                    <span key={m} className="px-2.5 py-1 text-[11px] font-semibold bg-secondary/60 rounded-full text-foreground/70">
                      {m}
                    </span>
                  ))}
                  {s.models.length > 8 && (
                    <span className="px-2.5 py-1 text-[11px] font-semibold bg-primary/10 text-primary rounded-full">
                      +{s.models.length - 8} more
                    </span>
                  )}
                </div>
                <a
                  href={REPAIR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
                >
                  Get Quote <ArrowRight size={14} />
                </a>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
