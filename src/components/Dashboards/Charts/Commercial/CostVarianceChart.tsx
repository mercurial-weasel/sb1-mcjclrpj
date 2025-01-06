import React from 'react';
import Plot from 'react-plotly.js';
import { commercialData } from '../../../../data/commercialData';

export function CostVarianceChart({ selectedMonth }: { selectedMonth: string }) {
  const data = commercialData[selectedMonth as keyof typeof commercialData];
  
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <Plot
        data={[{
          type: 'bar',
          x: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          y: data.costVariance,
          marker: {
            color: data.costVariance.map(value => 
              value >= 0 ? '#34D399' : '#F87171'
            )
          }
        }]}
        layout={{
          title: 'Cost Variance Analysis',
          height: 300,
          margin: { t: 30, r: 30, l: 40, b: 40 },
          yaxis: { title: 'Variance ($)' }
        }}
        config={{ responsive: true }}
      />
    </div>
  );
}