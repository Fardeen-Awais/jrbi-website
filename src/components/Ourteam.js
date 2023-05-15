import React from 'react'
import { motion } from 'framer-motion'
import { zoomIn } from '@/utils/motion';
import StarWrapper from '@/hoc/SectionWrapper'
import { fadeIn } from '@/utils/motion';
function Ourteam() {
  return (
    <motion.div
    variants ={zoomIn(0.5,0.3)}
    className='bg-pink-400'
    >
        hello Ourteam
    </motion.div>
  );
}


export default Ourteam