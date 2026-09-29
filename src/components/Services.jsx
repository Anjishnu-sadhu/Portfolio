import React, { useState } from 'react';
import './Services.css';

const servicesData = [
  {
    id: '01',
    title: 'PRODUCT DESIGN',
    description: 'Creating products that blend usability, functionality, and aesthetics for a satisfying user experience. I focus on user needs, innovative solutions, and designs that perform well and resonate emotionally. Each product is detailed, purposeful, and visually appealing.',
  },
  {
    id: '02',
    title: 'UI/UX DESIGN',
    description: 'Crafting intuitive and engaging digital experiences. I specialize in wireframing, prototyping, and creating pixel-perfect interfaces that prioritize user satisfaction and business goals.',
  },
  {
    id: '03',
    title: 'BRAND IDENTITY',
    description: 'Developing strong, memorable brand identities that communicate your values. From logo design to comprehensive brand guidelines, I ensure consistency across all touchpoints.',
  },
  {
    id: '04',
    title: 'PROTOTYPING & TESTING',
    description: 'Validating ideas through rapid prototyping and user testing. I build interactive models to gather feedback early, ensuring the final product meets user expectations.',
  }
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="services-section">
      <div className="services-container">
        {servicesData.map((service, index) => {
          const isActive = index === activeIndex;
          return (
            <div 
              key={service.id} 
              className={`service-row ${isActive ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="service-number">{service.id}</div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <div className="service-description-wrapper">
                  <p>{service.description}</p>
                </div>
              </div>
              <div className="service-arrow">
                <button className="arrow-btn">
                  {isActive ? '→' : '↗'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
