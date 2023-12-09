import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LeftArrow from '../LeftArrow';
import RightArrow from '../RightArrow';
import CarouselIndicator from '../CarouselIndicator';

// build using https://www.freecodecamp.org/news/build-an-image-carousel-with-react-and-framer-motion/

function CarouselDisplay({ images }) {
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
    <CarouselIndicator currentIndex={currentIndex} images={images} handleDotClick={handleDotClick} />
    </>

  );
};

export default CarouselDisplay;
