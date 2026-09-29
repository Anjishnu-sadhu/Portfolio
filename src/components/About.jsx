import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        
        {/* Layer 1: Solid Text */}
        <div className="heading heading-solid">
          <div className="line1">CRAFTING <span className="text-orange">DESIGNS</span></div>
          <div className="line2"><span className="text-orange">THAT</span> CONNECT PEOPLE</div>
        </div>

        {/* Layer 2: Image Box */}
        <div className="about-image-box">
          <img src="/profile.jpg" alt="Ardan" />
        </div>

        {/* Layer 3: Outline Text */}
        <div className="heading heading-outline">
          <div className="line1"><span className="transparent-text">CRAFTING </span><span className="hidden-text">DESIGNS</span></div>
          <div className="line2"><span className="hidden-text">THAT </span><span className="transparent-text">CONNECT PEOPLE</span></div>
        </div>

        {/* Text content below */}
        <div className="about-text">
          <p>
            I'm Ardan Prasetyo, a product designer passionate<br/>
            about turning ideas into experiences people love. My<br/>
            approach blends functionality, aesthetics, and human-<br/>
            centered thinking—ensuring every design feels intuitive,<br/>
            purposeful, and visually engaging.
          </p>
          <p>
            With experience spanning digital interfaces, physical<br/>
            products, and branding, I focus on creating solutions<br/>
            that not only look great but solve real problems. Each<br/>
            project is a chance to explore, innovate, and deliver<br/>
            designs that make a lasting impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
