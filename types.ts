
export enum Role {
  ADMIN = 'ADMIN',
  DIRECTOR = 'DIRECTOR',
  ANGGOTA = 'ANGGOTA'
}

export interface UserSession {
  userId: string;
  user: string;
  role: Role;
  loginTime: string;
  status: 'success' | 'error';
}

export interface Transaction {
  id: string;
  tanggal: string;
  referal: 'KOPERASI' | 'PROJECT';
  entity: string;
  jenis: 'MASUK' | 'KELUAR';
  kategori: string;
  produk?: string;
  sumberDana: string;
  qty: number;
  jumlah: number;
  fileLink?: string;
  akun: string;
  keterangan: string;
  areaJenis: 'KOPERASI PUSAT' | 'KOPERASI CABANG' | 'PROJECT';
}

export interface Member {
  id: string;
  tglReg: string;
  nama: string;
  gender: 'L' | 'P';
  provinsi: string;
  kota: string;
  alamat: string;
  pekerjaan: string;
  plantation: string;
  tglLahir: string;
  areaJenis: string;
}

export interface FinancialSummary {
  totalKoperasi: number;
  totalProject: number;
  totalPemasukan: number;
  totalPengeluaran: number;
  saldo: number;
  koperasi: { masuk: number; keluar: number };
  project: { masuk: number; keluar: number };
}
