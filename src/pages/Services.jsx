import { useState, useRef, useEffect } from 'react';
import TopVideo from '../components/TopVideo';
import ServiceSection from '../components/ServiceSection';
import ClientSection from '../components/ClientSection';
import AOS from "aos";
import "aos/dist/aos.css";
import '../style/Service.css';


function Services() {
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
          title="Our Service's"
          subtitle="Empowering innovation through digital solutions"
        />
      </div>
      {/*------------------- Service------------ */}
      <ServiceSection />
      {/*------------------- Client------------ */}
      <ClientSection />
    </>
  );
}

export default Services;