# SIMOBE Landing Page

![SIMOBE Banner](public/img/og-image.png)

**SIMOBE (Sistem Informasi Manajemen Outcome-Based Education)** adalah platform manajemen pendidikan tinggi yang membantu institusi dalam mengelola kurikulum berbasis OBE, pemetaan CPL/CPMK, dan asesmen pembelajaran.

Project ini adalah **Official Landing Page** untuk mempromosikan dan memperkenalkan fitur-fitur unggulan SIMOBE kepada publik.

🔗 **Live Demo:** [https://simobe.dalova.co.id](https://simobe.dalova.co.id/)

---

## 📋 Deskripsi Project

Aplikasi ini dibangun sebagai **Single Page Application (SPA)** modern yang berfokus pada performa tinggi, SEO optimized, dan pengalaman pengguna (UI/UX) yang premium. Tujuannya adalah memberikan informasi komprehensif mengenai solusi SIMOBE bagi perguruan tinggi di Indonesia.

### 🎯 Tujuan Aplikasi
1.  **Informasi Produk:** Menjelaskan fitur, alur kerja (workflow), dan keunggulan SIMOBE.
2.  **Lead Generation:** Mengarahkan pengunjung untuk menghubungi tim sales atau mencoba demo aplikasi.
3.  **Brand Awareness:** Membangun citra profesional SIMOBE sebagai solusi OBE terbaik.

---

## ✨ Fitur Utama (Landing Page)

### 1. Modern & Responsive UI
- **Mobile-First Design:** Tampilan optimal di semua perangkat (HP, Tablet, Desktop).
- **Smooth Animations:** Menggunakan AOS (Animate On Scroll) untuk interaksi yang dinamis.
- **Professional Layout:** Struktur grid yang rapi dengan visualisasi data yang menarik.

### 2. SEO Optimized (Search Engine Optimization)
- **#1 Google Ranking Ready:** Meta tags lengkap, sitemap otomatis, dan struktur semantik.
- **Open Graph Protocol:** Tampilan preview profesional saat dibagikan di social media (Facebook/Twitter/WhatsApp).
- **Fast Performance:** Skor Lighthouse tinggi untuk Core Web Vitals.

### 3. Komponen Informasi Lengkap
- **Hero Section:** Value proposition utama dengan Call-to-Action (CTA) yang jelas.
- **Stats Counter:** Menampilkan metrik kepercayaan (Total CPL, MK, Prodi).
- **Interactive Workflow:** Visualisasi alur OBE step-by-step.
- **FAQ Accordion:** Jawaban cepat untuk pertanyaan umum.
- **Feature Highlights:** Penjelasan detail fitur (Multi-tenant, RBAC, Audit Trail).

---

## 👥 Role Pengguna (Target Audience)

Halaman ini dirancang untuk memberikan informasi kepada berbagai stakeholder perguruan tinggi:

1.  **Pimpinan Universitas/Fakultas:** Informasi dashboard eksekutif dan monitoring kinerja.
2.  **Kaprodi & Tim Kurikulum:** Detail fitur pemetaan CPL, Bahan Kajian, dan Mata Kuliah.
3.  **Dosen:** Kemudahan input nilai dan asesmen CPMK.
4.  **Tim IT:** Informasi keamanan sistem, integrasi, dan arsitektur teknis.

---

## 🛠 Teknologi yang Digunakan

- **Framework:** [React Router v7](https://reactrouter.com/) (SPA Mode)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Animations:** AOS (Animate On Scroll)
- **Icons:** FontAwesome 6

---

## 📂 Struktur Project

Struktur folder dirancang modular untuk kemudahan maintenance:

```bash
landingapage_simobe/
├── app/
│   ├── components/       # Komponen UI Reusable
│   │   ├── Hero/         # Bagian Banner Utama
│   │   ├── Stats/        # Statistik Angka
│   │   ├── Features/     # Daftar Fitur Unggulan
│   │   ├── Workflow/     # Alur Kerja OBE
│   │   ├── Benefits/     # Keunggulan Sistem
│   │   ├── FAQ/          # Tanya Jawab
│   │   ├── Footer/       # Bagian Kaki Halaman
│   │   └── Navbar/       # Navigasi Atas
│   ├── data/
│   │   └── landing-data.ts # Centralized Content Management (Text/Data)
│   ├── routes/
│   │   └── home.tsx      # Halaman Utama (Main Entry)
│   ├── root.tsx          # Global Layout & SEO Configuration
│   └── app.css           # Global Styles & Tailwind Directives
├── public/               # Static Assets (Images, robots.txt, sitemap)
└── vite.config.ts        # Konfigurasi Build
```

---

## 🚀 Cara Menjalankan Project

### Prasyarat
- Node.js (v18 atau terbaru)
- NPM

### Langkah-langkah
1.  **Clone Repository**
    ```bash
    git clone https://github.com/username/landingpage_simobe.git
    cd landingpage_simobe
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Jalankan Mode Development**
    ```bash
    npm run dev
    ```
    Buka browser di `http://localhost:5174`

---

## 🌐 Informasi Deployment

Aplikasi ini dikonfigurasi sebagai **Static Web App** untuk hosting berbasis cPanel atau Static Hosting lainnya.

### Cara Build untuk Production (cPanel)

1.  **Jalankan Build Command**
    ```bash
    npm run build
    ```

2.  **Lokasi Output**
    File hasil build akan berada di folder `build/client/`.

3.  **Upload ke Hosting**
    - Upload seluruh isi folder `build/client/` ke `public_html` di cPanel.
    - Pastikan file `.htaccess` ikut terupload untuk menangani routing SPA.

---

## 🏢 Developer Credit

**Developed by DALOVA IT SOLUSI**
*IT Consultant & Software Development*

🌐 Website: [dalova.co.id](https://dalova.co.id)
📧 Email: admin@simobe.id

---
© 2026 DALOVA IT SOLUSI. All Rights Reserved.
