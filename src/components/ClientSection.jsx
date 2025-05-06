import React from 'react';
import '../style/ClientSection.css';


const ClientSection = () => {
    return (
<section className='Client-num'>
<div className="client-bar">
  <h3 data-aos="zoom-out-up">Number of Client</h3>

  <div className="client-bar-box">
    <div className='box1' data-aos="fade-right">
      <h5>60%</h5>
      <p>Increased Client withen 4 months</p>
    </div>
    <div className="vertival-line"></div>
    <div className='box1' data-aos="zoom-in">
      <h5>15+</h5>
      <p>Worked with multiple startups</p>
    </div>
    <div className="vertival-line"></div>
    <div className='box1' data-aos="fade-left">
      <h5>4.9</h5>
      <p>Client satisfaction Rating across all Platforms</p>
    </div>
  </div>
</div>
</section>

);
};

export default ClientSection;