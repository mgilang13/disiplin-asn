// Sumber: PP Nomor 94 Tahun 2021 tentang Disiplin PNS

export const tingkatMeta = {
  none: { nama: 'Belum ada hukuman', warna: 'none' },
  ringan: { nama: 'Hukuman ringan', warna: 'ringan' },
  sedang: { nama: 'Hukuman sedang', warna: 'sedang' },
  berat: { nama: 'Hukuman berat', warna: 'berat' }
};

// Pasal 9 ayat (2) huruf b, Pasal 11 ayat (2) huruf f (sedang), Pasal 11 ayat (2) huruf d (berat)
export const absensi = [
  { min: 1, max: 2, tingkat: 'none', hukuman: 'Belum ada hukuman disiplin', pasal: 'Pasal 9 ayat (2) huruf b' },
  { min: 3, max: 3, tingkat: 'ringan', hukuman: 'Teguran lisan', pasal: 'Pasal 9 ayat (2) huruf b angka 1' },
  { min: 4, max: 6, tingkat: 'ringan', hukuman: 'Teguran tertulis', pasal: 'Pasal 9 ayat (2) huruf b angka 2' },
  { min: 7, max: 10, tingkat: 'ringan', hukuman: 'Pernyataan tidak puas secara tertulis', pasal: 'Pasal 9 ayat (2) huruf b angka 3' },
  { min: 11, max: 13, tingkat: 'sedang', hukuman: 'Pemotongan tunjangan kinerja 25% selama 6 bulan', pasal: 'Pasal 10 ayat (2) huruf f angka 1' },
  { min: 14, max: 16, tingkat: 'sedang', hukuman: 'Pemotongan tunjangan kinerja 25% selama 9 bulan', pasal: 'Pasal 10 ayat (2) huruf f angka 2' },
  { min: 17, max: 20, tingkat: 'sedang', hukuman: 'Pemotongan tunjangan kinerja 25% selama 12 bulan', pasal: 'Pasal 10 ayat (2) huruf f angka 3' },
  { min: 21, max: 24, tingkat: 'berat', hukuman: 'Penurunan jabatan setingkat lebih rendah selama 12 bulan', pasal: 'Pasal 11 ayat (2) huruf d angka 1' },
  { min: 25, max: 27, tingkat: 'berat', hukuman: 'Pembebasan dari jabatan menjadi jabatan pelaksana selama 12 bulan', pasal: 'Pasal 11 ayat (2) huruf d angka 2' },
  { min: 28, max: Infinity, tingkat: 'berat', hukuman: 'Pemberhentian dengan hormat tidak atas permintaan sendiri sebagai PNS', pasal: 'Pasal 11 ayat (2) huruf d angka 3' }
];

export const absensiBerturut = {
  tingkat: 'berat',
  hukuman: 'Pemberhentian dengan hormat tidak atas permintaan sendiri sebagai PNS. Pembayaran gaji dihentikan sejak bulan berikutnya.',
  pasal: 'Pasal 11 ayat (2) huruf d angka 4 dan Pasal 15 ayat (2)'
};

// Jenis hukuman — Pasal 8
export const jenisHukuman = {
  ringan: ['Teguran lisan', 'Teguran tertulis', 'Pernyataan tidak puas secara tertulis'],
  sedang: [
    'Pemotongan tunjangan kinerja 25% selama 6 bulan',
    'Pemotongan tunjangan kinerja 25% selama 9 bulan',
    'Pemotongan tunjangan kinerja 25% selama 12 bulan'
  ],
  berat: [
    'Penurunan jabatan setingkat lebih rendah selama 12 bulan',
    'Pembebasan dari jabatan menjadi jabatan pelaksana selama 12 bulan',
    'Pemberhentian dengan hormat tidak atas permintaan sendiri sebagai PNS'
  ]
};

export const dampakOpsi = [
  { id: 'unit', label: 'Unit Kerja', ket: 'Mengganggu atau menurunkan citra satuan kerja atasan langsung' },
  { id: 'instansi', label: 'Instansi', ket: 'Berdampak pada instansi tempat PNS bekerja' },
  { id: 'negara', label: 'Negara / pemerintah', ket: 'Berdampak pada harkat, martabat, atau citra negara dan pemerintah' }
];

