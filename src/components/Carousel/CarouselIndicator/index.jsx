import { motion } from 'framer-motion';

function CarouselIndicator({ currentIndex, handleDotClick, images }) {
  const dotsVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: -10,
      scale: 1.3,
      transition: { type: 'spring', stiffness: 1000, damping: '10' },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };
  return (
    <div className='carousel-indicator'>
      {images.map((_, index) => (
        <motion.div
          key={index}
          className={`dot ${currentIndex === index ? 'active' : ''}`}
          onClick={() => handleDotClick(index)}
          initial='initial'
          animate={currentIndex === index ? 'animate' : ''}
          whileHover='hover'
          variants={dotsVariants}
        ></motion.div>
      ))}
    </div>
  );
}

export default CarouselIndicator;
