import { useState, useEffect } from 'react';
import { navLinks } from '../../data/landing-data';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar-landing ${isScrolled ? 'scrolled' : ''}`} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="navbar-brand" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/img/simobe-transparant.png" alt="Logo" className="logo-simobe" />
          SIM<span>OBE</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: '#1e293b',
          }}
          className="navbar-toggler"
          aria-label="Toggle navigation"
        >
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>

        {/* Navigation Links */}
        <div className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
        }}>
          <ul className="navbar-nav" style={{
            display: 'flex',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            gap: '0.5rem',
          }}>
            {navLinks.map((link) => (
              <li key={link.href} className="nav-item">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="nav-link"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#" className="btn-login">
            <i className="fas fa-sign-in-alt mr-2"></i>Login Demo
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .navbar-toggler {
            display: block !important;
          }
          .navbar-collapse {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 1rem;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            display: none !important;
          }
          .navbar-collapse.show {
            display: flex !important;
          }
          .navbar-nav {
            flex-direction: column !important;
            width: 100%;
          }
          .nav-item {
            width: 100%;
          }
          .nav-link {
            display: block;
            padding: 0.75rem 1rem !important;
          }
          .btn-login {
            width: 100%;
            text-align: center;
            justify-content: center;
          }
        }
      `}</style>
    </nav>
  );
}
