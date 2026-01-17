import { features } from '../../data/landing-data';

export function Features() {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Fitur Unggulan</h2>
        <p className="section-subtitle" data-aos="fade-up">
          Sistem lengkap untuk mengelola kurikulum OBE dari hulu ke hilir
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-col"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="feature-card">
                <img
                  src={`/img/${feature.image}`}
                  alt={feature.title}
                  className="feature-image"
                />
                <div className="feature-icon">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .features-grid {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -0.5rem;
        }
        .feature-col {
          flex: 0 0 33.333%;
          max-width: 33.333%;
          padding: 0 0.5rem;
          margin-bottom: 1.5rem;
          box-sizing: border-box;
        }
        @media (max-width: 991px) {
          .feature-col {
            flex: 0 0 50%;
            max-width: 50%;
          }
        }
        @media (max-width: 575px) {
          .feature-col {
            flex: 0 0 100%;
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
