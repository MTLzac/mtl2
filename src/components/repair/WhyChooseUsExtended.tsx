import { Shield, Clock, Award, Wrench, MapPin, DollarSign, LucideIcon } from "lucide-react";

interface WhyChooseUsExtendedProps {
  heading?: string;
  paragraph: string;
  highlights?: {
    icon: LucideIcon;
    text: string;
  }[];
}

const DEFAULT_HIGHLIGHTS = [
  { icon: Clock, text: "Same-day repairs on most devices" },
  { icon: DollarSign, text: "Price match guarantee" },
  { icon: Award, text: "Quality parts & workmanship" },
  { icon: MapPin, text: "Two Manitoba locations" },
  { icon: Shield, text: "Warranty on all repairs" },
  { icon: Wrench, text: "Experienced technicians" },
];

export const WhyChooseUsExtended = ({ 
  heading = "Why We're Winnipeg's Trusted Repair Specialists",
  paragraph,
  highlights = DEFAULT_HIGHLIGHTS
}: WhyChooseUsExtendedProps) => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">
            {heading}
          </h2>
          
          <div className="mb-10 rounded-xl border border-border/50 bg-card p-6 md:p-8">
            <p className="text-lg leading-relaxed text-foreground/90">
              {paragraph}
            </p>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 rounded-lg bg-primary/5 p-4"
              >
                <div className="flex-shrink-0 rounded-full bg-primary/10 p-2 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <span className="font-medium text-foreground/90">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
