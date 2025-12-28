import { 
  HardDrive, 
  Wrench, 
  Smartphone, 
  Clock, 
  MapPin 
} from "lucide-react";

const REASONS = [
  {
    icon: HardDrive,
    title: "Recover Precious Memories",
    description: "Data recovery from damaged, water-logged, or broken devices",
  },
  {
    icon: Wrench,
    title: "We Fix What Others Won't",
    description: "Repairs for models manufacturers have abandoned",
  },
  {
    icon: Smartphone,
    title: "Quality Pre-Owned Devices",
    description: "Affordable alternatives to buying new",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Same-day service available on most repairs",
  },
  {
    icon: MapPin,
    title: "Two Convenient Locations",
    description: "Serving Winnipeg and Thompson, Manitoba",
  },
];

export const WhyChooseSection = () => {
  return (
    <section className="bg-foreground py-16 text-background md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            Why Choose Mobile Tech Lab?
          </h2>
          <p className="text-lg text-background/70">
            Manitoba's trusted device repair experts
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, index) => (
            <div
              key={reason.title}
              className={`flex items-start gap-4 ${
                index === REASONS.length - 1 && REASONS.length % 3 !== 0
                  ? "lg:col-span-1 lg:justify-self-center"
                  : ""
              }`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary">
                <reason.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold">{reason.title}</h3>
                <p className="text-sm text-background/70">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
