import { AlertTriangle } from "lucide-react";

export const WaterDamageCleaningFee = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-lg border">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-4">
              Liquid Damage Cleaning & Fees
            </h2>
            
            <p className="text-muted-foreground mb-6">
              Liquid damage cleaning involves time-intensive inspection and corrosion removal. 
              This service is billed as a <strong className="text-foreground">non-refundable cleaning and recovery attempt</strong>, 
              regardless of outcome.
            </p>

            <div className="flex items-start gap-3 bg-muted/50 rounded-lg p-4 border border-border/50">
              <AlertTriangle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                Cleaning and recovery attempts do not guarantee repair, data recovery, or long-term device stability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
