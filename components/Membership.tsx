
import React, { useState } from 'react';
import { Role, Member } from '../types';

interface MembershipProps {
  role: Role;
  userId: string;
}

const Membership: React.FC<MembershipProps> = ({ role, userId }) => {
  const [activeTab, setActiveTab] = useState<'DATABASE' | 'SIMPANAN'>('DATABASE');

  const mockMembers: Member[] = [
    { id: '2301-03001', tglReg: '01 Jan 2023', nama: 'AHMAD ZULKIFLI', gender: 'L', provinsi: 'RIAU', kota: 'PEKANBARU', alamat: 'Jl. Sudirman No. 10', pekerjaan: 'PETANI', plantation: 'PLANTATION A', tglLahir: '1985-05-12', areaJenis: 'PUSAT' },
    { id: '2301-03002', tglReg: '05 Jan 2023', nama: 'SITI AMINAH', gender: 'P', provinsi: 'JAMBI', kota: 'JAMBI', alamat: 'Jl. Merdeka No. 44', pekerjaan: 'WIRAUSAHA', plantation: 'PLANTATION B', tglLahir: '1990-11-20', areaJenis: 'CABANG' },
  ];

  if (role === Role.ANGGOTA) {
    return <PersonalView memberId={userId} />;
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex bg-white p-1 rounded-2xl shadow-sm border border-gray-100 w-fit">
        <button
          onClick={() => setActiveTab('DATABASE')}
          className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${
            activeTab === 'DATABASE' ? 'bg-[#1a4d2e] text-white' : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          DATABASE ANGGOTA
        </button>
        <button
          onClick={() => setActiveTab('SIMPANAN')}
          className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${
            activeTab === 'SIMPANAN' ? 'bg-[#1a4d2e] text-white' : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          DATA SIMPANAN
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-bold text-gray-700">{activeTab === 'DATABASE' ? 'Daftar Anggota' : 'Ringkasan Simpanan'}</h3>
          <div className="flex gap-2">
            <button className="bg-green-600 text-white px-6 py-2 rounded-xl text-sm font-bold hover:bg-green-700 transition-colors flex items-center gap-2">
              <i className="fas fa-print"></i> Cetak Semua ID
            </button>
            <button className="bg-[#d4af37] text-white px-6 py-2 rounded-xl text-sm font-bold hover:bg-[#b8962e] transition-colors flex items-center gap-2">
              <i className="fas fa-user-plus"></i> Tambah Anggota
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-400 uppercase text-[10px] tracking-wider font-bold">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Nama Lengkap</th>
                <th className="px-6 py-4">Area</th>
                <th className="px-6 py-4">Pekerjaan</th>
                <th className="px-6 py-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockMembers.map((member) => (
                <tr key={member.id} className="hover:bg-gray-50 transition-colors text-sm">
                  <td className="px-6 py-4 text-gray-500">{member.id}</td>
                  <td className="px-6 py-4 font-bold">{member.nama}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-[#1a4d2e]/10 text-[#1a4d2e] rounded text-[10px] font-bold">
                      {member.plantation}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{member.pekerjaan}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                      <button className="w-8 h-8 rounded-lg bg-green-50 text-green-700 hover:bg-green-100" title="Cetak ID Card"><i className="fas fa-id-card"></i></button>
                      <button className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100"><i className="fas fa-edit"></i></button>
                      <button className="w-8 h-8 rounded-lg bg-red-50 text-red-700 hover:bg-red-100"><i className="fas fa-trash"></i></button>
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

const PersonalView: React.FC<{ memberId: string }> = ({ memberId }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <small className="text-gray-400 font-bold uppercase text-[10px] block mb-1">Simpanan Pokok</small>
          <h3 className="text-2xl font-bold text-[#1a4d2e]">Rp 1.000.000</h3>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <small className="text-gray-400 font-bold uppercase text-[10px] block mb-1">Simpanan Wajib</small>
          <h3 className="text-2xl font-bold text-[#1a4d2e]">Rp 450.000</h3>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <small className="text-gray-400 font-bold uppercase text-[10px] block mb-1">Simpanan Manasuka</small>
          <h3 className="text-2xl font-bold text-[#1a4d2e]">Rp 150.000</h3>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-bold text-[#1a4d2e]">Biodata Pribadi</h3>
          <div className="flex gap-2">
            <button className="bg-[#d4af37] text-white px-6 py-2 rounded-xl text-sm font-bold hover:bg-[#b8962e] transition-colors"><i className="fas fa-edit mr-2"></i>Edit Profil</button>
            <button className="bg-[#1a4d2e] text-white px-6 py-2 rounded-xl text-sm font-bold hover:bg-[#0e2b1a] transition-colors"><i className="fas fa-id-card mr-2"></i>ID Card</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <InfoItem label="ID Anggota" val={memberId} />
          <InfoItem label="Nama Lengkap" val="AHMAD ZULKIFLI" />
          <InfoItem label="Tanggal Gabung" val="12 Jan 2023" />
          <InfoItem label="Area Kerja" val="PLANTATION A" />
          <InfoItem label="Pekerjaan" val="PETANI" />
          <InfoItem label="Jenis Kelamin" val="Laki-laki" />
          <InfoItem label="Kota" val="PEKANBARU" />
          <InfoItem label="Provinsi" val="RIAU" />
          <InfoItem label="Alamat" val="Jl. Sudirman No. 10, Pekanbaru" span={2} />
        </div>
      </div>
    </div>
  );
};

const InfoItem: React.FC<{ label: string; val: string; span?: number }> = ({ label, val, span = 1 }) => (
  <div className={`space-y-1 ${span > 1 ? `md:col-span-${span}` : ''}`}>
    <small className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">{label}</small>
    <div className="text-slate-800 font-medium">{val}</div>
  </div>
);

export default Membership;
