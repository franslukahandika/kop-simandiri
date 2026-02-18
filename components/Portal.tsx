
import React from 'react';

const Portal: React.FC<{ onEnterApp: () => void }> = ({ onEnterApp }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-inter">
      <header className="h-20 bg-[#1a4d2e] text-white px-6 md:px-12 flex items-center justify-between sticky top-0 z-40 shadow-md">
        <div className="font-cinzel text-xl md:text-2xl text-[#d4af37] tracking-widest flex items-center gap-4">
          <i className="fas fa-landmark"></i>
          <span className="hidden sm:inline">SI MANDIRI</span>
        </div>
        <button 
          onClick={onEnterApp}
          className="bg-[#d4af37] hover:bg-[#b8962e] text-white px-6 py-2 rounded-full font-bold text-sm tracking-wide transition-all flex items-center gap-2"
        >
          <i className="fas fa-sign-in-alt"></i> Login Sistem
        </button>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center overflow-hidden">
          <img 
            src="https://picsum.photos/seed/koperasi/1200/600" 
            className="absolute inset-0 w-full h-full object-cover" 
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a4d2e]/95 to-[#1a4d2e]/60"></div>
          <div className="relative container mx-auto px-6 md:px-12 text-white">
            <h1 className="font-cinzel text-4xl md:text-6xl text-[#d4af37] mb-6">Kemandirian Ekonomi Umat</h1>
            <p className="max-w-2xl text-lg md:text-xl text-gray-200 leading-relaxed mb-10">
              Membangun ekosistem bisnis terintegrasi berbasis sektor riil untuk ketahanan pangan dan kedaulatan ekonomi nasional.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#d4af37] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#b8962e] transition-all shadow-xl">Unit Bisnis Kami</button>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">Tentang Koperasi</button>
            </div>
          </div>
        </section>

        {/* Features / Portfolio */}
        <section className="py-24 bg-gray-50 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black text-[#1a4d2e] mb-4">Sektor Strategis Kami</h2>
              <div className="w-20 h-1.5 bg-[#d4af37] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <PortfolioCard 
                img="https://picsum.photos/seed/hilirisasi/400/300"
                category="HILIRISASI PERKEBUNAN"
                title="Minyak Makan Merah"
                desc="Inovasi pengolahan kelapa sawit rakyat menjadi produk bernilai tambah yang kaya nutrisi untuk masyarakat."
              />
              <PortfolioCard 
                img="https://picsum.photos/seed/agriculture/400/300"
                category="KETAHANAN PANGAN"
                title="Pertanian Terpadu"
                desc="Pengembangan kawasan jagung dan padi dengan sistem manajemen modern dari hulu hingga ke meja konsumen."
              />
              <PortfolioCard 
                img="https://picsum.photos/seed/marine/400/300"
                category="EKONOMI BIRU"
                title="Perikanan & Kelautan"
                desc="Kemitraan nelayan tangkap dengan fasilitas rantai dingin untuk menjaga kualitas kesegaran komoditas laut."
              />
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-24 px-6 bg-white overflow-hidden">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
            <div className="space-y-6">
              <h2 className="text-4xl font-black text-[#1a4d2e] leading-tight">Visi Strategis<br/><span className="text-[#d4af37]">SI MANDIRI</span></h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Koperasi Syarikat Islam Mandiri hadir sebagai entitas bisnis profesional yang mentransformasi potensi ekonomi umat menjadi kekuatan nyata. 
                Kami fokus pada hilirisasi produk pertanian, kelautan, dan industri strategis dengan prinsip Syariah, Transparan, dan Berkelanjutan.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 bg-gray-50 rounded-2xl border-l-4 border-[#1a4d2e]">
                  <h4 className="font-bold text-[#1a4d2e] mb-2">Sektor Riil</h4>
                  <p className="text-sm text-gray-500">Fokus pada aset produktif: Pangan, Energi, dan Manufaktur.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border-l-4 border-[#d4af37]">
                  <h4 className="font-bold text-[#1a4d2e] mb-2">Hilirisasi</h4>
                  <p className="text-sm text-gray-500">Menciptakan nilai tambah (Added Value) dari bahan baku mentah.</p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-[#d4af37] rounded-3xl rotate-3 group-hover:rotate-1 transition-transform"></div>
              <img src="https://picsum.photos/seed/corp/800/600" className="relative rounded-3xl shadow-2xl object-cover h-[400px] w-full" alt="Visi" />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1a4d2e] text-white py-16 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="font-cinzel text-2xl text-[#d4af37] mb-6">SI MANDIRI</h3>
            <p className="text-gray-300 max-w-sm">Membangun kemandirian ekonomi umat melalui tata kelola koperasi yang modern, amanah, dan berorientasi hasil.</p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Navigasi</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li className="hover:text-white cursor-pointer transition-colors">Beranda</li>
              <li className="hover:text-white cursor-pointer transition-colors">Tata Kelola</li>
              <li className="hover:text-white cursor-pointer transition-colors">Portofolio Bisnis</li>
              <li className="hover:text-white cursor-pointer transition-colors">Marketplace</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Hubungi Kami</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li><i className="fas fa-map-marker-alt mr-3 text-[#d4af37]"></i> Gedung SI, Jakarta, Indonesia</li>
              <li><i className="fas fa-phone mr-3 text-[#d4af37]"></i> +62 21 555 1234</li>
              <li><i className="fas fa-envelope mr-3 text-[#d4af37]"></i> info@simandiri.com</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto mt-16 pt-8 border-t border-white/10 text-center text-xs text-gray-500 font-bold tracking-widest uppercase">
          &copy; 2024 Koperasi Syarikat Islam Mandiri. Seluruh Hak Cipta Dilindungi.
        </div>
      </footer>
    </div>
  );
};

const PortfolioCard: React.FC<{ img: string; category: string; title: string; desc: string }> = ({ img, category, title, desc }) => (
  <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group">
    <div className="h-64 overflow-hidden">
      <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={title} />
    </div>
    <div className="p-8">
      <small className="text-[#d4af37] font-black text-[10px] tracking-[0.2em] uppercase mb-3 block">{category}</small>
      <h4 className="text-xl font-bold text-[#1a4d2e] mb-4">{title}</h4>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default Portal;
