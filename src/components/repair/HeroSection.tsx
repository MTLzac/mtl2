import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { LiveStatusBadge } from "./LiveStatusBadge";
import defaultHeroImage from "@/assets/hero-repair-illustration.png";
import { PRIMARY_PHONE } from "@/lib/locations";
import { QuickFacts, QuickFactsData } from "./QuickFacts";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  deviceName: string;
  tagline: string;
  description: string;
  heroImage?: string;
  hideImage?: boolean;
  quickFacts?: QuickFactsData;
}

const REPAIR_WIDGET_URL = "https://shop.mobiletechlab.ca/pages/repair2";

export const HeroSection = ({ deviceName, tagline, description, heroImage, hideImage, quickFacts }: HeroSectionProps) => {
  const imageToUse = heroImage || defaultHeroImage;
  const showImage = !hideImage;
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className={showImage ? "grid items-center gap-8 lg:grid-cols-2 lg:gap-12" : "max-w-4xl mx-auto text-center"}>
          {/* Left Content */}
          <div>
            <div className={`mb-4 flex flex-wrap items-center gap-3 ${!showImage ? "justify-center" : ""}`}>
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Professional {deviceName} Repair
              </span>
              <LiveStatusBadge />
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {deviceName} Repair <span className="text-primary">Winnipeg</span> & Manitoba
            </h1>
            <p className="mb-2 text-xl font-medium text-foreground/90 md:text-2xl">
              {tagline}
            </p>
            <p className={`mb-8 text-lg text-muted-foreground ${!showImage ? "mx-auto max-w-2xl" : ""}`}>
              {description}
            </p>
            <div className={`flex flex-col gap-4 sm:flex-row ${!showImage ? "justify-center" : ""}`}>
              <Button
                size="lg"
                className="gradient-primary text-lg"
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
                className="text-lg"
                asChild
              >
                <a href={`tel:${PRIMARY_PHONE}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
            
            {/* Pricing clarity link */}
            <p className={`mt-4 text-sm text-muted-foreground ${!showImage ? "text-center" : ""}`}>
              Not sure what affects the cost?{" "}
              <Link to="/repair-pricing" className="underline underline-offset-2 hover:text-primary transition-colors">
                How repair pricing works
              </Link>
            </p>
            
            {/* Quick Facts */}
            {quickFacts && <QuickFacts facts={quickFacts} />}
          </div>

          {/* Right Image */}
          {showImage && (
            <div className="relative hidden lg:flex items-center justify-end">
              <img 
                src={imageToUse} 
                alt={`${deviceName} repair service at Mobile Tech Lab Manitoba`}
                className="w-full max-w-xl object-contain"
              />
            </div>
          )}
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-1/4 h-56 w-56 rounded-full bg-primary/5 blur-3xl" />
    </section>
  );
};