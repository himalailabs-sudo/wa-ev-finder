import { Heart, ExternalLink, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-8 mt-12 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="text-center md:text-left">
              <p className="font-medium text-foreground mb-1">Washington EV Tracker</p>
              <p>
                Data source:{' '}
                <a 
                  href="https://data.wa.gov/Transportation/Electric-Vehicle-Population-Data/f6w7-q2d2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                  aria-label="Washington State Department of Licensing dataset (opens in new tab)"
                >
                  Washington State Department of Licensing (DOL)
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="mailto:contact@washingtonevtracker.com"
                className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                aria-label="Contact us via email"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>Contact</span>
              </a>
              <p className="flex items-center gap-1">
                Built with <Heart className="h-4 w-4 text-destructive fill-destructive" aria-hidden="true" /> for the EV community
              </p>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center text-xs text-muted-foreground border-t border-border/30 pt-4">
            <p>© {new Date().getFullYear()} Washington EV Tracker. All rights reserved.</p>
            <p className="mt-1">
              This is an independent project and is not affiliated with or endorsed by any government agency.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
