import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionWrapper } from "@/hoc";
function Blog() {
  return (
    <div class="min-h-screen py-32 px-10 ">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl-grid-cols-4 gap-y-10 gap-x-6 "> 

  <div class="container mx-auto shadow-md rounded-lg max-w-md hover:shadow-lg cursor-pointer transition duration-300">
          <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/health/wp-content/uploads/2021/11/therapist_vs_psychotherapist_getty_creative.jpeg" alt="" class="rounded-t-lg w-full" />
          <div class="p-6">
            <a href="/research/blog1" class="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">This is Amazing for people to visit.</a>
            <p class="text-gray-700 my-2 hover-text-900 line-clamp-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta lobortis ex, a tincidunt nulla tristique ac. Maecenas nec eleifend eros. Integer sodales, enim vel fringilla vestibulum, arcu dui tristique mi, eget tincidunt justo risus vel massa.</p>
          </div>
        </div>

        <div class="container mx-auto shadow-md rounded-lg max-w-md hover:shadow-lg cursor-pointer transition duration-300">
          <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/health/wp-content/uploads/2021/11/therapist_vs_psychotherapist_getty_creative.jpeg" alt="" class="rounded-t-lg w-full" />
          <div class="p-6">
            <a href="/research/blog2" class="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">This is Amazing for people to visit.</a>
            <p class="text-gray-700 my-2 hover-text-900 line-clamp-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quis.</p>
          </div>
        </div>
        
        <div class="container mx-auto shadow-md rounded-lg max-w-md hover:shadow-lg cursor-pointer transition duration-300">
          <img src="https://cdn.autonomous.ai/static/upload/images/new_post/5-types-of-office-meeting-room-3635-1640165182999.jpg" alt="" class="rounded-t-lg w-full" />
          <div class="p-6">
            <a href="/research/blog3" class="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">This is Amazing for people to visit.</a>
            <p class="text-gray-700 my-2 hover-text-900 line-clamp-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quis.</p>
          </div>
        </div>
    </div>
</div>
  )
}
export default SectionWrapper(Blog,'blog')