import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import { MonthFilter } from './MonthFilter';

export function EnvironmentDashboard() {
  const [selectedMonth, setSelectedMonth] = useState('2024-12');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Environment Dashboard</h2>
        <MonthFilter selectedMonth={selectedMonth} onMonthChange={setSelectedMonth} />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <Plot
            data={[{
              type: 'bar',
              x: ['Waste', 'Energy', 'Water', 'Emissions'],
              y: [85, 92, 88, 95],
              marker: { color: '#10B981' }
            }]}
            layout={{
              title: 'Environmental Performance',
              height: 300,
              margin: { t: 30, r: 30, l: 40, b: 40 }
            }}
            config={{ responsive: true }}
          />
        </div>
      </div>
    </div>
  );
}