import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export const InfographicCTA = () => {
  return (
    <section className="py-16 md:py-20" aria-labelledby="final-cta">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 
          id="final-cta" 
          className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4"
        >
          Not sure what to do?
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8">
          The right choice depends on the device — not pressure. If you want help deciding, we're here.
        </p>

        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link to="/brandon-repair" className="inline-flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Find a Location Near You
          </Link>
        </Button>
      </div>
    </section>
  );
};
