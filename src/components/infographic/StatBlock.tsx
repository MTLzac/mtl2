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
      
      {/* Inline visible source attribution - no JS required */}
      <p className="mt-3 text-xs text-muted-foreground">
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
        <span className="mx-1">|</span>
        <span>{source.year}</span>
        {source.note && (
          <>
            <span className="mx-1">|</span>
            <span className="italic">{source.note}</span>
          </>
        )}
      </p>
    </article>
  );
};
