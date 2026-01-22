import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface CountyChartProps {
  data: { county: string; count: number }[];
}

export function CountyChart({ data }: CountyChartProps) {
  return (
    <div className="chart-container">
      <h3 className="text-lg font-semibold mb-6">Top Counties</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <XAxis 
              dataKey="county" 
              stroke="hsl(215, 20%, 55%)"
              fontSize={11}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis 
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
              stroke="hsl(215, 20%, 55%)"
              fontSize={12}
            />
            <Tooltip 
              formatter={(value: number) => [value.toLocaleString(), 'Vehicles']}
              contentStyle={{
                backgroundColor: 'hsl(220, 18%, 10%)',
                border: '1px solid hsl(220, 16%, 20%)',
                borderRadius: '8px',
                color: 'hsl(210, 40%, 98%)',
              }}
            />
            <Bar 
              dataKey="count" 
              fill="hsl(160, 84%, 39%)" 
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
