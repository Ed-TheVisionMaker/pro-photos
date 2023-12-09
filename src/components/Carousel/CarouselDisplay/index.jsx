import { useState } from 'react';
import LeftArrow from '../LeftArrow';
import RightArrow from '../RightArrow';
import CarouselIndicator from '../CarouselIndicator';
import CarouselImage from '../CarouselImage';

// build using https://www.freecodecamp.org/news/build-an-image-carousel-with-react-and-framer-motion/

function CarouselDisplay({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('left');

  const handleRightArrowClick = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handleLeftArrowClick = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  return (
    <>
      <div className='carousel-images'>
        <CarouselImage
          currentIndex={currentIndex}
          direction={direction}
          images={images}
        />
        <div className='slide_direction'>
          <LeftArrow handleLeftArrowClick={handleLeftArrowClick} />
          <RightArrow handleRightArrowClick={handleRightArrowClick} />
        </div>
      </div>
      <CarouselIndicator
        currentIndex={currentIndex}
        images={images}
        handleDotClick={handleDotClick}
      />
    </>
  );
}

export default CarouselDisplay;
