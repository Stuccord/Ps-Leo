import React, { useState } from 'react';
import { Bell, Menu, LogOut, User, Settings } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface TopNavProps {
  onMenuClick: () => void;
  onNavigate: (page: string) => void;
  onCloseSidebar: () => void;
}

export default function TopNav({ onMenuClick, onNavigate, onCloseSidebar }: TopNavProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const { agent, signOut } = useAuth();

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
        <h2 className="text-2xl font-bold text-gray-900">
          Welcome back, {agent?.full_name?.split(' ')[0] || 'Agent'}
        </h2>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <button
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowDropdown(false);
              onCloseSidebar();
            }}
            className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Bell className="w-6 h-6 text-gray-700" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900">Notifications</h3>
              </div>
              <div className="divide-y divide-gray-100">
                <button
                  onClick={() => {
                    onNavigate('pending-referrals');
                    setShowNotifications(false);
                  }}
                  className="w-full p-4 hover:bg-gray-50 text-left transition-colors"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">New referral approved</p>
                      <p className="text-xs text-gray-500 mt-1">Your referral for John Doe has been approved</p>
                      <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                    </div>
                  </div>
                </button>
                <button
                  onClick={() => {
                    onNavigate('commissions');
                    setShowNotifications(false);
                  }}
                  className="w-full p-4 hover:bg-gray-50 text-left transition-colors"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Commission earned</p>
                      <p className="text-xs text-gray-500 mt-1">You earned GHS 150.00 in commission</p>
                      <p className="text-xs text-gray-400 mt-1">5 hours ago</p>
                    </div>
                  </div>
                </button>
                <button
                  onClick={() => {
                    onNavigate('policies');
                    setShowNotifications(false);
                  }}
                  className="w-full p-4 hover:bg-gray-50 text-left transition-colors"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Policy expiring soon</p>
                      <p className="text-xs text-gray-500 mt-1">Client policy expires in 30 days</p>
                      <p className="text-xs text-gray-400 mt-1">1 day ago</p>
                    </div>
                  </div>
                </button>
              </div>
              <div className="p-3 border-t border-gray-200 text-center">
                <button
                  onClick={() => {
                    onNavigate('dashboard');
                    setShowNotifications(false);
                  }}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  View all notifications
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            onClick={() => {
              setShowDropdown(!showDropdown);
              setShowNotifications(false);
              onCloseSidebar();
            }}
            className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {agent?.avatar_url ? (
              <img
                src={agent.avatar_url}
                alt={agent.full_name}
                className="w-8 h-8 rounded-full"
              />
            ) : (
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                agent?.role === 'admin' ? 'bg-yellow-500' : agent?.role === 'manager' ? 'bg-teal-600' : 'bg-yellow-500'
              }`}>
                <span className="text-gray-900 text-sm font-semibold">
                  {agent?.full_name?.charAt(0) || 'A'}
                </span>
              </div>
            )}
            <div className="hidden md:block text-left">
              <p className="text-sm font-semibold text-gray-900">{agent?.full_name}</p>
              <p className="text-xs text-gray-500 capitalize">{agent?.role}</p>
            </div>
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
              <button
                onClick={() => {
                  onNavigate('profile');
                  setShowDropdown(false);
                }}
                className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
              >
                <User className="w-4 h-4" />
                <span>Profile</span>
              </button>
              <button
                onClick={() => {
                  onNavigate('settings');
                  setShowDropdown(false);
                }}
                className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
              >
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </button>
              <hr className="my-2 border-gray-200" />
              <button
                onClick={signOut}
                className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 flex items-center space-x-2"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
