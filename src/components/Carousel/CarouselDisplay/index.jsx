import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LeftArrow from '../LeftArrow';
import { CodeGuruReviewer } from 'aws-sdk';
import RightArrow from '../RightArrow';

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleRightArrowClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handleLeftArrowClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
        <div className="carousel-images">
        <img
          key={currentIndex}
          src={images[currentIndex]}
        /><div className="slide_direction">
        <LeftArrow handleLeftArrowClick={handleLeftArrowClick} />
        <RightArrow handleRightArrowClick={handleRightArrowClick}/>
      </div>
    </div>
    <CarouselIndicator images={images} handleDotClick={handleDotClick} />
          {/* <div className="carousel-indicator">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div> */}
    </>

  );
};

export default Carousel;
