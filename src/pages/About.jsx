import { useState, useRef, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import '../style/About.css';


function About() {
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
      <div className="about-video">
        <div className="top">
          <div className="video-heading">
            <h2>About Us</h2>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <video autoPlay loop muted playsInline className="background-video">
            <source src="/assets/159052-818026310_small.mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay"></div>
        </div>
      </div>

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

      <div className="mission">
        <div className="valueimg" data-aos="fade-right">
          {/* <img src="/assets/corporate-employee-typing-data-financial-report-planning-business-development-with-economy-graphs-female-manger-checking-online-diagrams-analytics-late-night-handheld-shot.jpg" alt="" /> */}
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


    </>
  );
}

export default About;
