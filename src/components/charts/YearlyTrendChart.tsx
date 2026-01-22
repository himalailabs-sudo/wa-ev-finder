import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface YearlyTrendChartProps {
  data: { year: string; count: number; bev: number; phev: number }[];
}

export function YearlyTrendChart({ data }: YearlyTrendChartProps) {
  return (
    <div className="chart-container">
      <h3 className="text-lg font-semibold mb-6">Registration Trends by Year</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="bevGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(160, 84%, 39%)" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="hsl(160, 84%, 39%)" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="phevGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(200, 100%, 50%)" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="hsl(200, 100%, 50%)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="year" 
              stroke="hsl(215, 20%, 55%)"
              fontSize={12}
            />
            <YAxis 
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
              stroke="hsl(215, 20%, 55%)"
              fontSize={12}
            />
            <Tooltip 
              formatter={(value: number, name: string) => [
                value.toLocaleString(), 
                name === 'bev' ? 'Battery Electric' : 'Plug-in Hybrid'
              ]}
              contentStyle={{
                backgroundColor: 'hsl(220, 18%, 10%)',
                border: '1px solid hsl(220, 16%, 20%)',
                borderRadius: '8px',
                color: 'hsl(210, 40%, 98%)',
              }}
              labelStyle={{ color: 'hsl(210, 40%, 98%)' }}
            />
            <Legend 
              formatter={(value) => value === 'bev' ? 'Battery Electric (BEV)' : 'Plug-in Hybrid (PHEV)'}
              wrapperStyle={{ paddingTop: '20px' }}
            />
            <Area
              type="monotone"
              dataKey="bev"
              stackId="1"
              stroke="hsl(160, 84%, 39%)"
              fill="url(#bevGradient)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="phev"
              stackId="1"
              stroke="hsl(200, 100%, 50%)"
              fill="url(#phevGradient)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
