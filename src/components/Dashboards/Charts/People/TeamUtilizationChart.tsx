import React from 'react';
import Plot from 'react-plotly.js';
import { peopleData } from '../../../../data/peopleData';

export function TeamUtilizationChart({ selectedMonth }: { selectedMonth: string }) {
  const data = peopleData[selectedMonth as keyof typeof peopleData];
  
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <Plot
        data={[{
          type: 'bar',
          x: ['Design', 'Engineering', 'Construction', 'Project Management', 'QA'],
          y: data.teamUtilization,
          marker: { color: '#34D399' }
        }]}
        layout={{
          title: 'Team Utilization Rates',
          height: 300,
          margin: { t: 30, r: 30, l: 40, b: 40 },
          yaxis: { title: 'Utilization (%)', range: [0, 100] }
        }}
        config={{ responsive: true }}
      />
    </div>
  );
}