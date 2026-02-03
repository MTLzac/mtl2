const CURRENT_YEAR = new Date().getFullYear();

export const InfographicHero = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
          Repair or Replace Your Device?
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-6">
          Canadian Repair, Cost & E-Waste Statistics ({CURRENT_YEAR})
        </p>
        
        <p className="text-sm text-muted-foreground">
          Last Updated: {new Date().toLocaleDateString('en-CA', { month: 'long', year: 'numeric' })} • Geographic Scope: Canada
        </p>
        
        {/* Divider */}
        <div className="mt-8 border-b-2 border-primary/30 w-24 mx-auto" />
      </div>
    </section>
  );
};
