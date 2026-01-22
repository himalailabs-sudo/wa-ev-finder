import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface MakesChartProps {
  data: { name: string; count: number }[];
}

const COLORS = [
  'hsl(160, 84%, 39%)',
  'hsl(200, 100%, 50%)',
  'hsl(280, 70%, 60%)',
  'hsl(45, 100%, 60%)',
  'hsl(340, 80%, 55%)',
  'hsl(160, 60%, 45%)',
  'hsl(200, 80%, 45%)',
  'hsl(280, 50%, 50%)',
  'hsl(45, 80%, 50%)',
  'hsl(340, 60%, 50%)',
];

export function MakesChart({ data }: MakesChartProps) {
  return (
    <div className="chart-container">
      <h3 className="text-lg font-semibold mb-6">Top Manufacturers</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ left: 60, right: 20 }}>
            <XAxis 
              type="number" 
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
              stroke="hsl(215, 20%, 55%)"
              fontSize={12}
            />
            <YAxis 
              type="category" 
              dataKey="name" 
              stroke="hsl(215, 20%, 55%)"
              fontSize={12}
              width={55}
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
            <Bar dataKey="count" radius={[0, 4, 4, 0]}>
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
