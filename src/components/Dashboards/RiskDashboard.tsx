import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import { MonthFilter } from './MonthFilter';

export function RiskDashboard() {
  const [selectedMonth, setSelectedMonth] = useState('2024-12');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Risk Dashboard</h2>
        <MonthFilter selectedMonth={selectedMonth} onMonthChange={setSelectedMonth} />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <Plot
            data={[{
              type: 'scatter',
              x: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
              y: [12, 15, 10, 8],
              name: 'High',
              line: { color: '#EF4444' }
            }, {
              type: 'scatter',
              x: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
              y: [20, 18, 22, 25],
              name: 'Medium',
              line: { color: '#F59E0B' }
            }, {
              type: 'scatter',
              x: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
              y: [30, 35, 28, 32],
              name: 'Low',
              line: { color: '#10B981' }
            }]}
            layout={{
              title: 'Risk Trends by Severity',
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