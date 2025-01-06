import React from 'react';

interface ViewToggleProps {
  view: 'published' | 'all';
  onViewChange: (view: 'published' | 'all') => void;
}

export function ViewToggle({ view, onViewChange }: ViewToggleProps) {
  return (
    <div className="flex items-center space-x-4 mb-4">
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="published"
          name="view"
          value="published"
          checked={view === 'published'}
          onChange={(e) => onViewChange(e.target.value as 'published' | 'all')}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500"
        />
        <label htmlFor="published" className="text-sm font-medium text-gray-700">
          Current Published
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="all"
          name="view"
          value="all"
          checked={view === 'all'}
          onChange={(e) => onViewChange(e.target.value as 'published' | 'all')}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500"
        />
        <label htmlFor="all" className="text-sm font-medium text-gray-700">
          All Reports
        </label>
      </div>
    </div>
  );
}