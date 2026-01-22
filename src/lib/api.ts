// Washington State EV Population Data API
const API_BASE = 'https://data.wa.gov/resource/f6w7-q2d2.json';

export interface EVRecord {
  vin_1_10: string;
  county: string;
  city: string;
  state: string;
  model_year: string;
  make: string;
  model: string;
  ev_type: string;
  cafv_type: string;
  electric_range: string;
  dol_vehicle_id: string;
}

export interface EVStats {
  total: number;
  bev: number;
  phev: number;
  topMakes: { name: string; count: number }[];
  topModels: { name: string; make: string; count: number }[];
  byYear: { year: string; count: number; bev: number; phev: number }[];
  byCounty: { county: string; count: number }[];
  avgRange: number;
}

export async function fetchEVCount(): Promise<number> {
  const response = await fetch(`${API_BASE}?$select=count(*)`);
  const data = await response.json();
  return parseInt(data[0].count, 10);
}

export async function fetchEVTypeCount(evType: string): Promise<number> {
  const typeFilter = evType === 'BEV' 
    ? "Battery Electric Vehicle (BEV)" 
    : "Plug-in Hybrid Electric Vehicle (PHEV)";
  const response = await fetch(
    `${API_BASE}?$select=count(*)&$where=ev_type='${encodeURIComponent(typeFilter)}'`
  );
  const data = await response.json();
  return parseInt(data[0].count, 10);
}

export async function fetchTopMakes(limit = 10): Promise<{ name: string; count: number }[]> {
  const response = await fetch(
    `${API_BASE}?$select=make,count(*)&$group=make&$order=count DESC&$limit=${limit}`
  );
  const data = await response.json();
  return data.map((item: { make: string; count: string }) => ({
    name: item.make,
    count: parseInt(item.count, 10),
  }));
}

export async function fetchTopModels(limit = 10): Promise<{ name: string; make: string; count: number }[]> {
  const response = await fetch(
    `${API_BASE}?$select=make,model,count(*)&$group=make,model&$order=count DESC&$limit=${limit}`
  );
  const data = await response.json();
  return data.map((item: { make: string; model: string; count: string }) => ({
    name: item.model,
    make: item.make,
    count: parseInt(item.count, 10),
  }));
}

export async function fetchByYear(): Promise<{ year: string; count: number; bev: number; phev: number }[]> {
  const response = await fetch(
    `${API_BASE}?$select=model_year,ev_type,count(*)&$group=model_year,ev_type&$order=model_year`
  );
  const data = await response.json();
  
  const yearMap: Record<string, { count: number; bev: number; phev: number }> = {};
  
  data.forEach((item: { model_year: string; ev_type: string; count: string }) => {
    const year = item.model_year;
    if (!yearMap[year]) {
      yearMap[year] = { count: 0, bev: 0, phev: 0 };
    }
    const count = parseInt(item.count, 10);
    yearMap[year].count += count;
    if (item.ev_type.includes('BEV')) {
      yearMap[year].bev += count;
    } else {
      yearMap[year].phev += count;
    }
  });
  
  return Object.entries(yearMap)
    .map(([year, data]) => ({ year, ...data }))
    .filter(item => parseInt(item.year) >= 2010)
    .sort((a, b) => parseInt(a.year) - parseInt(b.year));
}

export async function fetchByCounty(limit = 10): Promise<{ county: string; count: number }[]> {
  const response = await fetch(
    `${API_BASE}?$select=county,count(*)&$group=county&$order=count DESC&$limit=${limit}`
  );
  const data = await response.json();
  return data.map((item: { county: string; count: string }) => ({
    county: item.county,
    count: parseInt(item.count, 10),
  }));
}

export async function fetchAverageRange(): Promise<number> {
  const response = await fetch(
    `${API_BASE}?$select=avg(electric_range)&$where=electric_range > 0`
  );
  const data = await response.json();
  return Math.round(parseFloat(data[0].avg_electric_range) || 0);
}

export async function fetchAllStats(): Promise<EVStats> {
  const [total, bev, phev, topMakes, topModels, byYear, byCounty, avgRange] = await Promise.all([
    fetchEVCount(),
    fetchEVTypeCount('BEV'),
    fetchEVTypeCount('PHEV'),
    fetchTopMakes(10),
    fetchTopModels(10),
    fetchByYear(),
    fetchByCounty(10),
    fetchAverageRange(),
  ]);

  return {
    total,
    bev,
    phev,
    topMakes,
    topModels,
    byYear,
    byCounty,
    avgRange,
  };
}
