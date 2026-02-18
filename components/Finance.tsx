
import React, { useState } from 'react';
import { Role } from '../types';

interface FinanceProps {
  role: Role;
}

const Finance: React.FC<FinanceProps> = ({ role }) => {
  const [activeTab, setActiveTab] = useState<'PUSAT' | 'CABANG' | 'PROJECT'>('PUSAT');
  const [searchTerm, setSearchTerm] = useState('');

  const mockTransactions = [
    { id: 'T230101-001', tgl: '12 Jan 2024', jenis: 'MASUK', kategori: 'S. WAJIB', ref: 'KOPERASI', entity: 'PLANTATION A', akun: 'AHMAD (2301-03001)', jumlah: 250000, link: '#' },
    { id: 'P230101-005', tgl: '15 Jan 2024', jenis: 'KELUAR', kategori: 'OPERASIONAL', ref: 'PROJECT', entity: 'KAMPUNG HAJI', akun: 'DANA PROJECT', jumlah: 5000000, link: '#' },
    { id: 'T230101-008', tgl: '18 Jan 2024', jenis: 'MASUK', kategori: 'S. POKOK', ref: 'KOPERASI', entity: 'PLANTATION B', akun: 'SITI (2301-03002)', jumlah: 1000000, link: '#' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <small className="text-gray-400 font-bold uppercase text-[10px] block mb-1">MASUK ({activeTab})</small>
          <h3 className="text-2xl font-bold text-[#1a4d2e]">Rp 150.000.000</h3>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <small className="text-gray-400 font-bold uppercase text-[10px] block mb-1">KELUAR ({activeTab})</small>
          <h3 className="text-2xl font-bold text-red-600">Rp 45.000.000</h3>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border-b-4 border-[#d4af37]">
          <small className="text-gray-400 font-bold uppercase text-[10px] block mb-1">SALDO EFEKTIF</small>
          <h3 className="text-2xl font-bold text-slate-800">Rp 105.000.000</h3>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex bg-gray-100 p-1 rounded-xl">
            {['PUSAT', 'CABANG', 'PROJECT'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                  activeTab === tab ? 'bg-white text-[#1a4d2e] shadow-sm' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
              <input 
                type="text" 
                placeholder="Cari transaksi..." 
                className="pl-11 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a4d2e] text-sm w-full md:w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {role === Role.ADMIN && (
              <button className="bg-[#1a4d2e] text-white px-6 py-2 rounded-xl text-sm font-bold hover:bg-[#0e2b1a] transition-colors flex items-center gap-2">
                <i className="fas fa-plus-circle"></i>
                <span className="hidden sm:inline">Transaksi Baru</span>
              </button>
            )}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-400 uppercase text-[10px] tracking-wider font-bold">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Tgl</th>
                <th className="px-6 py-4">Jenis</th>
                <th className="px-6 py-4">Kategori</th>
                <th className="px-6 py-4">Ref</th>
                <th className="px-6 py-4">Entity</th>
                <th className="px-6 py-4 text-right">Jumlah</th>
                <th className="px-6 py-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockTransactions.map((trx) => (
                <tr key={trx.id} className="hover:bg-gray-50 transition-colors text-sm">
                  <td className="px-6 py-4 font-bold text-[#1a4d2e]">{trx.id}</td>
                  <td className="px-6 py-4 text-gray-500">{trx.tgl}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-[10px] font-bold ${
                      trx.jenis === 'MASUK' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {trx.jenis}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium">{trx.kategori}</td>
                  <td className="px-6 py-4 text-gray-500">{trx.ref}</td>
                  <td className="px-6 py-4 font-semibold">{trx.entity}</td>
                  <td className="px-6 py-4 text-right font-bold">Rp {trx.jumlah.toLocaleString('id-ID')}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                      <button className="w-8 h-8 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200"><i className="fas fa-eye"></i></button>
                      {role === Role.ADMIN && (
                        <button className="w-8 h-8 rounded-lg bg-[#fff9db] text-[#f08c00] hover:bg-[#ffe066]"><i className="fas fa-edit"></i></button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Finance;
