import React from 'react';
import { Search, Filter } from 'lucide-react';
import { ViewToggle } from './ViewToggle';
import type { ReportCategory } from '../../types/reports';

interface TableControlsProps {
  onSearch: (query: string) => void;
  onFilterChange: (filters: {
    category: ReportCategory | 'all';
    status: string;
    dateRange: string;
  }) => void;
}

export function TableControls({ onSearch, onFilterChange }: TableControlsProps) {
  const [view, setView] = React.useState<'published' | 'all'>('published');
  const [filters, setFilters] = React.useState({
    category: 'all' as ReportCategory | 'all',
    status: 'all',
    dateRange: 'all',
  });

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { 
      ...filters, 
      [key]: value,
      // Reset status and dateRange when switching to published view
      ...(view === 'published' && key === 'view' ? { status: 'approved', dateRange: 'all' } : {})
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleViewChange = (newView: 'published' | 'all') => {
    setView(newView);
    // When switching to published view, force status to approved
    if (newView === 'published') {
      handleFilterChange('status', 'approved');
    }
  };

  return (
    <div className="bg-white p-4 border-b">
      <div className="flex flex-col space-y-4">
        <ViewToggle view={view} onViewChange={handleViewChange} />
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search reports..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => onSearch(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        
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
          
          {view === 'all' && (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}