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
    <div className='flex flex-col '>
      <p className='text-tertiary font-medium text-xl '>We are Solving</p>
      <h2 className='text-8xl py-3 font-extrabold text-tertiary font-anton'>Social Global <br className='hidden lg:flex' /> Problem</h2>
      <p className='max-w-xl line-clamp-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis metus vel lorem mattis ultrices. Nam eu sapien eros. Pellentesque quis nulla nec eros auctor bibendum sit amet eget eros. Donec suscipit elit ac libero euismod, vel cursus orci dapibus. Fusce malesuada sapien at nulla tincidunt, a scelerisque lectus rhoncus. In hac habitasse platea dictumst. Suspendisse potenti. Duis euismod risus vel pharetra aliquam. Vivamus non odio auctor, finibus augue a, lacinia lectus. Maecenas vehicula augue vel urna dictum, a porttitor nibh finibus. Aliquam quis tristique enim, in eleifend orci. Curabitur vehicula lacus ac libero pharetra eleifend. Quisque ultricies dolor in metus dictum, nec interdum odio aliquam. Etiam imperdiet augue non purus varius dapibus. Curabitur tristique libero vel magna bibendum tincidunt.</p>
      <div className='md:my-5 my-3 py-3 px-3 bg-pink-400 w-40 text-sm rounded-md cursor-pointer hover:bg-pink-300'>Shedule a meeting</div>
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