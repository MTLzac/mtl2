import { 
  HardDrive, 
  Wrench, 
  Clock, 
  MapPin,
  Smartphone,
  CheckCircle
} from "lucide-react";

const PRIMARY_REASONS = [
  {
    icon: Wrench,
    title: "Repairs Other Shops Turn Away",
    description: "We fix devices and models many repair shops no longer support — including older phones, consoles, and complex board-level issues.",
  },
  {
    icon: HardDrive,
    title: "Recover What Matters Most",
    description: "Professional data recovery from water-damaged, broken, or unresponsive devices — even when a full repair isn't possible.",
  },
  {
    icon: Clock,
    title: "Back in Your Hands Faster",
    description: "Same-day service available on most repairs, so you're not without your device longer than necessary.",
  },
];

const SECONDARY_REASONS = [
  {
    icon: MapPin,
    title: "Two Convenient Manitoba Locations",
    description: "Serving customers in Winnipeg and Thompson with consistent service and support.",
  },
  {
    icon: Smartphone,
    title: "Quality Pre-Owned Options",
    description: "If repair isn't the best value, we offer thoroughly tested pre-owned devices at affordable prices.",
  },
];

export const WhyChooseSection = () => {
  return (
    <section className="bg-foreground py-20 text-background md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            Why Thousands of Manitobans Trust Mobile Tech Lab
          </h2>
          <p className="text-base text-background/60">
            Real repairs, honest advice, and solutions other shops won't offer.
          </p>
        </div>

        {/* Tier 1 — Primary Decision Drivers */}
        <div className="mx-auto mb-10 grid max-w-6xl gap-6 md:grid-cols-3">
          {PRIMARY_REASONS.map((reason) => (
            <div
              key={reason.title}
              className="rounded-xl bg-background/[0.06] p-6 md:p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15">
                <reason.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold md:text-xl">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-background/70 md:text-base">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Tier 2 — Supporting Reassurance */}
        <div className="mx-auto mb-12 grid max-w-3xl gap-5 md:grid-cols-2">
          {SECONDARY_REASONS.map((reason) => (
            <div
              key={reason.title}
              className="flex items-start gap-4 rounded-lg bg-background/[0.03] p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                <reason.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 text-base font-semibold">{reason.title}</h3>
                <p className="text-sm text-background/60">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Credibility Anchor */}
        <div className="flex items-center justify-center gap-2 text-center">
          <CheckCircle className="h-4 w-4 text-primary" />
          <p className="text-sm text-background/50">
            Trusted by 500+ five-star customers across Manitoba.
          </p>
        </div>
      </div>
    </section>
  );
};
