export function ByCountySection() {
  return (
    <section id="by-county" className="scroll-mt-20 py-12 border-t border-border/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          EV Registrations by County in Washington State
        </h2>
        
        <div className="prose prose-invert max-w-none space-y-4 text-muted-foreground">
          <p className="text-lg leading-relaxed">
            Electric vehicle registrations in Washington vary significantly by county, reflecting differences 
            in population density, income levels, charging infrastructure availability, and local policy 
            incentives. The county-level breakdown provides valuable insights into where EV adoption is 
            strongest and where growth opportunities exist.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
            Leading Counties for EV Adoption
          </h3>
          <p className="leading-relaxed">
            <strong className="text-foreground">King County</strong> leads Washington State in EV registrations 
            by a significant margin, driven by its large population, higher median household income, and 
            the presence of major technology employers in the Seattle metropolitan area. The county's 
            extensive charging network, including workplace and public charging stations, makes EV 
            ownership practical for many residents.
          </p>

          <p className="leading-relaxed">
            <strong className="text-foreground">Snohomish County</strong> and <strong className="text-foreground">Pierce County</strong> follow 
            as major contributors to Washington's EV population. These counties benefit from proximity to 
            Seattle, growing suburban populations, and improving charging infrastructure along the I-5 corridor.
          </p>

          <p className="leading-relaxed">
            <strong className="text-foreground">Clark County</strong>, in the Portland-Vancouver metropolitan 
            area, shows strong EV adoption influenced by cross-border access to Oregon's charging network 
            and incentive programs. <strong className="text-foreground">Spokane County</strong> represents the 
            largest EV market in Eastern Washington, while <strong className="text-foreground">Thurston County</strong> (home 
            to the state capital) and <strong className="text-foreground">Whatcom County</strong> (near the 
            Canadian border) also demonstrate notable EV adoption rates.
          </p>

          <div className="bg-secondary/30 p-6 rounded-xl border border-border/50 my-8">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              How to Read the County Data
            </h3>
            <p className="text-sm leading-relaxed">
              The county chart above displays EV registrations ranked by total count. Keep in mind that 
              absolute numbers reflect both adoption rates and population size. A county with fewer total 
              registrations may actually have a higher per-capita adoption rate. Urban counties naturally 
              show higher totals due to larger populations, while rural counties may have lower absolute 
              numbers but still represent meaningful adoption within their communities.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
            Factors Influencing County-Level Adoption
          </h3>
          <p className="leading-relaxed">
            Several factors correlate with higher EV registration counts at the county level: access to 
            home charging (more common in single-family housing), availability of public charging stations, 
            commute patterns that align with EV range capabilities, local dealership inventory, and 
            community awareness of EV benefits. Washington's statewide policies, including sales tax 
            exemptions for qualifying EVs, apply uniformly, but local charging infrastructure investments 
            vary considerably.
          </p>
        </div>
      </div>
    </section>
  );
}
