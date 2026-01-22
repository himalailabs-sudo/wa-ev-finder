import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

interface TopModelsTableProps {
  data: { name: string; make: string; count: number }[];
}

export function TopModelsTable({ data }: TopModelsTableProps) {
  const maxCount = Math.max(...data.map(d => d.count));

  return (
    <div className="chart-container">
      <h3 className="text-lg font-semibold mb-6">Top 10 Vehicle Models</h3>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-border/50 hover:bg-transparent">
              <TableHead className="text-muted-foreground">Rank</TableHead>
              <TableHead className="text-muted-foreground">Model</TableHead>
              <TableHead className="text-muted-foreground">Manufacturer</TableHead>
              <TableHead className="text-muted-foreground text-right">Count</TableHead>
              <TableHead className="text-muted-foreground w-[200px]">Share</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((model, index) => (
              <TableRow key={`${model.make}-${model.name}`} className="border-border/30">
                <TableCell className="font-medium">
                  <Badge variant={index < 3 ? 'default' : 'secondary'} className="w-8 justify-center">
                    {index + 1}
                  </Badge>
                </TableCell>
                <TableCell className="font-medium">{model.name}</TableCell>
                <TableCell className="text-muted-foreground">{model.make}</TableCell>
                <TableCell className="text-right font-mono">
                  {model.count.toLocaleString()}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${(model.count / maxCount) * 100}%` }}
                      />
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
