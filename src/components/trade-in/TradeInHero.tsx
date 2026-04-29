import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Star, Banknote, Wrench, Truck, Smartphone, Tablet, Laptop, Gamepad2, Watch, Disc } from "lucide-react";
import { Link } from "react-router-dom";
import { PRIMARY_PHONE } from "@/lib/locations";

const QUOTE_URL = "https://shop.mobiletechlab.ca/pages/repair2";

const trustBadges = [
  { icon: Star, label: "4.9 from 500+ Google reviews" },
  { icon: Banknote, label: "Cash, Not Bill Credit" },
  { icon: Wrench, label: "We Buy Tested Broken Devices" },
  { icon: Truck, label: "Walk-In or Mail-In" },
];

const deviceIcons = [
  { icon: Smartphone, label: "Phones" },
  { icon: Tablet, label: "Tablets" },
  { icon: Laptop, label: "Laptops" },
  { icon: Gamepad2, label: "Consoles" },
  { icon: Watch, label: "Smartwatches" },
  { icon: Disc, label: "Games" },
];

export const TradeInHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Device Trade-In Program
            </span>
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Sell Your Phone, Tablet, Laptop, or Console — <span>Same-Day Cash in Winnipeg</span>
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground">
            Get same-day cash, e-transfer, or store credit for your{" "}
            <Link to="/repair/iphone" className="text-primary hover:underline">phones</Link>, tablets, laptops,{" "}
            <Link to="/repair/macbook" className="text-primary hover:underline">MacBooks</Link>, game consoles, and even broken devices we can test. Unlike carrier trade-in programs that lock you into bill credit toward a new contract, we buy your device outright — keep your existing plan, take the cash, decide your next move separately. Walk in for an instant offer at our St. Vital or Thompson location, get a quote online in 1-2 business hours, or mail your device in from anywhere in Manitoba.
          </p>

          <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gradient-primary text-lg" asChild>
              <a href={QUOTE_URL} target="_blank" rel="noopener noreferrer">
                Get Cash Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg" asChild>
              <a href={`tel:${PRIMARY_PHONE}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call For Quote
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
            {trustBadges.map((badge, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/80 px-3 py-1.5 text-xs font-medium text-foreground/80 backdrop-blur"
              >
                <badge.icon className="h-3.5 w-3.5 text-primary" />
                {badge.label}
              </div>
            ))}
          </div>

          {/* Device Category Icons */}
          <div className="mx-auto grid max-w-3xl grid-cols-3 gap-3 sm:grid-cols-6">
            {deviceIcons.map((d, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-1.5 rounded-xl border border-border/40 bg-card/60 p-3 backdrop-blur"
                aria-hidden="true"
              >
                <d.icon className="h-5 w-5 text-primary" />
                <span className="text-xs font-medium text-muted-foreground">{d.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-1/4 h-56 w-56 rounded-full bg-primary/5 blur-3xl" />
    </section>
  );
};
