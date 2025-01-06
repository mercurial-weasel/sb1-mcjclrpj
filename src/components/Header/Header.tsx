import React from 'react';
import { FileText } from 'lucide-react';
import { LogoutButton } from './LogoutButton';
import { UserInfo } from './UserInfo';
import { useAuth } from '../../context/AuthContext';

export function Header() {
  const { user } = useAuth();

  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FileText className="h-8 w-8 text-blue-400" />
            <h1 className="text-2xl font-bold text-white">O2NL Dashboards and Key Reports</h1>
          </div>
          <div className="flex items-center space-x-6">
            {user && <UserInfo user={user} />}
            <LogoutButton />
          </div>
        </div>
      </div>
    </header>
  );
}