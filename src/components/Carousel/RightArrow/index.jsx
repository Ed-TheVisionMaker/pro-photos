import { motion } from 'framer-motion';

function RightArrow({ handleRightArrowClick }) {
  const slidersVariants = {
    hover: {
      scale: 1.2,
      backgroundColor: '#ff00008e',
    },
  };
  return (
    <motion.div
      className='right'
      onClick={() => handleRightArrowClick()}
      variants={slidersVariants}
      whileHover='hover'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height='20'
        viewBox='0 96 960 960'
        width='20'
      >
        <path d='m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z' />
      </svg>
    </motion.div>
  );
}

export default RightArrow;
