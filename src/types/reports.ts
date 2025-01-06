export interface Report {
  id: string;
  title: string;
  category: ReportCategory;
  description: string;
  lastUpdated: string;
  version: string;
  status: 'draft' | 'in-review' | 'approved';
  isNew: boolean;
  accessLevel: 'public' | 'restricted' | 'confidential';
  type: DocumentType;
  url: string;
}

export type DocumentType = 'pdf' | 'word' | 'excel';
export type ReportCategory = 'PAB' | 'Management' | 'Commercial' | 'Design' | 'Construction' | 'Other';

export interface CategoryInfo {
  name: ReportCategory;
  description: string;
  icon: string;
}