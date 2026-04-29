import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, ArrowRight } from "lucide-react";

const QUOTE_URL = "https://shop.mobiletechlab.ca/pages/repair2";

export const RuralMailInCallout = () => {
  return (
    <div className="container mx-auto px-4 -mt-4 pb-16">
      <Card className="mx-auto max-w-4xl border-primary/30 bg-primary/5">
        <CardContent className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:gap-6 md:p-8">
          <div className="rounded-full bg-primary/10 p-3 text-primary shrink-0">
            <Truck className="h-6 w-6" />
          </div>
          <div className="flex-1 space-y-2">
            <h3 className="text-lg font-bold">Outside Winnipeg or Thompson?</h3>
            <p className="text-sm text-muted-foreground">
              We accept mail-in trade-ins from anywhere in Manitoba — Brandon, Portage la Prairie, Steinbach, Selkirk, Dauphin, Morden, Winkler, and rural communities across the province. Free trackable shipping. Same-day payment after our techs inspect your device. Contact us for shipping instructions.
            </p>
          </div>
          <Button className="shrink-0 gradient-primary" asChild>
            <a href={QUOTE_URL} target="_blank" rel="noopener noreferrer">
              Request a Mail-In Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
