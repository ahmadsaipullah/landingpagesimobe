import type { Route } from "./+types/home";
import { Hero } from "../components/Hero/hero";
import { Stats } from "../components/Stats/stats";
import { Features } from "../components/Features/features";
import { Workflow } from "../components/Workflow/workflow";
import { Benefits } from "../components/Benefits/benefits";
import { FAQ } from "../components/FAQ/faq";
import { CTA } from "../components/CTA/cta";

const SITE_URL = "https://simobe.dalova.co.id";
const SITE_NAME = "SIMOBE";
const SITE_TITLE = "SIMOBE - Sistem Informasi Manajemen OBE | Platform OBE Terlengkap Indonesia";
const SITE_DESCRIPTION = "SIMOBE adalah Sistem Informasi Manajemen Outcome-Based Education terlengkap untuk perguruan tinggi Indonesia. Kelola CPL, CPMK, pemetaan kurikulum, assessment OBE, dan pantau ketercapaian pembelajaran secara real-time.";
const SITE_KEYWORDS = "SIMOBE, OBE, Outcome Based Education, CPL, CPMK, kurikulum OBE, perguruan tinggi, manajemen pendidikan, pemetaan kurikulum, assessment OBE, capaian pembelajaran, sistem informasi akademik, akreditasi, BAN-PT, KKNI";

export function meta({ }: Route.MetaArgs) {
  return [
    // Primary Meta Tags
    { title: SITE_TITLE },
    { name: "title", content: SITE_TITLE },
    { name: "description", content: SITE_DESCRIPTION },
    { name: "keywords", content: SITE_KEYWORDS },
    { name: "author", content: "DALOVA IT SOLUSI" },
    { name: "robots", content: "index, follow" },
    { name: "language", content: "Indonesian" },
    { name: "revisit-after", content: "7 days" },

    // Canonical URL
    { tagName: "link", rel: "canonical", href: SITE_URL },

    // Open Graph / Facebook
    { property: "og:type", content: "website" },
    { property: "og:url", content: SITE_URL },
    { property: "og:title", content: SITE_TITLE },
    { property: "og:description", content: SITE_DESCRIPTION },
    { property: "og:image", content: `${SITE_URL}/img/og-image.png` },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: "id_ID" },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: SITE_URL },
    { name: "twitter:title", content: SITE_TITLE },
    { name: "twitter:description", content: SITE_DESCRIPTION },
    { name: "twitter:image", content: `${SITE_URL}/img/og-image.png` },

    // Additional SEO
    { name: "theme-color", content: "#6366f1" },
    { name: "msapplication-TileColor", content: "#6366f1" },
    { name: "application-name", content: SITE_NAME },

    // Geo Tags (Indonesia)
    { name: "geo.region", content: "ID" },
    { name: "geo.placename", content: "Indonesia" },
  ];
}

// JSON-LD Structured Data Component
function JsonLdScript() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "url": SITE_URL,
        "name": SITE_NAME,
        "description": SITE_DESCRIPTION,
        "publisher": {
          "@id": `${SITE_URL}/#organization`
        },
        "inLanguage": "id-ID"
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        "legalName": "DALOVA IT SOLUSI",
        "name": "DALOVA IT SOLUSI",
        "alternateName": "SIMOBE",
        "url": SITE_URL,
        "description": "IT Konsultan dan Software Development",
        "logo": {
          "@type": "ImageObject",
          "url": `${SITE_URL}/img/simobe-transparant.png`,
          "width": 200,
          "height": 200
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+62-21-1234-5678",
          "contactType": "customer service",
          "areaServed": "ID",
          "availableLanguage": "Indonesian"
        },
        "sameAs": [
          "https://facebook.com/simobe",
          "https://twitter.com/simobe",
          "https://instagram.com/simobe",
          "https://linkedin.com/company/simobe"
        ]
      },
      {
        "@type": "SoftwareApplication",
        "name": "SIMOBE",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Web Browser",
        "description": "Sistem Informasi Manajemen Outcome-Based Education untuk perguruan tinggi",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "IDR"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "150",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Apa itu SIMOBE?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SIMOBE adalah Sistem Informasi Manajemen Outcome-Based Education yang membantu institusi pendidikan tinggi dalam mengelola kurikulum berbasis OBE, termasuk pemetaan CPL, CPMK, dan pengukuran ketercapaian pembelajaran."
            }
          },
          {
            "@type": "Question",
            "name": "Apakah SIMOBE mendukung multi-tenant?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ya, SIMOBE dirancang dengan arsitektur multi-tenant sehingga satu instalasi sistem dapat digunakan oleh banyak fakultas dan program studi dengan isolasi data yang aman."
            }
          },
          {
            "@type": "Question",
            "name": "Bagaimana cara mengimpor data yang sudah ada?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SIMOBE menyediakan fitur import Excel untuk berbagai jenis data seperti mahasiswa, dosen, mata kuliah, CPL, dan lainnya. Template Excel tersedia untuk memudahkan proses migrasi data."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <JsonLdScript />
      <Hero />
      <Stats />
      <Features />
      <Workflow />
      <Benefits />
      <FAQ />
      <CTA />
    </>
  );
}
