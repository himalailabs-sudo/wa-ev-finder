interface BevVsPhevSectionProps {
  bevCount?: number;
  phevCount?: number;
  totalCount?: number;
}

export function BevVsPhevSection({ bevCount, phevCount, totalCount }: BevVsPhevSectionProps) {
  const bevPercentage = bevCount && totalCount ? ((bevCount / totalCount) * 100).toFixed(1) : null;
  const phevPercentage = phevCount && totalCount ? ((phevCount / totalCount) * 100).toFixed(1) : null;

  return (
    <section id="bev-vs-phev" className="scroll-mt-20 py-12 border-t border-border/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          BEV vs PHEV Registrations in Washington
        </h2>
        
        <div className="prose prose-invert max-w-none space-y-4 text-muted-foreground">
          <p className="text-lg leading-relaxed">
            Understanding the distinction between Battery Electric Vehicles (BEV) and Plug-in Hybrid Electric 
            Vehicles (PHEV) is essential when analyzing Washington's electric vehicle landscape. These two 
            categories represent different approaches to electric mobility, each with unique characteristics 
            that influence consumer choice and adoption patterns across the state.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-secondary/30 p-6 rounded-xl border border-border/50">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Battery Electric Vehicles (BEV)
              </h3>
              <p className="text-sm leading-relaxed">
                BEVs run entirely on electric power stored in rechargeable battery packs. They have no gasoline 
                engine, producing zero direct emissions. Popular BEV examples include the Tesla Model 3, 
                Tesla Model Y, Nissan Leaf, and Chevrolet Bolt. BEVs typically offer ranges from 100 to 
                over 300 miles on a single charge, depending on the model and battery capacity.
              </p>
              {bevPercentage && (
                <p className="text-sm text-primary mt-3 font-medium">
                  Currently represents {bevPercentage}% of Washington's EV registrations
                </p>
              )}
            </div>

            <div className="bg-secondary/30 p-6 rounded-xl border border-border/50">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Plug-in Hybrid Electric Vehicles (PHEV)
              </h3>
              <p className="text-sm leading-relaxed">
                PHEVs combine an electric motor and battery with a traditional gasoline engine. They can 
                operate on electric power alone for shorter distances (typically 20-50 miles) before the 
                gasoline engine activates. Examples include the Toyota Prius Prime, BMW X5 xDrive45e, and 
                Jeep Wrangler 4xe. PHEVs offer flexibility for drivers who want electric benefits without 
                range anxiety.
              </p>
              {phevPercentage && (
                <p className="text-sm text-primary mt-3 font-medium">
                  Currently represents {phevPercentage}% of Washington's EV registrations
                </p>
              )}
            </div>
          </div>

          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
            Electric Vehicle Adoption Trends in Washington
          </h3>
          <p className="leading-relaxed">
            Washington State has emerged as a leader in electric vehicle adoption, consistently ranking among 
            the top states for EV market share. The trend toward BEVs has accelerated in recent years as 
            battery technology improves, charging infrastructure expands, and more affordable models enter 
            the market. PHEVs continue to serve as an important bridge for consumers transitioning from 
            traditional vehicles, particularly in rural areas where charging access may be limited.
          </p>

          <p className="leading-relaxed">
            The BEV vs PHEV breakdown displayed on this dashboard reflects the current state of Washington's 
            electric vehicle market. As charging networks grow throughout the state—including along major 
            corridors like I-5 and I-90—many analysts expect the BEV share to continue increasing. However, 
            PHEVs remain a practical choice for households with varied driving needs or limited home charging 
            capability.
          </p>
        </div>
      </div>
    </section>
  );
}
