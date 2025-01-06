export interface ProjectTask {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  duration: number;
  progress: number;
  status: 'not-started' | 'in-progress' | 'completed';
  dependencies?: string[];
}