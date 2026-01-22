import { CheckCircle } from 'lucide-react';

interface OverviewSectionProps {
  lastUpdated?: string;
}

export function OverviewSection({ lastUpdated = 'January 2026' }: OverviewSectionProps) {
  return (
    <section id="overview" className="scroll-mt-20">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Washington State
          <span className="block text-primary electric-glow">EV Registration Tracker</span>
          <span className="block text-2xl md:text-3xl font-medium text-muted-foreground mt-2">(BEV & PHEV)</span>
        </h1>
        
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed">
          Explore comprehensive data on Washington State electric vehicle registrations. This dashboard tracks 
          battery electric vehicles (BEV) and plug-in hybrid electric vehicles (PHEV) using official data from 
          the Washington State Department of Licensing. Whether you're researching EV adoption trends, 
          comparing registration patterns by county, or analyzing brand popularity, you'll find the insights 
          you need here.
        </p>
        
        <p className="text-sm text-muted-foreground mb-8">
          <time dateTime="2026-01">Last updated: {lastUpdated}</time>
        </p>

        <div className="max-w-2xl mx-auto">
          <h2 className="sr-only">What you can learn from this tracker</h2>
          <ul className="flex flex-col sm:flex-row justify-center gap-4 text-left sm:text-center">
            <li className="flex items-center gap-2 text-sm text-foreground bg-secondary/50 px-4 py-2 rounded-lg">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" aria-hidden="true" />
              <span>Total BEV & PHEV registrations statewide</span>
            </li>
            <li className="flex items-center gap-2 text-sm text-foreground bg-secondary/50 px-4 py-2 rounded-lg">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" aria-hidden="true" />
              <span>EV registrations by county in Washington</span>
            </li>
            <li className="flex items-center gap-2 text-sm text-foreground bg-secondary/50 px-4 py-2 rounded-lg">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" aria-hidden="true" />
              <span>Top EV brands and models registered</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
