import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-container">
      {/* Background Texture Overlay */}
      <div className="about-bg-overlay"></div>
      
      {/* Top Header */}
      <div className="about-header">
        <div className="about-logo">Anjishnu Sadhu</div>
        <div className="about-nav">Portfolio</div>
      </div>
      
      <div className="about-content">
        {/* Left Side: Text Content */}
        <div className="about-text-section" data-aos="fade-right" data-aos-duration="1200">
          <div className="about-title-wrapper">
            <h1 className="about-title-main">HELLO I'AM</h1>
            <h2 className="about-title-cursive" data-aos="fade-up" data-aos-delay="400">Anjishnu S.</h2>
          </div>
          
          <div className="about-description" data-aos="fade-up" data-aos-delay="600">
            <p>
              My name is <span className="highlight-text">Anjishnu Sadhu</span>. This presentation is a 
              collection of some of my most significant works and 
              projects that reflect my skills, creativity, and 
              professional growth.
            </p>
            <p>
              Throughout this portfolio, Turning ideas into visuals 
              that speak clean, bold, and designed to leave a 
              lasting impression.
            </p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="about-image-section" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="200">
          <img src="/profile_photo_cropped.png" alt="Anjishnu S." className="profile-image" />
          
          {/* Abstract graphic elements around image */}
          <div className="about-graphic arrow" data-aos="zoom-in" data-aos-delay="1000">
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10,50 Q40,20 80,80 T30,90" stroke="white" strokeWidth="2" strokeDasharray="5,5" fill="none" />
              <polygon points="5,55 15,45 20,60" fill="white" />
            </svg>
          </div>
          <div className="about-graphic squiggle right-squiggle" data-aos="flip-right" data-aos-delay="1200">
            <svg width="50" height="80" viewBox="0 0 50 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5,40 Q25,10 40,30 T45,70" stroke="#f7a016" strokeWidth="4" strokeLinecap="round" fill="none" />
            </svg>
          </div>
        </div>
      </div>

      {/* Floating Elements (Abstract representations) */}
      <div className="about-floating-icons">
        <div className="about-graphic squiggle bottom-left-squiggle">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M5,45 Q20,10 45,30" stroke="#f7a016" strokeWidth="4" strokeLinecap="round" fill="none" />
          </svg>
        </div>
        
        <div className="about-icon pen-top">
          {/* Simple Pen Tool SVG */}
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M12 2L15 8L20 9L16 14L17 20L12 17L7 20L8 14L4 9L9 8L12 2Z" />
          </svg>
        </div>
        
        <div className="about-icon lightbulb-bottom">
           <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
             <circle cx="50" cy="50" r="40" fill="#f7d070" />
             <path d="M50 20 L40 60 L60 60 Z" fill="#333" />
             <rect x="45" y="60" width="10" height="20" fill="#333" />
           </svg>
        </div>
      </div>
    </section>
  );
};

export default About;
