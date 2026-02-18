
import React, { useState, useEffect, useCallback } from 'react';
import { Role, UserSession } from './types';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Finance from './components/Finance';
import Membership from './components/Membership';
import ProjectMonitoring from './components/ProjectMonitoring';
import MasterData from './components/MasterData';
import Login from './components/Login';
import Portal from './components/Portal';

const App: React.FC = () => {
  const [view, setView] = useState<'portal' | 'app'>('portal');
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [session, setSession] = useState<UserSession | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Auto-login or session check simulation
  useEffect(() => {
    const savedSession = localStorage.getItem('si_mandiri_session');
    if (savedSession) {
      setSession(JSON.parse(savedSession));
      setView('app');
    }
  }, []);

  const handleLogin = (userData: UserSession) => {
    setSession(userData);
    setView('app');
    localStorage.setItem('si_mandiri_session', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setSession(null);
    setView('portal');
    localStorage.removeItem('si_mandiri_session');
  };

  const toggleLoading = (show: boolean) => setLoading(show);

  if (view === 'portal') {
    return <Portal onEnterApp={() => setView('app')} />;
  }

  if (!session) {
    return <Login onLogin={handleLogin} onBackToPortal={() => setView('portal')} />;
  }

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <Dashboard role={session.role} userId={session.userId} />;
      case 'keuangan':
        return <Finance role={session.role} />;
      case 'anggota':
        return <Membership role={session.role} userId={session.userId} />;
      case 'project':
        return <ProjectMonitoring role={session.role} />;
      case 'masterdata':
        return <MasterData />;
      default:
        return <Dashboard role={session.role} userId={session.userId} />;
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar 
        currentView={currentPage} 
        setView={setCurrentPage} 
        role={session.role} 
        onLogout={handleLogout} 
        user={session.user}
        onExitToPortal={() => setView('portal')}
      />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header 
          title={currentPage.toUpperCase()} 
          onExitToPortal={() => setView('portal')} 
        />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50">
          {renderContent()}
        </main>
      </div>

      {loading && (
        <div className="fixed inset-0 z-[9999] bg-white/80 flex flex-col items-center justify-center">
          <div className="w-12 h-12 border-4 border-[#1a4d2e] border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-[#1a4d2e] font-semibold">Sedang Memproses...</p>
        </div>
      )}
    </div>
  );
};

export default App;
