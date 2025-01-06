import React, { useState } from 'react';
import { MonthFilter } from './MonthFilter';
import { BudgetPerformanceChart } from './Charts/Commercial/BudgetPerformanceChart';
import { CostVarianceChart } from './Charts/Commercial/CostVarianceChart';
import { ContractValueChart } from './Charts/Commercial/ContractValueChart';
import { CashflowForecastChart } from './Charts/Commercial/CashflowForecastChart';
import { ChangeOrdersChart } from './Charts/Commercial/ChangeOrdersChart';
import { ProcurementStatusChart } from './Charts/Commercial/ProcurementStatusChart';

export function CommercialDashboard() {
  const [selectedMonth, setSelectedMonth] = useState('2024-12');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Commercial Dashboard</h2>
        <MonthFilter selectedMonth={selectedMonth} onMonthChange={setSelectedMonth} />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <BudgetPerformanceChart selectedMonth={selectedMonth} />
        <CostVarianceChart selectedMonth={selectedMonth} />
        <ContractValueChart selectedMonth={selectedMonth} />
        <CashflowForecastChart selectedMonth={selectedMonth} />
        <ChangeOrdersChart selectedMonth={selectedMonth} />
        <ProcurementStatusChart selectedMonth={selectedMonth} />
      </div>
    </div>
  );
}