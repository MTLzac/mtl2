import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";
import { PRIMARY_PHONE, PRIMARY_PHONE_FORMATTED } from "@/lib/locations";

export const WaterDamageFinalCTA = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Liquid Damage? Bring It In Now.
          </h2>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            The sooner we see your device, the better. Walk-ins welcome at our St. Vital (Winnipeg) and Thompson locations. $49 diagnostic identifies your real options — repair, data recovery, or replacement. No false promises, no pressure. If we can't honestly help, we'll tell you who can.
            <br /><br />
            <strong className="text-foreground">Most liquid damage cases need same-day attention. Don't wait.</strong>
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center mb-6">
            <Button size="lg" className="gap-2" asChild>
              <a href="/#quote">
                <MessageSquare className="h-5 w-5" />
                Get Diagnostic Quote
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href={`tel:${PRIMARY_PHONE}`}>
                <Phone className="h-5 w-5" />
                Call {PRIMARY_PHONE_FORMATTED}
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            We'll explain your options honestly — even if the answer is "don't pay us, restore from backup."
          </p>
        </div>
      </div>
    </section>
  );
};
