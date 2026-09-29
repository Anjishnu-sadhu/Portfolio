import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-heading">
          LET'S BUILD SOMETHING<br/>
          EXTRAORDINARY TOGETHER
        </h2>
        <button className="cta-btn">
          <span className="arrow-circle">→</span> Work with Me
        </button>
      </div>

      <div className="marquee-container">
        <div className="marquee-mask"></div>
        
        <div className="marquee-row row-1">
          <div className="marquee-content">
            {[...Array(8)].map((_, i) => (
              <span key={i}>Creative Collaboration Is The Key To Meaningful Design <span className="text-orange">✸</span></span>
            ))}
          </div>
        </div>
        
        <div className="marquee-row row-2">
          <div className="marquee-content reverse">
            {[...Array(8)].map((_, i) => (
              <span key={i}>Creative Collaboration Is The Key To Meaningful Design <span className="text-orange">✸</span></span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CTA;
