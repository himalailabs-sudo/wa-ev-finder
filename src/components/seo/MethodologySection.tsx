import { ExternalLink, AlertTriangle, RefreshCw, Database } from 'lucide-react';

export function MethodologySection() {
  return (
    <section id="methodology" className="scroll-mt-20 py-12 border-t border-border/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Data Source and Methodology
        </h2>
        
        <div className="prose prose-invert max-w-none space-y-4 text-muted-foreground">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-secondary/30 p-5 rounded-xl border border-border/50">
              <div className="flex items-center gap-3 mb-3">
                <Database className="h-5 w-5 text-primary" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-foreground m-0">Data Source</h3>
              </div>
              <p className="text-sm leading-relaxed m-0">
                All data displayed on Washington EV Tracker is sourced from the{' '}
                <a 
                  href="https://data.wa.gov/Transportation/Electric-Vehicle-Population-Data/f6w7-q2d2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Washington State Department of Licensing (DOL) Electric Vehicle Population Data
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
                , a publicly available dataset on data.wa.gov.
              </p>
            </div>

            <div className="bg-secondary/30 p-5 rounded-xl border border-border/50">
              <div className="flex items-center gap-3 mb-3">
                <RefreshCw className="h-5 w-5 text-primary" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-foreground m-0">Update Frequency</h3>
              </div>
              <p className="text-sm leading-relaxed m-0">
                The source dataset is updated regularly by the Washington State DOL. This dashboard 
                fetches data directly from the API, so you see current figures each time you visit. 
                "Last updated" refers to when the state refreshed their dataset.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
            What This Data Includes
          </h3>
          <p className="leading-relaxed">
            The dataset includes Battery Electric Vehicles (BEV) and Plug-in Hybrid Electric Vehicles 
            (PHEV) that are currently registered with the Washington State Department of Licensing. 
            This represents the total population of registered EVs on Washington roads—not just new 
            vehicle sales or registrations from a specific time period.
          </p>

          <p className="leading-relaxed">
            Each record includes information such as vehicle make, model, model year, electric vehicle 
            type (BEV or PHEV), electric range, county of registration, and city. This dashboard 
            aggregates this information to provide summary statistics and visualizations.
          </p>

          <div className="bg-destructive/10 border border-destructive/30 p-5 rounded-xl my-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-semibold text-foreground m-0 mb-2">Limitations & Disclaimer</h3>
                <ul className="text-sm leading-relaxed m-0 space-y-2 list-disc list-inside">
                  <li>
                    This dashboard is an independent visualization tool and is not affiliated with or 
                    endorsed by the Washington State Department of Licensing or any government agency.
                  </li>
                  <li>
                    Data accuracy depends on the source dataset. While DOL data is official, it may 
                    contain minor discrepancies or delays in reflecting recent registrations or de-registrations.
                  </li>
                  <li>
                    Some records may have incomplete information (e.g., missing county or range data), 
                    which affects calculated averages and county breakdowns.
                  </li>
                  <li>
                    The data represents registered vehicles, not vehicles actively being driven. Some 
                    registered vehicles may be stored, awaiting sale, or otherwise not in active use.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="leading-relaxed">
            For questions about the underlying data or to access the raw dataset for your own analysis, 
            visit the{' '}
            <a 
              href="https://data.wa.gov/Transportation/Electric-Vehicle-Population-Data/f6w7-q2d2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              official DOL data page on data.wa.gov
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
