import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { Report, CategoryInfo } from '../types/reports';
import { ReportCard } from './ReportCard';

interface CategorySectionProps {
  category: CategoryInfo;
  reports: Report[];
  onViewReport: (report: Report) => void;
}

export function CategorySection({ category, reports, onViewReport }: CategorySectionProps) {
  const [isExpanded, setIsExpanded] = React.useState(true);

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <div className="flex items-center space-x-3">
          <span className="text-lg font-medium text-gray-900">{category.name}</span>
          <span className="text-sm text-gray-500">({reports.length} reports)</span>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-gray-400" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-400" />
        )}
      </button>
      
      {isExpanded && (
        <div className="mt-4 space-y-4">
          <p className="text-sm text-gray-600">{category.description}</p>
          <div className="space-y-4">
            {reports.map((report) => (
              <ReportCard
                key={report.id}
                report={report}
                onView={onViewReport}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}