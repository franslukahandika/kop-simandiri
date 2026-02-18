
import React, { useState } from 'react';
import { Role } from '../types';
import { ICONS, COLORS } from '../constants';

interface SidebarProps {
  currentView: string;
  setView: (view: string) => void;
  role: Role;
  onLogout: () => void;
  user: string;
  onExitToPortal: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setView, role, onLogout, user, onExitToPortal }) => {
  const [isMasterOpen, setIsMasterOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Dashboard', icon: ICONS.Dashboard, roles: [Role.ADMIN, Role.DIRECTOR] },
    { id: 'keuangan', label: 'Keuangan', icon: ICONS.Finance, roles: [Role.ADMIN, Role.DIRECTOR] },
    { id: 'anggota', label: 'Keanggotaan', icon: ICONS.Membership, roles: [Role.ADMIN, Role.DIRECTOR, Role.ANGGOTA] },
    { id: 'project', label: 'Project', icon: ICONS.Project, roles: [Role.ADMIN, Role.DIRECTOR] },
  ];

  const handleNavClick = (id: string) => {
    setView(id);
    if (window.innerWidth < 768) setIsMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed top-4 left-4 z-[60] md:hidden bg-[#1a4d2e] text-white p-2 rounded-lg shadow-lg"
      >
        <i className={`fas ${isMobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>

      {/* Backdrop */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-[#1a4d2e] text-white flex flex-col transition-transform duration-300
        md:relative md:translate-x-0
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 text-center border-b border-white/10">
          <h2 className="font-cinzel text-xl text-[#d4af37] tracking-wider flex items-center justify-center gap-2">
            <i className="fas fa-landmark"></i> SI MANDIRI
          </h2>
        </div>

        <div className="p-6 mx-4 my-6 bg-black/20 rounded-xl text-center">
          <div className="text-3xl text-[#d4af37] mb-2">{ICONS.User}</div>
          <div className="font-bold text-sm truncate">{user}</div>
          <div className="text-[10px] uppercase tracking-widest text-white/50">{role}</div>
        </div>

        <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
          {navItems.filter(item => item.roles.includes(role)).map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 ${
                currentView === item.id 
                  ? 'bg-white/15 text-white border-l-4 border-[#d4af37]' 
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="w-5 text-center">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}

          {role === Role.ADMIN && (
            <div className="space-y-1">
              <button
                onClick={() => setIsMasterOpen(!isMasterOpen)}
                className="w-full flex items-center justify-between gap-4 px-4 py-3 rounded-lg text-white/70 hover:bg-white/10 hover:text-white"
              >
                <div className="flex items-center gap-4">
                  <span className="w-5 text-center">{ICONS.Master}</span>
                  <span className="font-medium">Master Data</span>
                </div>
                <i className={`fas fa-chevron-${isMasterOpen ? 'up' : 'down'} text-xs transition-transform`}></i>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 pl-8 space-y-1 ${isMasterOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                {['Areas', 'Categories', 'Products', 'Prices'].map(sub => (
                  <button
                    key={sub}
                    onClick={() => { setView('masterdata'); setIsMobileOpen(false); }}
                    className="w-full text-left px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-md"
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          <div className="pt-8 mt-8 border-t border-white/10 space-y-2">
            <button
              onClick={onExitToPortal}
              className="w-full flex items-center gap-4 px-4 py-3 rounded-lg text-white/70 hover:bg-white/10 hover:text-white"
            >
              <span className="w-5 text-center"><i className="fas fa-home"></i></span>
              <span className="font-medium">Kembali ke Portal</span>
            </button>

            <button
              onClick={onLogout}
              className="w-full flex items-center gap-4 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors"
            >
              <span className="w-5 text-center">{ICONS.Logout}</span>
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
