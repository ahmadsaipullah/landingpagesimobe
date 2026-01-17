import { useState } from 'react';
import { faqs } from '../../data/landing-data';

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Pertanyaan yang Sering Diajukan</h2>
        <p className="section-subtitle" data-aos="fade-up">
          Temukan jawaban untuk pertanyaan umum tentang SIMOBE
        </p>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="faq-accordion" id="faqAccordion">
              {faqs.map((faq, index) => {
                const isActive = activeIndex === index;

                return (
                  <div
                    key={index}
                    className={`faq-item ${isActive ? 'active' : ''}`}
                  // Removed data-aos to prevent visibility issues on re-render
                  >
                    <div
                      className="faq-header"
                      onClick={() => toggleFAQ(index)}
                      role="button"
                      aria-expanded={isActive}
                      style={{ cursor: 'pointer' }}
                    >
                      <span className="faq-number">{formatNumber(index + 1)}</span>
                      <h5 className="faq-question">{faq.question}</h5>
                      <i
                        className="fas fa-chevron-down faq-icon"
                        style={{
                          transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease',
                        }}
                      ></i>
                    </div>
                    {/* Answer container */}
                    <div
                      className="faq-answer"
                      style={{
                        display: isActive ? 'block' : 'none',
                        padding: '0 1.5rem 1.5rem 4.5rem',
                        color: '#64748b',
                        lineHeight: '1.7',
                      }}
                    >
                      <p style={{ margin: 0 }}>{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
