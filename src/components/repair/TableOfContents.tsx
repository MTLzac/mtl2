import { useState, useEffect } from "react";
import { List, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface TOCItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

const DEFAULT_ITEMS: TOCItem[] = [
  { id: "services", label: "Services" },
  { id: "models", label: "Models" },
  { id: "why-choose-us", label: "Why Us" },
  { id: "locations", label: "Locations" },
  { id: "faqs", label: "FAQs" },
];

export const TableOfContents = ({ items = DEFAULT_ITEMS }: TableOfContentsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-4 z-40 md:bottom-8">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleContent className="mb-2 overflow-hidden rounded-lg border border-border bg-card shadow-lg">
          <div className="p-2">
            <p className="mb-2 px-2 text-xs font-medium text-muted-foreground">
              Jump to section
            </p>
            <nav className="flex flex-col gap-1">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-muted ${
                    activeId === item.id
                      ? "bg-primary/10 font-medium text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </CollapsibleContent>
        <CollapsibleTrigger asChild>
          <Button
            size="icon"
            variant="outline"
            className="h-12 w-12 rounded-full border-border bg-card shadow-lg"
          >
            {isOpen ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <List className="h-5 w-5" />
            )}
          </Button>
        </CollapsibleTrigger>
      </Collapsible>
    </div>
  );
};
