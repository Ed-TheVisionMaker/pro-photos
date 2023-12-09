import { motion } from 'framer-motion';

function LeftArrow({ handleLeftArrowClick }) {
  const slidersVariants = {
    hover: {
      scale: 1.2,
      backgroundColor: '#ff00008e',
    },
  };
  return (
    <motion.div
      className='left'
      onClick={() => handleLeftArrowClick()}
      variants={slidersVariants}
      whileHover='hover'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height='20'
        viewBox='0 96 960 960'
        width='20'
      >
        <path d='M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z' />
      </svg>
    </motion.div>
  );
}

export default LeftArrow;
