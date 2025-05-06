import React, { useState, useEffect } from 'react';
import '../style/CreativeGallery.css';

const CreativeGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === 'ArrowLeft') handlePrev();
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'Escape') setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const handleImageClick = (index) => {
    setSelectedImage(images[index].src);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex].src);
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex].src);
    setCurrentIndex(prevIndex);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <section className="creative-section">
      <span className="section-portfolio" data-aos="fade-up">CN Portfolio</span>
      <h3 className="section-title" data-aos="fade-up">Creative Designs</h3>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => handleImageClick(index)}>
            <img
              src={image.src}
              alt={image.alt}
              data-aos="zoom-in"
              data-aos-delay={index * 100} /* Staggered delay for each image */
            />
            <div className="overlay-gallery">
              <p>{image.overlayText}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="modal" onClick={handleClose}>
          <span className="close">×</span>
          <img src={selectedImage} alt="Full view" className="modal-image" />
          <button className="prev" onClick={(e) => { e.stopPropagation(); handlePrev(); }}>❮</button>
          <button className="next" onClick={(e) => { e.stopPropagation(); handleNext(); }}>❯</button>
        </div>
      )}
    </section>
  );
};

export default CreativeGallery;