import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  variant?: 'default' | 'bev' | 'phev';
  delay?: number;
}

export function StatCard({ title, value, subtitle, icon: Icon, variant = 'default', delay = 0 }: StatCardProps) {
  const formattedValue = typeof value === 'number' 
    ? value.toLocaleString() 
    : value;

  return (
    <div 
      className={cn(
        "glass-card p-6 animate-slide-up",
        variant === 'bev' && "border-l-4 border-l-bev",
        variant === 'phev' && "border-l-4 border-l-phev"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            {title}
          </p>
          <p className="stat-value">{formattedValue}</p>
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
        <div className={cn(
          "p-3 rounded-lg",
          variant === 'default' && "bg-primary/10 text-primary",
          variant === 'bev' && "bg-bev/10 text-bev",
          variant === 'phev' && "bg-phev/10 text-phev"
        )}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}
