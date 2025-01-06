import React from 'react';
import Plot from 'react-plotly.js';
import { commercialData } from '../../../../data/commercialData';

export function BudgetPerformanceChart({ selectedMonth }: { selectedMonth: string }) {
  const data = commercialData[selectedMonth as keyof typeof commercialData];
  
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <Plot
        data={[{
          type: 'scatter',
          x: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          y: data.budgetPerformance.planned,
          name: 'Planned',
          line: { color: '#60A5FA' }
        }, {
          type: 'scatter',
          x: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          y: data.budgetPerformance.actual,
          name: 'Actual',
          line: { color: '#34D399' }
        }]}
        layout={{
          title: 'Budget Performance Tracking',
          height: 300,
          margin: { t: 30, r: 30, l: 40, b: 40 },
          yaxis: { title: 'Amount ($)' }
        }}
        config={{ responsive: true }}
      />
    </div>
  );
}