import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";
import { PRIMARY_PHONE } from "@/lib/locations";

export const WaterDamageFinalCTA = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-4">
            Not Sure What to Do Next?
          </h2>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center mb-6">
            <Button size="lg" className="gap-2" asChild>
              <a href="/#quote">
                <MessageSquare className="h-5 w-5" />
                Get Diagnostic Quote
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href={`tel:${PRIMARY_PHONE.replace(/[^0-9]/g, '')}`}>
                <Phone className="h-5 w-5" />
                Call For Advice
              </a>
            </Button>
          </div>

          <p className="text-muted-foreground">
            We'll explain your options honestly — even if the answer is not to repair.
          </p>
        </div>
      </div>
    </section>
  );
};
