import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon, ArrowRight } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  name: string;
  description: string;
}

interface ServiceGridProps {
  services: Service[];
  deviceName: string;
}

const REPAIR_WIDGET_URL = "https://shop.mobiletechlab.ca/pages/repair2";

export const ServiceGrid = ({ services, deviceName }: ServiceGridProps) => {
  return (
    <section className="bg-secondary/30 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            {deviceName} Repair Services in Winnipeg
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Expert repairs for all {deviceName} issues. Fast turnaround, quality parts, and warranty included.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group w-full border-border/50 bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{service.name}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button size="lg" className="gradient-primary" asChild>
            <a href={REPAIR_WIDGET_URL} target="_blank" rel="noopener noreferrer">
              Request Repair
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
