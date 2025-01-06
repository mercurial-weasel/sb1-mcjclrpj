import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import type { Report, ReportCategory } from '../../types/reports';
import { DocumentViewer } from '../Viewers/DocumentViewer';
import { FileIcon } from '../icons/FileIcons';
import { TableControls } from './TableControls';

interface ReportsTableProps {
  reports: Report[];
  onViewReport: (report: Report) => void;
  onSearch: (query: string) => void;
  onFilterChange: (filters: {
    category: ReportCategory | 'all';
    status: string;
    dateRange: string;
  }) => void;
}

export function ReportsTable({ reports, onViewReport, onSearch, onFilterChange }: ReportsTableProps) {
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);

  return (
    <>
      <TableControls onSearch={onSearch} onFilterChange={onFilterChange} />
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Period
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Report Title
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Link
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {reports.map((report) => (
              <tr key={report.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {report.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                    ${report.status === 'approved' ? 'bg-green-100 text-green-800' : 
                      report.status === 'in-review' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-gray-100 text-gray-800'}`}>
                    {report.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {report.lastUpdated}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  <div className="flex items-center">
                    <span>{report.title}</span>
                    {report.isNew && (
                      <span className="ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        New
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{report.description}</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <FileIcon type={report.type} />
                    <span className="ml-2 text-sm text-gray-900 capitalize">{report.type}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button
                    onClick={() => setSelectedReport(report)}
                    className="text-blue-600 hover:text-blue-900 flex items-center space-x-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>View</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedReport && (
        <DocumentViewer
          report={selectedReport}
          onClose={() => setSelectedReport(null)}
        />
      )}
    </>
  );
}