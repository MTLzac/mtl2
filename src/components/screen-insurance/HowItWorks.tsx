import { motion } from "framer-motion";
import { ShieldCheck, Zap, Smartphone, CheckCircle2 } from "lucide-react";

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
  delay: number;
  highlights: string[];
}

const Step = ({ number, title, description, icon: Icon, delay, highlights }: StepProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ delay, duration: 0.8, type: "spring" }}
    whileHover={{ y: -8, transition: { duration: 0.2 } }}
    className="relative flex-1 bg-white/40 backdrop-blur-2xl border border-white/30 p-8 rounded-[40px] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.02),0_20px_40px_-10px_rgba(0,0,0,0.05)] group transition-all overflow-hidden"
  >
    <div className="absolute -right-10 -top-10 w-32 h-32 bg-destructive/5 blur-3xl rounded-full group-hover:bg-destructive/10 transition-colors" />

    <div className="flex flex-col h-full relative z-10">
      <div className="mb-6 w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-destructive shadow-sm border border-border/30 group-hover:scale-110 transition-transform duration-500">
        <Icon size={32} strokeWidth={2.5} />
      </div>

      <div className="space-y-4 mb-8">
        <h3 className="text-2xl font-black text-foreground tracking-tight leading-tight italic uppercase">
          <span className="text-destructive mr-2 opacity-50 text-xl not-italic">0{number}</span>
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed font-medium text-sm sm:text-base">
          {description}
        </p>
      </div>

      <div className="mt-auto space-y-3">
        {highlights.map((text, i) => (
          <div key={i} className="flex items-center gap-2 text-[10px] sm:text-xs font-black text-muted-foreground/70 uppercase tracking-[0.1em]">
            <CheckCircle2 size={14} className="text-green-600 flex-shrink-0" />
            {text}
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

function DesktopConnector() {
  return (
    <svg
      className="hidden lg:block absolute top-1/2 left-0 w-full h-24 -translate-y-1/2 pointer-events-none z-0"
      viewBox="0 0 1200 100"
      fill="none"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M200,50 C300,50 300,20 400,20 C500,20 500,80 600,80 C700,80 700,20 800,20 C900,20 900,50 1000,50"
        stroke="hsl(var(--destructive) / 0.15)"
        strokeWidth="2"
        strokeDasharray="8 6"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
      />
    </svg>
  );
}

const steps: Omit<StepProps, "delay">[] = [
  {
    number: 1,
    icon: ShieldCheck,
    title: "Premium Setup",
    description:
      "Visit any MTL location for a 2-minute screen health check. We'll professionally apply your free Premium screen protector on the spot.",
    highlights: ["Pro Installation", "Verification", "Free Protector"],
  },
  {
    number: 2,
    icon: Zap,
    title: "One-Time Price",
    description:
      "Pay your $50 activation fee once. No monthly bills, no credit checks. You're immediately backed by $500 in screen repair coverage.",
    highlights: ["No Monthly Fees", "$500 Coverage", "Instant Activation"],
  },
  {
    number: 3,
    icon: Smartphone,
    title: "Back to Pristine",
    description:
      "If life happens and your screen cracks, we've got you. Walk out with a brand-new premium screen featuring an industry-leading warranty.",
    highlights: ["LIFETIME WARRANTY*", "New Screen", "$0 Deductible"],
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-[#fcfcfd]">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,_hsl(var(--destructive)/0.02)_0%,_transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16 space-y-4"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-muted text-muted-foreground font-bold text-[10px] uppercase tracking-[0.2em]">
            Premium Service Flow
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground tracking-tighter leading-none">
            3 Steps to <br />
            <span className="text-destructive">Zero Stress.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 relative mb-12">
          <DesktopConnector />
          {steps.map((step, i) => (
            <Step key={step.number} {...step} delay={0.1 + i * 0.1} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center text-muted-foreground text-[10px] font-bold uppercase tracking-widest max-w-xl mx-auto"
        >
          *Lifetime warranty covers manufacturer defects. Physical and liquid damage are excluded. Coverage applies to insurance claims and direct repairs.
        </motion.p>
      </div>
    </section>
  );
}
