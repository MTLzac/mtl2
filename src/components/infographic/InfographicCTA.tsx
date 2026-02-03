import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const InfographicCTA = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/30" aria-labelledby="cta-section">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 
          id="cta-section"
          className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4"
        >
          The right choice depends on the device — not pressure.
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          If you want help deciding, we're here.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/contact">
              Get a Free Consultation
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg">
            <Link to="/trade-in">
              Explore Trade-In Options
            </Link>
          </Button>
        </div>
        
        <p className="mt-8 text-sm text-muted-foreground">
          Learn more about{" "}
          <Link to="/repair-pricing" className="text-primary hover:underline">
            how repair pricing works
          </Link>
          {" "}or browse our{" "}
          <Link to="/repair/iphone" className="text-primary hover:underline">
            repair services
          </Link>.
        </p>
      </div>
    </section>
  );
};
