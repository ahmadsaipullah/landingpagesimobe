// Static data for landing page sections

export const stats = [
  { icon: 'fas fa-building', value: '10+', label: 'Fakultas' },
  { icon: 'fas fa-graduation-cap', value: '50+', label: 'Program Studi' },
  { icon: 'fas fa-book', value: '500+', label: 'Mata Kuliah' },
  { icon: 'fas fa-chart-line', value: '100%', label: 'CPL Terukur' },
];

export const features = [
  {
    image: 'feature-mapping.webp',
    icon: 'fas fa-project-diagram',
    title: 'Pemetaan Terintegrasi',
    description: 'Petakan CPL, CPMK, dan Bahan Kajian dalam satu platform yang saling terhubung dan mudah dikelola.',
  },
  {
    image: 'feature-dashboard.webp',
    icon: 'fas fa-chart-bar',
    title: 'Dashboard Real-time',
    description: 'Pantau ketercapaian CPL dan CPMK secara real-time dengan visualisasi data yang informatif.',
  },
  {
    image: 'feature-security.webp',
    icon: 'fas fa-shield-alt',
    title: 'Keamanan & RBAC',
    description: 'Sistem keamanan berlapis dengan Role-Based Access Control untuk mengatur hak akses pengguna.',
  },
];

export const benefits = [
  {
    icon: 'fas fa-university',
    title: 'Multi-Tenant Architecture',
    desc: 'Satu sistem untuk banyak fakultas dan program studi dengan isolasi data yang aman.',
  },
  {
    icon: 'fas fa-users-cog',
    title: 'Role-Based Access Control',
    desc: 'Atur hak akses berdasarkan peran: Admin, Kaprodi, Dosen, dan Mahasiswa.',
  },
  {
    icon: 'fas fa-file-excel',
    title: 'Import & Export Excel',
    desc: 'Migrasi data mudah dengan fitur import dan export ke format Excel.',
  },
  {
    icon: 'fas fa-th',
    title: 'Matrix View',
    desc: 'Visualisasi pemetaan CPL-MK, MK-CPMK dalam bentuk matrix interaktif.',
  },
  {
    icon: 'fas fa-history',
    title: 'Audit Trail',
    desc: 'Lacak semua perubahan data dengan log aktivitas yang lengkap.',
  },
  {
    icon: 'fas fa-mobile-alt',
    title: 'Responsive Design',
    desc: 'Akses sistem dari berbagai perangkat dengan tampilan yang optimal.',
  },
];

export const faqs = [
  {
    question: 'Apa itu SIMOBE?',
    answer: 'SIMOBE adalah Sistem Informasi Manajemen Outcome-Based Education yang membantu institusi pendidikan tinggi dalam mengelola kurikulum berbasis OBE, termasuk pemetaan CPL, CPMK, dan pengukuran ketercapaian pembelajaran.',
  },
  {
    question: 'Apakah SIMOBE mendukung multi-tenant?',
    answer: 'Ya, SIMOBE dirancang dengan arsitektur multi-tenant sehingga satu instalasi sistem dapat digunakan oleh banyak fakultas dan program studi dengan isolasi data yang aman.',
  },
  {
    question: 'Bagaimana cara mengimpor data yang sudah ada?',
    answer: 'SIMOBE menyediakan fitur import Excel untuk berbagai jenis data seperti mahasiswa, dosen, mata kuliah, CPL, dan lainnya. Template Excel tersedia untuk memudahkan proses migrasi data.',
  },
  {
    question: 'Apakah ada batasan jumlah pengguna?',
    answer: 'Tidak ada batasan jumlah pengguna. SIMOBE dapat mengakomodasi ribuan pengguna dengan berbagai peran seperti Admin, Kaprodi, Dosen, dan Mahasiswa.',
  },
  {
    question: 'Bagaimana sistem keamanan SIMOBE?',
    answer: 'SIMOBE mengimplementasikan keamanan berlapis termasuk Role-Based Access Control (RBAC), enkripsi data, audit trail, dan proteksi terhadap serangan umum seperti SQL Injection dan XSS.',
  },
];

export const workflowSteps = [
  {
    step: 1,
    image: 'workflow-pl.webp',
    badge: 'PL',
    title: 'Profil Lulusan',
    description: 'Kompetensi yang diharapkan dimiliki lulusan berdasarkan KKNI dan kebutuhan industri',
  },
  {
    step: 2,
    image: 'workflow-cpl.webp',
    badge: 'CPL',
    title: 'Capaian Pembelajaran Lulusan',
    description: 'Learning outcomes yang terukur dan selaras dengan Profil Lulusan program studi',
  },
  {
    step: 3,
    image: 'workflow-mk.webp',
    badge: 'MK',
    title: 'Mata Kuliah',
    description: 'Daftar mata kuliah yang mendukung pencapaian CPL melalui proses pembelajaran',
  },
  {
    step: 4,
    image: 'workflow-cpmk.webp',
    badge: 'CPMK',
    title: 'Capaian Pembelajaran MK',
    description: 'Sub-outcomes tiap mata kuliah yang berkontribusi pada pencapaian CPL',
  },
  {
    step: 5,
    image: 'workflow-bk.webp',
    badge: 'BK',
    title: 'Bahan Kajian',
    description: 'Materi/topik pembelajaran yang mendukung mata kuliah dan CPMK',
  },
  {
    step: 6,
    image: 'workflow-penilaian.webp',
    badge: 'Final',
    badgeClass: 'success',
    title: 'Penilaian & Assessment',
    description: 'Evaluasi ketercapaian CPMK dan CPL berdasarkan hasil penilaian mahasiswa',
  },
];

export const navLinks = [
  { href: '#features', label: 'Fitur' },
  { href: '#workflow', label: 'Alur OBE' },
  { href: '#benefits', label: 'Keunggulan' },
  { href: '#faq', label: 'FAQ' },
  { href: '#cta', label: 'Hubungi Kami' },
];

export const footerLinks = [
  { href: '#hero', label: 'Beranda' },
  { href: '#features', label: 'Fitur' },
  { href: '#workflow', label: 'Alur OBE' },
  { href: '#benefits', label: 'Keunggulan' },
  { href: '#faq', label: 'FAQ' },
  { href: '#', label: 'Login' },
];

export const footerFeatures = [
  'Multi-Tenant',
  'RBAC',
  'Audit Trail',
  'Import Excel',
  'Matrix View',
  'Dashboard',
  'Responsive',
];

export const contactInfo = {
  email: 'admin@simobe.id',
  phone: '+62 21 1234 5678',
  address: 'Tangerang, Indonesia',
};
