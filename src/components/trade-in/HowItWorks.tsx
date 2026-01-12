import { ClipboardList, Package, Search, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: ClipboardList,
    title: "Request a Quote",
    description: "Tell us about your device—model, condition, and any issues. We'll respond with a quote.",
  },
  {
    icon: Package,
    title: "Ship or Drop Off",
    description: "Mail it with our free prepaid label, or drop it off at our Winnipeg location.",
  },
  {
    icon: Search,
    title: "We Inspect & Confirm",
    description: "We verify the device condition and confirm your final quote.",
  },
  {
    icon: CreditCard,
    title: "Get Paid",
    description: (
      <>
        Receive store credit toward{" "}
        <Link to="/repair/samsung" className="text-primary hover:underline">repairs</Link>
        {" "}or pre-owned devices. In-store? Get cash or E-Transfer same-day.
      </>
    ),
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">How to Sell Your Device</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Selling your device is quick and easy—just four simple steps.
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
                <p className="text-sm text-muted-foreground leading-relaxed">
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
