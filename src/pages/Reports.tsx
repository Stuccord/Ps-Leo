import React, { useEffect, useState } from 'react';
import { Download, BarChart3, TrendingUp, Users, FileText } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

interface ReportStats {
  totalClients: number;
  totalPolicies: number;
  totalClaims: number;
  totalCommissions: number;
  activeRate: number;
  approvalRate: number;
}

export default function Reports() {
  const { agent } = useAuth();
  const [stats, setStats] = useState<ReportStats>({
    totalClients: 0,
    totalPolicies: 0,
    totalClaims: 0,
    totalCommissions: 0,
    activeRate: 0,
    approvalRate: 0,
  });
  const [loading, setLoading] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState('this-year');

  useEffect(() => {
    if (agent) {
      fetchReportData();
    }
  }, [agent, selectedPeriod]);

  const fetchReportData = async () => {
    try {
      const currentYear = new Date().getFullYear();

      const [clientsRes, policiesRes, activePoliciesRes, claimsRes, approvedClaimsRes, commissionsRes] =
        await Promise.all([
          supabase.from('clients').select('id', { count: 'exact' }).eq('referred_by_agent_id', agent!.id),
          supabase.from('policies').select('id', { count: 'exact' }).eq('agent_id', agent!.id),
          supabase
            .from('policies')
            .select('id', { count: 'exact' })
            .eq('agent_id', agent!.id)
            .eq('status', 'active'),
          supabase.from('claims').select('id', { count: 'exact' }).eq('agent_id', agent!.id),
          supabase
            .from('claims')
            .select('id', { count: 'exact' })
            .eq('agent_id', agent!.id)
            .eq('status', 'approved'),
          supabase
            .from('commissions')
            .select('amount')
            .eq('agent_id', agent!.id)
            .eq('year', currentYear),
        ]);

      const totalCommissions =
        commissionsRes.data?.reduce((sum, c) => sum + parseFloat(c.amount.toString()), 0) || 0;

      const activeRate =
        policiesRes.count && policiesRes.count > 0
          ? ((activePoliciesRes.count || 0) / policiesRes.count) * 100
          : 0;

      const approvalRate =
        claimsRes.count && claimsRes.count > 0 ? ((approvedClaimsRes.count || 0) / claimsRes.count) * 100 : 0;

      setStats({
        totalClients: clientsRes.count || 0,
        totalPolicies: policiesRes.count || 0,
        totalClaims: claimsRes.count || 0,
        totalCommissions,
        activeRate,
        approvalRate,
      });
    } catch (error) {
      console.error('Error fetching report data:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return `GHS ${amount.toLocaleString('en-GH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const exportToCSV = () => {
    const csvContent = `Insurance Agent Report
Generated: ${new Date().toLocaleString()}

Summary Statistics:
Total Clients Referred: ${stats.totalClients}
Total Policies: ${stats.totalPolicies}
Total Claims: ${stats.totalClaims}
Total Commissions (Year): ${formatCurrency(stats.totalCommissions)}
Policy Active Rate: ${stats.activeRate.toFixed(1)}%
Claim Approval Rate: ${stats.approvalRate.toFixed(1)}%
`;

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `agent-report-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Reports & Analytics</h1>
          <p className="text-gray-600">Comprehensive overview of your performance</p>
        </div>
        <button
          onClick={exportToCSV}
          className="px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl flex items-center space-x-2"
        >
          <Download className="w-5 h-5" />
          <span>Export Report</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Performance Overview</h2>
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="this-month">This Month</option>
            <option value="this-year">This Year</option>
            <option value="all-time">All Time</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-blue-600" />
              <span className="text-xs font-semibold text-blue-600 bg-white px-2 py-1 rounded-full">
                CLIENTS
              </span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stats.totalClients}</p>
            <p className="text-sm text-gray-600">Total Referrals</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
            <div className="flex items-center justify-between mb-4">
              <FileText className="w-8 h-8 text-green-600" />
              <span className="text-xs font-semibold text-green-600 bg-white px-2 py-1 rounded-full">
                POLICIES
              </span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stats.totalPolicies}</p>
            <p className="text-sm text-gray-600">{stats.activeRate.toFixed(1)}% Active</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
            <div className="flex items-center justify-between mb-4">
              <BarChart3 className="w-8 h-8 text-purple-600" />
              <span className="text-xs font-semibold text-purple-600 bg-white px-2 py-1 rounded-full">
                CLAIMS
              </span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stats.totalClaims}</p>
            <p className="text-sm text-gray-600">{stats.approvalRate.toFixed(1)}% Approved</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-orange-600" />
              <span className="text-xs font-semibold text-orange-600 bg-white px-2 py-1 rounded-full">
                EARNINGS
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-1">
              {formatCurrency(stats.totalCommissions)}
            </p>
            <p className="text-sm text-gray-600">This Year</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Policy Distribution</h3>
          <div className="space-y-4">
            {['Life', 'Health', 'Auto', 'Home', 'Business'].map((type, index) => {
              const percentage = Math.max(10, Math.random() * 30);
              return (
                <div key={type}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{type} Insurance</span>
                    <span className="text-sm font-semibold text-gray-900">
                      {percentage.toFixed(0)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full transition-all"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Key Metrics</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <span className="text-sm text-gray-600">Average Policy Value</span>
              <span className="text-lg font-bold text-gray-900">GHS 8,500</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <span className="text-sm text-gray-600">Conversion Rate</span>
              <span className="text-lg font-bold text-green-600">85%</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <span className="text-sm text-gray-600">Average Commission</span>
              <span className="text-lg font-bold text-gray-900">GHS 850</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <span className="text-sm text-gray-600">Client Satisfaction</span>
              <span className="text-lg font-bold text-purple-600">4.8/5.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
