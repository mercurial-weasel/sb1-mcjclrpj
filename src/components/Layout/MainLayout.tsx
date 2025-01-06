import React from 'react';
import { Header } from '../Header/Header';
import { SideMenu } from './SideMenu';
import type { ViewType } from '../../types/navigation';

interface MainLayoutProps {
  children: React.ReactNode;
  activeView: ViewType;
  onViewChange: (view: ViewType) => void;
}

export function MainLayout({
  children,
  activeView,
  onViewChange,
}: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="flex h-[calc(100vh-4rem)]">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-64 transform transition-transform duration-300 ease-in-out">
            <div className="h-full bg-gray-800 shadow-lg shadow-gray-900/50 rounded-r-xl">
              <SideMenu activeView={activeView} onViewChange={onViewChange} />
            </div>
          </div>
        </div>
        <main className="flex-1 ml-64 overflow-auto p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}