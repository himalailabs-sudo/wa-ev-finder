import { CheckCircle } from 'lucide-react';

interface OverviewSectionProps {
  lastUpdated?: string;
}

export function OverviewSection({ lastUpdated = 'January 2026' }: OverviewSectionProps) {
  return (
    <section id="overview" className="scroll-mt-20">
      <div className="text-center mb-6 animate-fade-in">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          Washington State
          <span className="block text-primary electric-glow">EV Registration Tracker</span>
          <span className="block text-xl md:text-2xl font-medium text-muted-foreground mt-1">(BEV & PHEV)</span>
        </h1>
        
        <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
          Track Washington State EV registrations with official DOL data. Explore BEV & PHEV trends, 
          county breakdowns, and top brands.
        </p>
        
        <p className="text-xs text-muted-foreground mb-4">
          <time dateTime="2026-01">Last updated: {lastUpdated}</time>
        </p>

        <div className="max-w-3xl mx-auto">
          <h2 className="sr-only">What you can learn from this tracker</h2>
          <ul className="flex flex-col sm:flex-row justify-center gap-3 text-left sm:text-center flex-wrap">
            <li className="flex items-center gap-2 text-xs text-foreground bg-secondary/50 px-3 py-1.5 rounded-lg">
              <CheckCircle className="h-3.5 w-3.5 text-primary flex-shrink-0" aria-hidden="true" />
              <span>Total BEV & PHEV registrations</span>
            </li>
            <li className="flex items-center gap-2 text-xs text-foreground bg-secondary/50 px-3 py-1.5 rounded-lg">
              <CheckCircle className="h-3.5 w-3.5 text-primary flex-shrink-0" aria-hidden="true" />
              <span>By county breakdown</span>
            </li>
            <li className="flex items-center gap-2 text-xs text-foreground bg-secondary/50 px-3 py-1.5 rounded-lg">
              <CheckCircle className="h-3.5 w-3.5 text-primary flex-shrink-0" aria-hidden="true" />
              <span>Top brands & models</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
