import { motion } from "framer-motion";
import { ShieldCheck, Zap, Smartphone, ArrowRight } from "lucide-react";

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
  delay: number;
}

const Step = ({ number, title, description, icon: Icon, delay }: StepProps) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ delay, duration: 0.6, ease: "easeOut" }}
    className="relative flex-1 bg-background/40 backdrop-blur-xl border border-border/20 p-8 rounded-[32px] shadow-xl shadow-muted/50 group hover:bg-background/60 transition-all"
  >
    <div className="absolute -top-4 -left-4 w-12 h-12 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center font-black text-xl shadow-lg z-10">
      {number}
    </div>

    <div className="mb-6 w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center text-destructive group-hover:scale-110 transition-transform duration-500">
      <Icon size={32} strokeWidth={2.5} />
    </div>

    <h3 className="text-2xl font-bold mb-3 tracking-tight">{title}</h3>
    <p className="text-muted-foreground leading-relaxed font-medium">{description}</p>

    {number < 3 && (
      <div className="hidden lg:block absolute top-1/2 -right-12 translate-x-1/2 -translate-y-1/2 text-border z-0">
        <ArrowRight size={40} strokeWidth={1} />
      </div>
    )}
  </motion.div>
);

const steps: Omit<StepProps, "delay">[] = [
  {
    number: 1,
    icon: ShieldCheck,
    title: "Activate Protection",
    description:
      "Sign up with a one-time $50 payment. We'll provide a high-quality screen protector to keep your glass safe from daily scratches.",
  },
  {
    number: 2,
    icon: Zap,
    title: "Instant Safety Net",
    description:
      "If your screen cracks, don't panic. You're covered for up to $500 in repair costs for a full year. Just bring it to any MTL location.",
  },
  {
    number: 3,
    icon: Smartphone,
    title: "Back to Pristine",
    description:
      "Walk out with a brand-new, premium screen. Your replacement includes a 1-year warranty. Total stress-free recovery.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      {/* Ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_hsl(var(--destructive)/0.03)_0%,_transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            How It <span className="text-destructive">Works.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
            Three simple steps to total peace of mind. No monthly subscriptions, no hidden catches.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <Step key={step.number} {...step} delay={0.1 + i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
