import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeCheck } from "lucide-react";

export const SamsungPriceMatchBanner = () => {
  return (
    <section id="price-match" className="py-10 md:py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-background to-success/5 p-6 md:p-8">
          <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:gap-7">
            <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary md:inline-flex">
              <BadgeCheck className="h-7 w-7" />
            </div>
            <div className="flex-1">
              <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
                We Price-Match Any Local Competitor
              </h2>
              <p className="mb-3 text-base text-muted-foreground md:text-lg">
                Found a lower price for the same Samsung repair at another Winnipeg or Thompson
                shop? Show us their quote and we'll match it. You don't need to shop around — we'll
                meet any verifiable local competitor's price on Samsung repairs.
              </p>
              <p className="text-xs italic text-muted-foreground">
                Subject to verification. Quote must be current and from a legitimate Manitoba
                repair shop. Part quality must be equivalent (Premium tier matches OEM/genuine;
                Value tier matches aftermarket). Doesn't apply to mail-in services or international
                shops. Ask in-store for full terms.
              </p>
            </div>
            <Button size="lg" className="gradient-primary shrink-0" asChild>
              <a href="/quote">
                Show Us a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
