import React from 'react';
import { FileText, FileType, FileSpreadsheet } from 'lucide-react';
import type { DocumentType } from '../../types/reports';

interface FileIconProps {
  type: DocumentType;
  className?: string;
}

export function FileIcon({ type, className = "h-4 w-4" }: FileIconProps) {
  switch (type) {
    case 'pdf':
      return <FileText className={`${className} text-red-500`} />;
    case 'word':
      return <FileType className={`${className} text-blue-500`} />;
    case 'excel':
      return <FileSpreadsheet className={`${className} text-green-500`} />;
  }
}