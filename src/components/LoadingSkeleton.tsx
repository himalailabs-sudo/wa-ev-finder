import { Skeleton } from '@/components/ui/skeleton';

export function LoadingSkeleton() {
  return (
    <div className="space-y-8">
      {/* Stats Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="glass-card p-6 space-y-3">
            <Skeleton className="h-4 w-24 bg-secondary" />
            <Skeleton className="h-10 w-32 bg-secondary" />
            <Skeleton className="h-3 w-20 bg-secondary" />
          </div>
        ))}
      </div>

      {/* Charts Grid Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="chart-container">
            <Skeleton className="h-6 w-40 mb-6 bg-secondary" />
            <Skeleton className="h-[280px] bg-secondary" />
          </div>
        ))}
      </div>
    </div>
  );
}
