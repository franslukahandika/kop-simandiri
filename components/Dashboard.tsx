
import React, { useMemo } from 'react';
import { Role } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

interface DashboardProps {
  role: Role;
  userId: string;
}

const Dashboard: React.FC<DashboardProps> = ({ role, userId }) => {
  // Mock Data
  const stats = {
    totalKoperasi: 1254500000,
    totalProject: 845200000,
    totalPemasukan: 2840000000,
    totalPengeluaran: 740350000,
    totalAnggota: 486,
    anggotaPusat: 124,
    anggotaCabang: 362
  };

  const chartData = [
    { name: 'Jan', koperasi: 4000, project: 2400 },
    { name: 'Feb', koperasi: 3000, project: 1398 },
    { name: 'Mar', koperasi: 2000, project: 9800 },
    { name: 'Apr', koperasi: 2780, project: 3908 },
    { name: 'May', koperasi: 1890, project: 4800 },
    { name: 'Jun', koperasi: 2390, project: 3800 },
  ];

  const formatIDR = (val: number) => `Rp ${val.toLocaleString('id-ID')}`;

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center gap-3">
        <div className="w-1.5 h-8 bg-[#d4af37] rounded-full"></div>
        <h2 className="text-xl font-bold text-[#1a4d2e]">Ringkasan Keuangan</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard 
          label="SALDO KOPERASI" 
          value={formatIDR(stats.totalKoperasi)} 
          borderColor="border-[#1a4d2e]"
          subDetails={[
            { label: 'Masuk', val: formatIDR(1500000000) },
            { label: 'Keluar', val: formatIDR(245500000) }
          ]}
        />
        <StatCard 
          label="SALDO PROJECT" 
          value={formatIDR(stats.totalProject)} 
          borderColor="border-[#d4af37]"
          subDetails={[
            { label: 'Masuk', val: formatIDR(1340000000) },
            { label: 'Keluar', val: formatIDR(494800000) }
          ]}
        />
        <StatCard 
          label="TOTAL SALDO EFEKTIF" 
          value={formatIDR(stats.totalPemasukan - stats.totalPengeluaran)} 
          borderColor="border-green-600"
          subDetails={[
            { label: 'Total Masuk', val: formatIDR(stats.totalPemasukan) },
            { label: 'Total Keluar', val: formatIDR(stats.totalPengeluaran) }
          ]}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="font-bold mb-6 text-gray-700">Performa Kas (Koperasi vs Project)</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip cursor={{ fill: '#f8f9fa' }} />
                <Legend />
                <Bar dataKey="koperasi" fill="#1a4d2e" radius={[4, 4, 0, 0]} />
                <Bar dataKey="project" fill="#d4af37" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="font-bold mb-6 text-gray-700">Trend Pemasukan</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="koperasi" stroke="#1a4d2e" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 pt-6">
        <div className="w-1.5 h-8 bg-[#d4af37] rounded-full"></div>
        <h2 className="text-xl font-bold text-[#1a4d2e]">Statistik Keanggotaan</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-8">
        <MiniCard label="Total Anggota" value={`${stats.totalAnggota} Orang`} icon="fa-users" />
        <MiniCard label="Anggota Pusat" value={`${stats.anggotaPusat} Orang`} icon="fa-building" />
        <MiniCard label="Anggota Cabang" value={`${stats.anggotaCabang} Orang`} icon="fa-map-marked-alt" />
      </div>
    </div>
  );
};

const StatCard: React.FC<{ label: string; value: string; borderColor: string; subDetails: { label: string; val: string }[] }> = ({ label, value, borderColor, subDetails }) => (
  <div className={`bg-white p-6 rounded-2xl shadow-sm border-b-4 ${borderColor} relative overflow-hidden group hover:shadow-md transition-shadow`}>
    <small className="text-gray-400 font-bold uppercase text-[10px] tracking-widest block mb-1">{label}</small>
    <h3 className="text-2xl font-black text-slate-800">{value}</h3>
    <div className="mt-6 pt-4 border-t border-dashed border-gray-100 space-y-2">
      {subDetails.map((detail, idx) => (
        <div key={idx} className="flex justify-between text-xs font-medium">
          <span className="text-gray-400">{detail.label}</span>
          <span className="text-slate-600">{detail.val}</span>
        </div>
      ))}
    </div>
  </div>
);

const MiniCard: React.FC<{ label: string; value: string; icon: string }> = ({ label, value, icon }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5 hover:bg-gray-50 transition-colors">
    <div className="w-12 h-12 rounded-xl bg-[#1a4d2e]/10 flex items-center justify-center text-[#1a4d2e]">
      <i className={`fas ${icon} text-xl`}></i>
    </div>
    <div>
      <small className="text-gray-400 font-bold uppercase text-[10px] tracking-widest block mb-0.5">{label}</small>
      <h3 className="text-xl font-bold text-slate-800">{value}</h3>
    </div>
  </div>
);

export default Dashboard;
