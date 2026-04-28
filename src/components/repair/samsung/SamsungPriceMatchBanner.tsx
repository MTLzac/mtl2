import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeCheck } from "lucide-react";

export const SamsungPriceMatchBanner = () => {
  return (
    <section id="price-match" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl rounded-3xl border-2 border-primary/40 bg-gradient-to-br from-primary/10 via-background to-primary/5 p-7 shadow-lg md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
            <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary md:inline-flex">
              <BadgeCheck className="h-9 w-9" />
            </div>
            <div className="flex-1">
              <h2 className="mb-3 text-3xl font-extrabold text-foreground md:text-4xl">
                Found a Lower Price? We'll Match It.
              </h2>
              <div className="space-y-3 text-base text-muted-foreground md:text-lg">
                <p>
                  We price-match any verifiable local competitor's quote on Samsung repairs in
                  Winnipeg or Thompson. You don't need to shop around. Bring us a real, current
                  quote from a legitimate Manitoba repair shop and we'll match the price.
                </p>
                <p>
                  <span className="font-semibold text-foreground">Recent example:</span> A
                  customer brought us a $179 quote from another Winnipeg shop for a Galaxy A54
                  screen repair. We honoured the price and completed the repair same-day.
                </p>
              </div>
              <p className="mt-4 text-xs italic text-muted-foreground">
                Subject to verification (we may call to confirm). Quote must be from a legitimate
                Manitoba repair shop. Repair must be for the same model and same part quality
                tier. Doesn't apply to mail-in services or out-of-province shops. Ask in-store for
                full terms.
              </p>
              <div className="mt-5">
                <Button size="lg" className="gradient-primary" asChild>
                  <a href="/quote">
                    Show Us a Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
