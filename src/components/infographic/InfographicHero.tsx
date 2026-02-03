const CURRENT_YEAR = new Date().getFullYear();

export const InfographicHero = () => {
  return (
    <section className="py-12 md:py-16 border-b border-border">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-center mb-6">
          Repair or Replace Your Device?
          <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground mt-2">
            Canadian Repair, Cost & E-Waste Statistics ({CURRENT_YEAR})
          </span>
        </h1>
        
        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed">
          Neutral, fact-based data to help Canadians decide whether to repair, replace, or trade in their devices. 
          All statistics are sourced from public research and industry data.
        </p>
        
        <p className="text-sm text-muted-foreground text-center mt-4">
          Updated quarterly • Last updated: {new Date().toLocaleDateString('en-CA', { month: 'long', year: 'numeric' })}
        </p>
      </div>
    </section>
  );
};
