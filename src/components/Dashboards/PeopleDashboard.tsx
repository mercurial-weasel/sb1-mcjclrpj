import React, { useState } from 'react';
import { MonthFilter } from './MonthFilter';
import { ResourceAllocationChart } from './Charts/People/ResourceAllocationChart';
import { SkillsDistributionChart } from './Charts/People/SkillsDistributionChart';
import { TeamUtilizationChart } from './Charts/People/TeamUtilizationChart';
import { ResourceForecastChart } from './Charts/People/ResourceForecastChart';
import { TrainingProgressChart } from './Charts/People/TrainingProgressChart';
import { ProductivityTrendsChart } from './Charts/People/ProductivityTrendsChart';

export function PeopleDashboard() {
  const [selectedMonth, setSelectedMonth] = useState('2024-12');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">People and Resourcing Dashboard</h2>
        <MonthFilter selectedMonth={selectedMonth} onMonthChange={setSelectedMonth} />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <ResourceAllocationChart selectedMonth={selectedMonth} />
        <SkillsDistributionChart selectedMonth={selectedMonth} />
        <TeamUtilizationChart selectedMonth={selectedMonth} />
        <ResourceForecastChart selectedMonth={selectedMonth} />
        <TrainingProgressChart selectedMonth={selectedMonth} />
        <ProductivityTrendsChart selectedMonth={selectedMonth} />
      </div>
    </div>
  );
}