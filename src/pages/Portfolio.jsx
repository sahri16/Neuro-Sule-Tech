import { useState, useRef, useEffect } from 'react';
import TopVideo from '../components/TopVideo';
import CreativeGallery from '../components/CreativeGallery';
import { useLoading } from "../components/LoadingProvider";
import AOS from "aos";
import "aos/dist/aos.css";
import '../style/Portfolio.css';

function Portfolio() {
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

  const images = [
    { src: 'assets/portfolio/1food menu,food flyer deign,digital menu,menu price list, menu board, restaurant menu card, poster.jpg', alt: 'T-shirt Design 1', overlayText: 'To Me, You Are Perfect' },
    { src: 'assets/portfolio/family t-shirt.jpg', alt: 'Cap Design', overlayText: 'Cat Mom Cap' },
    { src: 'assets/portfolio/gamw uote t-shirt.jpg', alt: 'T-shirt Design 2', overlayText: 'Family T-shirt' },
    { src: 'assets/portfolio/Meraki logo1-02-02.jpg', alt: 'Meraki logo', overlayText: 'Meraki logo' },
    { src: 'assets/portfolio/gamw uote t-shirt.jpg', alt: 'Menu Card 1', overlayText: 'Today Special Menu' },
    { src: 'assets/portfolio/tender logo.png', alt: 'Logo Tender', overlayText: 'TIC Food Menu' },
    { src: 'assets/portfolio/General Electrication poster-01.jpg', alt: 'Training Poster', overlayText: 'Skill Development Program' },
    { src: 'assets/portfolio/2 Etsy t shirt.png', alt: 'Training Poster', overlayText: 'T-shirt design' },
    { src: 'assets/portfolio/finger t-shirt.jpg', alt: 'Training Poster', overlayText: 'T-shirt' },
    { src: 'assets/portfolio/General Electrication poster-01.jpg', alt: 'Training Poster', overlayText: 'Skill Development Program' },

  ];

  return (
    <>
     <div>
     <TopVideo
      title="Our Portfolio"
      subtitle="Empowering innovation through digital solutions"
    />
     </div>

     <CreativeGallery images={images} />




     </>
  );
  
  }
  
  export default Portfolio;  