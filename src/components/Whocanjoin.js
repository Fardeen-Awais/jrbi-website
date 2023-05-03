import React from 'react'
import { motion } from 'framer-motion'
import { zoomIn } from '@/utils/motion';
import StarWrapper from '@/hoc/SectionWrapper'
import { fadeIn } from '@/utils/motion';
function Whocanjoin() {
  return (
    <motion.div
    variants ={zoomIn(0.5,0.3)}
    >
      <div>
        hello 
      </div>
    </motion.div>
  );
}


export default StarWrapper(Whocanjoin,'Whocanjoin')