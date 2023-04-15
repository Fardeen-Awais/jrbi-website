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
      <motion.div variants ={fadeIn('up','spring',0.5,1)}>
      <Chrono mode="VERTICAL_ALTERNATING" theme={{
        primary: '#151030',
        secondary: '#f3f3f3',
        cardBgColor: '#f3f3f3',
        titleColor: '#151030',
        titleColorActive: '#151030',
        cardDetailsColor: 'black'
      }} >
<div className='flex justify-start items-center flex-col'>
  <h3 className='text-xl my-4 font-anton'>Anxiety Treatment</h3>
  <p className='mx-5 line-clamp-3'>If you are struggling with anxiety, I can help you manage it and live a more fulfilling life.</p>
</div>
<div className='flex justify-start items-center flex-col'>
  <h3 className='text-xl my-4 font-anton'>Depression Counseling</h3>
  <p className='mx-5 line-clamp-3'>Depression can be a difficult and isolating experience, but you don&apos;t have to go through it alone.</p>
</div>
<div className='flex justify-start items-center flex-col'>
  <h3 className='text-xl my-4 font-anton'>Relationship Therapy</h3>
  <p className='mx-5 line-clamp-3'>Whether you&apos;re struggling with communication, trust issues, or simply want to strengthen your relationship, I can help.</p>
</div>
<div className='flex justify-start items-center flex-col'>
  <h3 className='text-xl my-4 font-anton'>Grief Counseling</h3>
  <p className='mx-5 line-clamp-3'>Losing a loved one can be a difficult and painful experience, but it&apos;s important to remember that you don&apos;t have to go through it alone.</p>
</div>

      </Chrono>
      </motion.div>
    </div>
  )
}

export default StarWrapper(Service, 'service') // Yay section wrapper say sai har section mai animation add hui hai aur section ki width define hui hai 