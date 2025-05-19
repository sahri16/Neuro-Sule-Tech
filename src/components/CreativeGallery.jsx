import React, { useState, useEffect, useRef } from 'react'; // FIX: Added useRef import
import '../style/CreativeGallery.css';

const CreativeGallery = ({ creativeImages, uiuxItems }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeGallery, setActiveGallery] = useState(null);
  const videoRefs = useRef([]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedItem) {
        if (e.key === 'ArrowLeft') handlePrev();
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'Escape') setSelectedItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch((error) => console.error('Video play failed:', error));
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, [uiuxItems]);

  const handleItemClick = (index, galleryType) => {
    const items = galleryType === 'creative' ? creativeImages : uiuxItems;
    setSelectedItem(items[index]);
    setCurrentIndex(index);
    setActiveGallery(galleryType);
  };

  const handleNext = () => {
    const items = activeGallery === 'creative' ? creativeImages : uiuxItems;
    const nextIndex = (currentIndex + 1) % items.length;
    setSelectedItem(items[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const items = activeGallery === 'creative' ? creativeImages : uiuxItems;
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    setSelectedItem(items[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const handleClose = () => {
    setSelectedItem(null);
    setActiveGallery(null);
  };

  return (
    <section className="creative-section">
      {/* Creative Designs Gallery */}
      <span className="section-portfolio" data-aos="fade-up">CN Portfolio</span>
      <h3 className="section-title" data-aos="fade-up">Creative Designs</h3>
      <div className="gallery">
        {creativeImages.map((image, index) => (
          <div
            key={`creative-${index}`}
            className="gallery-item"
            onClick={() => handleItemClick(index, 'creative')}
          >
            <img
              src={image.src}
              alt={image.alt}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            />
            <div className="overlay-gallery">
              <p>{image.overlayText}</p>
            </div>
          </div>
        ))}
      </div>

      {/* UI/UX Designs Gallery (Images and Videos) */}
      <h3 className="section-title title2" data-aos="fade-up">UI/UX Designs</h3>
      <div className="gallery">
        {uiuxItems.map((item, index) => (
          <div
            key={`uiux-${index}`}
            className="gallery-item"
            onClick={() => handleItemClick(index, 'uiux')}
          >
            {item.type === 'video' ? (
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className="gallery-video"
                autoPlay
                muted
                loop
                playsInline
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={item.src}
                alt={item.alt}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              />
            )}
            <div className="overlay-gallery">
              <p>{item.overlayText}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Single Modal for Images and Videos */}
      {selectedItem && (
        <div className="modal" onClick={handleClose}>
          <span className="close">×</span>
          {selectedItem.type === 'video' ? (
            <video
              src={selectedItem.src}
              className="modal-video"
              controls
              autoPlay
              // FIX: Removed poster attribute, as uiuxItems videos don't include posters
            >
              <source src={selectedItem.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={selectedItem.src}
              alt={selectedItem.alt}
              className="modal-image"
            />
          )}
          <button
            className="prevG"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
          >
            ❮
          </button>
          <button
            className="nextG"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
          >
            ❯
          </button>
        </div>
      )}
    </section>
  );
};

export default CreativeGallery;