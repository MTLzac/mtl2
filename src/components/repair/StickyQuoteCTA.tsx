import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const REPAIR_WIDGET_URL = "https://shop.mobiletechlab.ca/pages/repair2";

export const StickyQuoteCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 p-4 backdrop-blur-sm md:hidden">
      <Button className="w-full gradient-primary" size="lg" asChild>
        <a href={REPAIR_WIDGET_URL} target="_blank" rel="noopener noreferrer">
          Get a Free Quote
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </Button>
    </div>
  );
};
