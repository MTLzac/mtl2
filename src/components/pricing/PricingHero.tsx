import { Star, ThumbsUp, Shield, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const TRUST_BADGES = [
  { icon: Star, label: "4.8★ Google Rating" },
  { icon: ThumbsUp, label: "500+ Reviews" },
  { icon: Shield, label: "Price Match Guarantee" },
];

const ANCHOR_LINKS = [
  { label: "Screen Options", href: "#screen-options" },
  { label: "Turnaround", href: "#turnaround" },
  { label: "Data Services", href: "#data-options" },
  { label: "FAQ", href: "#faq" },
];

export const PricingHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* H1 */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Repair Pricing Explained{" "}
            <span className="text-primary">(Winnipeg)</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            We don't publish fixed prices because repair costs depend on your
            specific device, the parts available, and current part costs. Here's
            how we think about pricing so you can understand your options and
            avoid surprises.
          </p>

          {/* Trust Badges */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
            {TRUST_BADGES.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium shadow-sm border border-border"
              >
                <badge.icon className="h-4 w-4 text-primary" />
                <span>{badge.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 shadow-lg"
              asChild
            >
              <a href="https://mobiletechlab.ca/quote" target="_blank" rel="noopener noreferrer">
                Get Repair Quote
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8"
              asChild
            >
              <a href="tel:2045009757" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call for Quote (204) 500-9757
              </a>
            </Button>
          </div>

          {/* Part-cost transparency micro-line */}
          <p className="mb-8 text-sm text-muted-foreground/80">
            Repair pricing generally follows real part costs. When part costs drop over time, repair prices often follow.
          </p>

          {/* Anchor Links */}
          <nav className="flex flex-wrap items-center justify-center gap-2 text-sm">
            <span className="text-muted-foreground">Jump to:</span>
            {ANCHOR_LINKS.map((link, index) => (
              <span key={link.href} className="flex items-center">
                <a
                  href={link.href}
                  className="text-primary hover:text-primary/80 hover:underline"
                >
                  {link.label}
                </a>
                {index < ANCHOR_LINKS.length - 1 && (
                  <span className="ml-2 text-muted-foreground">|</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
    </section>
  );
};
