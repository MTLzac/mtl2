import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, MessageSquare, AlertTriangle, Star, Smartphone, Tablet, Laptop, Apple } from "lucide-react";
import { PRIMARY_PHONE, PRIMARY_PHONE_FORMATTED } from "@/lib/locations";
import heroImage from "@/assets/hero-water-damage.png";

export const WaterDamageHero = () => {
  const trustBadges = [
    { icon: Star, label: "4.9 from 500+ Google reviews" },
    { icon: null, label: "Walk-Ins Welcome" },
    { icon: null, label: "Honest Assessment" },
    { icon: null, label: "Same-Day Diagnostic" },
  ];

  const deviceCategories = [
    { icon: Smartphone, label: "Phones" },
    { icon: Tablet, label: "Tablets" },
    { icon: Laptop, label: "Laptops" },
    { icon: Apple, label: "MacBooks" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/20 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-2 text-sm font-medium text-destructive">
              <AlertTriangle className="h-4 w-4" />
              Act Fast — Every Hour Matters
            </div>
            <img
              src={heroImage}
              alt="Water damaged phone illustration"
              className="h-16 w-auto object-contain opacity-80"
            />
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Water Damage Repair in Winnipeg —
            <span className="block text-primary">Phone, Tablet, Laptop, MacBook</span>
          </h1>

          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Liquid damage is unpredictable. We're one of the few Manitoba repair shops honest enough to tell you that upfront — no false promises, no guaranteed outcomes. We assess every liquid-damaged device individually, then explain your real options: repair, data recovery, or replacement.
            </p>
            <p>
              Bring it in — <Link to="/repair/iphone" className="text-primary hover:underline">phone</Link>, tablet, laptop, or <Link to="/repair/macbook" className="text-primary hover:underline">MacBook</Link>. Walk-ins welcome at our St. Vital (Winnipeg) and Thompson locations. <strong className="text-foreground">$49 diagnostic fee</strong> identifies your exact situation; data recovery attempts <strong className="text-foreground">from $129+tax</strong>. The sooner we see it, the better the chances.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="gap-2" asChild>
              <a href="/#quote">
                <MessageSquare className="h-5 w-5" />
                Get Diagnostic Quote
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href={`tel:${PRIMARY_PHONE}`}>
                <Phone className="h-5 w-5" />
                Call For Help ({PRIMARY_PHONE_FORMATTED})
              </a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {trustBadges.map((badge, i) => (
              <div key={i} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground">
                {badge.icon && <badge.icon className="h-3.5 w-3.5 fill-primary text-primary" />}
                {badge.label}
              </div>
            ))}
          </div>

          {/* Device category icons */}
          <div className="flex flex-wrap gap-3 pt-2">
            {deviceCategories.map((cat, i) => (
              <div key={i} className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground">
                <cat.icon className="h-4 w-4 text-primary" />
                {cat.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-secondary/30 blur-3xl" />
    </section>
  );
};
