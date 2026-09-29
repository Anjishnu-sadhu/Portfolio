import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './components/About';
import Impact from './components/Impact';
import Skills from './components/Skills';
import Services from './components/Services';
import Featured from './components/Featured';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import SiteFooter from './components/SiteFooter';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="hero-section-wrapper">
        <Header />
        <Hero />
        <Footer />
      </div>
      <About />
      <Impact />
      <Skills />
      <Featured />
      <Projects />
      <Testimonials />
      <Services />
      <CTA />
      <SiteFooter />
    </div>
  );
}

export default App;
