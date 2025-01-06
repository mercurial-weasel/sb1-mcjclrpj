import React from 'react';
import { Filter } from 'lucide-react';
import type { ReportCategory } from '../../types/reports';

interface FilterBarProps {
  onFilterChange: (filters: {
    category: ReportCategory | 'all';
    status: string;
    dateRange: string;
  }) => void;
}

export function FilterBar({ onFilterChange }: FilterBarProps) {
  const handleFilterChange = (key: string, value: string) => {
    onFilterChange({
      category: key === 'category' ? value as ReportCategory | 'all' : 'all',
      status: key === 'status' ? value : 'all',
      dateRange: key === 'dateRange' ? value : 'all'
    });
  };

  return (
    <div className="flex items-center space-x-4">
      <Filter className="h-5 w-5 text-gray-400" />
      <select
        className="block rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
        onChange={(e) => handleFilterChange('category', e.target.value)}
      >
        <option value="all">All Categories</option>
        <option value="PAB">PAB</option>
        <option value="Management">Management</option>
        <option value="Commercial">Commercial</option>
        <option value="Design">Design</option>
        <option value="Construction">Construction</option>
        <option value="Other">Other</option>
      </select>
      <select
        className="block rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
        onChange={(e) => handleFilterChange('status', e.target.value)}
      >
        <option value="all">All Statuses</option>
        <option value="draft">Draft</option>
        <option value="in-review">In Review</option>
        <option value="approved">Approved</option>
      </select>
      <select
        className="block rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
        onChange={(e) => handleFilterChange('dateRange', e.target.value)}
      >
        <option value="all">All Time</option>
        <option value="today">Today</option>
        <option value="week">This Week</option>
        <option value="month">This Month</option>
        <option value="quarter">This Quarter</option>
      </select>
    </div>
  );
}