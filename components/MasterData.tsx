
import React from 'react';

const MasterData: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center py-20">
        <div className="w-20 h-20 bg-[#d4af37]/10 text-[#d4af37] rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
          <i className="fas fa-database"></i>
        </div>
        <h3 className="text-2xl font-bold text-[#1a4d2e] mb-2">Master Data Management</h3>
        <p className="text-gray-400 max-w-md mx-auto">Kelola data fundamental sistem seperti daftar area, kategori transaksi, SKU produk, dan master harga.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
          {['AREAS', 'CATEGORIES', 'PRODUCTS', 'PRICES'].map(cat => (
            <button key={cat} className="p-6 bg-gray-50 hover:bg-white hover:shadow-lg hover:border-[#d4af37] border border-transparent rounded-2xl transition-all group">
              <div className="text-[#1a4d2e] font-black tracking-widest text-xs group-hover:text-[#d4af37]">{cat}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MasterData;
