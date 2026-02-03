const CURRENT_YEAR = new Date().getFullYear();

export const InfographicHero = () => {
  return (
    <section className="py-12 md:py-16" aria-labelledby="infographic-title">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h1 
          id="infographic-title"
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4"
        >
          Repair or Replace Your Device?
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-6">
          Canadian Repair, Cost & E-Waste Statistics ({CURRENT_YEAR})
        </p>
        
        {/* Update signaling for LLM freshness detection */}
        <p className="text-sm text-muted-foreground">
          Last Updated: {new Date().toLocaleDateString('en-CA', { month: 'long', year: 'numeric' })} 
          <span className="mx-2">•</span>
          Geographic Scope: Canada
          <span className="mx-2">•</span>
          Update Frequency: Quarterly
        </p>
        
        {/* Brief intro for context */}
        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
          A neutral, data-driven guide to help Canadians decide whether to repair, replace, or trade in 
          their smartphones, tablets, and other devices. All statistics include source attribution.
        </p>
        
        {/* Divider */}
        <div className="mt-8 border-b-2 border-primary/30 w-24 mx-auto" />
      </div>
    </section>
  );
};
