import React from 'react';
import './Featured.css';

const Featured = () => {
  return (
    <section className="featured-section">
      <div className="featured-container">
        
        <div className="featured-gallery">
          <div className="project-card card-1">
            <img src="/tech.jpg" alt="Mobile App Design" />
          </div>
          <div className="project-card card-2">
            <img src="/building.jpg" alt="Website Design" />
          </div>
          <div className="project-card card-3">
            <img src="/retail.jpg" alt="Dashboard Design" />
          </div>
        </div>

        <div className="featured-bottom">
          <div className="featured-bottom-left">
            <div className="featured-label">// Featured Work</div>
            <h2 className="featured-heading">
              SHOWCASING PROJECTS<br/>
              THAT DEFINE MY<br/>
              <span className="text-orange">DESIGN APPROACH</span>
            </h2>
          </div>
          
          <div className="featured-bottom-right">
            <p>
              This selection of my design projects showcases my creative process and ability to develop innovative solutions for various industries. Each project reflects my commitment to excellence and passion for design.
            </p>
            <button className="view-all-btn">
              <span className="arrow-circle">→</span> View All Projects
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Featured;
