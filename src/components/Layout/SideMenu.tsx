import React, { useState } from 'react';
import { 
  FileCheck, 
  Files, 
  LayoutDashboard, 
  ChevronDown, 
  ChevronRight, 
  FileText,
  Users,
  DollarSign,
  ClipboardList,
  BarChart3,
  CalendarRange,
  AlertTriangle,
  CheckSquare,
  Maximize,
  ShieldAlert,
  Leaf,
  Network
} from 'lucide-react';
import type { ViewType } from '../../types/navigation';

interface SideMenuProps {
  activeView: ViewType;
  onViewChange: (view: ViewType) => void;
}

export function SideMenu({ activeView, onViewChange }: SideMenuProps) {
  const [isDashboardsOpen, setIsDashboardsOpen] = useState(true);
  const [isOperationalOpen, setIsOperationalOpen] = useState(true);

  const operationalSubItems = [
    { id: 'program-dashboard', label: 'Program', icon: Network },
    { id: 'risk-dashboard', label: 'Risk', icon: AlertTriangle },
    { id: 'quality-dashboard', label: 'Quality', icon: CheckSquare },
    { id: 'scope-dashboard', label: 'Scope', icon: Maximize },
    { id: 'safety-dashboard', label: 'Safety', icon: ShieldAlert },
    { id: 'environment-dashboard', label: 'Environment', icon: Leaf },
  ];

  const dashboards = [
    { id: 'pab-dashboard', label: 'PAB', icon: ClipboardList },
    { id: 'management-dashboard', label: 'Management', icon: BarChart3 },
    { id: 'operational-dashboard', label: 'Operational', icon: CalendarRange, hasSubItems: true},
    { id: 'people-dashboard', label: 'People and Resourcing', icon: Users },
    { id: 'cost-dashboard', label: 'Cost', icon: DollarSign }
  ];

  return (
    <div className="h-full py-4 px-3">
      <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 px-3">
        Navigation
      </h2>
      <nav className="space-y-2">
        {/* Dashboards Section */}
        <div>
          <button
            onClick={() => setIsDashboardsOpen(!isDashboardsOpen)}
            className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded-md transition-colors"
          >
            <div className="flex items-center">
              <LayoutDashboard className="h-5 w-5 mr-3 text-blue-400" />
              Dashboards
            </div>
            {isDashboardsOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
          {isDashboardsOpen && (
            <div className="ml-6 mt-1 space-y-1">
              {dashboards.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => {
                      if (item.id === 'operational-dashboard') {
                        setIsOperationalOpen(!isOperationalOpen);
                      }
                      onViewChange(item.id as ViewType);
                    }}
                    className={`w-full flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                      activeView === item.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <item.icon className="h-4 w-4 mr-2" />
                    <span className="flex-1 text-left">{item.label}</span>
                    {item.hasSubItems && (
                      <ChevronRight className={`h-4 w-4 transition-transform ${isOperationalOpen ? 'rotate-90' : ''}`} />
                    )}
                  </button>
                  {item.hasSubItems && isOperationalOpen && (
                    <div className="ml-4 mt-1 space-y-1">
                      {operationalSubItems.map((subItem) => (
                        <button
                          key={subItem.id}
                          onClick={() => onViewChange(subItem.id as ViewType)}
                          className={`w-full flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                            activeView === subItem.id
                              ? 'bg-blue-600 text-white'
                              : 'text-gray-300 hover:bg-gray-700'
                          }`}
                        >
                          <subItem.icon className="h-4 w-4 mr-2" />
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Reports Section */}
        <button
          onClick={() => onViewChange('published')}
          className={`w-full flex items-center px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded-md transition-colors ${
            activeView === 'published' || activeView === 'all'
              ? 'bg-blue-600 text-white'
              : ''
          }`}
        >
          <FileText className="h-5 w-5 mr-3 text-blue-400" />
          Reports
        </button>
      </nav>
    </div>
  );
}