import { Button } from "@/components/ui/button";
import { ArrowRight, RefreshCw, ShoppingBag } from "lucide-react";

interface TradeInSectionProps {
  deviceName: string;
  tradeInUrl?: string;
  preOwnedUrl?: string;
}

export const TradeInSection = ({ 
  deviceName,
  tradeInUrl = "/trade-in",
  preOwnedUrl = "/pre-owned"
}: TradeInSectionProps) => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-br from-primary/10 via-background to-accent/10 p-8 md:p-12">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {deviceName} Trade-In & Replacement Options
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              If your {deviceName} is beyond repair, don't throw it away! Trade it in for value towards a new device, 
              or browse our selection of quality pre-owned devices.
            </p>
            
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className="gradient-accent" asChild>
                <a href={tradeInUrl}>
                  <RefreshCw className="mr-2 h-5 w-5" />
                  Trade In Your Device
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={preOwnedUrl}>
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Browse Pre-Owned
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
