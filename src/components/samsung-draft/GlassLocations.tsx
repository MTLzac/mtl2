import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { TiltCard } from "./TiltCard";
import { LOCATIONS } from "@/lib/locations";

export function GlassLocations() {
  return (
    <section id="locations" className="py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/20 shadow-sm text-muted-foreground font-black text-[10px] uppercase tracking-[0.2em]">
            Visit Us
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tighter leading-[0.9]">
            Device Repair Locations{" "}
            <span className="text-primary">in Winnipeg & Manitoba</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {LOCATIONS.map((loc, i) => (
            <TiltCard key={i} index={i}>
              <div className="p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{loc.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{loc.address}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone size={14} />
                  <a href={`tel:${loc.phone}`} className="font-semibold hover:text-primary transition-colors">
                    {loc.phoneFormatted}
                  </a>
                </div>
                <div className="space-y-1">
                  {loc.hours.map((h, j) => (
                    <div key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock size={12} />
                      {h}
                    </div>
                  ))}
                </div>
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
                >
                  Get Directions <ExternalLink size={13} />
                </a>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
