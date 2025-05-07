import { useState, useRef, useEffect } from 'react';
import TopVideo from '../components/TopVideo';
import ServiceSection from '../components/ServiceSection';
import ClientSection from '../components/ClientSection';
import { useLoading } from "../components/LoadingProvider";
import AOS from "aos";
import "aos/dist/aos.css";
import '../style/Service.css';


function Services() {

  // looded indicater
  const { setLoading } = useLoading();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Replace with actual loading logic
    return () => clearTimeout(timer);
  }, [setLoading]);

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

      {/*----------- Service company------------- */}
      <section className="Service-company">
        <div className="image-container" data-aos="fade-right">
          <img
            src="assets/service1.jpg"
            alt="CN Digital Excellence"
          />
        </div>
        <div className="content-container" data-aos="fade-left">
          <h2>
            Unleashing Digital Success: Experience the CN Edge
          </h2>
          <p>
            Step into the world of CN, where digital excellence drives
            innovation. Our dynamic solutions, skilled team, and dedication to
            excellence distinguish us in the digital realm. Collaborate with us to
            transform your business, leveraging state-of-the-art technology and
            strategic expertise for remarkable outcomes.
          </p>
          <ul className="bullet-list">
            {[
              'Mastery in Digital Solutions',
              'Creative Design Innovation',
              'Strategic Marketing Expertise',
              'Insight-Driven Strategies',
              'Comprehensive Security Solutions',
              'Customized Digital Plans',
              'Adaptive & Scalable Frameworks',
              'Trusted Success Record',
            ].map((item, index) => (
              <li key={index}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/*------------------- Service------------ */}
      < ServiceSection
        Service_tegline="What We Offer"
        Service="Where Strategy Meets Digital. Your Success Story Begins with Company Name."
      />
      {/*------------------- Client------------ */}
      < ClientSection />

      <section className="service2">
        <div className="service2-title" data-aos="fade-right">
          <h3>Empowering Your Digital Destiny with CN: Unleash Limitless Potential</h3>
        </div>
        <div className="service2-para" data-aos="fade-left">
          <p>
            Partner with CN to conquer the digital landscape. Our innovative
            solutions, expert team, and strategic vision transform your goals into
            reality, driving growth and success. Connect with us to unleash your
            potential and lead with confidence.
          </p>
        </div>
      </section>

      <section >
        
      </section>

    </>
  );
}

export default Services;