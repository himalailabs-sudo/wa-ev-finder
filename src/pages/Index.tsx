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

// SEO Content Components
import { OverviewSection } from '@/components/seo/OverviewSection';
import { LatestDataSection } from '@/components/seo/LatestDataSection';
import { BevVsPhevSection } from '@/components/seo/BevVsPhevSection';
import { ByCountySection } from '@/components/seo/ByCountySection';
import { ByBrandSection } from '@/components/seo/ByBrandSection';
import { MethodologySection } from '@/components/seo/MethodologySection';
import { FAQSection } from '@/components/seo/FAQSection';
import { KeyTakeaways } from '@/components/seo/KeyTakeaways';

const Index = () => {
  const { data, isLoading, error } = useEVData();

  const bevPercentage = data ? ((data.bev / data.total) * 100).toFixed(1) : undefined;
  const topCounty = data?.byCounty?.[0]?.county;
  const topBrand = data?.topMakes?.[0]?.name;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Overview Section with H1 and Stats */}
        <OverviewSection />

        {error && (
          <Alert variant="destructive" className="mb-8">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error loading data</AlertTitle>
            <AlertDescription>
              Failed to fetch EV data. Please try refreshing the page.
            </AlertDescription>
          </Alert>
        )}

        {/* Stats Grid - Always visible above the fold */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="glass-card p-6 space-y-3">
                <div className="h-4 w-24 bg-secondary rounded animate-pulse" />
                <div className="h-10 w-32 bg-secondary rounded animate-pulse" />
                <div className="h-3 w-20 bg-secondary rounded animate-pulse" />
              </div>
            ))}
          </div>
        ) : data ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
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
              subtitle={`${bevPercentage}% of total`}
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
          </div>
        ) : null}

        {isLoading ? (
          <LoadingSkeleton />
        ) : data ? (
          <>
            {/* Latest Data Section */}
            <LatestDataSection>
              <div className="space-y-8">

                {/* Key Takeaways */}
                <KeyTakeaways 
                  bevPercentage={bevPercentage}
                  topCounty={topCounty}
                  topBrand={topBrand}
                />

                {/* Charts Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                </div>

                {/* Models Table */}
                <div className="animate-slide-up" style={{ animationDelay: '600ms' }}>
                  <TopModelsTable data={data.topModels} />
                </div>
              </div>
            </LatestDataSection>

            {/* SEO Content Sections */}
            <BevVsPhevSection 
              bevCount={data.bev} 
              phevCount={data.phev} 
              totalCount={data.total} 
            />
            
            <ByCountySection />
            
            <ByBrandSection topMakes={data.topMakes} />
            
            <MethodologySection />
            
            <FAQSection />
          </>
        ) : null}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
