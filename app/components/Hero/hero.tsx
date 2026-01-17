import { useEffect } from 'react';

export function Hero() {
  useEffect(() => {
    // Initialize AOS if available
    if (typeof window !== 'undefined' && (window as any).AOS) {
      (window as any).AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true,
      });
    }
  }, []);

  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-row">
          <div className="hero-content-col" data-aos="fade-right">
            <div className="hero-content">
              <h1 className="hero-title">
                Sistem Informasi<br />
                Manajemen <span>OBE</span>
              </h1>
              <p className="hero-subtitle">
                Kelola kurikulum berbasis Outcome-Based Education dengan mudah dan terintegrasi.
                Petakan capaian pembelajaran, kelola penilaian, dan pantau ketercapaian CPL secara real-time.
              </p>
              <div className="hero-buttons">
                <a href="#" className="btn-primary-landing mb-2">
                  <i className="fas fa-rocket mr-2"></i>Mulai Sekarang
                </a>
                <a href="#features" className="btn-secondary-landing mb-2" onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector('#features');
                  if (target) {
                    const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 70;
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                  }
                }}>
                  <i className="fas fa-info-circle mr-2"></i>Pelajari Lebih Lanjut
                </a>
              </div>
            </div>
          </div>
          <div className="hero-image-col" data-aos="fade-left">
            <img src="/img/hero.webp" alt="SI OBE Hero" className="hero-image" />
          </div>
        </div>
      </div>
      <style>{`
        .hero-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          margin: 0 -0.5rem;
        }
        .hero-content-col {
          flex: 0 0 50%;
          max-width: 50%;
          padding: 0 0.5rem;
          box-sizing: border-box;
        }
        .hero-image-col {
          flex: 0 0 50%;
          max-width: 50%;
          padding: 0 0.5rem;
          box-sizing: border-box;
        }
        @media (max-width: 991px) {
          .hero-content-col,
          .hero-image-col {
            flex: 0 0 100%;
            max-width: 100%;
            text-align: center;
          }
          .hero-image-col {
            order: -1;
            margin-bottom: 2rem;
          }
          .hero-image {
            max-width: 80%;
            margin: 0 auto;
          }
        }
        @media (max-width: 767px) {
          .hero-image {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
