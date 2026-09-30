import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Background Texture Overlay */}
      <div className="bg-overlay"></div>
      
      {/* Header Info */}
      <div className="hero-header" data-aos="fade-down" data-aos-duration="1200">
        <div className="logo">Anjishnu Sadhu</div>
      </div>
      
      <div className="hero-content">
        <div className="subtitles" data-aos="fade-up" data-aos-delay="200">
          <span>Graphic Designer Portfolio</span>
          <span>Anjishnu Sadhu</span>
        </div>
        
        <div className="title-wrapper" data-aos="zoom-in" data-aos-duration="1500">
          <h1 className="title-main">PORTFOLIO</h1>
          <div className="cursive-anim-wrapper" data-aos="fade-left" data-aos-delay="600" data-aos-duration="1000">
            <h2 className="title-cursive">Graphic Design</h2>
          </div>
        </div>
      </div>
      
      {/* Floating Elements (Abstract representations) */}
      <div className="floating-icons">
        <div className="icon pr">Pr</div>
        <div className="icon ps">Ps</div>
        <div className="icon ai">Ai</div>
        <div className="icon id">Id</div>
        
        <div className="graphic-element line-curve"></div>
        <div className="graphic-element pen-tool"></div>
        <div className="graphic-element layout"></div>
      </div>
    </div>
  );
};

export default Hero;
