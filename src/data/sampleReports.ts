import type { Report } from '../types/reports';

export const sampleReports: Report[] = [
  {
    id: '1',
    title: 'Monthly Progress Report',
    category: 'Management',
    description: 'Overall project progress and key milestones for January 2024',
    lastUpdated: '2024-01-31',
    version: '1.0',
    status: 'approved',
    isNew: false,
    accessLevel: 'public',
    type: 'pdf',
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  {
    id: '2',
    title: 'Design Review Document',
    category: 'Design',
    description: 'Technical design specifications and review comments',
    lastUpdated: '2024-02-15',
    version: '2.1',
    status: 'in-review',
    isNew: true,
    accessLevel: 'restricted',
    type: 'word',
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/word/dummy.docx'
  },
  {
    id: '3',
    title: 'PAB Meeting Minutes',
    category: 'PAB',
    description: 'Project Advisory Board meeting outcomes and actions',
    lastUpdated: '2024-02-10',
    version: '1.0',
    status: 'approved',
    isNew: false,
    accessLevel: 'confidential',
    type: 'word',
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/word/dummy.docx'
  },
  {
    id: '4',
    title: 'Cost Analysis Report',
    category: 'Commercial',
    description: 'Financial overview and cost projections',
    lastUpdated: '2024-02-01',
    version: '1.2',
    status: 'draft',
    isNew: false,
    accessLevel: 'restricted',
    type: 'excel',
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/excel/dummy.xlsx'
  },
  {
    id: '5',
    title: 'Construction Schedule Update',
    category: 'Construction',
    description: 'Updated timeline and milestone tracking',
    lastUpdated: '2024-02-20',
    version: '3.0',
    status: 'in-review',
    isNew: true,
    accessLevel: 'public',
    type: 'excel',
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/excel/dummy.xlsx'
  }
];