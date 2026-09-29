import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2>Designing Products<br/>That Shape<br/>Experiences</h2>
      </div>
      <div className="footer-right">
        <p>From concept to creation, I craft digital<br/>and physical products that blend form,<br/>function, and emotion—turning ideas<br/>into designs that connect with people.</p>
        <button className="cta-button">
          <div className="arrow-circle">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5L19 12L12 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span>See My Work</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
