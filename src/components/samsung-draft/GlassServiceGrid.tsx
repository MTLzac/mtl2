import { motion } from "framer-motion";
import {
  ScreenShare,
  Battery,
  Plug,
  Droplets,
  Camera,
  Volume2,
  ArrowRight,
} from "lucide-react";
import { TiltCard } from "./TiltCard";
import { MagneticButton } from "./MagneticButton";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "Galaxy S, A, and Note AMOLED screen replacements. Z Fold and Z Flip inner and outer display repairs with quality parts.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Samsung phone batteries degrade after 2-3 years. Restore full-day battery life with same-day replacement service.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "USB-C charging port repair for all Galaxy phones. Includes cleaning, testing, and component replacement if needed.",
  },
  {
    icon: Droplets,
    name: "Water Damage Repair",
    description: "Ultrasonic cleaning and component-level repair gives your phone the best chance of recovery.",
  },
  {
    icon: Camera,
    name: "Camera Repair",
    description: "Rear and front camera repairs. Fix blurry photos, cracked lenses, and autofocus issues.",
  },
  {
    icon: Volume2,
    name: "Speaker & Mic Repair",
    description: "Speaker, earpiece, and microphone repairs for all Samsung Galaxy phones.",
  },
];

const REPAIR_URL = "https://shop.mobiletechlab.ca/pages/repair2";

export function GlassServiceGrid() {
  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/20 shadow-sm text-muted-foreground font-black text-[10px] uppercase tracking-[0.2em]">
            Expert Services
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tighter leading-[0.9]">
            Samsung Phone Repair Services{" "}
            <span className="text-primary">in Winnipeg</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
            Expert repairs for all Samsung Galaxy issues. Fast turnaround, quality parts, and warranty included.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <TiltCard key={i} index={i}>
              <div className="p-6 md:p-8">
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{s.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            </TiltCard>
          ))}
        </div>

        <div className="mt-12 text-center">
          <MagneticButton
            href={REPAIR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 gradient-primary text-white rounded-2xl font-bold text-xl shadow-xl shadow-primary/20 group"
          >
            Request Samsung Repair
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
