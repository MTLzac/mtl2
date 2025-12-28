import { Shield, Clock, Award, Wrench } from "lucide-react";

const ALL_BENEFITS = [
  {
    id: "fast-turnaround",
    icon: Clock,
    title: "Fast Turnaround",
    description: "Most repairs completed same-day or within 24-48 hours",
  },
  {
    id: "warranty",
    icon: Shield,
    title: "Warranty Included",
    description: "All repairs backed by our service warranty for peace of mind",
  },
  {
    id: "quality-parts",
    icon: Award,
    title: "Quality Parts",
    description: "We use high-quality replacement parts for lasting repairs",
  },
  {
    id: "expert-technicians",
    icon: Wrench,
    title: "Expert Technicians",
    description: "Skilled technicians with years of device repair experience",
  },
];

interface WhyChooseUsProps {
  hideWarranty?: boolean;
}

export const WhyChooseUs = ({ hideWarranty = false }: WhyChooseUsProps) => {
  const benefits = hideWarranty 
    ? ALL_BENEFITS.filter(benefit => benefit.id !== "warranty")
    : ALL_BENEFITS;

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Why Choose Mobile Tech Lab?
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Winnipeg's trusted device repair specialists since day one
          </p>
        </div>
        
        <div className={`mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 ${hideWarranty ? 'lg:grid-cols-3' : 'lg:grid-cols-4'}`}>
          {benefits.map((benefit) => (
            <div key={benefit.id} className="text-center">
              <div className="mx-auto mb-4 inline-flex rounded-full bg-primary/10 p-4 text-primary">
                <benefit.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
