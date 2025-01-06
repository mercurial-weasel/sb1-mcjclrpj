export interface ProgramMilestone {
  milestone: string;
  alignment: 'Separate' | 'Aligned' | 'Joint';
  status: string;
  baseline: string;
  plannedActual: string;
  variance: string;
  indicator: 'red' | 'orange' | 'green';
}

export const milestoneData: ProgramMilestone[] = [
  {
    milestone: 'Affordability Check',
    alignment: 'Aligned',
    status: 'Achieved',
    baseline: '2023-11-01',
    plannedActual: '2023-11-01',
    variance: '0 days',
    indicator: 'orange'
  },
  {
    milestone: 'Geometric Model Freeze',
    alignment: 'Aligned',
    status: 'Achieved',
    baseline: '2023-11-04',
    plannedActual: '2023-11-04',
    variance: '0 days',
    indicator: 'orange'
  },
  {
    milestone: 'Affordable Pack / Price Drop',
    alignment: 'Joint',
    status: 'Not Achieved',
    baseline: '2023-12-11',
    plannedActual: '2023-12-11',
    variance: '0 days',
    indicator: 'orange'
  },
  {
    milestone: 'Pricing Info to IE',
    alignment: 'Aligned',
    status: 'Not Achieved',
    baseline: '2023-12-16',
    plannedActual: '2023-12-16',
    variance: '0 days',
    indicator: 'orange'
  },
  {
    milestone: 'JIMP 2.0 Finalised',
    alignment: 'Joint',
    status: 'Not Achieved',
    baseline: '2023-12-18',
    plannedActual: '2024-02-28',
    variance: '-72 days',
    indicator: 'red'
  },
  {
    milestone: 'Start of Detailed Design',
    alignment: 'Aligned',
    status: 'Not Achieved',
    baseline: '2024-01-13',
    plannedActual: '2024-01-13',
    variance: '0 days',
    indicator: 'orange'
  },
  {
    milestone: 'Complete Mass Haul',
    alignment: 'Joint',
    status: 'Not Achieved',
    baseline: '2024-01-27',
    plannedActual: '2024-01-27',
    variance: '0 days',
    indicator: 'orange'
  },
  {
    milestone: 'Joint Design Philosophy Statement',
    alignment: 'Joint',
    status: 'Not Achieved',
    baseline: '2024-01-31',
    plannedActual: '2024-01-31',
    variance: '0 days',
    indicator: 'orange'
  },
  {
    milestone: 'Exchange Price with IE',
    alignment: 'Aligned',
    status: 'Not Achieved',
    baseline: '2024-03-13',
    plannedActual: '2024-03-13',
    variance: '0 days',
    indicator: 'orange'
  },
  {
    milestone: 'Geotech Reporting',
    alignment: 'Aligned',
    status: 'Not Achieved',
    baseline: '2024-04-14',
    plannedActual: '2024-04-14',
    variance: '0 days',
    indicator: 'orange'
  },
  {
    milestone: 'ITC Reconciliation / Agreement with IE',
    alignment: 'Aligned',
    status: 'Not Achieved',
    baseline: '2024-04-15',
    plannedActual: '2024-04-15',
    variance: '0 days',
    indicator: 'orange'
  },
  {
    milestone: 'ITC Finalised',
    alignment: 'Aligned',
    status: 'Not Achieved',
    baseline: '2024-04-24',
    plannedActual: '2024-04-24',
    variance: '0 days',
    indicator: 'orange'
  },
  {
    milestone: 'Insurance Policy in Place',
    alignment: 'Aligned',
    status: 'Not Achieved',
    baseline: '2024-05-01',
    plannedActual: '2024-05-01',
    variance: '0 days',
    indicator: 'orange'
  },
  {
    milestone: 'PAA Signed',
    alignment: 'Aligned',
    status: 'Not Achieved',
    baseline: '2024-05-01',
    plannedActual: '2024-05-01',
    variance: '0 days',
    indicator: 'orange'
  }
];