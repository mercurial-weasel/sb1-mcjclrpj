import React from 'react';
import Plot from 'react-plotly.js';
import { peopleData } from '../../../../data/peopleData';

export function ResourceForecastChart({ selectedMonth }: { selectedMonth: string }) {
  const data = peopleData[selectedMonth as keyof typeof peopleData];
  
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <Plot
        data={[{
          type: 'scatter',
          x: ['Q1', 'Q2', 'Q3', 'Q4'],
          y: data.resourceForecast,
          line: { shape: 'spline', color: '#8B5CF6' },
          mode: 'lines+markers'
        }]}
        layout={{
          title: 'Resource Demand Forecast',
          height: 300,
          margin: { t: 30, r: 30, l: 40, b: 40 },
          yaxis: { title: 'Required Resources', range: [0, 100] }
        }}
        config={{ responsive: true }}
      />
    </div>
  );
}