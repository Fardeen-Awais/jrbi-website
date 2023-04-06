import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import StarWrapper from '@/hoc/SectionWrapper';
import { Chrono } from "react-chrono";
import { fadeIn } from '@/utils/motion';
function Service() {

  return (
    <div className="min-h-screen prose-h2:text-tertiary" >
      <h2 className='font-anton flex justify-center items-center mx-auto text-tertiary py-10'>Our service</h2>
      <motion.div>
      <Chrono mode="VERTICAL_ALTERNATING" theme={{
        primary: '#f3c6c0',
        secondary: '#f8e4e3',
        cardBgColor: '#f3c6c0',
        titleColor: '#151030',
        titleColorActive: '#151030',
        cardDetailsColor: 'black'
      }} >
        <div className='flex justify-start items-center flex-col'>
          <h3 className='text-2xl my-4 font-anton'>Smoking theraphy</h3>
          <p className='mx-5'>I have been helping to quite those people who are addicted to the smoke</p>
        </div>
        <div className='flex justify-start items-center flex-col'>
          <h3 className='text-2xl my-4 font-anton'>Smoking theraphy</h3>
          <p className='mx-5'>I have been helping to quite those people who are addicted to the smoke</p>
        </div>
        <div className='flex justify-start items-center flex-col'>
          <h3 className='text-2xl my-4 font-anton'>Smoking theraphy</h3>
          <p className='mx-5'>I have been helping to quite those people who are addicted to the smoke</p>
        </div>
        <div className='flex justify-start items-center flex-col'>
          <h3 className='text-2xl my-4 font-anton'>Smoking theraphy</h3>
          <p className='mx-5'>I have been helping to quite those people who are addicted to the smoke</p>
        </div>
      </Chrono>
      </motion.div>
    </div>
  )
}

export default StarWrapper(Service, 'service') // Yay section wrapper say sai har section mai animation add hui hai aur section ki width define hui hai 