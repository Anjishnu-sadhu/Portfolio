import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'SMART LIVING APP',
    category: 'Real Estate & Property',
    description: 'Introducing a cutting-edge mobile application designed specifically for home automation, where modern aesthetics meet user-friendly functionality. This app seamlessly integrates with your smart home devices, allowing you to control everything from lighting and temperature to security systems with just a few taps.',
    image: '/tech.jpg'
  },
  {
    id: 2,
    title: 'ECO-FRIENDLY PACKAGING',
    category: 'Sustainable Design',
    description: 'A comprehensive branding and packaging solution for eco-conscious products. We utilized biodegradable materials and minimalist design principles to communicate the brand\'s commitment to the environment without compromising on visual appeal.',
    image: '/retail.jpg'
  },
  {
    id: 3,
    title: 'FINTECH DASHBOARD PLATFORM',
    category: 'Finance & Technology',
    description: 'A powerful, intuitive analytics dashboard that simplifies complex financial data. Designed with user experience in mind, it provides real-time insights, customizable widgets, and seamless navigation for financial professionals.',
    image: '/building.jpg'
  },
  {
    id: 4,
    title: 'EDUCATIONAL AR LEARNING KIT',
    category: 'Education & Technology',
    description: 'An interactive augmented reality experience designed to make learning engaging for students. This kit bridges the gap between physical textbooks and digital interactivity, bringing complex scientific concepts to life.',
    image: '/tech.jpg'
  }
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = projectsData[activeIndex];

  return (
    <section className="projects-section">
      <div className="projects-container">
        
        <div className="projects-left">
          <div className="project-category">{activeProject.category}</div>
          <p className="project-description">{activeProject.description}</p>
          <button className="view-project-btn">
            View Project ↗
          </button>
        </div>

        <div className="projects-right">
          {projectsData.map((project, index) => {
            const isActive = index === activeIndex;
            return (
              <div 
                key={project.id} 
                className={`project-row ${isActive ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="project-row-header">
                  <h3>{project.title}</h3>
                  <button className="arrow-btn">
                    {isActive ? '→' : '↗'}
                  </button>
                </div>
                <div className="project-image-wrapper">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
