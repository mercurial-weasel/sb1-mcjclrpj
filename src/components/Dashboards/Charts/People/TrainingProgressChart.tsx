import React from 'react';
import Plot from 'react-plotly.js';
import { peopleData } from '../../../../data/peopleData';

export function TrainingProgressChart({ selectedMonth }: { selectedMonth: string }) {
  const data = peopleData[selectedMonth as keyof typeof peopleData];
  
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <Plot
        data={[{
          type: 'bar',
          x: ['Safety', 'Technical', 'Soft Skills', 'Compliance'],
          y: data.trainingProgress,
          marker: { color: '#F59E0B' }
        }]}
        layout={{
          title: 'Training Progress by Category',
          height: 300,
          margin: { t: 30, r: 30, l: 40, b: 40 },
          yaxis: { title: 'Completion (%)', range: [0, 100] }
        }}
        config={{ responsive: true }}
      />
    </div>
  );
}