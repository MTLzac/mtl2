import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

const FAQS = [
  {
    question: "How long does Samsung phone screen replacement take?",
    answer: "Most Samsung Galaxy screen replacements are completed within 1-2 hours. Foldable devices like the Z Fold and Z Flip may take 2-4 hours due to their complex display assemblies.",
  },
  {
    question: "Do you repair Samsung Galaxy foldable phones?",
    answer: "Yes! We specialize in Galaxy Z Fold and Z Flip repairs including inner screen, outer screen, hinge mechanism, and flex cable issues. Few repair shops in Winnipeg work on foldables — we have the tools and experience.",
  },
  {
    question: "How much does Samsung Galaxy repair cost in Winnipeg?",
    answer: "Repair costs vary by model. Galaxy A series repairs are typically the most affordable, while flagship S series and foldable Z series cost more due to premium components. Use our free quote tool for an accurate estimate.",
  },
  {
    question: "Do you use genuine Samsung parts?",
    answer: "We use high-quality parts that meet or exceed OEM specifications. We'll discuss part options and pricing with you before starting any repair.",
  },
  {
    question: "Will I lose my data during Samsung phone repair?",
    answer: "For most repairs (screen, battery, charging port), your data remains intact. We recommend backing up before any repair as a precaution. For water damage cases, data recovery is a priority.",
  },
];

const REPAIR_URL = "https://shop.mobiletechlab.ca/pages/repair2";

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, type: "spring", stiffness: 100, damping: 20 }}
      className={`relative rounded-[28px] overflow-hidden border backdrop-blur-xl transition-all duration-500 ${
        isOpen ? "bg-white/70 border-primary/30 shadow-2xl" : "bg-white/40 border-white/20 shadow-sm"
      }`}
    >
      {/* Fresnel corners */}
      <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-white/40 rounded-tl-[28px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-white/40 rounded-tr-[28px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-white/30 rounded-bl-[28px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-white/30 rounded-br-[28px] pointer-events-none" />

      <button onClick={() => setIsOpen(!isOpen)} className="w-full p-6 sm:p-8 flex items-center justify-between text-left gap-4">
        <div className="flex items-center gap-4">
          <div className={`p-2 rounded-lg transition-colors ${isOpen ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
            <HelpCircle size={20} />
          </div>
          <span className="text-base sm:text-lg font-bold text-foreground tracking-tight leading-tight">{question}</span>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ type: "spring", stiffness: 300, damping: 25 }} className="flex-shrink-0">
          {isOpen ? <Minus size={20} className="text-primary" /> : <Plus size={20} className="text-muted-foreground" />}
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="px-8 pb-8 pt-2">
              <div className="h-px w-full bg-border/40 mb-6" />
              <p className="text-muted-foreground font-medium leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function GlassFAQ() {
  return (
    <section id="faqs" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.01] to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/20 shadow-sm text-muted-foreground font-black text-[10px] uppercase tracking-[0.2em]">
            Support & Clarity
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tighter leading-[0.9]">
            Samsung Phone Repair{" "}
            <span className="text-primary">FAQs</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <FAQItem key={i} index={i} {...faq} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 flex flex-col items-center gap-6"
        >
          <MagneticButton
            href={REPAIR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 gradient-primary text-white rounded-2xl font-bold text-xl shadow-xl shadow-primary/20 group"
          >
            Get Your Samsung Repaired
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-50">
            <ShieldCheck size={14} className="text-primary" />
            Free Diagnostics • Warranty Included
          </div>
        </motion.div>
      </div>
    </section>
  );
}
