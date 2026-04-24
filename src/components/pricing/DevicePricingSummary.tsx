import { ArrowRight, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DEVICE_PRICING_CARDS } from "@/lib/pricing-data";

export const DevicePricingSummary = () => {
  return (
    <section id="device-pricing" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-center text-3xl font-bold text-foreground md:text-4xl">
            Device Pricing Summary — Current April 2026
          </h2>

          {/* Callout banner */}
          <div className="mb-10 flex items-start gap-4 rounded-lg border border-primary/20 bg-primary/5 p-6">
            <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <p className="text-sm text-foreground leading-relaxed">
              Prices below are anchor starting points and typical ranges, current as of April 2026. Your exact quote depends on device model, damage extent, and current part availability. When part costs drop, our quotes drop — we don't maintain artificial price floors.
            </p>
          </div>

          {/* Device cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {DEVICE_PRICING_CARDS.map((card) => (
              <Card
                key={card.title}
                className="flex flex-col border-border/50 transition-shadow hover:shadow-lg"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{card.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="mb-6 flex-1 text-sm text-muted-foreground leading-relaxed">
                    {card.body}
                  </p>
                  <div className="space-y-2 border-t border-border pt-4">
                    {card.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 hover:underline"
                      >
                        {link.label}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Footnote */}
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Non-listed devices (Google Pixel, Motorola, TCL, Sony Xperia, Nintendo Switch, and others) are quoted individually. Use the Get Repair Quote button for exact current pricing on any device not shown above.
          </p>
        </div>
      </div>
    </section>
  );
};
