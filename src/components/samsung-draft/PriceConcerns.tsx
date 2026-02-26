import { motion } from "framer-motion";
import { CircleDollarSign, RefreshCw, Phone, ArrowRight } from "lucide-react";
import { TiltCard } from "./TiltCard";
import { MagneticButton } from "./MagneticButton";
import { PRIMARY_PHONE } from "@/lib/locations";

export function PriceConcerns() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/20 shadow-sm text-muted-foreground font-black text-[10px] uppercase tracking-[0.2em]">
            Save More
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tighter leading-[0.9]">
            Worried About{" "}
            <span className="text-primary">Repair Cost?</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium">You have options.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
          {/* Price Match */}
          <TiltCard index={0}>
            <div className="p-6 md:p-8 text-center h-full flex flex-col items-center">
              <div className="mb-5 inline-flex rounded-xl p-3.5" style={{ background: "rgba(16,185,129,0.08)", color: "#10b981" }}>
                <CircleDollarSign className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">We'll Match Any Local Price</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-1">
                Found a lower price for the same Samsung repair in Winnipeg? Call us and we'll match it. No pressure. No hassle.
              </p>
              <MagneticButton
                href={`tel:${PRIMARY_PHONE}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-border rounded-xl font-bold text-foreground/70 hover:bg-white/30 transition-colors"
              >
                <Phone size={16} />
                Call for Price Match
              </MagneticButton>
            </div>
          </TiltCard>

          {/* Trade-In — subtle red outer glow to highlight preferred path */}
          <div className="rounded-[28px]" style={{ boxShadow: "0 0 30px -8px rgba(214,0,0,0.12), 0 0 60px -15px rgba(214,0,0,0.06)" }}>
            <TiltCard index={1}>
              <div className="p-6 md:p-8 text-center h-full flex flex-col items-center">
                <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3.5 text-primary">
                  <RefreshCw className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Lower Cost With a Trade-In</h3>
                <p className="text-sm text-muted-foreground mb-6 flex-1">
                  Trade in phones, tablets, consoles, or laptops — even broken ones — to reduce today's repair cost. Get paid via Cash, E-Transfer, or Store Credit.
                </p>
                <MagneticButton
                  href="/trade-in"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 gradient-primary text-white rounded-xl font-bold shadow-lg shadow-primary/15 group"
                >
                  Explore Trade-In
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
