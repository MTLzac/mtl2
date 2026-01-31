import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, AlertTriangle } from "lucide-react";
import { PRIMARY_PHONE } from "@/lib/locations";
import heroImage from "@/assets/hero-water-damage.png";

export const WaterDamageHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/20 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Badge with inline illustration */}
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-2 text-sm font-medium text-destructive">
              <AlertTriangle className="h-4 w-4" />
              Act Fast – Time Is Critical
            </div>
            <img
              src={heroImage}
              alt="Water damaged phone illustration"
              className="h-16 w-auto object-contain opacity-80"
            />
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Water & Liquid Damage Repair
            <span className="block text-primary">(Winnipeg)</span>
          </h1>
          
          <p className="text-lg text-muted-foreground">
            Liquid damage is unpredictable. We focus on <strong>honest diagnostics and data recovery first</strong> — with no false promises.
          </p>
          
          <p className="text-sm text-muted-foreground">
            Phones, tablets, and computers exposed to water, spills, or moisture.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="gap-2" asChild>
              <a href="/#quote">
                <MessageSquare className="h-5 w-5" />
                Get Diagnostic Quote
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href={`tel:${PRIMARY_PHONE.replace(/[^0-9]/g, '')}`}>
                <Phone className="h-5 w-5" />
                Call For Help ({PRIMARY_PHONE})
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-secondary/30 blur-3xl" />
    </section>
  );
};
