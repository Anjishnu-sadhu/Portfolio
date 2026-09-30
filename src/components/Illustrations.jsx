import React from 'react';
import './Illustrations.css';

const Illustrations = () => {
  return (
    <section className="illustrations-container">
      {/* Background Texture Overlay */}
      <div className="illustrations-bg-overlay"></div>
      
      {/* Top Header */}
      <div className="illustrations-header">
        <div className="illustrations-logo">Anjishnu Sadhu</div>
        <div className="illustrations-nav">Portfolio</div>
      </div>
      
      {/* Abstract Squiggles */}
      <div className="illustrations-graphic squiggle top-right">
        <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5,20 Q15,5 30,20 T55,10" stroke="#f7a016" strokeWidth="4" strokeLinecap="round" fill="none" />
        </svg>
      </div>
      <div className="illustrations-graphic squiggle bottom-left">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5,45 Q20,10 45,30" stroke="#f7a016" strokeWidth="4" strokeLinecap="round" fill="none" />
        </svg>
      </div>

      <div className="illustrations-content">
        
        {/* Title overlaps the grid */}
        <div className="illustrations-title-wrapper" data-aos="zoom-in" data-aos-duration="1000">
          <h1 className="illustrations-title-main">ILLUSTRATIONS</h1>
          <h2 className="illustrations-title-cursive" data-aos="fade-left" data-aos-delay="400">Designs</h2>
        </div>
        
        {/* The Masonry Gallery */}
        <div className="illustrations-grid">
          
          {/* Top Line Art Graphic */}
          <div className="line-art-boy" data-aos="fade-down" data-aos-delay="800">
             <svg width="120" height="180" viewBox="0 0 100 150" fill="none" stroke="#fff" strokeWidth="1.5">
               {/* Simplified line art of a leaning person */}
               <circle cx="50" cy="20" r="10" />
               <path d="M50 30 C30 40, 35 60, 40 80 L35 140 M40 80 L55 140" />
               <path d="M45 40 L20 60 L30 80 M55 40 L70 50 L80 40" />
             </svg>
          </div>
          
          {/* Column 1 (Left) */}
          <div className="ill-col col-1" data-aos="fade-up" data-aos-delay="200">
             <div className="ill-item portrait-sm mock-brown">
                <div className="brown-shape"></div>
             </div>
             <div className="ill-item portrait-lg mock-photo">
                <img src="/profile_photo.jpg" alt="Profile" />
             </div>
             <div className="cartoon-boy" data-aos="zoom-out" data-aos-delay="1000">
                {/* CSS drawn cartoon boy placeholder */}
                <div className="c-head"></div>
                <div className="c-body"></div>
                <div className="c-legs"></div>
             </div>
          </div>
          
          {/* Column 2 (Middle Left) */}
          <div className="ill-col col-2" data-aos="fade-up" data-aos-delay="400">
             <div className="ill-item quote-box">
                <h3><span>JUST</span><br/>MY &<br/><span>shadow</span></h3>
             </div>
             <div className="ill-item portrait-xl">
               <img src="/orange_vase.jpg" alt="Orange Vase" />
             </div>
          </div>
          
          {/* Column 3 (Middle Right) */}
          <div className="ill-col col-3" data-aos="fade-up" data-aos-delay="600">
             <div className="ill-item wide-item dark-photo">
                <div className="neon-doodles">DESIGNER</div>
             </div>
             <div className="ill-item wide-item tablet-photo">
               <img src="/drawing_tablet.jpg" alt="Digital Drawing" />
             </div>
             <div className="ill-item portrait-md dark-photo">
               <div className="neon-circle"></div>
             </div>
          </div>
          
          {/* Column 4 (Right) */}
          <div className="ill-col col-4" data-aos="fade-up" data-aos-delay="800">
             <div className="ill-item tall-photo">
                <img src="/leaves_doodle.jpg" alt="Leaves with Doodles" />
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Illustrations;
