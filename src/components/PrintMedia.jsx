import React from 'react';
import './PrintMedia.css';

const PrintMedia = () => {
  return (
    <section className="print-container">
      {/* Background Texture Overlay */}
      <div className="print-bg-overlay"></div>
      
      {/* Top Header */}
      <div className="print-header">
        <div className="print-logo">Anjishnu Sadhu</div>
        <div className="print-nav">Portfolio</div>
      </div>
      
      {/* Abstract Squiggles */}
      <div className="print-graphic squiggle top-right">
        <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5,20 Q15,5 30,20 T55,10" stroke="#f7a016" strokeWidth="4" strokeLinecap="round" fill="none" />
        </svg>
      </div>
      <div className="print-graphic squiggle bottom-left">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5,45 Q20,10 45,30" stroke="#f7a016" strokeWidth="4" strokeLinecap="round" fill="none" />
        </svg>
      </div>

      <div className="print-content">
        
        {/* Title and Top Row */}
        <div className="print-top-section">
          <div className="print-title-wrapper" data-aos="fade-right" data-aos-duration="1000">
            <h1 className="print-title-main">PRINT MEDIA</h1>
            <h2 className="print-title-cursive" data-aos="fade-up" data-aos-delay="300">Designs</h2>
          </div>
          
          <div className="print-top-cards">
            {/* Mock Brown Business Card */}
            <div className="print-card mock-brown-card" data-aos="fade-down" data-aos-delay="500">
              <div className="card-logo-circle"></div>
              <h3>SURYA DAY</h3>
              <p>Top of the Line Services</p>
            </div>
            {/* Mock White Business Card */}
            <div className="print-card mock-white-card" data-aos="fade-down" data-aos-delay="700">
               <div className="card-left">
                 <div className="card-logo-circle dark"></div>
                 <h4>SURYA DAY</h4>
               </div>
               <div className="card-right">
                 <p>+91 9876543210</p>
                 <p>info@suryaday.com</p>
                 <p>www.suryaday.com</p>
               </div>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="print-grid">
          
          {/* Left Column: Brochure Mockups */}
          <div className="print-grid-col left-col" data-aos="fade-up" data-aos-delay="200">
            <div className="print-item brochure-item">
               <img src="/brochure_mockup.jpg" alt="Corporate Brochure Spread" />
            </div>
            {/* Duplicate/different crop to simulate the 2x2 grid in the design */}
            <div className="print-item brochure-item crop-top">
               <img src="/brochure_mockup.jpg" alt="Corporate Brochure Detail" />
            </div>
          </div>
          
          {/* Middle Column: Tall Poster Ad */}
          <div className="print-grid-col mid-col" data-aos="fade-up" data-aos-delay="400">
             <div className="print-item tall-item dark-poster">
                <p className="poster-sub">Best Quality In</p>
                <h2 className="poster-title">High Quality <span className="white-text">Leather Backpack</span></h2>
                <h3 className="poster-accent">Order & Organize</h3>
                <button className="poster-btn">ORDER NOW</button>
                <div className="poster-image-mock"></div>
             </div>
          </div>
          
          {/* Right Column: Generated Business Card & Graphic */}
          <div className="print-grid-col right-col" data-aos="fade-up" data-aos-delay="600">
             <div className="print-item tall-item">
               <img src="/business_card_mockup.jpg" alt="Graphic Designer Business Card" />
             </div>
          </div>
          
        </div>
        
        {/* Floating designer graphic at the bottom right */}
        <div className="designer-illustration" data-aos="slide-left" data-aos-delay="1000">
          <div className="monitor"></div>
          <div className="person-desk"></div>
        </div>
      </div>
    </section>
  );
};

export default PrintMedia;
