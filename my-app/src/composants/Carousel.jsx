import React, { useState } from 'react';
import '../styles/Caroussel.css';

const Carousel = ({ pictures }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!pictures || pictures.length === 0) return null;

  const hasMultipleImages = pictures.length > 1;

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  return (
    <div className="carousel-container">
      {hasMultipleImages && (
        <div className="carousel-button prev" onClick={prevImage}>
          <i className="fa-solid fa-chevron-left"></i>
        </div>
      )}

      <div className="carousel-image-container">
        <img
          className="carousel-image"
          src={pictures[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
        />
        {hasMultipleImages && (
          <div className="image-counter">
            {currentImageIndex + 1} / {pictures.length}
          </div>
        )}
      </div>

      {hasMultipleImages && (
        <div className="carousel-button next" onClick={nextImage}>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      )}
    </div>
  );
};

export default Carousel;
