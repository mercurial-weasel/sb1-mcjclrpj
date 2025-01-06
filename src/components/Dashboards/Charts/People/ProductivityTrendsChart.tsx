import React from 'react';
import Plot from 'react-plotly.js';
import { peopleData } from '../../../../data/peopleData';

export function ProductivityTrendsChart({ selectedMonth }: { selectedMonth: string }) {
  const data = peopleData[selectedMonth as keyof typeof peopleData];
  
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <Plot
        data={[{
          type: 'scatter',
          x: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          y: data.productivityTrends,
          line: { shape: 'spline', color: '#EC4899' },
          mode: 'lines+markers'
        }]}
        layout={{
          title: 'Team Productivity Trends',
          height: 300,
          margin: { t: 30, r: 30, l: 40, b: 40 },
          yaxis: { title: 'Productivity Score', range: [0, 100] }
        }}
        config={{ responsive: true }}
      />
    </div>
  );
}