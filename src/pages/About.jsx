import { useState, useRef, useEffect } from 'react';
import TopVideo from '../components/TopVideo';
import AOS from "aos";
import "aos/dist/aos.css";
import '../style/About.css';


function About() {
  const logos = [
    {
      src: "public/Neuro sule tech-04.png",
      alt: "Client 1",
      desc: "Developed a responsive e-commerce platform.",
      link: "/projects/client1",
    },
    {
      src: "public/Neuro sule tech-04.png",
      alt: "Client 2",
      desc: "Built a custom WordPress solution.",
      link: "/projects/client2",
    },
    {
      src: "public/Neuro sule tech-04.png",
      alt: "Client 3",
      desc: "UI/UX for fintech application.",
      link: "/projects/client3",
    },
  ];
  
  // Combine twice for seamless looping
  const loopLogos = logos.concat(logos);


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
      <TopVideo
      title="About us"
      subtitle="Empowering innovation through digital solutions"
    />

   {/* <!--======= story SECTION =====--> */}
      <div className="company-story">
        <div className='cmpyStoryImg' data-aos="fade-right">
          <img src="/assets/company flame.png" alt="" />
        </div>
        <div className='CmpIntro' data-aos="fade-left">
          <span>Neura Sule Tech’s Story</span>
          <h3>The Flame of Innovation</h3>
          <p>In a fast-evolving digital landscape, a visionary flame ignited—Neura, a tech-driven firefly with an unstoppable glow, saw businesses struggling to shine online. With innovation at its core, Neura gathered a team of digital experts to build Neura Sule Tech, a powerhouse for digital transformation.
            <br></br><br></br>
            Neura led with creativity, crafting cutting-edge solutions.
            <br></br><br></br>
            A strategic squirrel mastered social media, spreading awareness far and wide.
            <br></br><br></br>
            The wise owl optimized websites, ensuring visibility in the digital world.
            <br></br><br></br>
            The industrious beaver developed engaging content, drawing audiences in.
            <br></br><br></br>
            An adaptive chameleon personalized marketing strategies, seamlessly blending with trends.
            <br></br><br></br>
            A tech-savvy spider wove strong online networks, ensuring businesses weren’t just seen but remembered.
            <br></br><br></br>
            Together, they created Neura Sule Tech, a digital agency where brands don’t just exist—they thrive. Using innovation, expertise, and strategic execution, they illuminate the path to success in the ever-changing digital jungle.
          </p>
        </div>
      </div>

   {/* <!--======= Mission dection =====--> */}
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
   {/* <!--======= trust SECTION =====--> */}
   <div className="trusted-clients">
      <h2>Trusted by Leading Brands</h2>
      <div className="scroll-wrapper">
        <div className="scroll-track">
          {loopLogos.map((logo, index) => (
            <div className="client-card" key={index}>
              <img src={logo.src} alt={logo.alt} />
              <div className="client-info">
                <p>{logo.desc}</p>
                <a href={logo.link} className="view-project">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
   {/* <!--======= Team SECTION =====--> */}
      <div className="team">
        <div className="team-H">
          <h3>MEET THE NEURO-STARS</h3>
        </div>
        <div className="team-tag">
          <p>Crafting Brands That Shine Bright!</p>
        </div>
        <div className="team-member">
          <div className="mem1">
            <img src="/assets/ceo-removebg-preview.png" alt="CEO" />
            <h4>Sahrish Anfal</h4>
            <h5>Founder & CEO</h5>
          </div>
          <div className="mem1">
            <img src="/assets/ceo-removebg-preview.png" alt="CEO" />
            <h4>Sahrish Anfal</h4>
            <h5>Founder & CEO</h5>
          </div>
          <div className="mem1">
            <img src="/assets/ceo-removebg-preview.png" alt="CEO" />
            <h4>Sahrish Anfal</h4>
            <h5>Founder & CEO</h5>
          </div>
        </div>
      </div>

 {/* <!--======= EXPLORE SECTION =====--> */}
 <section className="explore-section">
        <div className="explore-float">
          <div className="thumbnails">
            <div className="thumbnail">
              <img src="/assets/1.png" alt="Image 1" />
            </div>
            <div className="thumbnail">
              <img src="/assets/2.png" alt="Image 2" />
            </div>
            <div className="thumbnail">
              <img src="/assets/3.png" alt="Image 3" />
            </div>
            <div className="thumbnail">
              <img src="/assets/4.png" alt="Image 4" />
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

    </>
  );
}

export default About;
