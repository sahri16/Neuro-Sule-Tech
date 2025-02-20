import { useState, useRef, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import '../App.css';

function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration (1s)
      once: true,       // Run only once
    });
    AOS.refresh(); // Refresh AOS to detect new elements
  }, []);

  const [slideIndex, setSlideIndex] = useState(0);

  const testimonials = [
    {
      quote: "The team at Neura Sule Tech handled our website redesign project efficiently. Their attention to detail and timely delivery exceeded our expectations. Our online presence is now much more engaging and user-friendly. Highly recommended!",
      author: "Ali Raza",
    },
    {
      quote: "The graphic design and UI/UX services gave our brand a fresh and modern look. The professionals at Neura Sule Tech always understood our ideas and creatively implemented them. This team is truly full of talent!",
      author: "Sara Noor",
    },
    {
      quote: "Neura Sule Tech managed our SEO and digital marketing campaign, and the results have given our business a new boost. Their strategic approach and timely execution resulted in noticeable growth. It was a pleasure working with them!",
      author: "Bilal Malik",
    },
    {
      quote: "Since Neura Sule Tech developed our Shopify store, we’ve seen significant growth in sales. They understood our business needs and created an amazing online store tailored to them. We are ready to work on future projects with them!",
      author: "Ayesha",
    },
  ];

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);


  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="all-content">
      {/* Hero Section */}
      <section className="heroSection">
      {/* <canvas id="particleCanvas"></canvas> */}
        <video autoPlay loop muted playsInline className="background-video">
          <source src="/assets/1992-153555258_small.mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>

        <div className="content">
          <div className="hero-left" data-aos="fade-right">
            <div className='hero_title'>
              <h3>Unlocking the Future with Purposeful Innovation, Bridging Ideas to Reality</h3>
            </div>
            <div data-aos="fade-up">
              <span className="typing">Ready to transform your challenges into innovative solutions?</span>
            </div>
          </div>

          <div className="hero-right" data-aos="fade-left">
            <div className="hero-btn1" data-aos="zoom-in-down">Let's Grow</div>
            <div className="hero-btn2" data-aos="zoom-in-left">Our Services</div>
          </div>
        </div>
      </section>


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
      {/*------------------ Client-num ------------*/}
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

      <section className='copmany-intro'>
        <div className="company-box">
          <div className="company-image">
            <div className="com-img1" data-aos="fade-up">
              <img src="/assets/business-people-shaking-hands-agreement.jpg" alt="" />
            </div>
            <div className="com-2img">
              <div className="com-img2" data-aos="fade-up-right">
                <img src="/assets/img2 com.jpg" alt="" />
              </div>
              <div className="com-img3" data-aos="fade-up-left">
                <img src="/assets/futuristic-technology-hologram.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="company-text">
            <h6 data-aos="zoom-in-up">who we are?</h6>
            <h2 data-aos="fade-up">We dedicate 30,000 hours yearly to crafting digital excellence and fueling brand growth!</h2>
            <p data-aos="fade-up">At Neura Sule Tech, we turn ideas into powerful digital experiences. With a skilled team, we craft tailored solutions that drive business growth. From web development to SEO and custom products, we bring your vision to life with innovation and expertise. Our commitment to excellence ensures that every project we deliver is impactful, future-ready, and designed for success.</p>
          </div>
        </div>
      </section>

      <section class="company-quote">
        <div class="company-quote-box" data-aos="zoom-in-up">
          <h1>DISCOVER <span>EXPERTISE</span> – WHERE <span>INNOVATION</span>, <span>PRECISION</span> & <span>PERFORMANCE</span> MEET!</h1>
        </div>
      </section>

      <section className="testimonial">
        <h3 data-aos="zoom-in-up">Feedback our Client's</h3>
        <div className="slideshow-container" data-aos="fade-up">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="mySlides"
              style={{ display: slideIndex === index ? "block" : "none" }}
            >
              <q>{testimonial.quote}</q>
              <p className="author">- {testimonial.author}</p>
            </div>
          ))}

          <button className="prev" onClick={prevSlide}>❮</button>
          <button className="next" onClick={nextSlide}>❯</button>
        </div>

        <div className="dot-container">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${slideIndex === index ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </section>

      {/* <!--======= EXPLORE SECTION =====--> */}
      <section className="explore-section">
        <div className="explore-float">
          <div className="thumbnails">
            <div className="thumbnail">
              <img src="/assets/explore-img1.png" alt="Image 1" />
            </div>
            <div className="thumbnail">
              <img src="/assets/explore-img1.png" alt="Image 2" />
            </div>
            <div className="thumbnail">
              <img src="/assets/explore-img1.png" alt="Image 3" />
            </div>
            <div className="thumbnail">
              <img src="/assets/explore-img1.png" alt="Image 4" />
            </div>
          </div>
          <a href="#" className="explore-circle">
            EXPLORE OUR COMPANY
            <svg
              version="1.1"
              id="Group_5"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="140px"
              height="140px"
              viewBox="0 0 240 240"
              style={{ enableBackground: 'new 0 0 240 240' }}
              xmlSpace="preserve"
            >
              <g id="Ellipse_1">
                <circle className="st10" cx="120" cy="120" r="120"></circle>
                <circle className="st11" cx="120" cy="120" r="118.5"></circle>
              </g>
            </svg>
          </a>
        </div>
      </section>

      <div className="contect-title">
        <h6>You got questions?</h6>
        <h3>We have got the Answers</h3>
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


    </div>
  );
}

export default Home;