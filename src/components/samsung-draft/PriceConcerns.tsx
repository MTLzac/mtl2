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

        <div className="grid sm:grid-cols-5 gap-5 max-w-4xl mx-auto items-stretch">
          {/* Price Match — standard size (2 cols) */}
          <div className="sm:col-span-2">
            <TiltCard index={0}>
              <div className="p-6 md:p-8 text-center h-full flex flex-col">
                <div className="mb-4 mx-auto inline-flex rounded-xl bg-green-500/10 p-3 text-green-600">
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
          </div>

          {/* Trade-In — larger "accelerator" card (3 cols) */}
          <div className="sm:col-span-3">
            <TiltCard index={1}>
              <div className="p-6 md:p-10 text-center h-full flex flex-col">
                <div className="mb-4 mx-auto inline-flex rounded-2xl bg-primary/10 p-4 text-primary">
                  <RefreshCw className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-3">Lower Cost With a Trade-In</h3>
                <p className="text-sm text-muted-foreground mb-8 flex-1 max-w-md mx-auto">
                  Trade in phones, tablets, consoles, or laptops — even broken ones — to reduce today's repair cost. Get paid via Cash, E-Transfer, or Store Credit.
                </p>
                <MagneticButton
                  href="/trade-in"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 gradient-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 group"
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
