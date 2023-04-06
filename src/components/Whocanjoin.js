import React from 'react'
import { fadeIn } from '@/utils/motion'
import { motion } from 'framer-motion'
import StarWrapper from '@/hoc/SectionWrapper'

function Whocanjoin() {
  return (
  <motion.div
    variants ={fadeIn("right","spring",0.5,1)}>
    <div className='h-screen flex lg:items-start items-center justify-between font-poppins'>
  {/* Introduction */}
  <div className='flex flex-col prose'>
    <h2 className='py-3 font-extrabold text-tertiary font-anton mb-4'>Who can join us </h2>
    <p className='max-w-xl '>Are you looking to improve your lifestyle and overall psychological wellbeing? Our intervention plan is open to anyone seeking support in areas such as marriages, mental health, and lifestyle changes. <br/> 
    
    <br/> As a participant, you'll have access to our research-backed model and the guidance of our trained professionals. Join us today and take the first step towards a happier, healthier you!  </p>
    <ul className='list-disc pl-6 text-tertiary'>
  <li>Access to research-backed model</li>
  <li>Guidance from trained professionals</li>
  <li>Support in areas such as marriages, mental health, and lifestyle changes</li>
  <li>Opportunity to improve your overall psychological wellbeing</li>
</ul>
  </div> 
</div>
    </motion.div>
  )
}

export default StarWrapper(Whocanjoin,'Whocanjoin')