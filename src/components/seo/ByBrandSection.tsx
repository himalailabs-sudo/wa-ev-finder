interface ByBrandSectionProps {
  topMakes?: { name: string; count: number }[];
}

export function ByBrandSection({ topMakes }: ByBrandSectionProps) {
  const topBrand = topMakes?.[0]?.name;

  return (
    <section id="by-brand" className="scroll-mt-20 py-12 border-t border-border/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          EV Registrations by Brand
        </h2>
        
        <div className="prose prose-invert max-w-none space-y-4 text-muted-foreground">
          <p className="text-lg leading-relaxed">
            The brand breakdown of electric vehicle registrations in Washington State reveals consumer 
            preferences and market dynamics within the EV sector. The charts above show which manufacturers 
            have captured the largest share of the state's EV market.
          </p>

          {topBrand && (
            <p className="leading-relaxed">
              As shown in the data, <strong className="text-foreground">{topBrand}</strong> leads Washington's 
              EV registrations, reflecting the brand's early market entry, extensive Supercharger network, 
              and strong brand recognition among EV buyers. However, competition has intensified as 
              traditional automakers expand their electric offerings and new EV-focused manufacturers enter 
              the market.
            </p>
          )}

          <p className="leading-relaxed">
            The top models table provides additional granularity, showing which specific vehicle models 
            are most popular among Washington EV owners. This data can help prospective buyers understand 
            what their neighbors are driving and may indicate which models offer the best value, range, 
            or features for Pacific Northwest conditions.
          </p>

          <p className="leading-relaxed text-sm">
            Note: Brand registration counts reflect the total number of currently registered vehicles, 
            including both new and used vehicles. They do not represent new sales figures or market share 
            of new vehicle sales specifically.
          </p>
        </div>
      </div>
    </section>
  );
}
