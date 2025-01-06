import React from 'react';
import { X } from 'lucide-react';
import type { Report } from '../../types/reports';

interface DocumentViewerProps {
  report: Report;
  onClose: () => void;
}

export function DocumentViewer({ report, onClose }: DocumentViewerProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-11/12 h-5/6 rounded-lg p-4 relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{report.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="h-[calc(100%-4rem)] border rounded">
          <iframe
            src={report.url}
            className="w-full h-full"
            title={report.title}
          />
        </div>
      </div>
    </div>
  );
}