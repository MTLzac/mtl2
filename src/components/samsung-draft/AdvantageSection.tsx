import { motion } from "framer-motion";
import { Wrench, Zap, Award, DollarSign } from "lucide-react";
import { TiltCard } from "./TiltCard";

const PILLARS = [
  {
    icon: Wrench,
    title: "Foldable Specialists",
    description: "Z Fold and Z Flip repairs including screen, hinge, and flex cable issues. Few shops in Winnipeg touch foldables — we embrace them.",
  },
  {
    icon: Zap,
    title: "Same-Day Galaxy Repairs",
    description: "Most Samsung phone repairs completed same day. Walk-ins welcome at both locations.",
  },
  {
    icon: Award,
    title: "Warranty on Every Repair",
    description: "Screen repair warranties vary by part tier (30 days to lifetime). 90-day battery warranty. Lifetime warranty on most other repairs.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Free diagnostics and upfront quotes. No surprises — know your repair cost before we start.",
  },
];

export function AdvantageSection() {
  return (
    <section id="why-choose-us" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.015] to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/20 shadow-sm text-muted-foreground font-black text-[10px] uppercase tracking-[0.2em]">
            The MTL Advantage
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tighter leading-[0.9]">
            Why We Are Winnipeg's{" "}
            <span className="text-primary">Best</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {PILLARS.map((p, i) => (
            <TiltCard key={i} index={i}>
              <div className="p-6 md:p-8">
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
