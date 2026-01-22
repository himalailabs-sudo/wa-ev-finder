import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            Data sourced from{' '}
            <a 
              href="https://data.wa.gov/Transportation/Electric-Vehicle-Population-Data/f6w7-q2d2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Washington State Department of Licensing
            </a>
          </p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> for the EV community
          </p>
        </div>
      </div>
    </footer>
  );
}
