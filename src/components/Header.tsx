import { Zap, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 animate-pulse-glow">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">WA EV Dashboard</h1>
              <p className="text-xs text-muted-foreground">Electric Vehicle Population Data</p>
            </div>
          </div>
          <Button 
            variant="outline" 
            size="sm"
            className="gap-2 border-border/50 hover:bg-secondary"
            asChild
          >
            <a 
              href="https://data.wa.gov/Transportation/Electric-Vehicle-Population-Data/f6w7-q2d2" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span className="hidden sm:inline">View Dataset</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
