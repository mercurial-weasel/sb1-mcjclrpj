import React from 'react';
import { Calendar } from 'lucide-react';

interface MonthFilterProps {
  selectedMonth: string;
  onMonthChange: (month: string) => void;
}

export function MonthFilter({ selectedMonth, onMonthChange }: MonthFilterProps) {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <Calendar className="h-5 w-5 text-gray-400" />
      <select
        value={selectedMonth}
        onChange={(e) => onMonthChange(e.target.value)}
        className="block rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
      >
        <option value="2024-12">December 2024</option>
        <option value="2025-01">January 2025</option>
      </select>
    </div>
  );
}