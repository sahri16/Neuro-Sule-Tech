import { useState, useRef, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import '../style/About.css';


function About() {
  return (
    <>
      <div className="about-video">
       <div className="top">
       <video autoPlay loop muted playsInline className="background-video">
          <source src="/assets/159052-818026310_small.mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="overlay"></div>
       </div>

      </div>
    </>
  );
}

export default About;
