import React from 'react'
import Image from 'next/image'
function Hero() {
  return (
    <div className='min-h-screen relative top-10 lg:top-0 flex items-baseline font-poppins'>
    {/* Introduction */}
    <div className='flex flex-col mx-6 md:mx-16  '>
      <p className='text-tertiary font-medium text-xl '>We are Solving</p>
      <h2 className='text-8xl py-3 font-extrabold text-tertiary font-anton'>Social Global <br className='hidden lg:flex' /> Problem</h2>
      <div className='lg:my-10 md:my-5 my-3 py-3 px-3 bg-pink-400 w-40 text-sm rounded-md cursor-pointer hover:bg-pink-300'>Shedule a meeting</div>
    </div> 
    
    <Image
      src="/headerLogo.jpg"
      alt="Header Image"
      width={500}
      height={500}
      className="absolute inset-0 -z-10 h-full bg-right w-full object-contain object-right md:object-right opacity-20"
    />

    {/* Model */}
    
    <div>
      <canvas> </canvas> {/* We will add model later */}
    </div>
    </div>
  )
}

export default Hero