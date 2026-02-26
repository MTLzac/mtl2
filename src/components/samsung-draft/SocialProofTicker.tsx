import { motion } from "framer-motion";
import { Star } from "lucide-react";

const SNIPPETS = [
  { text: "Fixed my S24 Ultra screen in under 2 hours!", author: "Megan R." },
  { text: "Best Samsung repair shop in Winnipeg, hands down.", author: "Kyle T." },
  { text: "Z Flip screen replaced same day — looks brand new.", author: "Priya S." },
  { text: "Saved my Galaxy S23 from water damage. Legends.", author: "Jordan M." },
  { text: "Fair price, fast turnaround. Highly recommend.", author: "Chris L." },
  { text: "They fixed my Note 20 charging port in 30 minutes.", author: "Dana K." },
];

const doubled = [...SNIPPETS, ...SNIPPETS];

export function SocialProofTicker() {
  return (
    <section className="relative overflow-hidden py-6 md:py-8">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
      <motion.div
        className="flex gap-6 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((s, i) => (
          <div
            key={i}
            className="inline-flex shrink-0 items-center gap-3 rounded-full border border-border/40 bg-card/60 backdrop-blur-md px-5 py-2.5 shadow-sm"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="h-3 w-3 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm text-foreground/90 font-medium">"{s.text}"</span>
            <span className="text-xs text-muted-foreground">— {s.author}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
