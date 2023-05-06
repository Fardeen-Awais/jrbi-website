import React from 'react'
import Image from 'next/image'
import StarWrapper from '@/hoc/SectionWrapper'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import { textVariant } from '@/utils/motion'
import BrainCanvas from './canvas/Brain'
function Hero() {
  return (
    <motion.div
    variants ={fadeIn('up','spring',0.3,0.5)}
    className='min-h-screen flex flex-col  lg:items-start items-center justify-between font-poppins'>
      <div className='bg-black'><p>Hello, I'm here to help you</p></div>
     {/* <BrainCanvas/> */}
      {/* We will add model later */}
    
    </motion.div>
  )
}

export default StarWrapper(Hero,'hero')