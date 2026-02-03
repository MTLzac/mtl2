import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface StatSource {
  name: string;
  url?: string;
  year: string;
  note?: string;
}

interface StatBlockProps {
  stat: string;
  source: StatSource;
  explanation?: string;
}

export const StatBlock = ({ stat, source, explanation }: StatBlockProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="border-l-2 border-primary/20 pl-4 py-3">
      <p className="text-lg font-medium text-foreground leading-relaxed">
        {stat}
      </p>
      
      {explanation && (
        <p className="mt-2 text-sm text-muted-foreground">
          {explanation}
        </p>
      )}
      
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mt-2">
        <CollapsibleTrigger className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors group">
          <ChevronDown 
            className={`h-3 w-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          />
          <span>View Source</span>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2">
          <div className="text-xs text-muted-foreground bg-muted/50 rounded px-3 py-2">
            <span className="font-medium">Source:</span>{" "}
            {source.url ? (
              <a 
                href={source.url} 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                className="text-primary hover:underline"
              >
                {source.name}
              </a>
            ) : (
              <span>{source.name}</span>
            )}
            <span className="mx-2">|</span>
            <span>{source.year}</span>
            {source.note && (
              <>
                <span className="mx-2">|</span>
                <span className="italic">{source.note}</span>
              </>
            )}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </article>
  );
};
