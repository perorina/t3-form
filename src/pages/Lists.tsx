export type pendidikanType = {
  name: string;
  value: string;
};
export type pegawaiType = {
  name: string;
  value: string;
};
export type pendidikanListType = pendidikanType[];
export type pegawaiListType = pegawaiType[];
export const pendidikanList: pendidikanListType = [
  {
    name: "Diploma I",
    value: "diploma-i",
  },
  {
    name: "Diploma II",
    value: "diploma-ii",
  },
  {
    name: "Diploma III (D3)",
    value: "diploma-iii-d3",
  },
  {
    name: "Sarjana (S1)",
    value: "sarjana-s1",
  },
  {
    name: "Pasca Sarjana (S2)",
    value: "pasca-sarjana-s2",
  },
  {
    name: "Doktoral (S3)",
    value: "doktoral-s3",
  },
  {
    name: "Lainnya",
    value: "lainnya",
  },
];

export const PewagaiList = [
  {
    name: "Pegawai Negeri Sipil",
    value: "pegawai-negeri-sipil",
  },
  {
    name: "Pegawai Negeri Non-Sipil",
    value: "pegawai-negeri-non-sipil",
  },
  {
    name: "Pegawai BUMN/BUMND",
    value: "pegawai-bumn-bumnd",
  },
  {
    name: "Pegawai Swasta",
    value: "pegawai-swasta",
  },
  {
    name: "Pegawai Kontrak",
    value: "pegawai-kontrak",
  },
  {
    name: "Pejabat Negara",
    value: "pejabat-negara",
  },
  {
    name: "Pegawai Lain-Lain",
    value: "pegawai-lain-lain",
  },
  {
    name: "Wiraswasta",
    value: "wiraswasta",
  },
  {
    name: "Profesional",
    value: "profesional",
  },
  {
    name: "Pekerja Non-Formal",
    value: "pekerja-non-formal",
  },
  {
    name: "Pekerja Informal",
    value: "pekerja-informal",
  },
  {
    name: "Ibu Rumah Tangga",
    value: "ibu-rumah-tangga",
  },
  {
    name: "Pelajar/Mahasiswa",
    value: "pelajar-mahasiswa",
  },
  {
    name: "Tanpa Pekerjaan",
    value: "tanpa-pekerjaan",
  },
  {
    name: "Lain-Lain",
    value: "lain-lain",
  },
];

export interface RegisterType {
  nama_petugas: string;
  nik: string;
  nama_lengkap: string;
  nama_alias: string;
  tempat_lahir: string;
  gender: string;
  tanggal_lahir: Date;
  pendidikan: string;
  pernikahan: string;
  nik_pasangan: string;
  nama_pasangan: string;
  pekerjaan: string;
  tempat_kerja: string;
  alamat_kerja: string;
  tel_tempat_kerja: string;
  email: string;
  nomor: string;
  kode_pos?: number | 0;
  desa: string;
  kecamatan: string;
  provinsi: string;
  kota: string;
  alamat: string;
  jangka_waktu: string;
  alamat_sesuai: boolean;
  dom_kode_pos?: number | 0;
  dom_desa: string;
  dom_kecamatan: string;
  dom_provinsi: string;
  dom_kota: string;
  dom_alamat: string;
}
