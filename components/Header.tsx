
import React from 'react';

interface HeaderProps {
  title: string;
  onExitToPortal: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onExitToPortal }) => {
  return (
    <header className="h-20 bg-[#1a4d2e] shadow-lg flex items-center justify-between px-6 md:px-12 text-white shrink-0">
      <div className="hidden md:block"></div> {/* Spacer for alignment */}
      <h1 className="font-extrabold text-lg md:text-xl tracking-wider text-center flex-1">{title}</h1>
      <button 
        onClick={onExitToPortal}
        className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all text-sm font-semibold"
      >
        <i className="fas fa-home"></i>
        <span className="hidden sm:inline">Portal</span>
      </button>
    </header>
  );
};

export default Header;
