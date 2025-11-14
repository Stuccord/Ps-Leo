import React, { useEffect, useState } from 'react';
import { Users, Shield, DollarSign, TrendingUp, UserCheck, UserX } from 'lucide-react';
import StatCard from '../../components/StatCard';
import { supabase } from '../../lib/supabase';

interface AdminStats {
  totalAgents: number;
  activeAgents: number;
  totalClients: number;
  totalPolicies: number;
  totalCommissions: number;
  pendingClaims: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<AdminStats>({
    totalAgents: 0,
    activeAgents: 0,
    totalClients: 0,
    totalPolicies: 0,
    totalCommissions: 0,
    pendingClaims: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAdminStats();
  }, []);

  const fetchAdminStats = async () => {
    try {
      const currentMonth = new Date().getMonth() + 1;
      const currentYear = new Date().getFullYear();

      const [agentsRes, activeAgentsRes, clientsRes, policiesRes, commissionsRes, claimsRes] = await Promise.all([
        supabase.from('agents').select('id', { count: 'exact' }),
        supabase.from('agents').select('id', { count: 'exact' }).eq('is_active', true),
        supabase.from('clients').select('id', { count: 'exact' }),
        supabase.from('policies').select('id', { count: 'exact' }).eq('status', 'active'),
        supabase
          .from('commissions')
          .select('amount')
          .eq('month', currentMonth)
          .eq('year', currentYear),
        supabase.from('claims').select('id', { count: 'exact' }).eq('status', 'pending'),
      ]);

      const totalCommissions = commissionsRes.data?.reduce((sum, c) => sum + parseFloat(c.amount.toString()), 0) || 0;

      setStats({
        totalAgents: agentsRes.count || 0,
        activeAgents: activeAgentsRes.count || 0,
        totalClients: clientsRes.count || 0,
        totalPolicies: policiesRes.count || 0,
        totalCommissions,
        pendingClaims: claimsRes.count || 0,
      });
    } catch (error) {
      console.error('Error fetching admin stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return `GHS ${amount.toLocaleString('en-GH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">System-wide overview and analytics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Total Agents"
          value={stats.totalAgents}
          icon={Users}
          iconBgColor="bg-blue-100"
          iconColor="text-blue-600"
        />
        <StatCard
          title="Active Agents"
          value={stats.activeAgents}
          icon={UserCheck}
          iconBgColor="bg-green-100"
          iconColor="text-green-600"
        />
        <StatCard
          title="Total Clients"
          value={stats.totalClients}
          icon={Users}
          iconBgColor="bg-indigo-100"
          iconColor="text-indigo-600"
        />
        <StatCard
          title="Active Policies"
          value={stats.totalPolicies}
          icon={Shield}
          iconBgColor="bg-teal-100"
          iconColor="text-teal-600"
        />
        <StatCard
          title="Monthly Commissions"
          value={formatCurrency(stats.totalCommissions)}
          icon={DollarSign}
          iconBgColor="bg-emerald-100"
          iconColor="text-emerald-600"
        />
        <StatCard
          title="Pending Claims"
          value={stats.pendingClaims}
          icon={TrendingUp}
          iconBgColor="bg-orange-100"
          iconColor="text-orange-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full text-left px-4 py-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
              <div className="font-semibold text-blue-900">Manage Agents</div>
              <div className="text-sm text-blue-600">View and manage all agents</div>
            </button>
            <button className="w-full text-left px-4 py-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
              <div className="font-semibold text-green-900">Approve Claims</div>
              <div className="text-sm text-green-600">Review pending claims</div>
            </button>
            <button className="w-full text-left px-4 py-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
              <div className="font-semibold text-purple-900">Process Commissions</div>
              <div className="text-sm text-purple-600">Manage commission payments</div>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">System Health</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Agent Utilization</span>
                <span className="text-sm font-semibold text-gray-900">
                  {stats.totalAgents > 0 ? Math.round((stats.activeAgents / stats.totalAgents) * 100) : 0}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all"
                  style={{
                    width: `${stats.totalAgents > 0 ? (stats.activeAgents / stats.totalAgents) * 100 : 0}%`,
                  }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Policy Conversion</span>
                <span className="text-sm font-semibold text-gray-900">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full transition-all" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Claims Processing</span>
                <span className="text-sm font-semibold text-gray-900">72%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-600 h-2 rounded-full transition-all" style={{ width: '72%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
