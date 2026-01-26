import { Shield, Clock, Award, Wrench, LucideIcon } from "lucide-react";

export interface AdvantagePillar {
  icon: LucideIcon;
  title: string;
  description: string;
}

const DEFAULT_BENEFITS: AdvantagePillar[] = [
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Most repairs completed same-day or within 24-48 hours",
  },
  {
    icon: Shield,
    title: "Warranty Included",
    description: "All repairs backed by our service warranty for peace of mind",
  },
  {
    icon: Award,
    title: "Quality Parts",
    description: "We use high-quality replacement parts for lasting repairs",
  },
  {
    icon: Wrench,
    title: "Expert Technicians",
    description: "Skilled technicians with years of device repair experience",
  },
];

interface WhyChooseUsProps {
  hideWarranty?: boolean;
  customPillars?: AdvantagePillar[];
}

export const WhyChooseUs = ({ hideWarranty = false, customPillars }: WhyChooseUsProps) => {
  // Use custom pillars if provided, otherwise use default benefits
  const pillars = customPillars || (hideWarranty 
    ? DEFAULT_BENEFITS.filter(benefit => benefit.title !== "Warranty Included")
    : DEFAULT_BENEFITS);

  const isCustom = !!customPillars;
  const gridCols = pillars.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4';

  return (
    <section id="why-choose-us" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            {isCustom ? "The Mobile Tech Lab Advantage: Why We Are Winnipeg's Best" : "Why Choose Mobile Tech Lab?"}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {isCustom 
              ? "Why Winnipeg customers consistently choose us for their repairs"
              : "Winnipeg's trusted device repair specialists since day one"
            }
          </p>
        </div>
        
        <div className={`mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 ${gridCols}`}>
          {pillars.map((pillar, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-4 inline-flex rounded-full bg-primary/10 p-4 text-primary">
                <pillar.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
