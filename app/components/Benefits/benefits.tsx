import { benefits } from '../../data/landing-data';

export function Benefits() {
  return (
    <section className="benefits-section" id="benefits">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Kenapa Pilih SIMOBE?</h2>
        <p className="section-subtitle" data-aos="fade-up">
          Fitur-fitur canggih untuk mendukung operasional akademik Anda
        </p>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="benefit-col"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className={benefit.icon}></i>
                </div>
                <div>
                  <h5 className="benefit-title">{benefit.title}</h5>
                  <p className="benefit-desc">{benefit.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .benefits-grid {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -0.5rem;
        }
        .benefit-col {
          flex: 0 0 50%;
          max-width: 50%;
          padding: 0 0.5rem;
          box-sizing: border-box;
        }
        @media (max-width: 767px) {
          .benefit-col {
            flex: 0 0 100%;
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
