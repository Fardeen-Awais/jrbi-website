import React from 'react'
import Image from 'next/image'
import StarWrapper from '@/hoc/SectionWrapper'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
function Hero() {
  return (
    <motion.div
    variants ={fadeIn("right","spring",0.5,1)}
    className='min-h-screen flex lg:items-start items-center justify-between font-poppins'>
    {/* Introduction */}
    <div className='flex flex-col my-3'>
      <h1 className=' py-3 font-extrabold text-tertiary font-anton'>Social Global <br className='hidden lg:flex' /> Problem</h1>
      <p className='max-w-xl text-lg my-5 font-normal'>Welcome to Solving Social Global Problem! Our mission is to help individuals improve their psychological wellbeing through our research-backed intervention plan. <br/><br/> Whether you're looking to make lifestyle changes, improve your mental health, or strengthen your relationships, we&apos;re here to support you every step of the way. Contact us today to schedule a meeting and start your journey towards a happier, healthier life.</p>

    </div> 
    
    <Image
      src="/headerLogo.jpg"
      alt="Header Image"
      width={500}
      height={500}
      className="absolute inset-10 lg:inset-0 -z-10 h-full bg-right w-full object-contain object-right md:object-right opacity-20"
    />

    {/* Model */}
    
    <div>
      <canvas> </canvas> {/* We will add model later */}
    </div>
    </motion.div>
  )
}

export default StarWrapper(Hero,'hero')