import React from 'react';
import Plot from 'react-plotly.js';
import { commercialData } from '../../../../data/commercialData';

export function ProcurementStatusChart({ selectedMonth }: { selectedMonth: string }) {
  const data = commercialData[selectedMonth as keyof typeof commercialData];
  
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <Plot
        data={[{
          type: 'pie',
          values: [
            data.procurement.completed,
            data.procurement.inProgress,
            data.procurement.planned
          ],
          labels: ['Completed', 'In Progress', 'Planned'],
          marker: {
            colors: ['#34D399', '#60A5FA', '#F59E0B']
          }
        }]}
        layout={{
          title: 'Procurement Status',
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