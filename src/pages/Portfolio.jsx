import { useState, useRef, useEffect } from 'react';
import TopVideo from '../components/TopVideo';
import CreativeGallery from '../components/CreativeGallery';
import { useLoading } from '../components/LoadingProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../style/Portfolio.css';

function Portfolio() {
  const { setLoading } = useLoading();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [setLoading]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refresh();
  }, []);

  const creativeImages = [
    {
      src: 'assets/portfolio/1food menu,food flyer deign,digital menu,menu price list, menu board, restaurant menu card, poster.jpg',
      alt: 'T-shirt Design 1',
      overlayText: 'To Me, You Are Perfect',
      type: 'image',
    },
    {
      src: 'assets/portfolio/family t-shirt.jpg',
      alt: 'Cap Design',
      overlayText: 'Cat Mom Cap',
      type: 'image',
    },
    {
      src: 'assets/portfolio/gamw uote t-shirt.jpg',
      alt: 'T-shirt Design 2',
      overlayText: 'Family T-shirt',
      type: 'image',
    },
    {
      src: 'assets/portfolio/Meraki logo1-02-02.jpg',
      alt: 'Meraki logo',
      overlayText: 'Meraki logo',
      type: 'image',
    },
    {
      src: 'assets/portfolio/gamw uote t-shirt.jpg',
      alt: 'Menu Card 1',
      overlayText: 'Today Special Menu',
      type: 'image',
    },
    {
      src: 'assets/portfolio/tender logo.png',
      alt: 'Logo Tender',
      overlayText: 'TIC Food Menu',
      type: 'image',
    },
    {
      src: 'assets/portfolio/General Electrication poster-01.jpg',
      alt: 'Training Poster',
      overlayText: 'Skill Development Program',
      type: 'image',
    },
    {
      src: 'assets/portfolio/2 Etsy t shirt.png',
      alt: 'Training Poster',
      overlayText: 'T-shirt design',
      type: 'image',
    },
    {
      src: 'assets/portfolio/finger t-shirt.jpg',
      alt: 'Training Poster',
      overlayText: 'T-shirt',
      type: 'image',
    },
    {
      src: 'assets/portfolio/General Electrication poster-01.jpg',
      alt: 'Training Poster',
      overlayText: 'Skill Development Program',
      type: 'image',
    },
    {
      src: 'assets/portfolio/Chicken Burger.jpg',
      alt: 'Food Poster',
      overlayText: 'Skill Development Program',
      type: 'image',
    },
  ];

  const uiuxItems = [
    {
      src: 'assets/portfolio/Chicken Burger.jpg',
      alt: 'App Dashboard',
      overlayText: 'Mobile App Dashboard',
      type: 'image',
    },
    {
      src: 'assets/portfolio/Chicken Burger.jpg',
      alt: 'Login Wireframe',
      overlayText: 'Login Screen Wireframe',
      type: 'image',
    },
    {
      src: 'assets/portfolio/food menu video.mp4',
      alt: 'UI/UX Demo Video',
      overlayText: 'UI/UX App Walkthrough',
      type: 'video',
    },
    {
      src: 'assets/portfolio/Chicken Burger.jpg',
      alt: 'E-commerce UI',
      overlayText: 'E-commerce Product Page',
      type: 'image',
    },
    {
      src: 'assets/portfolio/food menu video.mp4',
      alt: 'Checkout Video',
      overlayText: 'Checkout Flow Demo',
      type: 'video',
    },
  ];

  return (
    <>
      <div>
        <TopVideo
          title="Our Portfolio"
          subtitle="Empowering innovation through digital solutions"
        />
      </div>
      <CreativeGallery creativeImages={creativeImages} uiuxItems={uiuxItems} />
    </>
  );
}

export default Portfolio;