import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { INSURANCE_FAQS } from "@/lib/screen-insurance-data";

const SHOP_URL = "https://shop.mobiletechlab.ca/products/screen-protection";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, type: "spring", stiffness: 100, damping: 20 }}
      className={`relative rounded-[32px] overflow-hidden border backdrop-blur-xl transition-all duration-500 ${
        isOpen
          ? "bg-white/70 border-destructive/30 shadow-2xl"
          : "bg-white/40 border-white/20 shadow-sm"
      }`}
    >
      {/* Fresnel corners */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white/40 rounded-tl-[32px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white/40 rounded-tr-[32px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white/40 rounded-bl-[32px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white/40 rounded-br-[32px] pointer-events-none" />

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 sm:p-8 flex items-center justify-between text-left gap-4"
      >
        <div className="flex items-center gap-4">
          <div
            className={`p-2 rounded-lg transition-colors ${
              isOpen ? "bg-destructive text-white" : "bg-muted text-muted-foreground"
            }`}
          >
            <HelpCircle size={20} />
          </div>
          <span className="text-base sm:text-lg font-bold text-foreground tracking-tight leading-tight">
            {question}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="flex-shrink-0"
        >
          {isOpen ? (
            <Minus size={20} className="text-destructive" />
          ) : (
            <Plus size={20} className="text-muted-foreground" />
          )}
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
              <p className="text-muted-foreground font-medium leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function InsuranceFAQ() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-[#fcfcfd]">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-full bg-destructive/[0.015] blur-[140px] rounded-full pointer-events-none"
        style={{ maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)" }}
      />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-20 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/20 shadow-sm text-muted-foreground font-black text-[10px] uppercase tracking-[0.2em]">
            Support & Clarity
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground tracking-tighter leading-none">
            Common{" "}
            <span className="text-destructive">Questions.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium mx-auto max-w-xl">
            Everything you need to know about our protection plan. Still curious? Visit us in-store.
          </p>
        </motion.div>

        <div className="space-y-4">
          {INSURANCE_FAQS.map((faq, i) => (
            <FAQItem key={i} index={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 md:mt-20 flex flex-col items-center gap-6"
        >
          <Button size="lg" className="gradient-primary text-lg px-10 py-6 h-auto rounded-2xl" asChild>
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
              Protect Your Device Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <div className="flex items-center gap-6 opacity-40">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
              <ShieldCheck size={14} className="text-destructive" />
              Secure Activation
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
              One-Time $50 Payment
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
