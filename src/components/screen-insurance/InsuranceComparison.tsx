import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ShieldCheck,
  XCircle,
  AlertTriangle,
  CheckCircle2,
  CircleDollarSign,
  ArrowRight,
  Star,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const SHOP_URL = "https://shop.mobiletechlab.ca/products/screen-protection";

interface CardProps {
  title: string;
  price: string;
  items: string[];
  isHero: boolean;
}

function ComparisonCard({ title, price, items, isHero }: CardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, type: "spring", stiffness: 100, damping: 20 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative p-10 rounded-[48px] backdrop-blur-2xl border overflow-hidden transition-shadow duration-500 ${
        isHero
          ? "bg-white/90 border-destructive/30 border-[3px] shadow-[0_50px_100px_-20px_rgba(220,38,38,0.2)] z-20 md:scale-105 md:-ml-8"
          : "bg-white/40 border-border shadow-xl z-10 opacity-60"
      }`}
    >
      {/* Fresnel corner highlights */}
      <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-white/40 rounded-tl-[48px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-10 h-10 border-t border-r border-white/40 rounded-tr-[48px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-10 h-10 border-b border-l border-white/40 rounded-bl-[48px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-white/40 rounded-br-[48px] pointer-events-none" />

      {/* Specular sweep */}
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 6, repeat: Infinity, repeatDelay: 4, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
      />

      <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div
            className={`p-2 rounded-xl shadow-lg ${
              isHero
                ? "bg-destructive text-white shadow-destructive/20"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {isHero ? <ShieldCheck size={20} /> : <AlertTriangle size={20} />}
          </div>
          <h3
            className={`font-black uppercase tracking-widest text-[10px] ${
              isHero ? "text-destructive" : "text-muted-foreground"
            }`}
          >
            {title}
          </h3>
        </div>

        <div className="mb-10">
          <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">
            Total Repair Cost
          </div>
          <div
            className={`text-6xl md:text-8xl font-black tracking-tighter italic ${
              isHero ? "text-destructive" : "text-muted-foreground/30"
            }`}
            style={
              isHero
                ? {
                    backgroundImage:
                      "linear-gradient(90deg, hsl(var(--destructive)), hsl(var(--destructive) / 0.5), hsl(var(--destructive)))",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "shimmer 6s linear infinite",
                  }
                : undefined
            }
          >
            {price}
          </div>
          {isHero && (
            <div className="text-[10px] font-black text-destructive/60 uppercase tracking-widest mt-2">
              — Coverage Active
            </div>
          )}
        </div>

        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm font-bold text-foreground/80 leading-snug">
              {isHero ? (
                <CheckCircle2 size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
              ) : (
                <XCircle size={18} className="text-muted-foreground/40 mt-0.5 flex-shrink-0" />
              )}
              <span
                className={
                  item.includes("Gamble") || item.includes("Lifetime")
                    ? "text-foreground underline decoration-destructive/20 underline-offset-4"
                    : ""
                }
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function SocialProofTicker() {
  const tickerItems = [
    { icon: <Star size={14} className="text-yellow-500 fill-yellow-500" />, text: "4.9/5 Google Rating" },
    { icon: <Shield size={14} className="text-destructive" />, text: "15,000+ Screens Protected" },
    { icon: <CheckCircle2 size={14} className="text-green-500" />, text: "Authorized Premium Parts" },
    { icon: null, text: "Serving Winnipeg & Beyond" },
    { icon: null, text: "Canadian Owned & Operated" },
  ];

  return (
    <div className="w-full overflow-hidden py-10 border-y border-border/40 mt-12">
      <motion.div
        animate={{ x: [0, -1200] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-16 items-center"
      >
        {[...Array(3)].map((_, setIdx) =>
          tickerItems.map((item, i) => (
            <div
              key={`${setIdx}-${i}`}
              className="flex items-center gap-2 text-muted-foreground font-black uppercase tracking-[0.2em] text-[10px]"
            >
              {item.icon}
              {item.text}
            </div>
          ))
        )}
      </motion.div>
    </div>
  );
}

export function InsuranceComparison() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-[#fcfcfd]">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-full bg-destructive/[0.02] blur-[140px] rounded-full pointer-events-none"
        style={{ maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-20 space-y-4"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground tracking-tighter leading-none">
            Why Screen{" "}
            <span className="text-destructive">Protection?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-xl mx-auto">
            Avoid the choice between a $500+ bill or a risky 30-day warranty. Get the best screen for less.
          </p>
        </motion.div>

        <div
          className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto gap-8 md:gap-0"
          style={{ perspective: "1000px" }}
        >
          <ComparisonCard
            title="Without Protection"
            price="$500+"
            items={[
              "$500+ Premium replacement cost",
              "30-Day Warranty Gamble on Value Screens",
              "No financial safety net — full price every time",
              "No protection for future accidents",
            ]}
            isHero={false}
          />
          <ComparisonCard
            title="With MTL Protection"
            price="$0"
            items={[
              "Premium screen replacement included ($0)",
              "Guaranteed Lifetime Warranty on parts",
              "Professional setup & verification",
              "Instant walk-in service",
            ]}
            isHero={true}
          />
        </div>

        <SocialProofTicker />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 md:mt-16 flex flex-col items-center gap-4"
        >
          <Button size="lg" className="gradient-primary text-lg px-10 py-6 h-auto rounded-2xl" asChild>
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
              Protect My Device
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <div className="flex items-center gap-2 text-muted-foreground font-bold text-[10px] uppercase tracking-[0.3em]">
            <CircleDollarSign size={16} />
            The Smartest $50 You'll Ever Spend
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
}
