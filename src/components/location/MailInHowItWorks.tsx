import { ClipboardList, Package, Wrench, Truck } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Request a Quote",
    description: "Tell us about your device and what's wrong. We'll respond with a repair estimate.",
  },
  {
    icon: Package,
    title: "Ship Your Device",
    description: "We'll send you a free prepaid shipping label. Pack it up and drop it off at any Canada Post.",
  },
  {
    icon: Wrench,
    title: "We Repair It",
    description: "Our certified technicians fix your device with quality parts and thorough testing.",
  },
  {
    icon: Truck,
    title: "Get It Back",
    description: "We ship your repaired device back with insured delivery—usually within 3–5 business days.",
  },
];

export const MailInHowItWorks = () => {
  return (
    <section className="bg-muted/30 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">How Mail-In Repairs Work</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Simple, secure, and hassle-free—get your device repaired without leaving home.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Step Number Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                Step {index + 1}
              </div>
              
              {/* Card */}
              <div className="rounded-xl border border-border/50 bg-card p-6 pt-8 transition-all hover:border-primary/50 hover:shadow-lg">
                <div className="mx-auto mb-4 inline-flex rounded-full bg-primary/10 p-4 text-primary">
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
