import React, { useState, useMemo } from 'react';
import { MainLayout } from './components/Layout/MainLayout';
import { ReportsTable } from './components/Table/ReportsTable';
import { LoginScreen } from './components/Auth/LoginScreen';
import { PABDashboard } from './components/Dashboards/PABDashboard';
import { ManagementDashboard } from './components/Dashboards/ManagementDashboard';
import { ProgramDashboard } from './components/Dashboards/ProgramDashboard';
import { RiskDashboard } from './components/Dashboards/RiskDashboard';
import { QualityDashboard } from './components/Dashboards/QualityDashboard';
import { ScopeDashboard } from './components/Dashboards/ScopeDashboard';
import { SafetyDashboard } from './components/Dashboards/SafetyDashboard';
import { EnvironmentDashboard } from './components/Dashboards/EnvironmentDashboard';
import { PeopleDashboard } from './components/Dashboards/PeopleDashboard';
import { CostDashboard } from './components/Dashboards/CostDashboard';
import { AuthProvider, useAuth } from './context/AuthContext';
import { sampleReports } from './data/sampleReports';
import type { Report, ReportCategory } from './types/reports';
import type { ViewType } from './types/navigation';

function Dashboard() {
  const [activeView, setActiveView] = useState<ViewType>('published');
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: 'all' as ReportCategory | 'all',
    status: 'all',
    dateRange: 'all',
  });

  const filteredReports = useMemo(() => {
    let reports = [...sampleReports];

    if (activeView === 'published') {
      reports = reports.filter(report => report.status === 'approved');
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      reports = reports.filter(
        report =>
          report.title.toLowerCase().includes(query) ||
          report.description.toLowerCase().includes(query)
      );
    }

    if (filters.category !== 'all') {
      reports = reports.filter(report => report.category === filters.category);
    }
    if (filters.status !== 'all') {
      reports = reports.filter(report => report.status === filters.status);
    }

    return reports;
  }, [activeView, searchQuery, filters]);

  const handleViewReport = (report: Report) => {
    console.log('Viewing report:', report.title);
  };

  const renderContent = () => {
    switch (activeView) {
      case 'pab-dashboard':
        return <PABDashboard />;
      case 'management-dashboard':
        return <ManagementDashboard />;
      case 'program-dashboard':
        return <ProgramDashboard />;
      case 'risk-dashboard':
        return <RiskDashboard />;
      case 'quality-dashboard':
        return <QualityDashboard />;
      case 'scope-dashboard':
        return <ScopeDashboard />;
      case 'safety-dashboard':
        return <SafetyDashboard />;
      case 'environment-dashboard':
        return <EnvironmentDashboard />;
      case 'people-dashboard':
        return <PeopleDashboard />;
      case 'cost-dashboard':
        return <CostDashboard />;
      case 'operational-dashboard':
        return null;
      default:
        return (
          <div className="bg-white shadow rounded-lg">
            <ReportsTable
              reports={filteredReports}
              onViewReport={handleViewReport}
              onSearch={setSearchQuery}
              onFilterChange={setFilters}
            />
          </div>
        );
    }
  };

  return (
    <MainLayout
      activeView={activeView}
      onViewChange={setActiveView}
    >
      {renderContent()}
    </MainLayout>
  );
}

function AppContent() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Dashboard /> : <LoginScreen />;
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}