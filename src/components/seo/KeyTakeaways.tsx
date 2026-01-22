import { TrendingUp, Zap, MapPin, Car, Battery } from 'lucide-react';

interface KeyTakeawaysProps {
  bevPercentage?: string;
  topCounty?: string;
  topBrand?: string;
}

export function KeyTakeaways({ bevPercentage, topCounty, topBrand }: KeyTakeawaysProps) {
  return (
    <div className="bg-gradient-to-br from-primary/10 to-secondary/30 border border-primary/20 rounded-xl p-6 my-8">
      <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
        <TrendingUp className="h-5 w-5 text-primary" aria-hidden="true" />
        Key Takeaways
      </h3>
      <ul className="space-y-3 text-sm text-muted-foreground">
        <li className="flex items-start gap-3">
          <Zap className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
          <span>Washington ranks among the top states for electric vehicle adoption in the U.S.</span>
        </li>
        {bevPercentage && (
          <li className="flex items-start gap-3">
            <Battery className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
            <span>Battery Electric Vehicles (BEV) represent {bevPercentage}% of the state's EV registrations</span>
          </li>
        )}
        {topCounty && (
          <li className="flex items-start gap-3">
            <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
            <span>{topCounty} County leads the state in total EV registrations</span>
          </li>
        )}
        {topBrand && (
          <li className="flex items-start gap-3">
            <Car className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
            <span>{topBrand} is the most registered EV brand in Washington State</span>
          </li>
        )}
        <li className="flex items-start gap-3">
          <TrendingUp className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
          <span>EV registrations have grown significantly year-over-year as infrastructure expands</span>
        </li>
      </ul>
    </div>
  );
}
