import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

const APPLE_BULLETS = [
  "90-day Apple warranty on parts and service*",
  "Genuine Apple parts",
  "Genius Bar appointment recommended",
  "Won't service iPhone XS, XS Max, 11 Pro, 11 Pro Max",
];

const PREMIUM_BULLETS = [
  "Lifetime warranty against defects",
  "Factory-equivalent OLED quality",
  "Same-day service when in stock",
  "Save $30 – $250 vs Apple Canada",
];

const VALUE_BULLETS = [
  "30-day warranty against defects",
  "Visibly lower quality than Premium",
  "Same brightness / color for daily use",
  "Save up to $350 vs Apple Canada",
];

export const AppleComparisonStrip = () => {
  return (
    <section id="apple-comparison" className="bg-secondary/30 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            How Our Pricing Compares to Apple Canada
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Apple's official Canadian pricing vs Mobile Tech Lab Premium and Value tiers — verified April 27, 2026
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {/* Card 1 — Apple Polo Park */}
          <Card className="border-border/50 bg-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl">Apple Store Polo Park</CardTitle>
              <p className="text-sm text-muted-foreground">
                Apple Canada's official out-of-warranty service
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-3xl font-bold text-foreground">$179 – $499</div>
                <div className="text-xs text-muted-foreground">(varies by model)</div>
              </div>
              {/* Visual proportion bar — $499 = 100% scale */}
              <div className="space-y-1.5" aria-hidden="true">
                <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
                  <div className="flex h-full w-full items-center justify-end rounded-full bg-muted-foreground/60 pr-2 text-[10px] font-semibold text-background">
                    $499
                  </div>
                </div>
                <div className="text-[10px] text-muted-foreground">Top-of-range price</div>
              </div>
              <ul className="space-y-2 text-sm">
                {APPLE_BULLETS.map((b) => (
                  <li key={b} className="flex gap-2">
                    <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                    <span className="text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs italic text-muted-foreground">
                * Per{" "}
                <a
                  href="https://www.apple.com/legal/sales-support/terms/repair/Retail_Repair_US_Terms_Conditions.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Apple Repair Terms and Conditions
                </a>
                . Prices verified April 27, 2026 using{" "}
                <a
                  href="https://support.apple.com/en-ca/iphone/repair"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Apple Canada's repair pricing tool
                </a>
                .
              </p>
            </CardContent>
          </Card>

          {/* Card 2 — MTL Premium (highlighted) */}
          <Card className="relative border-2 border-primary bg-card shadow-lg md:scale-[1.02]">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
              Recommended
            </Badge>
            <CardHeader className="pb-3">
              <CardTitle className="text-xl text-primary">Mobile Tech Lab Premium</CardTitle>
              <p className="text-sm text-muted-foreground">Our recommended tier</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-3xl font-bold text-primary">$79 – $349</div>
                <div className="text-xs text-muted-foreground">
                  (by model — Premium screens, factory-equivalent OLED)
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                {PREMIUM_BULLETS.map((b) => (
                  <li key={b} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Card 3 — MTL Value */}
          <Card className="border-success/40 bg-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl text-success">Mobile Tech Lab Value</CardTitle>
              <p className="text-sm text-muted-foreground">The budget alternative</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-3xl font-bold text-success">$69 – $219</div>
                <div className="text-xs text-muted-foreground">
                  (by model — Value screens, aftermarket OLED)
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                {VALUE_BULLETS.map((b) => (
                  <li key={b} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-success" />
                    <span className="text-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <p className="mx-auto mt-8 max-w-4xl text-center text-sm text-muted-foreground">
          Both tiers professionally installed at our St. Vital and Thompson locations. Same-day
          service when parts are in stock. All Apple Canada prices verified April 27, 2026 using
          Apple's official{" "}
          <a
            href="https://getsupport.apple.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Get an Estimate tool
          </a>
          .
        </p>
      </div>
    </section>
  );
};
