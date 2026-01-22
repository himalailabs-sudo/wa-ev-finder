interface LatestDataSectionProps {
  children: React.ReactNode;
}

export function LatestDataSection({ children }: LatestDataSectionProps) {
  return (
    <section id="latest" className="scroll-mt-20">
      <div className="mb-6">
        <h2 className="sr-only">Latest EV Registration Statistics</h2>
        <p className="text-muted-foreground max-w-3xl">
          The statistics and charts below reflect current Washington State electric vehicle registration 
          data. Explore total counts, BEV vs PHEV breakdown, trends over time, geographic distribution 
          by county, and the most popular brands and models registered in the state.
        </p>
      </div>
      {children}
    </section>
  );
}
