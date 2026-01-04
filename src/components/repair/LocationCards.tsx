import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Navigation, Truck } from "lucide-react";
import { LOCATIONS } from "@/lib/locations";

interface LocationCardsProps {
  serviceAreaNote?: string;
}

export const LocationCards = ({ serviceAreaNote }: LocationCardsProps) => {
  return (
    <section className="bg-secondary/30 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Device Repair Locations in Winnipeg & Manitoba
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Two convenient locations to serve you. Walk-ins welcome or book your appointment online.
          </p>
          {serviceAreaNote && (
            <div className="mt-4 mx-auto max-w-2xl flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Truck className="h-4 w-4 text-primary" />
              <span>{serviceAreaNote}</span>
            </div>
          )}
        </div>
        
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {LOCATIONS.map((location, index) => (
            <Card key={index} className="border-border/50 bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <MapPin className="h-5 w-5 text-primary" />
                  {location.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{location.address}</p>
                
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a 
                    href={`tel:${location.phone}`}
                    className="font-medium hover:text-primary"
                  >
                    {location.phoneFormatted}
                  </a>
                </div>
                
                <div className="flex items-start gap-2">
                  <Clock className="mt-0.5 h-4 w-4 text-primary" />
                  <div className="space-y-1">
                    {location.hours.map((hour, i) => (
                      <p key={i} className="text-sm text-muted-foreground">{hour}</p>
                    ))}
                  </div>
                </div>
                
                <Button variant="outline" className="w-full" asChild>
                  <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer">
                    <Navigation className="mr-2 h-4 w-4" />
                    Get Directions
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
