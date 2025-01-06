import React from 'react';
import Plot from 'react-plotly.js';
import { commercialData } from '../../../../data/commercialData';

export function ChangeOrdersChart({ selectedMonth }: { selectedMonth: string }) {
  const data = commercialData[selectedMonth as keyof typeof commercialData];
  
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <Plot
        data={[{
          type: 'pie',
          values: [
            data.changeOrders.approved,
            data.changeOrders.pending,
            data.changeOrders.rejected
          ],
          labels: ['Approved', 'Pending', 'Rejected'],
          marker: {
            colors: ['#34D399', '#F59E0B', '#F87171']
          }
        }]}
        layout={{
          title: 'Change Orders Status',
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