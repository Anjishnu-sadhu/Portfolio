import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Ardian Prasetyo®</div>
      <div className="menu-icon">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="contact">say hi — ardianprasetyo@mail.com</div>
    </header>
  );
};

export default Header;
