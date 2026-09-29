import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        
        <h2 className="testimonials-heading">
          <div className="line-1">STORIES</div>
          <div className="line-2">FROM</div>
          <div className="line-3">OUR CLIENTS</div>
        </h2>

        {/* Floating Client Photos */}
        <div className="client-box box-1" style={{ backgroundColor: '#a994c1' }}>
          <img src="/client_1.jpg" alt="Client" />
        </div>
        <div className="client-box box-2" style={{ backgroundColor: '#8990c8' }}>
          <img src="/client_2.jpg" alt="Client" />
        </div>
        <div className="client-box box-3" style={{ backgroundColor: '#87b6d1' }}>
          <img src="/client_3.jpg" alt="Client" />
        </div>
        <div className="client-box box-4" style={{ backgroundColor: '#f0b74b' }}>
          <img src="/profile.jpg" alt="Client" />
        </div>
        <div className="client-box box-5" style={{ backgroundColor: '#6bc496' }}>
          <img src="/client_1.jpg" alt="Client" />
        </div>
        <div className="client-box box-6" style={{ backgroundColor: '#d59239' }}>
          <img src="/client_2.jpg" alt="Client" />
        </div>
        <div className="client-box box-7" style={{ backgroundColor: '#92ccce' }}>
          <img src="/client_3.jpg" alt="Client" />
        </div>

        <div className="testimonial-bubble">
          <p>
            "Collaborating with Ardan was an inspiring experience. He quickly grasped our vision, asked the right questions, and delivered a design that perfectly balanced aesthetics and functionality. His creative approach and attention to detail made every step of the process smooth and enjoyable."
          </p>
          <p className="author">Rina Kurniawan — CTO at LuminaTech</p>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
