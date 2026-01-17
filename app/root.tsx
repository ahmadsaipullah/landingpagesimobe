import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  // Preconnect for performance
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },

  // Fonts
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:wght@300;400;500;600;700;800&display=swap",
  },

  // Font Awesome
  {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
  },

  // AOS Animation
  {
    rel: "stylesheet",
    href: "https://unpkg.com/aos@2.3.1/dist/aos.css",
  },

  // Favicon
  { rel: "icon", type: "image/png", href: "/img/simobe-transparant.png" },
  { rel: "apple-touch-icon", href: "/img/simobe-transparant.png" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* SEO: Mobile & Performance */}
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Preload critical assets */}
        <link rel="preload" as="image" href="/img/hero.webp" />

        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />

        {/* AOS Animation Script */}
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                if (typeof AOS !== 'undefined') {
                  AOS.init({
                    duration: 800,
                    easing: 'ease-out',
                    once: true,
                    offset: 50
                  });
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "Halaman yang Anda cari tidak ditemukan."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="error-page">
      <div className="error-content">
        <h1>{message}</h1>
        <p>{details}</p>
        <a href="/" className="btn-primary-landing">
          <i className="fas fa-home mr-2"></i>Kembali ke Beranda
        </a>
        {stack && (
          <pre className="error-stack">
            <code>{stack}</code>
          </pre>
        )}
      </div>
      <style>{`
        .error-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f0f4ff 0%, #e8efff 100%);
          padding: 2rem;
        }
        .error-content {
          text-align: center;
          max-width: 500px;
        }
        .error-content h1 {
          font-size: 6rem;
          font-weight: 800;
          color: #6366f1;
          margin: 0;
          line-height: 1;
        }
        .error-content p {
          font-size: 1.25rem;
          color: #64748b;
          margin: 1rem 0 2rem;
        }
        .error-stack {
          margin-top: 2rem;
          padding: 1rem;
          background: #1e293b;
          color: #94a3b8;
          border-radius: 8px;
          text-align: left;
          overflow-x: auto;
          font-size: 0.75rem;
        }
      `}</style>
    </main>
  );
}
