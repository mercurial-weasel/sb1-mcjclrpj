import React from 'react';
import Plot from 'react-plotly.js';
import { peopleData } from '../../../../data/peopleData';

export function SkillsDistributionChart({ selectedMonth }: { selectedMonth: string }) {
  const data = peopleData[selectedMonth as keyof typeof peopleData];
  
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <Plot
        data={[{
          type: 'pie',
          values: data.skillsDistribution,
          labels: ['Technical', 'Management', 'Support', 'Specialist'],
          marker: {
            colors: ['#60A5FA', '#34D399', '#F59E0B', '#8B5CF6']
          }
        }]}
        layout={{
          title: 'Skills Distribution',
          height: 300,
          margin: { t: 30, r: 30, l: 30, b: 30 },
          showlegend: true,
          legend: { orientation: 'h', y: -0.1 }
        }}
        config={{ responsive: true }}
      />
    </div>
  );
}