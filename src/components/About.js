import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import StarWrapper from '@/hoc/SectionWrapper';
import { Chrono } from "react-chrono";
function About() {
 
  return (
    <div className="min-h-screen" >
      
      <div>
      <Chrono mode="VERTICAL_ALTERNATING" theme={{
        primary: '#f3c6c0',
        secondary: '#f8e4e3',
        cardBgColor: '#f3c6c0',
        titleColor: '#151030',
        titleColorActive: '#151030',
        cardDetailsColor: 'black'
      }} >
      <div className='flex justify-start items-center flex-col'>
        <h2 className='text-2xl my-4 mx-8 font-anton'>Smoking theraphy</h2>
        <p className='mx-5'>I have been helping to quite those people who are addicted to the smoke</p>
      </div>
      <div className='flex justify-start items-center flex-col'>
        <h2 className='text-2xl my-4 mx-8 font-anton'>Smoking theraphy</h2>
        <p className='mx-5'>I have been helping to quite those people who are addicted to the smoke</p>
      </div>
      </Chrono></div>
     
      </div>
  )
}

export default StarWrapper(About, 'about') // Yay section wrapper say sai har section mai animation add hui hai aur section ki width define hui hai 