const k = (unit, instansi, negara) => ({ unit, instansi, negara });
const semua = (t) => k(t, t, t);

// Pelanggaran terhadap kewajiban (Pasal 3, 4) dan larangan (Pasal 5)
export const pelanggaran = [
  { id: '3a', kelompok: 'Kewajiban', label: 'Tidak setia dan taat kepada Pancasila, UUD 1945, NKRI, dan Pemerintah', pasal: 'Pasal 3 huruf a', map: semua('berat') },
  { id: '3b', kelompok: 'Kewajiban', label: 'Tidak menjaga persatuan dan kesatuan bangsa', pasal: 'Pasal 3 huruf b', map: k('sedang', 'sedang', 'berat') },
  { id: '3c', kelompok: 'Kewajiban', label: 'Tidak melaksanakan kebijakan pejabat pemerintah yang berwenang', pasal: 'Pasal 3 huruf c', map: k('ringan', 'sedang', 'berat') },
  { id: '3d', kelompok: 'Kewajiban', label: 'Tidak menaati peraturan perundang-undangan', pasal: 'Pasal 3 huruf d', map: k('ringan', 'sedang', 'berat') },
  { id: '3e', kelompok: 'Kewajiban', label: 'Tidak melaksanakan tugas kedinasan dengan pengabdian, kejujuran, kesadaran, dan tanggung jawab', pasal: 'Pasal 3 huruf e', map: k('ringan', 'sedang', 'berat') },
  { id: '3f', kelompok: 'Kewajiban', label: 'Tidak menunjukkan integritas dan keteladanan, di dalam maupun di luar kedinasan', pasal: 'Pasal 3 huruf f', map: k('ringan', 'sedang', 'berat') },
  { id: '3g', kelompok: 'Kewajiban', label: 'Tidak menyimpan rahasia jabatan', pasal: 'Pasal 3 huruf g', map: k('ringan', 'sedang', 'berat') },
  { id: '3h', kelompok: 'Kewajiban', label: 'Tidak bersedia ditempatkan di seluruh wilayah NKRI', pasal: 'Pasal 3 huruf h', map: k('ringan', 'sedang', 'berat') },
  { id: '4c', kelompok: 'Kewajiban', label: 'Tidak mengutamakan kepentingan negara di atas kepentingan pribadi atau golongan', pasal: 'Pasal 4 huruf c', map: k('ringan', 'sedang', 'berat') },
  { id: '4d', kelompok: 'Kewajiban', label: 'Tidak segera melapor kepada atasan atas hal yang membahayakan keamanan atau merugikan keuangan negara', pasal: 'Pasal 4 huruf d', map: k(null, 'sedang', 'berat') },
  { id: '4g', kelompok: 'Kewajiban', label: 'Tidak menggunakan dan memelihara barang milik negara dengan sebaik-baiknya', pasal: 'Pasal 4 huruf g', map: k('ringan', 'sedang', null) },
  { id: '4h', kelompok: 'Kewajiban', label: 'Tidak memberi kesempatan bawahan mengembangkan kompetensi', pasal: 'Pasal 4 huruf h', map: k('ringan', 'sedang', null) },
  { id: '4i', kelompok: 'Kewajiban', label: 'Tidak menolak pemberian yang berkaitan dengan tugas dan fungsi', pasal: 'Pasal 4 huruf i', map: semua('berat') },
  { id: '5f', kelompok: 'Larangan', label: 'Memiliki, menjual, membeli, menggadaikan, menyewakan, atau meminjamkan barang/dokumen/surat berharga milik negara secara tidak sah', pasal: 'Pasal 5 huruf f', map: k('ringan', 'sedang', 'berat') },
  { id: '5g', kelompok: 'Larangan', label: 'Melakukan pungutan di luar ketentuan', pasal: 'Pasal 5 huruf g', map: k('sedang', 'sedang', 'berat') },
  { id: '5a', kelompok: 'Larangan', label: 'Menyalahgunakan wewenang', pasal: 'Pasal 5 huruf a', map: semua('berat') },
  { id: '5b', kelompok: 'Larangan', label: 'Menjadi perantara untuk keuntungan pribadi dengan memakai kewenangan orang lain yang diduga berkonflik kepentingan', pasal: 'Pasal 5 huruf b', map: semua('berat') },
  { id: '5k', kelompok: 'Larangan', label: 'Menerima hadiah yang berhubungan dengan jabatan dan/atau pekerjaan', pasal: 'Pasal 5 huruf k', map: semua('berat') },
  { id: '5l', kelompok: 'Larangan', label: 'Meminta sesuatu yang berhubungan dengan jabatan', pasal: 'Pasal 5 huruf l', map: semua('berat') },
  { id: '5n2', kelompok: 'Larangan', label: 'Menjadi peserta kampanye dengan atribut partai atau atribut PNS', pasal: 'Pasal 5 huruf n angka 2', map: semua('sedang') }
];

