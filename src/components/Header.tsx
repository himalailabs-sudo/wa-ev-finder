import { Zap, ExternalLink, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const navLinks = [
  { href: '#overview', label: 'Overview' },
  { href: '#latest', label: 'Latest Data' },
  { href: '#bev-vs-phev', label: 'BEV vs PHEV' },
  { href: '#by-county', label: 'By County' },
  { href: '#by-brand', label: 'By Brand' },
  { href: '#methodology', label: 'Methodology' },
  { href: '#faq', label: 'FAQ' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 animate-pulse-glow">
              <Zap className="h-6 w-6 text-primary" aria-hidden="true" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight">WA EV Tracker</span>
              <p className="text-xs text-muted-foreground">Electric Vehicle Registration Data</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button 
              variant="default" 
              size="sm"
              className="hidden sm:inline-flex gap-2"
              onClick={() => scrollToSection('#latest')}
              aria-label="Explore the data - scroll to latest data section"
            >
              Explore the Data
            </Button>
            
            <Button 
              variant="outline" 
              size="sm"
              className="gap-2 border-border/50 hover:bg-secondary hidden md:inline-flex"
              asChild
            >
              <a 
                href="https://data.wa.gov/Transportation/Electric-Vehicle-Population-Data/f6w7-q2d2" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="View source dataset on data.wa.gov (opens in new tab)"
              >
                <span className="hidden sm:inline">View Dataset</span>
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-2 border-t border-border/50 pt-4" aria-label="Mobile navigation">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary"
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="https://data.wa.gov/Transportation/Electric-Vehicle-Population-Data/f6w7-q2d2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary flex items-center gap-2"
              >
                View Dataset <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
