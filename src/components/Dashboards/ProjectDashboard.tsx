import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import { MonthFilter } from './MonthFilter';
import { ProjectGanttChart } from './Charts/ProjectGanttChart';
import { projectTasks } from '../../data/projectTasks';

export function ProjectDashboard() {
  const [selectedMonth, setSelectedMonth] = useState('2024-12');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Project Dashboard</h2>
        <MonthFilter selectedMonth={selectedMonth} onMonthChange={setSelectedMonth} />
      </div>

      {/* Gantt Chart */}
      <div className="bg-white p-4 rounded-lg shadow">
        <ProjectGanttChart 
          tasks={projectTasks[selectedMonth as keyof typeof projectTasks]} 
          selectedMonth={selectedMonth}
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <Plot
            data={[
              {
                type: 'scatter',
                x: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                y: selectedMonth === '2024-12' ? [100, 95, 92, 88] : [95, 92, 89, 87],
                name: 'Budget',
                line: { color: '#60A5FA' },
              },
              {
                type: 'scatter',
                x: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                y: selectedMonth === '2024-12' ? [100, 97, 94, 90] : [97, 95, 92, 90],
                name: 'Actual',
                line: { color: '#34D399' },
              },
            ]}
            layout={{
              title: 'Budget vs Actual Spending',
              height: 400,
              yaxis: { title: 'Remaining Budget (%)' },
            }}
            config={{ responsive: true }}
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <Plot
            data={[
              {
                type: 'scatter',
                mode: 'lines+markers',
                x: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                y: selectedMonth === '2024-12' ? [5, 8, 12, 15] : [8, 10, 7, 12],
                name: 'High',
                line: { color: '#F87171' },
              },
              {
                type: 'scatter',
                mode: 'lines+markers',
                x: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                y: selectedMonth === '2024-12' ? [15, 12, 18, 22] : [18, 15, 20, 17],
                name: 'Medium',
                line: { color: '#FBBF24' },
              },
              {
                type: 'scatter',
                mode: 'lines+markers',
                x: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                y: selectedMonth === '2024-12' ? [25, 22, 28, 32] : [28, 25, 30, 27],
                name: 'Low',
                line: { color: '#60A5FA' },
              },
            ]}
            layout={{
              title: 'Risk Distribution Trend',
              height: 400,
              yaxis: { title: 'Number of Risks' },
            }}
            config={{ responsive: true }}
          />
        </div>
      </div>
    </div>
  );
}