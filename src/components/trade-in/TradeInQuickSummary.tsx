import { CheckCircle2 } from "lucide-react";

const bullets = [
  "Mobile Tech Lab buys phones, tablets, laptops, MacBooks, game consoles, video games, gaming accessories, and smartwatches at our St. Vital (Winnipeg) and Thompson, MB locations — or mail in from anywhere in Manitoba.",
  "Same-day cash, e-transfer, or store credit. Unlike carrier trade-in programs (which pay in bill credit toward a new contract), we pay you outright.",
  "We buy tested broken devices — including phones with smashed screens or dark displays. We install temporary parts to verify the device works, then make a fair offer.",
  "We don't buy: audio products (any brand), locked devices (iCloud / carrier / financing-locked), non-testable blacked-out devices, or devices for parts only.",
];

export const TradeInQuickSummary = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-2xl border border-border/50 bg-card p-6 md:p-10 shadow-sm">
          <h2 className="mb-2 text-2xl font-bold md:text-3xl">Quick Summary</h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Everything you need to know in 30 seconds:
          </p>
          <ul className="mb-6 space-y-3">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-sm md:text-base text-foreground/90 leading-relaxed">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground border-t border-border/50 pt-4">
            Walk-ins welcome at both locations during business hours. Online quote in 1-2 business hours. Free mail-in option for rural Manitoba customers — no need to drive in. No commitment until you accept the final offer.
          </p>
        </div>
      </div>
    </section>
  );
};
