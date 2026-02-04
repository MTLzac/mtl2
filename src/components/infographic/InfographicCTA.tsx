import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { PRIMARY_PHONE } from "@/lib/locations";

const REPAIR_WIDGET_URL = "https://shop.mobiletechlab.ca/pages/repair2";

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
        
        <p className="text-lg text-muted-foreground mb-6">
          The right choice depends on the device — not pressure. If you want help deciding, we're here.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button asChild size="lg" className="gradient-primary">
            <a href={REPAIR_WIDGET_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              Get a Free Quote
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={`tel:${PRIMARY_PHONE}`} className="inline-flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </Button>
        </div>

        {/* Internal links for SEO and user navigation */}
        <div className="pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground mb-3">Explore more resources:</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
            <Link to="/repair-pricing" className="text-primary hover:underline underline-offset-2">
              How Repair Pricing Works
            </Link>
            <Link to="/trade-in" className="text-primary hover:underline underline-offset-2">
              Trade-In Program
            </Link>
            <Link to="/screen-quality" className="text-primary hover:underline underline-offset-2">
              Screen Quality Guide
            </Link>
            <Link to="/repair/iphone" className="text-primary hover:underline underline-offset-2">
              iPhone Repair
            </Link>
            <Link to="/repair/samsung" className="text-primary hover:underline underline-offset-2">
              Samsung Repair
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
