import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills-container">
      {/* Background Texture Overlay */}
      <div className="skills-bg-overlay"></div>
      
      {/* Top Header */}
      <div className="skills-header">
        <div className="skills-logo">Anjishnu Sadhu</div>
        <div className="skills-nav">Portfolio</div>
      </div>
      
      {/* Floating abstract elements */}
      <div className="skills-graphic squiggle top-right">
        <svg width="80" height="50" viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5,40 Q15,10 30,30 T55,20 T75,40" stroke="#f7a016" strokeWidth="4" strokeLinecap="round" fill="none" />
        </svg>
      </div>
      <div className="skills-graphic squiggle bottom-left">
        <svg width="50" height="60" viewBox="0 0 50 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5,10 Q25,30 15,50 T45,55" stroke="#f7a016" strokeWidth="4" strokeLinecap="round" fill="none" />
        </svg>
      </div>

      <div className="skills-content">
        <div className="skills-title-wrapper" data-aos="fade-down" data-aos-duration="1000">
          <h1 className="skills-title-main">SKILLS & TOOLS</h1>
          <h2 className="skills-title-cursive" data-aos="zoom-in" data-aos-delay="300">Anjishnu</h2>
        </div>
        
        {/* The crumpled paper container */}
        <div className="paper-container" data-aos="flip-up" data-aos-duration="1200" data-aos-delay="200">
          <div className="paper-column" data-aos="fade-right" data-aos-delay="600">
            <h3 className="paper-heading">Designing Skills</h3>
            <ul className="skills-list">
              <li>Branding</li>
              <li>Social Media Posts</li>
              <li>Print Media Designs</li>
              <li>Video Editing</li>
            </ul>
          </div>
          
          <div className="paper-column" data-aos="fade-left" data-aos-delay="800">
            <h3 className="paper-heading">Softwares</h3>
            <div className="software-icons">
              <div className="soft-icon ps" data-aos="zoom-in" data-aos-delay="1000">Ps</div>
              <div className="soft-icon ai" data-aos="zoom-in" data-aos-delay="1100">Ai</div>
              <div className="soft-icon pr" data-aos="zoom-in" data-aos-delay="1200">Pr</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
