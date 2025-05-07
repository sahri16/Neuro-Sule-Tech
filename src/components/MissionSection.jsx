import React from 'react';
import '../style/MissionSection.css';

const missionSection = () => {
  return (
<div className="mission">
<div className="valueimg" data-aos="fade-right">
  <img src="/assets/Mission image.png" alt="" />
  <div className='value'>
    <span>Our Value</span>
    <h3>Discover the Glow with Neuro Sule Marketing Magic</h3>
    <p>Choose Alphagon for digital excellence with smart designs and sharp results. Let us elevate your brand with innovative solutions that drive success.</p>
  </div>
</div>
<div className='MissViss'>
  <div className='MissViss1 mission-box' data-aos="fade-down">
    <div className='mission-text'>
      <span>Our Mission</span>
      <h4>Unleash Your Potential in the Digital Realm with Alphagon.</h4>
      <p>Unleash your potential in the digital realm with Alphagon. Our cutting-edge solutions and expert guidance empower your business to thrive online.</p>
    </div>
  </div>
  <div className='MissViss1 vission-box' data-aos="fade-up">
    <div className='mission-text'>
      <span>Our Vision</span>
      <h4>Elevate Your Digital Presence with Alphagon Expertise.</h4>
      <p>Elevate your digital presence with Alphagon's expertise. Our innovative solutions and skilled team ensure your brand stands out in the digital landscape.</p>
    </div>
  </div>
</div>
</div>

);
};

export default missionSection;