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
        <div className='value'>
          <span>Our Value</span>
          <h3></h3>
          <p></p>
        </div>
        <div className='MissViss'>
          <div className='mission'></div>
          <div className='vission'></div>
        </div>
      </div>

    </>
  );
}

export default About;
