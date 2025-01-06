import React from 'react';
import { FileText, Clock, Tag, Lock } from 'lucide-react';
import type { Report } from '../types/reports';

interface ReportCardProps {
  report: Report;
  onView: (report: Report) => void;
}

export function ReportCard({ report, onView }: ReportCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-start space-x-3">
          <FileText className="h-5 w-5 text-blue-600 mt-1" />
          <div>
            <h3 className="font-medium text-gray-900">
              {report.title}
              {report.isNew && (
                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                  New
                </span>
              )}
            </h3>
            <p className="text-sm text-gray-500">{report.description}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Lock className={`h-4 w-4 ${report.accessLevel === 'public' ? 'text-green-500' : 'text-amber-500'}`} />
          <span className="text-xs text-gray-500 capitalize">{report.accessLevel}</span>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{report.lastUpdated}</span>
          </div>
          <div className="flex items-center">
            <Tag className="h-4 w-4 mr-1" />
            <span>v{report.version}</span>
          </div>
        </div>
        <button
          onClick={() => onView(report)}
          className="px-3 py-1 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
        >
          View Report
        </button>
      </div>
    </div>
  );
}