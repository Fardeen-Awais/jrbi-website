import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import StarWrapper from '@/hoc/SectionWrapper';
import { Chrono } from "react-chrono";
import { fadeIn } from '@/utils/motion';
function About() {

  return (
    <div className="min-h-screen prose-h2:text-5xl prose-h2:text-tertiary" >
      <h2 className='font-anton  flex justify-center items-center mx-auto text-tertiary py-10'>Our service</h2>
      <Chrono mode="VERTICAL_ALTERNATING" theme={{
        primary: '#f3c6c0',
        secondary: '#f8e4e3',
        cardBgColor: '#f3c6c0',
        titleColor: '#151030',
        titleColorActive: '#151030',
        cardDetailsColor: 'black'
      }} >
        <motion.div variants={fadeIn("right", "spring", 0.5, 1)} className='flex justify-start items-center flex-col'>
          <h2 className='text-2xl my-4 mx-8 font-anton'>Smoking theraphy</h2>
          <p className='mx-5'>I have been helping to quite those people who are addicted to the smoke</p>
        </motion.div>
        <motion.div variants={fadeIn("right", "spring", 0.5, 1)} className='flex justify-start items-center flex-col'>
          <h2 className='text-2xl my-4 mx-8 font-anton'>Smoking theraphy</h2>
          <p className='mx-5'>I have been helping to quite those people who are addicted to the smoke</p>
        </motion.div> 
        <motion.div variants={fadeIn("right", "spring", 0.5, 1)} className='flex justify-start items-center flex-col'>
          <h2 className='text-2xl my-4 mx-8 font-anton'>Smoking theraphy</h2>
          <p className='mx-5'>I have been helping to quite those people who are addicted to the smoke</p>
        </motion.div> 
        <motion.div variants={fadeIn("right", "spring", 0.5, 1)} className='flex justify-start items-center flex-col'>
          <h2 className='text-2xl my-4 mx-8 font-anton'>Smoking theraphy</h2>
          <p className='mx-5'>I have been helping to quite those people who are addicted to the smoke</p>
        </motion.div>
      </Chrono>

    </div>
  )
}

export default StarWrapper(About, 'about') // Yay section wrapper say sai har section mai animation add hui hai aur section ki width define hui hai 