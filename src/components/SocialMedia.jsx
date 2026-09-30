import React from 'react';
import './SocialMedia.css';

const SocialMedia = () => {
  return (
    <section className="social-container">
      {/* Background Texture Overlay */}
      <div className="social-bg-overlay"></div>
      
      {/* Top Header */}
      <div className="social-header">
        <div className="social-logo">Anjishnu Sadhu</div>
        <div className="social-nav">Portfolio</div>
      </div>
      
      {/* Abstract Squiggles */}
      <div className="social-graphic squiggle bottom-left">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5,45 Q20,10 45,30" stroke="#f7a016" strokeWidth="4" strokeLinecap="round" fill="none" />
        </svg>
      </div>
      <div className="social-graphic squiggle right-middle">
        <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5,20 Q15,5 30,20 T55,10" stroke="#f7a016" strokeWidth="4" strokeLinecap="round" fill="none" />
        </svg>
      </div>

      <div className="social-content">
        
        {/* The Masonry Gallery */}
        <div className="social-masonry">
          
          {/* Column 1 */}
          <div className="masonry-col" data-aos="fade-up" data-aos-delay="100">
            <div className="social-post sm-post yellow-post">
              <h3 className="post-text">Burger<br/>Menu</h3>
            </div>
            <div className="social-post sm-post red-post kitkat">
              <h2 className="post-logo-text kitkat-font">KitKat</h2>
            </div>
            <div className="social-post md-post dark-red-post">
               <div className="maggi-pack"></div>
               <div className="maggi-pack"></div>
            </div>
          </div>
          
          {/* Column 2 */}
          <div className="masonry-col" data-aos="fade-up" data-aos-delay="300">
            <div className="social-post lg-post spiderman-post">
               <h1 className="movie-title">SPIDERMAN</h1>
               <p className="movie-date">ON 10TH</p>
            </div>
            <div className="social-post md-post ronaldo-post">
              <h2 className="ronaldo-text">RONALDO</h2>
            </div>
          </div>
          
          {/* Column 3 - Features the generated Pizza Ad */}
          <div className="masonry-col center-focus" data-aos="fade-up" data-aos-delay="500">
             <div className="social-post xl-post pizza-post" data-aos="zoom-in" data-aos-delay="600">
               <img src="/pizza_ad.jpg" alt="Pizza Grand Opening" />
             </div>
             {/* Megaphone Graphic */}
             <div className="megaphone-graphic">
                <div className="mega-icon">📢</div>
                <div className="mega-badge">Ads</div>
             </div>
          </div>
          
          {/* Column 4 - Title and Right side posts */}
          <div className="masonry-col right-side-col" data-aos="fade-left" data-aos-delay="700">
             {/* Section Title sits in the grid here */}
             <div className="social-title-wrapper" data-aos="fade-down" data-aos-delay="800">
               <h1 className="social-title-main">SOCIAL MEDIA</h1>
               <h2 className="social-title-cursive" data-aos="zoom-in" data-aos-delay="1000">Designs</h2>
             </div>
             
             <div className="social-post banner-post">
                <div className="headphone-mockup">
                   <h4>High Quality Headphones</h4>
                   <button>Order Now</button>
                </div>
             </div>
             
             <div className="social-post row-span-2">
                <div className="gallery-split">
                  <div className="split-img car-img">
                     <img src="/car_ad.jpg" alt="BMW Car Ad" />
                  </div>
                  <div className="split-img bball-img">
                     <h3 className="bball-text">BASKETBALL</h3>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
