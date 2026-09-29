import React from 'react';
import './Impact.css';

const Impact = () => {
  return (
    <section className="impact-section">
      <div className="impact-container">
        
        <div className="impact-top">
          <div className="impact-heading">
            <h2>
              Designing with Purpose,<br/>
              Creating Experiences<br/>
              Measured <span className="text-gray">by Meaningful</span><br/>
              <span className="text-gray">Impact</span>
            </h2>
          </div>
          
          <div className="impact-stats">
            <div className="stat-row">
              <span className="stat-name">Projects Completed</span>
              <span className="stat-value">2600+</span>
              <span className="stat-index">01</span>
            </div>
            <div className="stat-row">
              <span className="stat-name">Years of Design Experience</span>
              <span className="stat-value">10+</span>
              <span className="stat-index">02</span>
            </div>
            <div className="stat-row">
              <span className="stat-name">Happy Clients Worldwide</span>
              <span className="stat-value">2400+</span>
              <span className="stat-index">03</span>
            </div>
            <div className="stat-row">
              <span className="stat-name">Industry Sectors Served</span>
              <span className="stat-value">40</span>
              <span className="stat-index">04</span>
            </div>
          </div>
        </div>

        <div className="impact-gallery">
          <div className="polaroid polaroid-1">
            <img src="/tech.jpg" alt="Technology & Software" />
            <p>Technology & Software</p>
          </div>
          <div className="polaroid polaroid-2">
            <img src="/retail.jpg" alt="E-Commerce & Retail" />
            <p>E-Commerce & Retail</p>
          </div>
          <div className="polaroid polaroid-3">
            <img src="/tech.jpg" alt="Education & E-Learning" />
            <p>Education & E-Learning</p>
          </div>
          <div className="polaroid polaroid-4">
            <img src="/building.jpg" alt="Healthcare & Wellness" />
            <p>Healthcare & Wellness</p>
          </div>
          <div className="polaroid polaroid-5">
            <img src="/building.jpg" alt="Real Estate & Property" />
            <p>Real Estate & Property</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Impact;
