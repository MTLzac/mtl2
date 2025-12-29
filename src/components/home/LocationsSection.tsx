import { Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LOCATIONS } from "@/lib/locations";
import { Badge } from "@/components/ui/badge";

export const LocationsSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            Choose the Location Closest to You
          </h2>
          <p className="text-lg text-muted-foreground">
            Walk in today or call ahead for faster service.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {LOCATIONS.map((location, index) => (
            <Card
              key={location.name}
              className={`overflow-hidden transition-all duration-200 hover:shadow-lg ${
                index === 0
                  ? "border-primary/40 ring-2 ring-primary/20"
                  : "border-border/50"
              }`}
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold">
                    {index === 0 ? "St. Vital — Winnipeg" : location.name}
                  </h3>
                  {index === 0 && (
                    <Badge variant="default" className="bg-primary text-primary-foreground">
                      PRIMARY
                    </Badge>
                  )}
                </div>

                <p className="mb-6 text-sm text-muted-foreground">
                  {location.address}
                </p>

                <div className="space-y-3">
                  {/* Primary CTA - Call */}
                  <Button
                    size="lg"
                    className="w-full gradient-primary text-lg font-semibold"
                    asChild
                  >
                    <a href={`tel:${location.phone}`}>
                      <Phone className="mr-2 h-5 w-5" />
                      Call {location.phoneFormatted}
                    </a>
                  </Button>

                  {/* Secondary CTA - Directions */}
                  <Button
                    variant="outline"
                    className="w-full"
                    asChild
                  >
                    <a
                      href={location.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Navigation className="mr-2 h-4 w-4" />
                      Open in Maps
                    </a>
                  </Button>
                </div>

                {/* Reassurance */}
                <p className="mt-4 text-center text-sm text-muted-foreground">
                  {index === 0
                    ? "Walk-ins welcome • Same-day repairs available"
                    : "Walk-ins welcome"}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
