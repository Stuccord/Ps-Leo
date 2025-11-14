import React from 'react';
import {
  LayoutDashboard,
  UserPlus,
  FileText,
  ClipboardList,
  DollarSign,
  BarChart3,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Users,
  UsersRound
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

const agentMenuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, roles: ['agent', 'manager', 'admin'] },
  { id: 'new-client', label: 'New Client Referral', icon: UserPlus, roles: ['agent'] },
  { id: 'policies', label: 'Policy Management', icon: FileText, roles: ['agent', 'manager', 'admin'] },
  { id: 'claims', label: 'Claims Center', icon: ClipboardList, roles: ['agent', 'manager', 'admin'] },
  { id: 'commissions', label: 'Commissions', icon: DollarSign, roles: ['agent', 'manager', 'admin'] },
  { id: 'reports', label: 'Reports & Analytics', icon: BarChart3, roles: ['agent', 'manager', 'admin'] },
  { id: 'support', label: 'Support', icon: BookOpen, roles: ['agent', 'manager', 'admin'] },
];

const managerMenuItems = [
  { id: 'manager-dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'team-overview', label: 'Team Overview', icon: UsersRound },
  { id: 'policies', label: 'All Policies', icon: FileText },
  { id: 'claims', label: 'Claims Review', icon: ClipboardList },
  { id: 'commissions', label: 'Commissions', icon: DollarSign },
  { id: 'reports', label: 'Reports', icon: BarChart3 },
  { id: 'support', label: 'Support', icon: BookOpen },
];

const adminMenuItems = [
  { id: 'admin-dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'agent-management', label: 'Agent Management', icon: Users },
  { id: 'policies', label: 'All Policies', icon: FileText },
  { id: 'claims', label: 'All Claims', icon: ClipboardList },
  { id: 'commissions', label: 'Commissions', icon: DollarSign },
  { id: 'reports', label: 'Reports', icon: BarChart3 },
  { id: 'support', label: 'Support', icon: BookOpen },
];

export default function Sidebar({ currentPage, onNavigate, collapsed, onToggleCollapse }: SidebarProps) {
  const { agent } = useAuth();

  const getMenuItems = () => {
    if (agent?.role === 'admin') return adminMenuItems;
    if (agent?.role === 'manager') return managerMenuItems;
    return agentMenuItems;
  };

  const menuItems = getMenuItems();
  return (
    <aside
      className={`bg-gray-900 text-white transition-all duration-300 flex flex-col ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="p-6 flex items-center justify-between border-b border-gray-800">
        {!collapsed && (
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
              agent?.role === 'admin' ? 'bg-blue-600' : agent?.role === 'manager' ? 'bg-teal-600' : 'bg-orange-600'
            }`}>
              <span className="text-xl font-bold">IA</span>
            </div>
            <div>
              <h1 className="font-bold text-lg">InsureAgent</h1>
              <p className="text-xs text-gray-400 capitalize">{agent?.role || 'Portal'}</p>
            </div>
          </div>
        )}
        <button
          onClick={onToggleCollapse}
          className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
        >
          {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon!;
          const isActive = currentPage === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? `${agent?.role === 'admin' ? 'bg-blue-600' : agent?.role === 'manager' ? 'bg-teal-600' : 'bg-orange-600'} text-white shadow-lg`
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              } ${collapsed ? 'justify-center' : ''}`}
              title={collapsed ? item.label : ''}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && <span className="font-medium">{item.label}</span>}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