// Tata cara pemeriksaan, penjatuhan, dan berlakunya hukuman
export const prosedur = [
  { judul: 'Panggilan tertulis', ringkas: 'Atasan langsung memanggil PNS secara tertulis.', rinci: 'Jarak antara tanggal surat panggilan dan tanggal pemeriksaan paling lambat 7 hari kerja.', pasal: 'Pasal 26 ayat (1)–(2)' },
  { judul: 'Panggilan kedua', ringkas: 'Jika tidak hadir, dipanggil sekali lagi.', rinci: 'Panggilan kedua paling lambat 7 hari kerja setelah tanggal pemeriksaan pertama yang seharusnya. Jika tetap tidak hadir, hukuman dijatuhkan berdasarkan alat bukti dan keterangan yang ada, tanpa pemeriksaan.', pasal: 'Pasal 26 ayat (3)–(4)' },
  { judul: 'Pemeriksaan tertutup', ringkas: 'Tatap muka atau virtual, dicatat dalam berita acara.', rinci: 'Pemeriksaan hanya dihadiri PNS yang diperiksa dan pemeriksa. Berita acara ditandatangani pemeriksa dan PNS. Jika PNS menolak menandatangani, berita acara tetap menjadi dasar hukuman. PNS berhak mendapat salinannya. Untuk dugaan pelanggaran berat, pemeriksaan dilakukan oleh tim pemeriksa (atasan langsung, unsur pengawasan, unsur kepegawaian). Untuk pelanggaran sedang, tim pemeriksa dapat dibentuk.', pasal: 'Pasal 27, 29, 32' },
  { judul: 'Pembebasan sementara', ringkas: 'Khusus dugaan pelanggaran yang kemungkinan dihukum berat.', rinci: 'Atasan langsung dapat membebaskan PNS sementara dari tugas jabatannya sejak diperiksa, sampai keputusan hukuman ditetapkan. Hak-hak kepegawaian tetap diberikan.', pasal: 'Pasal 31' },
  { judul: 'Keputusan hukuman', ringkas: 'Ditetapkan oleh Pejabat yang Berwenang Menghukum.', rinci: 'Keputusan harus menyebut pelanggaran yang dilakukan. Jika ada banyak pelanggaran, hanya dijatuhkan satu jenis hukuman yang terberat. Untuk pelanggaran sejenis yang berulang, hukumannya lebih berat dari hukuman terakhir. Satu pelanggaran tidak boleh dihukum dua kali atau lebih.', pasal: 'Pasal 33, 35, 37 ayat (1)' },
  { judul: 'Penyampaian keputusan', ringkas: 'Paling lambat 14 hari kerja sejak ditetapkan.', rinci: 'Keputusan disampaikan oleh Pejabat yang Berwenang Menghukum atau pejabat lain yang ditunjuk. Jika PNS tidak hadir saat penyampaian, keputusan dikirim kepadanya.', pasal: 'Pasal 37 ayat (2)–(4)' },
  { judul: 'Hukuman berlaku', ringkas: 'Pada hari ke-15 sejak keputusan diterima.', rinci: 'Jika PNS mengajukan upaya administratif, hukuman berlaku sesuai keputusan upaya administratifnya. Upaya administratif diatur dalam peraturan pemerintah tersendiri.', pasal: 'Pasal 38' },
  { judul: 'Dokumentasi', ringkas: 'Diunggah ke sistem yang terintegrasi dengan SIASN.', rinci: 'Keputusan dan dokumen pemeriksaan didokumentasikan oleh pejabat pengelola kepegawaian dan menjadi salah satu bahan penilaian dalam pembinaan PNS.', pasal: 'Pasal 39' }
];
