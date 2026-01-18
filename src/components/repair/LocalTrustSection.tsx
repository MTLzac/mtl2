import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MapPin } from "lucide-react";
import { PRIMARY_PHONE } from "@/lib/locations";

interface LocalTrustSectionProps {
  heading?: string;
  paragraph: string;
}

const REPAIR_WIDGET_URL = "https://shop.mobiletechlab.ca/pages/repair2";

export const LocalTrustSection = ({ 
  heading = "Serving Winnipeg & Thompson – Book Your Repair Today",
  paragraph
}: LocalTrustSectionProps) => {
  return (
    <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <MapPin className="h-4 w-4" />
            Locally Owned & Operated
          </div>
          
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            {heading}
          </h2>
          
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            {paragraph}
          </p>
          
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gradient-primary text-lg" asChild>
              <a href={REPAIR_WIDGET_URL} target="_blank" rel="noopener noreferrer">
                Request a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg" asChild>
              <a href={`tel:${PRIMARY_PHONE}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
