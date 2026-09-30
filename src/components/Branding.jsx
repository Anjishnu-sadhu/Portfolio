import React from 'react';
import './Branding.css';

const Branding = () => {
  return (
    <section className="branding-container">
      {/* Background Texture Overlay */}
      <div className="branding-bg-overlay"></div>
      
      {/* Top Header */}
      <div className="branding-header">
        <div className="branding-logo">Anjishnu Sadhu</div>
        <div className="branding-nav">Portfolio</div>
      </div>
      
      {/* Floating Abstract Squiggles */}
      <div className="branding-graphic squiggle top-right-squiggle">
        <svg width="80" height="50" viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5,40 Q15,10 30,30 T55,20 T75,40" stroke="#f7a016" strokeWidth="4" strokeLinecap="round" fill="none" />
        </svg>
      </div>
      <div className="branding-graphic squiggle bottom-left-squiggle">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5,45 Q20,10 45,30" stroke="#f7a016" strokeWidth="4" strokeLinecap="round" fill="none" />
        </svg>
      </div>

      <div className="branding-content">
        <div className="branding-title-wrapper" data-aos="fade-right" data-aos-duration="1000">
          <h1 className="branding-title-main">BRANDING</h1>
          <h2 className="branding-title-cursive" data-aos="fade-up" data-aos-delay="300">Designs</h2>
        </div>
        
        {/* The Masonry Gallery */}
        <div className="masonry-gallery">
          {/* Header Banner - simulating the top blurred image */}
          <div className="gallery-item banner" data-aos="zoom-in" data-aos-duration="1200">
            <div className="banner-overlay">
              <h3 className="banner-logo">BITE<br/>BOX</h3>
            </div>
            <img src="/bite_box_branding.jpg" alt="Bite Box Banner" />
          </div>
          
          <div className="gallery-row">
            {/* Left Column */}
            <div className="gallery-col left-col" data-aos="fade-up" data-aos-delay="200">
              <div className="gallery-item logo-block">
                 <h3 className="brand-text">BITE<br/>BOX</h3>
              </div>
              <div className="gallery-item logo-block inverted">
                 <h3 className="brand-text">BITE<br/>BOX</h3>
              </div>
            </div>
            
            {/* Center Column */}
            <div className="gallery-col center-col" data-aos="fade-up" data-aos-delay="400">
              <div className="gallery-item feature-image">
                <img src="/bite_box_branding.jpg" alt="Packaging Mockup" />
              </div>
              <div className="gallery-item feature-image crop-bottom">
                <img src="/bite_box_branding.jpg" alt="Packaging Close up" />
              </div>
            </div>
            
            {/* Right Column */}
            <div className="gallery-col right-col" data-aos="fade-up" data-aos-delay="600">
               <div className="gallery-item solid-orange">
                  <h4>BITE BOX</h4>
                  <p>BRAND GUIDELINES</p>
               </div>
               <div className="gallery-item poster">
                 <img src="/bite_box_branding.jpg" alt="Brand Assets" />
               </div>
            </div>
          </div>
          
          {/* Sticker Mascot overlays */}
          <img src="/bite_box_mascot.jpg" className="sticker sticker-1" alt="Mascot Sticker" data-aos="zoom-in" data-aos-delay="1000" />
          <img src="/bite_box_mascot.jpg" className="sticker sticker-2" alt="Mascot Sticker" data-aos="zoom-in" data-aos-delay="1200" />
          <img src="/bite_box_mascot.jpg" className="sticker sticker-3" alt="Mascot Sticker" data-aos="zoom-in" data-aos-delay="1400" />
        </div>
      </div>
    </section>
  );
};

export default Branding;
