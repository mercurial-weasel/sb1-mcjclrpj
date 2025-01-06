export interface ScopeItem {
  item: string;
  status: 'In Progress' | 'Complete' | 'Not Started';
  cost: number;
}

export const scopeData: ScopeItem[] = [
  {
    item: 'Earthworks',
    status: 'In Progress',
    cost: 2500000
  },
  {
    item: 'Drainage',
    status: 'Not Started',
    cost: 1800000
  },
  {
    item: 'Structures',
    status: 'Not Started',
    cost: 5200000
  },
  {
    item: 'Pavement',
    status: 'Not Started',
    cost: 3100000
  },
  {
    item: 'Traffic Signs and Road Markings',
    status: 'Not Started',
    cost: 750000
  },
  {
    item: 'Environmental Mitigation',
    status: 'In Progress',
    cost: 900000
  },
  {
    item: 'Utilities',
    status: 'Complete',
    cost: 1200000
  }
];