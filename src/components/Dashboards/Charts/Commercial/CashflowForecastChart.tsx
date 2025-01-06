import React from 'react';
import Plot from 'react-plotly.js';
import { commercialData } from '../../../../data/commercialData';

export function CashflowForecastChart({ selectedMonth }: { selectedMonth: string }) {
  const data = commercialData[selectedMonth as keyof typeof commercialData];
  
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <Plot
        data={[{
          type: 'scatter',
          x: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          y: data.cashflow,
          fill: 'tozeroy',
          line: { color: '#8B5CF6' }
        }]}
        layout={{
          title: 'Cashflow Forecast',
          height: 300,
          margin: { t: 30, r: 30, l: 40, b: 40 },
          yaxis: { title: 'Amount ($)' }
        }}
        config={{ responsive: true }}
      />
    </div>
  );
}