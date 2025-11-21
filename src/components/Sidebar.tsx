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
  UsersRound,
  Clock,
  CheckCircle,
  Download,
  MessageSquare,
  Shield,
  Trophy,
  Wallet
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

const agentMenuItems = [
  { id: 'referral-dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'new-referral', label: 'New Referral', icon: UserPlus },
  { id: 'pending-referrals', label: 'Pending Referrals', icon: Clock },
  { id: 'completed-referrals', label: 'Completed Referrals', icon: CheckCircle },
  { id: 'withdrawals', label: 'Withdrawals', icon: Wallet },
  { id: 'documents', label: 'Documents', icon: Download },
  { id: 'support-tickets', label: 'Support / Complaints', icon: MessageSquare },
  { id: 'terms-policies', label: 'Terms & Policies', icon: Shield },
  { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
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
  { id: 'referral-management', label: 'Referral Management', icon: ClipboardList },
  { id: 'withdrawal-processing', label: 'Withdrawal Processing', icon: Wallet },
  { id: 'documents', label: 'Documents', icon: Download },
  { id: 'support-tickets', label: 'Support Tickets', icon: MessageSquare },
  { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
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
      className={`bg-navy-500 text-white transition-all duration-300 flex flex-col ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="p-6 flex items-center justify-between border-b border-navy-700">
        {!collapsed && (
          <div className="flex items-center space-x-3">
            <img
              src="/Untitled-1 (5).png"
              alt="BearGuard"
              className="h-10 w-auto brightness-0 invert"
            />
            <div>
              <p className="text-xs text-gray-400 capitalize">{agent?.role || 'Rep'} Portal</p>
            </div>
          </div>
        )}
        {collapsed && (
          <img
            src="/Untitled-1 (5).png"
            alt="BearGuard"
            className="h-8 w-auto brightness-0 invert mx-auto"
          />
        )}
        <button
          onClick={onToggleCollapse}
          className="p-2 hover:bg-navy-700 rounded-lg transition-colors"
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
                  ? `${agent?.role === 'admin' ? 'bg-yellow-500' : agent?.role === 'manager' ? 'bg-teal-600' : 'bg-yellow-500'} text-gray-900 shadow-lg font-semibold`
                  : 'text-gray-400 hover:bg-navy-700 hover:text-white'
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
