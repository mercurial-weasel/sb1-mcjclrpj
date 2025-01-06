import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import { MonthFilter } from './MonthFilter';

export function ManagementDashboard() {
  const [selectedMonth, setSelectedMonth] = useState('2024-12');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Management Dashboard</h2>
        <MonthFilter selectedMonth={selectedMonth} onMonthChange={setSelectedMonth} />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <Plot
            data={[
              {
                type: 'scatter',
                x: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                y: selectedMonth === '2024-12' ? [85, 88, 82, 90] : [87, 92, 89, 94],
                name: 'Progress',
                line: { shape: 'spline' },
              },
            ]}
            layout={{
              title: 'Project Progress Tracking',
              height: 400,
              yaxis: { range: [0, 100] },
            }}
            config={{ responsive: true }}
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <Plot
            data={[
              {
                type: 'bar',
                x: ['Design', 'Construction', 'Testing', 'Documentation'],
                y: selectedMonth === '2024-12' ? [45, 30, 15, 10] : [40, 35, 15, 10],
                marker: {
                  color: ['#60A5FA', '#34D399', '#FBBF24', '#F87171'],
                },
              },
            ]}
            layout={{
              title: 'Resource Allocation (%)',
              height: 400,
            }}
            config={{ responsive: true }}
          />
        </div>
      </div>
    </div>
  );
}