import { stats } from '../../data/landing-data';

export function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div
          className="row"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="stat-col"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={{
                flex: '0 0 50%',
                maxWidth: '50%',
                padding: '0 0.5rem',
                boxSizing: 'border-box',
              }}
            >
              <div className="stat-item">
                <div className="stat-icon">
                  <i className={stat.icon}></i>
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (min-width: 768px) {
          .stat-col {
            flex: 0 0 25% !important;
            max-width: 25% !important;
          }
        }
      `}</style>
    </section>
  );
}
