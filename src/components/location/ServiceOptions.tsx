import { Package, MapPin, Clock, Truck, Shield, ArrowRight, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const REPAIR_WIDGET_URL = "https://shop.mobiletechlab.ca/pages/repair2";
const WINNIPEG_DIRECTIONS_URL = "https://www.google.com/maps/dir/?api=1&destination=Mobile+Tech+Lab+Winnipeg";

interface ServiceOptionsProps {
  cityName: string;
  driveTime: string;
}

export const ServiceOptions = ({ cityName, driveTime }: ServiceOptionsProps) => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Two Ways to Get Your Device Repaired</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Choose the option that works best for you—mail your device or make the trip to Winnipeg.
          </p>
        </div>
        
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {/* Mail-In Option */}
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 to-transparent p-8">
            <div className="absolute -right-4 -top-4 rounded-full bg-primary/10 p-8">
              <Package className="h-12 w-12 text-primary/30" />
            </div>
            
            <div className="relative">
              <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3 text-primary">
                <Package className="h-6 w-6" />
              </div>
              
              <h3 className="mb-2 text-2xl font-bold">Mail-In Repairs</h3>
              <p className="mb-6 text-muted-foreground">
                Ship your device from {cityName}—we handle the rest.
              </p>
              
              <ul className="mb-8 space-y-3">
                <li className="flex items-start gap-3">
                  <Truck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>Free shipping to us (we send you a label)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>3–5 business day turnaround</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>Affordable return shipping options</span>
                </li>
              </ul>
              
              <Button size="lg" className="gradient-primary w-full font-semibold" asChild>
                <a href={REPAIR_WIDGET_URL} target="_blank" rel="noopener noreferrer">
                  Get Mail-In Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Visit Winnipeg Option */}
          <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8">
            <div className="absolute -right-4 -top-4 rounded-full bg-muted p-8">
              <MapPin className="h-12 w-12 text-muted-foreground/30" />
            </div>
            
            <div className="relative">
              <div className="mb-4 inline-flex rounded-full bg-muted p-3 text-muted-foreground">
                <MapPin className="h-6 w-6" />
              </div>
              
              <h3 className="mb-2 text-2xl font-bold">Visit Winnipeg</h3>
              <p className="mb-6 text-muted-foreground">
                Same-day repairs when you visit in person.
              </p>
              
              <ul className="mb-8 space-y-3">
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>Same-day repairs available</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>Only {driveTime} from {cityName}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Navigation className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>Walk-ins welcome</span>
                </li>
              </ul>
              
              <Button size="lg" variant="outline" className="w-full" asChild>
                <a href={WINNIPEG_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                  Get Directions
                  <Navigation className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
