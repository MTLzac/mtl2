import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Phone, Check, ShieldCheck } from "lucide-react";
import { PRIMARY_PHONE } from "@/lib/locations";

const SHOP_URL = "https://shop.mobiletechlab.ca/products/screen-protection";

function MagneticButton({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className: string;
  href: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.a
      href={href}
      target={href.startsWith("tel:") ? undefined : "_blank"}
      rel={href.startsWith("tel:") ? undefined : "noopener noreferrer"}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

const trustBadges = [
  "Zero Deductibles",
  "Lifetime Warranty",
  "No Credit Check Required",
];

export function InsuranceFinalCTA() {
  return (
    <section className="relative overflow-hidden bg-white/60 backdrop-blur-3xl border-t border-white/40">
      {/* Top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-full bg-destructive/[0.02] blur-[140px] rounded-full pointer-events-none"
        style={{
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2 mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/20 shadow-sm text-muted-foreground font-black text-[10px] uppercase tracking-[0.2em]">
            <ShieldCheck size={14} className="text-destructive" />
            Final Step to Total Protection
          </div>

          <p className="text-sm font-bold text-muted-foreground uppercase tracking-[0.25em]">
            One Year Coverage For Only
          </p>

          <div
            className="text-7xl md:text-9xl font-black tracking-tighter italic text-destructive"
            style={{
              backgroundImage:
                "linear-gradient(90deg, hsl(var(--destructive)), hsl(var(--destructive) / 0.5), hsl(var(--destructive)))",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "shimmer-final 6s linear infinite",
            }}
          >
            $50
          </div>

          <p className="text-lg text-muted-foreground font-medium max-w-lg mx-auto">
            Protect your screen for 12 months with a single payment.
            <br />
            No monthly fees, no deductibles, no stress.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton
            href={SHOP_URL}
            className="inline-flex items-center justify-center gap-3 px-10 py-5 gradient-primary text-white rounded-2xl font-black text-xl shadow-2xl shadow-destructive/20 group"
          >
            Get Protected Now
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </MagneticButton>

          <MagneticButton
            href={`tel:${PRIMARY_PHONE}`}
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-md border border-border rounded-2xl font-bold text-foreground/70 text-lg hover:bg-white/30 transition-colors"
          >
            <Phone size={18} />
            Call Us
          </MagneticButton>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6"
        >
          {trustBadges.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground"
            >
              <Check size={14} className="text-green-500" />
              {badge}
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @keyframes shimmer-final {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
}
