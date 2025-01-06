import React, { useState } from 'react';
import { MonthFilter } from './MonthFilter';
import { ProgramMilestone, milestoneData } from '../../types/program';

export function ProgramDashboard() {
  const [selectedMonth, setSelectedMonth] = useState('2024-12');
  const [alignmentFilter, setAlignmentFilter] = useState('all');
  const [indicatorFilter, setIndicatorFilter] = useState('all');

  const filteredMilestones = milestoneData.filter(milestone => {
    if (alignmentFilter !== 'all' && milestone.alignment.toLowerCase() !== alignmentFilter) {
      return false;
    }
    if (indicatorFilter !== 'all' && milestone.indicator !== indicatorFilter) {
      return false;
    }
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Program Dashboard</h2>
        <MonthFilter selectedMonth={selectedMonth} onMonthChange={setSelectedMonth} />
      </div>

      <div className="flex gap-4 mb-4">
        <select
          className="block rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
          value={alignmentFilter}
          onChange={(e) => setAlignmentFilter(e.target.value)}
        >
          <option value="all">All Alignments</option>
          <option value="separate">Separate</option>
          <option value="aligned">Aligned</option>
          <option value="joint">Joint</option>
        </select>

        <select
          className="block rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
          value={indicatorFilter}
          onChange={(e) => setIndicatorFilter(e.target.value)}
        >
          <option value="all">All Indicators</option>
          <option value="green">Green</option>
          <option value="orange">Orange</option>
          <option value="red">Red</option>
        </select>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Milestone
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Separate, Aligned, Joint
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Baseline
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Planned/Actual
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Variance
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Indicator
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredMilestones.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.milestone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.alignment}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.baseline}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.plannedActual}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.variance}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`h-3 w-3 rounded-full ${
                      item.indicator === 'red' ? 'bg-red-500' : 
                      item.indicator === 'orange' ? 'bg-orange-500' : 
                      'bg-green-500'
                    }`} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}