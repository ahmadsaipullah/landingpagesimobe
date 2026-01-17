import { workflowStepsRow1, workflowStepsRow2 } from '../../data/landing-data';
import type { WorkflowStep } from '../../data/landing-data';

function WorkflowCard({ step, delay }: { step: WorkflowStep; delay: number }) {
  const isFinal = step.step === 'final';

  return (
    <div
      className="workflow-col"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className={`workflow-card ${isFinal ? 'workflow-card-final' : ''}`}>
        <div className={`workflow-step ${isFinal ? 'workflow-step-final' : ''}`}>
          {isFinal ? <i className="fas fa-check"></i> : step.step}
        </div>
        <img
          src={`/img/${step.image}`}
          alt={step.title}
          className="workflow-image"
          loading="lazy"
        />
        <div className="workflow-card-body">
          <span className={`workflow-badge ${step.badgeClass === 'success' ? 'workflow-badge-success' : ''}`}>
            {step.badge}
          </span>
          <h4 className="workflow-card-title">{step.title}</h4>
          <p className="workflow-card-desc">{step.description}</p>
        </div>
        {step.hasConnector && (
          <div className="workflow-connector-arrow">
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
        )}
      </div>
    </div>
  );
}

export function Workflow() {
  return (
    <section className="workflow-section" id="workflow">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Alur Kerja SIMOBE</h2>
        <p className="section-subtitle" data-aos="fade-up">
          Pemetaan kurikulum yang saling terhubung untuk pengukuran ketercapaian pembelajaran
        </p>

        {/* Row 1: PL -> CPL -> MK */}
        <div className="workflow-row">
          {workflowStepsRow1.map((step, index) => (
            <WorkflowCard key={step.badge} step={step} delay={index * 100} />
          ))}
        </div>

        {/* Connection Line */}
        <div className="workflow-vertical-arrow" data-aos="fade">
          <i className="fas fa-long-arrow-alt-down"></i>
        </div>

        {/* Row 2: CPMK -> BK -> Penilaian */}
        <div className="workflow-row">
          {workflowStepsRow2.map((step, index) => (
            <WorkflowCard key={step.badge} step={step} delay={(index + 3) * 100} />
          ))}
        </div>
      </div>
      <style>{`
        .workflow-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin: 0 -0.5rem 1rem;
        }
        .workflow-col {
          flex: 0 0 33.333%;
          max-width: 33.333%;
          padding: 0 0.5rem;
          margin-bottom: 1rem;
          box-sizing: border-box;
        }
        .workflow-connector-arrow {
          position: absolute;
          right: -20px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--primary-color);
          font-size: 1.5rem;
          z-index: 3;
        }
        .workflow-vertical-arrow {
          display: flex;
          justify-content: center;
          padding: 1rem 0;
          color: var(--primary-color);
          font-size: 2rem;
        }
        @media (max-width: 991px) {
          .workflow-col {
            flex: 0 0 50%;
            max-width: 50%;
          }
          .workflow-connector-arrow,
          .workflow-vertical-arrow {
            display: none;
          }
        }
        @media (max-width: 575px) {
          .workflow-col {
            flex: 0 0 100%;
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
