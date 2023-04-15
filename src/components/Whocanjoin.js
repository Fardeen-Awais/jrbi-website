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
      <div className='h-screen flex lg:items-start items-center justify-between font-poppins'>
        {/* Introduction */}
        <div className='flex flex-col prose'>
          <h2 className='py-3 text-tertiary font-anton mb-4'>Who can join us </h2>
          <p className='max-w-xl'>Are you looking to improve your lifestyle and overall psychological wellbeing? Our intervention plan is open to anyone seeking support in areas such as marriages, mental health, and lifestyle changes. <br/> <br/>Join us today and take the first step towards a happier, healthier you! </p>
          <ul className='list-disc pl-6 text-tertiary'>
            <motion.li variants ={fadeIn('right','spring',0.8,0.5)}>Access to research&ndash;backed model</motion.li>
            <motion.li variants ={fadeIn('right','spring',0.8,0.5)}>Guidance from trained professionals</motion.li>
            <motion.li variants ={fadeIn('right','spring',0.8,0.5)}>Support in areas such as marriages, mental health, and lifestyle changes</motion.li>
            <motion.li variants ={fadeIn('right','spring',0.8,0.5)}>Opportunity to improve your overall psychological wellbeing</motion.li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}


export default StarWrapper(Whocanjoin,'Whocanjoin')