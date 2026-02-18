
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

interface ProjectMonitoringProps {
  role: string;
}

const ProjectMonitoring: React.FC<ProjectMonitoringProps> = ({ role }) => {
  const [activeProject, setActiveProject] = useState(PROJECTS[0]);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-[#1a4d2e]">Monitor Proyek</h3>
          <button className="bg-[#d4af37] text-white px-6 py-2 rounded-xl text-sm font-bold hover:bg-[#b8962e] flex items-center gap-2">
            <i className="fas fa-plus-circle"></i> Transaksi Proyek
          </button>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-4 mb-6 border-b border-gray-100 scrollbar-hide">
          {PROJECTS.map(proj => (
            <button
              key={proj}
              onClick={() => setActiveProject(proj)}
              className={`px-6 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeProject === proj ? 'bg-[#1a4d2e] text-white' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
              }`}
            >
              {proj}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <ProjectStat label="Dana Masuk" val="Rp 500.000.000" color="text-green-600" />
          <ProjectStat label="Pengeluaran" val="Rp 340.500.000" color="text-red-600" />
          <ProjectStat label="Sisa Dana" val="Rp 159.500.000" color="text-[#1a4d2e]" />
        </div>

        <div className="text-center py-12 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
          <div className="text-4xl text-gray-300 mb-4"><i className="fas fa-folder-open"></i></div>
          <p className="text-gray-400 font-medium">Memuat rincian transaksi {activeProject}...</p>
        </div>
      </div>
    </div>
  );
};

const ProjectStat: React.FC<{ label: string; val: string; color: string }> = ({ label, val, color }) => (
  <div className="bg-gray-50 p-4 rounded-xl">
    <small className="text-gray-400 font-bold uppercase text-[10px] tracking-widest block mb-1">{label}</small>
    <div className={`text-xl font-black ${color}`}>{val}</div>
  </div>
);

export default ProjectMonitoring;
