import { useState, useRef, useEffect } from 'react';
import TopVideo from '../components/TopVideo';
import AOS from "aos";
import "aos/dist/aos.css";
import '../style/Portfolio.css';

function Portfolio() {

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration (1s)
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <>
     <div>
     <TopVideo
      title="Our Portfolio"
      subtitle="Empowering innovation through digital solutions"
    />
     </div>
     </>
  );
  
  }
  
  export default Portfolio;  