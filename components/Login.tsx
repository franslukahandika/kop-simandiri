
import React, { useState } from 'react';
import { Role, UserSession } from '../types';

interface LoginProps {
  onLogin: (data: UserSession) => void;
  onBackToPortal: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onBackToPortal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Mock Login Logic
    if (username === 'admin' && password === 'admin123') {
      onLogin({ userId: 'ADM001', user: 'Administrator', role: Role.ADMIN, loginTime: new Date().toISOString(), status: 'success' });
    } else if (username === 'director' && password === 'director123') {
      onLogin({ userId: 'DIR001', user: 'Director', role: Role.DIRECTOR, loginTime: new Date().toISOString(), status: 'success' });
    } else if (username === 'member' && password === 'member123') {
      onLogin({ userId: '2301-03001', user: 'Ahmad Zulkifli', role: Role.ANGGOTA, loginTime: new Date().toISOString(), status: 'success' });
    } else {
      setError('Username atau Password salah.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md p-10 rounded-3xl shadow-2xl border border-gray-100">
        <div className="text-center mb-10">
          <div className="text-6xl text-[#1a4d2e] mb-4"><i className="fas fa-landmark"></i></div>
          <h2 className="font-cinzel text-2xl font-bold text-[#1a4d2e] tracking-wider">SI MANDIRI</h2>
          <p className="text-gray-400 text-sm mt-2">Koperasi & Project Management System</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-black text-[#1a4d2e] uppercase tracking-widest">Username / ID</label>
            <div className="relative">
              <i className="fas fa-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Masukkan ID Anda" 
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1a4d2e] transition-all"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black text-[#1a4d2e] uppercase tracking-widest">Password</label>
            <div className="relative">
              <i className="fas fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan Password" 
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1a4d2e] transition-all"
                required
              />
            </div>
          </div>

          {error && <div className="text-red-500 text-xs font-bold text-center bg-red-50 p-2 rounded-lg">{error}</div>}

          <button 
            type="submit"
            className="w-full bg-[#1a4d2e] text-white py-4 rounded-2xl font-black text-sm tracking-widest hover:bg-[#0e2b1a] shadow-lg hover:shadow-[#1a4d2e]/30 transition-all transform hover:-translate-y-1"
          >
            MASUK KE SISTEM <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </form>

        <button 
          onClick={onBackToPortal}
          className="w-full mt-6 text-gray-400 text-xs font-bold hover:text-[#1a4d2e] transition-colors"
        >
          <i className="fas fa-chevron-left mr-2"></i> Kembali ke Portal Publik
        </button>
      </div>
    </div>
  );
};

export default Login;
