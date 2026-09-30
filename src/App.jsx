import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Branding from './components/Branding';
import SocialMedia from './components/SocialMedia';
import PrintMedia from './components/PrintMedia';
import Illustrations from './components/Illustrations';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 50,
    });
  }, []);

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Hero />
      <About />
      <Skills />
      <Branding />
      <SocialMedia />
      <PrintMedia />
      <Illustrations />
      <Footer />
    </div>
  );
}

export default App;
