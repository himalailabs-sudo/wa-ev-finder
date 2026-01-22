import { useQuery } from '@tanstack/react-query';
import { fetchAllStats, EVStats } from '@/lib/api';

export function useEVData() {
  return useQuery<EVStats>({
    queryKey: ['evStats'],
    queryFn: fetchAllStats,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
  });
}
