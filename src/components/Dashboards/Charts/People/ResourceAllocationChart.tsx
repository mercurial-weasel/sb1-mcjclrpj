import React from 'react';
import Plot from 'react-plotly.js';
import { peopleData } from '../../../../data/peopleData';

export function ResourceAllocationChart({ selectedMonth }: { selectedMonth: string }) {
  const data = peopleData[selectedMonth as keyof typeof peopleData];
  
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <Plot
        data={[{
          type: 'bar',
          x: ['Design', 'Engineering', 'Construction', 'Management', 'QA/QC'],
          y: data.resourceAllocation,
          marker: { color: '#60A5FA' }
        }]}
        layout={{
          title: 'Resource Allocation by Department',
          height: 300,
          margin: { t: 30, r: 30, l: 40, b: 40 },
          yaxis: { title: 'Number of Staff' }
        }}
        config={{ responsive: true }}
      />
    </div>
  );
}