import React from 'react'
import Image from 'next/image'
function Hero() {
  return (
    <div className='min-h-screen relative top-20 lg:top-0  flex items-baseline font-poppins'>
    {/* <img src="/herobg.png" alt="bg hero" /> */}
    {/* Introduction */}
    <div className='flex flex-col mx-6 md:mx-16  '>
      <p className='text-tertiary font-medium text-xl '>We are Solving</p>
      <h2 className='text-8xl py-3 font-extrabold text-tertiary font-anton'>Social Global <br className='hidden lg:flex' /> Problem</h2>
      <div>Shedule a meeting</div>
    </div> 
    {/* Model */}
    <div>
      <canvas> </canvas> {/* We will add model later */}
    </div>
    </div>
  )
}

export default Hero