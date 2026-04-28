import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const REPAIR_WIDGET_URL = "https://shop.mobiletechlab.ca/pages/repair2";

export const SamsungStickyQuoteBar = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const target = document.querySelector("[data-sticky-hide-anchor]");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { rootMargin: "0px 0px -20% 0px" }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  if (hidden) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-primary/40 bg-primary px-4 py-3 shadow-lg md:hidden">
      <a
        href={REPAIR_WIDGET_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-md py-2 text-base font-semibold text-primary-foreground"
      >
        Get Your Samsung Quote — Reply in 1–2 hours
        <ArrowRight className="h-5 w-5" />
      </a>
    </div>
  );
};
