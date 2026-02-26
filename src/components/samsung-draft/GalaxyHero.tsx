import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Check, Wifi, Battery, Signal } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { PRIMARY_PHONE } from "@/lib/locations";

const REPAIR_URL = "https://shop.mobiletechlab.ca/pages/repair2";

type Stage = "pristine" | "cracked" | "repaired";

function GalaxyS24Ultra() {
  const [stage, setStage] = useState<Stage>("pristine");
  const [glint, setGlint] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setStage("cracked"), 1500);
    return () => clearTimeout(t1);
  }, []);

  const handleRepair = () => {
    setGlint(true);
    setTimeout(() => {
      setStage("repaired");
      setGlint(false);
    }, 500);
  };

  return (
    <div className="relative mx-auto" style={{ width: 260, aspectRatio: "9/19.5" }}>
      {/* S24 Ultra Frame — Titanium Gray, sharp 90° corners */}
      <div
        className="absolute inset-0 rounded-[16px] bg-gradient-to-b from-[#3a3a3a] to-[#2a2a2a] shadow-2xl"
        style={{ boxShadow: "0 0 0 2px #555, 0 20px 60px rgba(0,0,0,0.5)" }}
      >
        {/* Side buttons */}
        <div className="absolute -right-[3px] top-[25%] w-[3px] h-[35px] bg-[#555] rounded-r-sm" />
        <div className="absolute -left-[3px] top-[20%] w-[3px] h-[20px] bg-[#555] rounded-l-sm" />
        <div className="absolute -left-[3px] top-[30%] w-[3px] h-[35px] bg-[#555] rounded-l-sm" />
        <div className="absolute -left-[3px] top-[40%] w-[3px] h-[35px] bg-[#555] rounded-l-sm" />
      </div>

      {/* Screen */}
      <div className="absolute inset-[3px] rounded-[13px] overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-3 text-white/70 text-[9px] font-medium">
          <span>12:45</span>
          <div className="flex items-center gap-1">
            <Signal size={9} />
            <Wifi size={9} />
            <Battery size={9} />
          </div>
        </div>

        {/* Camera punch-hole */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[10px] h-[10px] bg-black rounded-full border border-[#333]" />

        {/* OneUI content */}
        <div className="mt-8 px-5 space-y-3">
          <div className="text-white text-[22px] font-light leading-tight">
            <span className="text-white/50 text-[11px] font-normal block">Wednesday</span>
            January 15
          </div>
          {/* App grid simulation */}
          <div className="grid grid-cols-4 gap-3 mt-6">
            {["#4285F4", "#EA4335", "#34A853", "#FBBC04", "#7C4DFF", "#FF6D00", "#00BCD4", "#E91E63"].map((c, i) => (
              <div key={i} className="w-9 h-9 rounded-xl mx-auto" style={{ background: c, opacity: 0.85 }} />
            ))}
          </div>
          {/* Samsung widget */}
          <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/5">
            <div className="text-white/60 text-[9px] font-medium">Weather • Winnipeg</div>
            <div className="text-white text-xl font-light mt-1">-22°C</div>
          </div>
        </div>

        {/* Crack overlay */}
        <AnimatePresence>
          {stage === "cracked" && (
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              className="absolute inset-0 w-full h-full pointer-events-none z-20"
              viewBox="0 0 260 565"
              fill="none"
            >
              <path
                d="M 90 0 L 95 60 L 80 120 L 110 180 L 75 250 L 100 320 L 85 400 L 95 480 L 88 565"
                stroke="white"
                strokeWidth="1.5"
                strokeOpacity="0.7"
                fill="none"
              />
              <path
                d="M 95 60 L 140 90 L 180 80"
                stroke="white"
                strokeWidth="1"
                strokeOpacity="0.5"
                fill="none"
              />
              <path
                d="M 80 120 L 40 150 L 10 180"
                stroke="white"
                strokeWidth="1"
                strokeOpacity="0.4"
                fill="none"
              />
              <path
                d="M 110 180 L 160 200 L 200 220 L 250 210"
                stroke="white"
                strokeWidth="0.8"
                strokeOpacity="0.4"
                fill="none"
              />
              <path
                d="M 75 250 L 30 270 L 5 300"
                stroke="white"
                strokeWidth="0.8"
                strokeOpacity="0.3"
                fill="none"
              />
              <path
                d="M 100 320 L 150 340 L 200 360"
                stroke="white"
                strokeWidth="0.6"
                strokeOpacity="0.3"
                fill="none"
              />
            </motion.svg>
          )}
        </AnimatePresence>

        {/* Repair button */}
        <AnimatePresence>
          {stage === "cracked" && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.5 }}
              onClick={handleRepair}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 px-5 py-2.5 bg-primary text-primary-foreground text-xs font-bold rounded-full shadow-lg shadow-primary/30 animate-pulse"
            >
              Repair My Screen
            </motion.button>
          )}
        </AnimatePresence>

        {/* Glint sweep */}
        {glint && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 z-40 pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
              width: "50%",
            }}
          />
        )}

        {/* Success notification */}
        <AnimatePresence>
          {stage === "repaired" && (
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="absolute top-14 left-3 right-3 z-30 bg-green-500/90 backdrop-blur-md rounded-2xl p-3 text-white text-[10px] font-bold flex items-center gap-2"
            >
              <Check size={14} />
              Repaired with Premium Samsung Parts ✅
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

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
