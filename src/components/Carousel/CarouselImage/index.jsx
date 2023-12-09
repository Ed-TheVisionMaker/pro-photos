import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function CarouselImage({ currentIndex, direction, images }) {
  const slideVariants = {
    hiddenRight: {
      x: '100%',
      opacity: 0,
    },
    hiddenLeft: {
      x: '-100%',
      opacity: 0,
    },
    visible: {
      x: '0',
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <AnimatePresence>
      <motion.img
        key={currentIndex}
        src={images[currentIndex]}
        variants={slideVariants}
        intial={direction === 'right' ? 'hiddenRight' : 'hiddenLeft'}
        animate='visible'
        exit='exit'
      />
    </AnimatePresence>
  );
}

export default CarouselImage;
