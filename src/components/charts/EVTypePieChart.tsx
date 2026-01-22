import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface EVTypePieChartProps {
  bev: number;
  phev: number;
}

export function EVTypePieChart({ bev, phev }: EVTypePieChartProps) {
  const data = [
    { name: 'Battery Electric (BEV)', value: bev },
    { name: 'Plug-in Hybrid (PHEV)', value: phev },
  ];

  const COLORS = ['hsl(160, 84%, 39%)', 'hsl(200, 100%, 50%)'];

  return (
    <div className="chart-container">
      <h3 className="text-lg font-semibold mb-6">Vehicle Type Distribution</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="45%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index]} 
                  stroke="transparent"
                />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value: number) => [value.toLocaleString(), 'Vehicles']}
              contentStyle={{
                backgroundColor: 'hsl(220, 18%, 10%)',
                border: '1px solid hsl(220, 16%, 20%)',
                borderRadius: '8px',
                color: 'hsl(210, 40%, 98%)',
              }}
            />
            <Legend 
              verticalAlign="bottom"
              wrapperStyle={{ paddingTop: '20px' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
