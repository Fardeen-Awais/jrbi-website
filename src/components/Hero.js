import React from 'react'
import Image from 'next/image'
import StarWrapper from '@/hoc/SectionWrapper'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import { textVariant } from '@/utils/motion'
function Hero() {
  return (
    <motion.div
    variants ={fadeIn('up','spring',0.3,0.5)}
    className='min-h-screen flex lg:items-start items-center justify-between font-poppins'>
    {/* Introduction */}
    <div className='flex flex-col my-3'>
      <h1 className=' py-3 '>Social Global <br /> Problem </h1>
      <p className='max-w-xl text-lg my-5 font-normal'>Welcome to Solving Social Global Problem! Our mission is to help individuals improve their psychological wellbeing through our research-backed intervention plan. <br/><br/> Whether you&apos;re looking to make lifestyle changes, improve your mental health, or strengthen your relationships, we&apos;re here to support you every step of the way.</p>

    </div>

    
    {/* Model */}
    <div>
      <canvas>
         </canvas> {/* We will add model later */}
    </div>
    </motion.div>
  )
}

export default StarWrapper(Hero,'hero')