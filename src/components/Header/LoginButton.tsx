import React from 'react';
import { LogIn } from 'lucide-react';

export function LoginButton() {
  return (
    <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
      <LogIn className="h-4 w-4" />
      <span>Login</span>
    </button>
  );
}