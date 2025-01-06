import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import { MonthFilter } from './MonthFilter';
import { PABMetricsTable } from './Tables/PABMetricsTable';

export function PABDashboard() {
  const [selectedMonth, setSelectedMonth] = useState('2024-12');

  const metrics = {
    '2024-12': {
      totalDecisions: 75,
      approvedItems: 45,
      pendingItems: 20,
      rejectedItems: 10,
      meetingEfficiency: 85,
      actionCompletion: 78,
      riskMitigated: 65,
      weeklyData: {
        decisions: [20, 14, 23, 18],
        actions: [12, 18, 11, 9],
        completion: [85, 78, 92, 88]
      }
    },
    '2025-01': {
      totalDecisions: 82,
      approvedItems: 52,
      pendingItems: 18,
      rejectedItems: 12,
      meetingEfficiency: 88,
      actionCompletion: 82,
      riskMitigated: 70,
      weeklyData: {
        decisions: [15, 22, 19, 25],
        actions: [10, 15, 13, 18],
        completion: [82, 85, 90, 92]
      }
    }
  };

  const currentMetrics = metrics[selectedMonth as keyof typeof metrics];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">PAB Dashboard</h2>
        <MonthFilter selectedMonth={selectedMonth} onMonthChange={setSelectedMonth} />
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Meeting Outcomes Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <Plot
            data={[
              {
                type: 'bar',
                x: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                y: currentMetrics.weeklyData.decisions,
                name: 'Decisions Made',
                marker: { color: '#60A5FA' }
              },
              {
                type: 'bar',
                x: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                y: currentMetrics.weeklyData.actions,
                name: 'Actions Assigned',
                marker: { color: '#34D399' }
              }
            ]}
            layout={{
              title: 'PAB Meeting Outcomes',
              barmode: 'group',
              height: 300,
              margin: { t: 30, r: 30, l: 40, b: 40 }
            }}
            config={{ responsive: true }}
          />
        </div>

        {/* Decision Distribution Pie Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <Plot
            data={[
              {
                type: 'pie',
                values: [
                  currentMetrics.approvedItems,
                  currentMetrics.pendingItems,
                  currentMetrics.rejectedItems
                ],
                labels: ['Approved', 'Pending', 'Rejected'],
                marker: {
                  colors: ['#34D399', '#FBBF24', '#F87171']
                }
              }
            ]}
            layout={{
              title: 'Decision Distribution',
              height: 300,
              margin: { t: 30, r: 30, l: 30, b: 30 },
              showlegend: true,
              legend: { orientation: 'h', y: -0.1 }
            }}
            config={{ responsive: true }}
          />
        </div>

        {/* Completion Trends Line Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <Plot
            data={[
              {
                type: 'scatter',
                x: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                y: currentMetrics.weeklyData.completion,
                name: 'Completion Rate',
                line: { shape: 'spline', color: '#8B5CF6' }
              }
            ]}
            layout={{
              title: 'Action Completion Trends',
              height: 300,
              margin: { t: 30, r: 30, l: 40, b: 40 },
              yaxis: { range: [0, 100], title: 'Completion Rate (%)' }
            }}
            config={{ responsive: true }}
          />
        </div>

        {/* Metrics Table */}
        <div className="bg-white p-4 rounded-lg shadow">
          <PABMetricsTable metrics={currentMetrics} />
        </div>
      </div>
    </div>
  );
}