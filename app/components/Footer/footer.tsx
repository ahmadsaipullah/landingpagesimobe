import { footerLinks, footerFeatures, contactInfo } from '../../data/landing-data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 70;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-grid">
            {/* Brand & About */}
            <div className="footer-col footer-col-brand">
              <div className="footer-brand">
                <img src="/img/simobe-transparant.png" alt="Logo" className="logo-simobe" />
                SIM<span>OBE</span>
              </div>
              <p className="footer-about">
                Sistem Informasi Manajemen Outcome-Based Education yang terintegrasi untuk membantu institusi pendidikan tinggi mengelola kurikulum, pemetaan CPL, dan pengukuran capaian pembelajaran.
              </p>
              {/* Social Links */}
              <div className="footer-social">
                <a href="#" className="social-link" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h5 className="footer-title">Menu</h5>
              <ul className="footer-links">
                {footerLinks.map((link) => (
                  <li key={link.href + link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fitur Unggulan */}
            <div className="footer-col">
              <h5 className="footer-title">Fitur Unggulan</h5>
              <div className="footer-features-list">
                {footerFeatures.map((feature) => (
                  <div key={feature} className="footer-feature-item">
                    <i className="fas fa-check-circle"></i>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="footer-col">
              <h5 className="footer-title">Hubungi Kami</h5>
              <div className="footer-contact-list">
                <div className="footer-contact-item">
                  <i className="fas fa-envelope"></i>
                  <span>{contactInfo.email}</span>
                </div>
                <div className="footer-contact-item">
                  <i className="fas fa-phone"></i>
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="footer-contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} SIMOBE by <a href="https://dalova.co.id" target="_blank" rel="noopener noreferrer" style={{ color: '#818cf8' }}>DALOVA IT SOLUSI</a>. All rights reserved.
            </p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <span className="footer-divider">|</span>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          color: white;
          padding-top: 4rem;
        }
        
        .footer-main {
          padding-bottom: 2rem;
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          gap: 2.5rem;
        }
        
        .footer-col-brand {
          padding-right: 1.5rem;
        }
        
        .footer-brand {
          display: flex;
          align-items: center;
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 1.25rem;
        }
        
        .footer-brand .logo-simobe {
          height: 45px;
          margin-right: 0.75rem;
        }
        
        .footer-brand span {
          color: #818cf8;
        }
        
        .footer-about {
          color: #94a3b8;
          line-height: 1.8;
          font-size: 0.875rem;
          margin-bottom: 1.5rem;
        }
        
        .footer-social {
          display: flex;
          gap: 0.75rem;
        }
        
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: #94a3b8;
          transition: all 0.3s ease;
        }
        
        .social-link:hover {
          background: #6366f1;
          color: white;
          transform: translateY(-3px);
        }
        
        .footer-title {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 1.25rem;
          color: white;
          position: relative;
        }
        
        .footer-title::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 25px;
          height: 2px;
          background: #6366f1;
          border-radius: 1px;
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-links li {
          margin-bottom: 0.75rem;
        }
        
        .footer-links a {
          color: #94a3b8;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 0.875rem;
          display: inline-block;
        }
        
        .footer-links a:hover {
          color: white;
          transform: translateX(5px);
        }
        
        /* Fitur Unggulan - Clean List Style */
        .footer-features-list {
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
        }
        
        .footer-feature-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #94a3b8;
          font-size: 0.875rem;
        }
        
        .footer-feature-item i {
          color: #6366f1;
          font-size: 0.75rem;
        }
        
        .footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
        }
        
        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: #94a3b8;
          font-size: 0.875rem;
        }
        
        .footer-contact-item i {
          color: #6366f1;
          font-size: 0.875rem;
          margin-top: 2px;
          width: 16px;
          text-align: center;
        }
        
        .footer-contact-item span {
          line-height: 1.5;
        }
        
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1.25rem 0;
        }
        
        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .footer-copyright {
          color: #64748b;
          font-size: 0.875rem;
          margin: 0;
        }
        
        .footer-legal {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .footer-legal a {
          color: #64748b;
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.3s ease;
        }
        
        .footer-legal a:hover {
          color: white;
        }
        
        .footer-divider {
          color: #475569;
        }
        
        /* Tablet */
        @media (max-width: 991px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
          
          .footer-col-brand {
            grid-column: 1 / -1;
            padding-right: 0;
            text-align: center;
          }
          
          .footer-brand {
            justify-content: center;
          }
          
          .footer-social {
            justify-content: center;
          }
        }
        
        /* Mobile */
        @media (max-width: 575px) {
          .footer {
            padding-top: 3rem;
          }
          
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 1.75rem;
            text-align: center;
          }
          
          .footer-col-brand {
            padding-right: 0;
          }
          
          .footer-title::after {
            left: 50%;
            transform: translateX(-50%);
          }
          
          .footer-links a:hover {
            transform: none;
          }
          
          .footer-feature-item {
            justify-content: center;
          }
          
          .footer-contact-item {
            justify-content: center;
          }
          
          .footer-bottom-content {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
