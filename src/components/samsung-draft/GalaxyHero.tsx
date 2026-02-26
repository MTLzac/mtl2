import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { GalaxyS24Ultra } from "./GalaxyS24Ultra";
import { PRIMARY_PHONE } from "@/lib/locations";

const REPAIR_URL = "https://shop.mobiletechlab.ca/pages/repair2";

export function GalaxyHero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Liquid mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background" />
      <div className="absolute top-0 right-0 w-[50%] h-[80%] bg-primary/[0.03] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[60%] bg-blue-500/[0.02] blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/20 shadow-sm text-muted-foreground font-black text-[10px] uppercase tracking-[0.2em]">
              Samsung Certified Repairs
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tighter leading-[0.9]">
              Samsung Phone Repair{" "}
              <span className="text-primary">Winnipeg & Manitoba</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed max-w-lg">
              Winnipeg's Samsung Galaxy Phone Repair Specialists. From the Galaxy S24 Ultra to Z Fold foldables — cracked screens, dead batteries, and water damage fixed with quality parts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <MagneticButton
                href={REPAIR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 gradient-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 group"
              >
                Get a Free Quote
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </MagneticButton>

              <MagneticButton
                href={`tel:${PRIMARY_PHONE}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-border rounded-2xl font-bold text-foreground/70 text-lg hover:bg-white/30 transition-colors"
              >
                <Phone size={18} />
                Call Now
              </MagneticButton>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-[9px] font-bold text-primary">
                    ★
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground font-medium">
                4.9/5 from 200+ reviews
              </span>
            </div>
          </motion.div>

          {/* Right — Galaxy S24 Ultra */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <GalaxyS24Ultra />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
