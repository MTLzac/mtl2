import { ShieldCheck, Users, Clock, Award } from "lucide-react";

interface WhyChooseUsLocationProps {
  cityName: string;
}

const reasons = [
  {
    icon: ShieldCheck,
    title: "No Local Shop? No Problem",
    description: "Our mail-in service brings professional repairs to you, wherever you are in Manitoba.",
  },
  {
    icon: Award,
    title: "Same Warranty as In-Store",
    description: "Mail-in repairs get the same quality parts and warranty coverage as walk-in customers.",
  },
  {
    icon: Users,
    title: "Real Humans, Real Support",
    description: "Call or text us anytime. You'll talk to a real technician, not a chatbot.",
  },
  {
    icon: Clock,
    title: "Serving Manitoba Since 2017",
    description: "7+ years of trusted repairs. Thousands of satisfied customers across the province.",
  },
];

export const WhyChooseUsLocation = ({ cityName }: WhyChooseUsLocationProps) => {
  return (
    <section className="bg-muted/30 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Why {cityName} Residents Choose Us
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Distance shouldn't mean compromising on quality. Here's why customers across Manitoba trust us.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-4">
              <div className="shrink-0">
                <div className="inline-flex rounded-full bg-primary/10 p-3 text-primary">
                  <reason.icon className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
