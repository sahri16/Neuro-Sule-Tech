import React from 'react';
import '../style/ServiceSection.css';

// FIX: Added services prop for reusability
const ServiceSection = ({ Service, Service_tegline, services }) => {
  return (
    <section className="Service">
      <div className="service-box service-section global-service-box">
        <span data-aos="zoom-in-up">{Service_tegline}</span>
        <h3 data-aos="zoom-in-up">{Service}</h3>

        {/* FIX: Replaced hardcoded service lists with dynamic mapping */}
        {services.map((serviceList, listIndex) => (
          <div
            key={`service-list-${listIndex}`}
            className="service-list1"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            {serviceList.map((item, itemIndex) => (
              <div
                key={`service-item-${listIndex}-${itemIndex}`}
                className="service-item1"
                data-aos="fade-up"
              >
                <div className="service-card">
                  <img src={item.image} alt="" />
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

// FIX: Added defaultProps to preserve original content
ServiceSection.defaultProps = {
  Service: 'Our Services',
  Service_tegline: 'What We Offer',
  services: [
    [
      {
        image: '/assets/web-app2-removebg-preview.png',
        title: 'Web Development',
        description: 'We create fast, secure, and user-friendly websites tailored to your business needs.',
      },
      {
        image: '/assets/wordpress-website.png',
        title: 'WordPress Development',
        description: 'Custom WordPress websites with responsive design and easy management.',
      },
      {
        image: '/assets/shopify-development-kerala.png',
        title: 'Shopify Development',
        description: 'Custom Shopify stores with seamless design and optimized performance for eCommerce success.',
      },
    ],
    [
      {
        image: '/assets/ui-ux-designers-team-working-together-7820841-6207662.webp',
        title: 'UI/UX Design',
        description: 'Intuitive, user-friendly designs that enhance engagement and customer experience.',
      },
      {
        image: '/assets/gff-768x333.png',
        title: 'Graphic Design',
        description: 'Eye-catching logos, branding, and marketing materials to make your business stand out.',
      },
      {
        image: '/assets/Digital-Marketing-PNG.png',
        title: 'Digital Marketing',
        description: 'Boost your brand with targeted social media, PPC, email, and content marketing.',
      },
    ],
    [
      {
        image: '/assets/SEO-PNG-Clipart.png',
        title: 'SEO',
        description: 'Improve your search rankings and drive organic traffic with our expert SEO strategies.',
      },
    ],
  ],
};

export default ServiceSection;