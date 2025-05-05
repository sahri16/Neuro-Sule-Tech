import { useState, useRef, useEffect } from 'react';
import TopVideo from '../components/TopVideo';
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
 <section className='Service'>
        <div className="service-box">
          <h3 data-aos="zoom-in-up">Our Service's</h3>
          <div className="service-list1" data-aos="fade-up"
            data-aos-duration="1500">
            <div className="service-item1" data-aos="fade-up">
              <div className="service-card">
                <img src="/assets/web-app2-removebg-preview.png" alt="" />
                <h4>Web Development</h4>
                <p>We create fast, secure, and user-friendly websites tailored to your business needs.</p>
              </div>
            </div>
            <div className="service-item1" data-aos="fade-up">
              <div className="service-card">
                <img src="/assets/wordpress-website.png" alt="" />
                <h4>WordPress Development</h4>
                <p>Custom WordPress websites with responsive design and easy management.</p>
              </div>
            </div>
            <div className="service-item1" data-aos="fade-up">
              <div className="service-card">
                <img src="/assets/shopify-development-kerala.png" alt="" />
                <h4>Shopify Development</h4>
                <p>Custom Shopify stores with seamless design and optimized performance for eCommerce success.</p>
              </div>
            </div>
          </div>

          <div className="service-list1" data-aos="fade-up"
            data-aos-duration="1500">
            <div className="service-item1" data-aos="fade-up">
              <div className="service-card">
                <img src="/assets/ui-ux-designers-team-working-together-7820841-6207662.webp" alt="" />
                <h4>UI/UX Design</h4>
                <p>Intuitive, user-friendly designs that enhance engagement and customer experience.</p>
              </div>
            </div>
            <div className="service-item1" data-aos="fade-up">
              <div className="service-card">
                <img src="/assets/gff-768x333.png" alt="" />
                <h4>Graphic Design</h4>
                <p>Eye-catching logos, branding, and marketing materials to make your business stand out.</p>
              </div>
            </div>
            <div className="service-item1" data-aos="fade-up">
              <div className="service-card">
                <img src="/assets/Digital-Marketing-PNG.png" alt="" />
                <h4>Digital Marketing</h4>
                <p>Boost your brand with targeted social media, PPC, email, and content marketing.</p>
              </div>
            </div>
          </div>

          <div className="service-list1" data-aos="fade-up"
            data-aos-duration="1500">
            <div className="service-item1" data-aos="fade-up">
              <div className="service-card">
                <img src="/assets/SEO-PNG-Clipart.png" alt="" />
                <h4> SEO</h4>
                <p>Improve your search rankings and drive organic traffic with our expert SEO strategies.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Services;