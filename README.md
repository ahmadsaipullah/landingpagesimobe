# SIMOBE Landing Page

![SIMOBE Banner](public/img/og-image.png)

**SIMOBE (Sistem Informasi Manajemen Outcome-Based Education)** adalah platform manajemen pendidikan tinggi yang dikembangkan oleh **DALOVA IT SOLUSI** untuk membantu institusi dalam mengelola kurikulum berbasis OBE.

🔗 **Live Website:** [https://simobe.dalova.co.id](https://simobe.dalova.co.id/)

---

## 📋 Tentang Project

Landing page profesional untuk mempromosikan SIMOBE kepada perguruan tinggi di Indonesia. Dibangun dengan fokus pada **SEO**, **performa tinggi**, dan **UI/UX premium**.

### 🎯 Tujuan
- Menjelaskan fitur dan keunggulan SIMOBE
- Lead generation untuk perguruan tinggi
- Brand awareness DALOVA IT SOLUSI

---

## 🏛 Institusi Mitra

SIMOBE telah dipercaya oleh:
- **Universitas Muhammadiyah Tangerang**

---

## 🛠 Teknologi

| Stack | Teknologi |
|-------|-----------|
| Framework | [Astro](https://astro.build/) v4 |
| Styling | [Tailwind CSS](https://tailwindcss.com/) v4 |
| Animations | AOS (Animate On Scroll) |
| Icons | FontAwesome 6 |
| Deployment | Netlify |

---

## 📂 Struktur Project

```
simobe-landing/
├── src/
│   ├── components/    # Komponen UI (Hero, Features, FAQ, dll)
│   ├── data/          # Content management
│   ├── layouts/       # Layout & SEO config
│   ├── pages/         # Halaman (index.astro)
│   └── styles/        # Global CSS
├── public/            # Static assets, sitemap.xml, robots.txt
├── astro.config.mjs   # Konfigurasi Astro
├── netlify.toml       # Konfigurasi Netlify
└── package.json
```

---

## 🚀 Development

### Prasyarat
- Node.js v20+
- NPM

### Langkah
```bash
# Clone repository
git clone https://github.com/dalova/simobe-landing.git
cd simobe-landing

# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build
```

---

## 🌐 Deployment (Netlify)

Project ini dikonfigurasi untuk deploy otomatis ke Netlify:

1. Push ke GitHub repository
2. Connect repository di Netlify Dashboard
3. Konfigurasi otomatis dari `netlify.toml`
4. Set custom domain: `simobe.dalova.co.id`

### Konfigurasi Build
```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"
```

---

## 🔍 SEO Features

- ✅ Meta tags optimized untuk keyword "SIMOBE DALOVA"
- ✅ sitemap.xml dengan 5 URLs
- ✅ robots.txt configured
- ✅ Schema.org markup (Organization, SoftwareApplication, FAQPage)
- ✅ Open Graph untuk social sharing

---

## 🏢 Developer

**DALOVA IT SOLUSI**
*IT Consultant & Software Development*

🌐 Website: [dalova.co.id](https://dalova.co.id)
📧 Email: admin@simobe.id

---

© 2026 DALOVA IT SOLUSI. All Rights Reserved.
