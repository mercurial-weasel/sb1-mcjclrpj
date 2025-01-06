import React from 'react';
import { User } from 'lucide-react';
import type { User as UserType } from '../../types/user';

interface UserInfoProps {
  user: UserType;
}

export function UserInfo({ user }: UserInfoProps) {
  return (
    <div className="flex items-center space-x-3">
      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
        <User className="h-5 w-5 text-blue-600" />
      </div>
      <div className="text-sm">
        <p className="font-medium text-gray-900">{user.firstName} {user.lastName}</p>
        <p className="text-gray-500">{user.title}</p>
      </div>
    </div>
  );
}