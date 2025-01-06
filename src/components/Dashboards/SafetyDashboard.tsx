import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import { MonthFilter } from './MonthFilter';

export function SafetyDashboard() {
  const [selectedMonth, setSelectedMonth] = useState('2024-12');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Safety Dashboard</h2>
        <MonthFilter selectedMonth={selectedMonth} onMonthChange={setSelectedMonth} />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <Plot
            data={[{
              type: 'scatter',
              x: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
              y: [0, 0, 1, 0],
              name: 'Incidents',
              line: { color: '#EF4444' }
            }]}
            layout={{
              title: 'Safety Incidents',
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