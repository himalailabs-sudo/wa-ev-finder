import { Car, Battery, Plug, Gauge, AlertCircle } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StatCard } from '@/components/StatCard';
import { LoadingSkeleton } from '@/components/LoadingSkeleton';
import { MakesChart } from '@/components/charts/MakesChart';
import { YearlyTrendChart } from '@/components/charts/YearlyTrendChart';
import { CountyChart } from '@/components/charts/CountyChart';
import { EVTypePieChart } from '@/components/charts/EVTypePieChart';
import { TopModelsTable } from '@/components/TopModelsTable';
import { useEVData } from '@/hooks/useEVData';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const Index = () => {
  const { data, isLoading, error } = useEVData();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Washington State
            <span className="block text-primary electric-glow">Electric Vehicles</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore real-time data on registered electric vehicles across Washington State. 
            Data sourced from the Department of Licensing.
          </p>
        </section>

        {error && (
          <Alert variant="destructive" className="mb-8">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error loading data</AlertTitle>
            <AlertDescription>
              Failed to fetch EV data. Please try refreshing the page.
            </AlertDescription>
          </Alert>
        )}

        {isLoading ? (
          <LoadingSkeleton />
        ) : data ? (
          <div className="space-y-8">
            {/* Stats Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                title="Total EVs"
                value={data.total}
                subtitle="Registered vehicles"
                icon={Car}
                delay={0}
              />
              <StatCard
                title="Battery Electric"
                value={data.bev}
                subtitle={`${((data.bev / data.total) * 100).toFixed(1)}% of total`}
                icon={Battery}
                variant="bev"
                delay={100}
              />
              <StatCard
                title="Plug-in Hybrid"
                value={data.phev}
                subtitle={`${((data.phev / data.total) * 100).toFixed(1)}% of total`}
                icon={Plug}
                variant="phev"
                delay={200}
              />
              <StatCard
                title="Avg. Range"
                value={`${data.avgRange} mi`}
                subtitle="Electric-only range"
                icon={Gauge}
                delay={300}
              />
            </section>

            {/* Charts Grid */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
                <YearlyTrendChart data={data.byYear} />
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
                <EVTypePieChart bev={data.bev} phev={data.phev} />
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
                <MakesChart data={data.topMakes} />
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '500ms' }}>
                <CountyChart data={data.byCounty} />
              </div>
            </section>

            {/* Models Table */}
            <section className="animate-slide-up" style={{ animationDelay: '600ms' }}>
              <TopModelsTable data={data.topModels} />
            </section>
          </div>
        ) : null}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
