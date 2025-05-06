import { useState, useRef, useEffect } from 'react';
import TopVideo from '../components/TopVideo';
import ServiceSection from '../components/ServiceSection';
import ClientSection from '../components/ClientSection';
import AOS from "aos";
import "aos/dist/aos.css";
import '../style/Service.css';


function Contact() {
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
          title="Contact Us"
          subtitle="Empowering innovation through digital solutions"
        />
      </div>

      {/* Contect form */}
      <section className='contect-section'>
        <div className="contect-right" data-aos="fade-right">
          <h6>Get in Touch</h6>
          <h2>Let’s Elevate Your Brand with Innovation!</h2>
          <p>At Neura Sule Tech, we believe every business has the potential to shine in the digital world. Whether you're a startup looking for a strong online presence or an established brand ready to scale, we are here to turn your vision into reality.
            Our team of expert developers, designers, and digital strategists work together to craft innovative solutions, ensuring your brand stands out in a competitive market. Let’s build something extraordinary—because your success is our mission!</p>
        </div>
        <div className="contect-left" data-aos="fade-left">
          <form action="https://api.web3forms.com/submit" method="POST">
            <div className="contact-text">
              <h2 className="formHedd">Send us a Message</h2>
              <p>Please feel free to send us any questions, feedback or suggestions you might have.</p>
            </div>
            {/* API Key */}
            <input type="hidden" name="access_key" value="6d65c03b-eeb4-4340-b616-e2a442c1ba44" />


            <div className="contect-data">
              <div className="lable-r1">
                <div className="lable1">
                  <label className='lable' htmlFor="Name">Name <span>*</span></label>
                  <input type="text" name="name" className="paddText" required placeholder="Name" />
                </div>
                <div className="lable1">
                  <label className='lable' htmlFor="company">Company <span>*</span></label>
                  <input type="text" name="company" className="paddText" required placeholder="Company" />
                </div>
              </div>
              <div className="lable-r1">
                <div className="lable1">
                  <label className='lable' htmlFor="phone">Phone <span>*</span></label>
                  <input type="number" name="phone" className="paddText" required placeholder="Phone No" />
                </div>
                <div className="lable1">
                  <label className='lable' htmlFor="Email">Email <span>*</span></label>
                  <input type="email" name="email" className="paddText" required placeholder="Email" />
                </div>
              </div>

              <div className="lable1">
                <label className='lable' htmlFor="subject">Subject <span>*</span></label>
                <input type="text" name="subject" className="paddText" required placeholder="Subject" />
              </div>

              <div className="lable1">
                <label className='lable text-form' htmlFor="Message">Message <span>(optional)</span></label>
                <textarea name="message" className="paddText" placeholder="Message.."></textarea>
              </div>
              {/* Submit Button */}
              <div className="btnRes">
                <button type="submit" className="btn">
                  <span className="text">Send Text</span>
                  <span className="icon"><i className="icon fa-solid fa-paper-plane"></i></span>
                </button>
              </div>
            </div>
          </form>
        </div>

      </section>

    </>
  );
}

export default Contact;