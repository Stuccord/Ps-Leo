import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LandingPage from './pages/LandingPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NewClient from './pages/NewClient';
import Policies from './pages/Policies';
import Claims from './pages/Claims';
import Commissions from './pages/Commissions';
import Reports from './pages/Reports';
import Support from './pages/Support';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import AdminDashboard from './pages/admin/AdminDashboard';
import AgentManagement from './pages/admin/AgentManagement';
import ReferralManagement from './pages/admin/ReferralManagement';
import WithdrawalProcessing from './pages/admin/WithdrawalProcessing';
import ClaimsManagement from './pages/admin/ClaimsManagement';
import FileClaim from './pages/FileClaim';
import ManagerDashboard from './pages/manager/ManagerDashboard';
import TeamOverview from './pages/manager/TeamOverview';
import ReferralDashboard from './pages/ReferralDashboard';
import NewReferral from './pages/NewReferral';
import PendingReferrals from './pages/PendingReferrals';
import CompletedReferrals from './pages/CompletedReferrals';
import Documents from './pages/Documents';
import SupportTickets from './pages/SupportTickets';
import TermsPolicies from './pages/TermsPolicies';
import Leaderboard from './pages/Leaderboard';
import Withdrawals from './pages/Withdrawals';
import Notifications from './pages/Notifications';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';

function AppContent() {
  const { user, agent, loading } = useAuth();
  const [currentPage, setCurrentPage] = useState('landing');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  useEffect(() => {
    if (agent) {
      if (agent.role === 'admin') {
        setCurrentPage('admin-dashboard');
      } else if (agent.role === 'manager') {
        setCurrentPage('manager-dashboard');
      } else {
        setCurrentPage('referral-dashboard');
      }
    } else if (!user) {
      setCurrentPage('landing');
    }
  }, [agent, user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <img src="/Ps-Leo_9-removebg-preview.png" alt="BearGuard" className="w-32 h-32 mx-auto mb-4 animate-pulse" />
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-orange-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-orange-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 bg-orange-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    if (currentPage === 'landing') {
      return <LandingPage onNavigate={setCurrentPage} />;
    }
    if (currentPage === 'signup') {
      return <Signup onNavigate={setCurrentPage} />;
    }
    if (currentPage === 'login') {
      return <Login onNavigate={setCurrentPage} />;
    }
    return <LandingPage onNavigate={setCurrentPage} />;
  }

  if (!agent && user && !loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <img src="/Ps-Leo_9-removebg-preview.png" alt="BearGuard" className="w-32 h-32 mx-auto mb-4 animate-pulse" />
          <p className="text-gray-600 mt-4">Setting up your profile...</p>
          <p className="text-sm text-gray-500 mt-2">This will only take a moment</p>
        </div>
      </div>
    );
  }

  const renderPage = () => {
    if (currentPage === 'landing') {
      return <LandingPage onNavigate={setCurrentPage} />;
    }

    switch (currentPage) {
      case 'admin-dashboard':
        return <AdminDashboard onNavigate={setCurrentPage} />;
      case 'agent-management':
        return <AgentManagement />;
      case 'referral-management':
        return <ReferralManagement />;
      case 'claims-management':
        return <ClaimsManagement />;
      case 'withdrawal-processing':
        return <WithdrawalProcessing />;
      case 'manager-dashboard':
        return <ManagerDashboard />;
      case 'team-overview':
        return <TeamOverview />;
      case 'dashboard':
        return <Dashboard />;
      case 'referral-dashboard':
        return <ReferralDashboard />;
      case 'new-client':
        return <NewClient />;
      case 'new-referral':
        return <NewReferral />;
      case 'pending-referrals':
        return <PendingReferrals />;
      case 'completed-referrals':
        return <CompletedReferrals />;
      case 'documents':
        return <Documents />;
      case 'support-tickets':
        return <SupportTickets />;
      case 'terms-policies':
        return <TermsPolicies />;
      case 'leaderboard':
        return <Leaderboard />;
      case 'policies':
        return <Policies />;
      case 'claims':
        return <Claims onNavigate={setCurrentPage} />;
      case 'file-claim':
        return <FileClaim onNavigate={setCurrentPage} />;
      case 'commissions':
        return <Commissions />;
      case 'withdrawals':
        return <Withdrawals />;
      case 'reports':
        return <Reports />;
      case 'support':
        return <Support />;
      case 'profile':
        return <Profile />;
      case 'settings':
        return <Settings />;
      case 'notifications':
        return <Notifications />;
      default:
        if (agent?.role === 'admin') return <AdminDashboard />;
        if (agent?.role === 'manager') return <ManagerDashboard />;
        return <ReferralDashboard />;
    }
  };

  if (currentPage === 'landing') {
    return renderPage();
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <div className={`hidden lg:block ${sidebarCollapsed ? 'w-20' : 'w-64'} transition-all duration-300`}>
        <Sidebar
          currentPage={currentPage}
          onNavigate={setCurrentPage}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
      </div>

      {mobileSidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-gray-900 bg-opacity-50" onClick={() => setMobileSidebarOpen(false)}>
          <div className="w-64 h-full" onClick={(e) => e.stopPropagation()}>
            <Sidebar
              currentPage={currentPage}
              onNavigate={(page) => {
                setCurrentPage(page);
                setMobileSidebarOpen(false);
              }}
              collapsed={false}
              onToggleCollapse={() => setMobileSidebarOpen(false)}
            />
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav onMenuClick={() => setMobileSidebarOpen(true)} onNavigate={setCurrentPage} onCloseSidebar={() => setMobileSidebarOpen(false)} />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            {renderPage()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
