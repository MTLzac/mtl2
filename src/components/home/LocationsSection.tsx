import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LOCATIONS } from "@/lib/locations";
import { Badge } from "@/components/ui/badge";

export const LocationsSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">Our Locations</h2>
          <p className="text-lg text-muted-foreground">
            Visit us at one of our Manitoba locations
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {LOCATIONS.map((location, index) => (
            <Card
              key={location.name}
              className={`overflow-hidden ${
                index === 0 ? "border-primary/30 ring-1 ring-primary/20" : ""
              }`}
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold">{location.name}</h3>
                  {index === 0 && (
                    <Badge variant="default" className="bg-primary">
                      Primary
                    </Badge>
                  )}
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      {location.address}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <a
                      href={`tel:${location.phone}`}
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      {location.phoneFormatted}
                    </a>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                    <div className="text-sm text-muted-foreground">
                      {location.hours.map((hour) => (
                        <p key={hour}>{hour}</p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-success/10 text-success"
                  >
                    Walk-ins Welcome
                  </Badge>
                </div>

                <Button className="mt-4 w-full" variant="outline" asChild>
                  <a
                    href={location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
