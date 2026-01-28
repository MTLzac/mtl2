import { Phone, ArrowRight, MapPin, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRIMARY_PHONE, PRIMARY_PHONE_FORMATTED } from "@/lib/locations";

const REPAIR_WIDGET_URL = "https://shop.mobiletechlab.ca/pages/repair2";

interface MailInHeroProps {
  cityName: string;
  distanceToWinnipeg: string;
  driveTime: string;
}

export const MailInHero = ({ cityName, distanceToWinnipeg, driveTime }: MailInHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 md:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-50" />
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Location badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <MapPin className="h-4 w-4" />
            Serving {cityName}, Manitoba
          </div>
          
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Device Repair for{" "}
            <span className="text-primary">{cityName}, MB</span>
          </h1>
          
          <p className="mb-6 text-xl text-muted-foreground md:text-2xl">
            Mail-In Service or Visit Winnipeg
          </p>
          
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            While we don't have a physical location in {cityName}, we make device repair easy. 
            Ship your device to us with free prepaid labels, or visit our Winnipeg shop—only {driveTime} away. 
            Same quality service. Same warranty. Real technicians.
          </p>
          
          {/* Quick stats */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-primary" />
              <span>Free shipping both ways</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{distanceToWinnipeg} to Winnipeg</span>
            </div>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="gradient-primary w-full px-8 text-lg font-semibold sm:w-auto"
              asChild
            >
              <a href={REPAIR_WIDGET_URL} target="_blank" rel="noopener noreferrer">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="w-full text-lg sm:w-auto"
              asChild
            >
              <a href={`tel:${PRIMARY_PHONE}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call {PRIMARY_PHONE_FORMATTED}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
