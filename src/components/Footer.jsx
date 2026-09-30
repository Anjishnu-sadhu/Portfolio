import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className="footer-container">
      {/* Dark Top Section */}
      <div className="footer-dark-section">
        {/* Background Texture Overlay */}
        <div className="footer-bg-overlay"></div>
        
        {/* Top Header */}
        <div className="footer-header">
          <div className="footer-logo">Anjishnu Sadhu</div>
          <div className="footer-nav">Portfolio</div>
        </div>
        
        {/* Abstract Squiggles */}
        <div className="footer-graphic squiggle top-left">
          <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5,10 Q15,30 30,20 T55,30" stroke="#f7a016" strokeWidth="4" strokeLinecap="round" fill="none" />
          </svg>
        </div>
        <div className="footer-graphic squiggle right-middle">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5,45 Q20,10 45,30" stroke="#f7a016" strokeWidth="4" strokeLinecap="round" fill="none" />
          </svg>
        </div>

        <div className="footer-content">
          <div className="footer-title-wrapper" data-aos="fade-down" data-aos-duration="1500">
            <h1 className="footer-title-main">THANK YOU</h1>
            <h2 className="footer-title-cursive" data-aos="zoom-in" data-aos-delay="500">For Attention</h2>
          </div>
          
          <button className="contact-btn" data-aos="flip-up" data-aos-delay="1000">CONTACT</button>
        </div>
      </div>
      
      {/* Torn Paper Edge SVG */}
      <div className="torn-edge">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 50" preserveAspectRatio="none">
            {/* The path creates a jagged, torn-like edge */}
            <path d="M0,50 L0,20 Q30,40 60,15 T120,25 T180,10 T240,30 T300,15 T360,35 T420,10 T480,25 T540,10 T600,30 T660,15 T720,35 T780,10 T840,25 T900,10 T960,30 T1020,15 T1080,35 T1140,10 T1200,25 L1200,50 Z" fill="#f5f5f5" />
            <path d="M0,20 Q30,40 60,15 T120,25 T180,10 T240,30 T300,15 T360,35 T420,10 T480,25 T540,10 T600,30 T660,15 T720,35 T780,10 T840,25 T900,10 T960,30 T1020,15 T1080,35 T1140,10 T1200,25" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />
         </svg>
      </div>

      {/* White Bottom Section */}
      <div className="footer-light-section">
        <div className="contact-info-bar">
          
          <div className="contact-item" data-aos="fade-up" data-aos-delay="200">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
             </svg>
             <span>+919203805054</span>
          </div>
          
          <div className="contact-item" data-aos="fade-up" data-aos-delay="400">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
               <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
               <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span>Div_yesh_art</span>
          </div>
          
          <div className="contact-item" data-aos="fade-up" data-aos-delay="600">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
               <polyline points="22,6 12,13 2,6"></polyline>
             </svg>
             <span>anjishnusadhu@gmail.com</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Footer;
