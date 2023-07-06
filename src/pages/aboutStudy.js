import React from 'react'
import { motion } from 'framer-motion'
import { headTextAnimation, headContainerAnimation, headContentAnimation } from '@/utils/motion'
const aboutStudy = () => {
  return (
    <main className='flex min-h-screen my-5'>
  <div className='w-full h-96 flex justify-center items-center bg-slate-200 p-5'>
   <motion.div
      className='flex flex-col  items-center  gap-7 p-5'
      variants={headContainerAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <motion.h1 className='text-4xl' variants={headTextAnimation}>
        About the Study
      </motion.h1>
      <motion.p className='text-sm max-w-lg p-5' variants={headContentAnimation}>
        Here, we aim to explore the reasons behind risky behaviors among individuals from the Gen Y and Gen Z generational cohorts. By understanding these behaviors, we can develop strategies to reduce their harmful impact. This page provides important information about the study, eligibility criteria, and the benefits of participating. We appreciate your interest and invite you to learn more about how you can contribute to this valuable research.
      </motion.p>
    </motion.div></div>

      <div className='introduction'></div>
      <div className='Purpose'></div>
      <div className='Eligibility'></div>
      <div className='FAQ'></div>
      <div className='Benefits'></div>
      <div className='Redirect the submit form'></div>
    </main>
  )
}

export default aboutStudy