<<<<<<< Updated upstream
import React from "react";
import Image from "next/image";
import Link from "next/link";
function Blog() {
  return (
    <div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl tracking-tight text-gray-900 sm:text-4xl font-anton">
              Checkout Our Helpful Blogs
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Let's Explore some recent studies on Behaviours
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time datetime="2020-03-16" className="text-gray-500">
                  Mar 16, 2020
                </time>
                <a
                  href="#"
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  Marketing
                </a>
              </div>
              <div className="group relative">
              
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <Link href={'/research/powerofcode'}>
                    <span className="absolute inset-0"></span>
                    Boost your conversion rate
                </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                  totam vitae illo. Non aliquid explicabo necessitatibus unde.
                  Sed exercitationem placeat consectetur nulla deserunt vel.
                  Iusto corrupti dicta.
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Michael Foster
                    </a>
                  </p>
                  <p className="text-gray-600">Co-Founder / CTO</p>
                </div>
              </div>
            </article>
     
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time datetime="2020-03-16" className="text-gray-500">
                  Mar 16, 2020
                </time>
                <a
                  href="#"
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  Marketing
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Boost your conversion rate
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                  totam vitae illo. Non aliquid explicabo necessitatibus unde.
                  Sed exercitationem placeat consectetur nulla deserunt vel.
                  Iusto corrupti dicta.
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Michael Foster
                    </a>
                  </p>
                  <p className="text-gray-600">Co-Founder / CTO</p>
                </div>
              </div>
            </article>
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time datetime="2020-03-16" className="text-gray-500">
                  Mar 16, 2020
                </time>
                <a
                  href="#"
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  Marketing
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Boost your conversion rate
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                  totam vitae illo. Non aliquid explicabo necessitatibus unde.
                  Sed exercitationem placeat consectetur nulla deserunt vel.
                  Iusto corrupti dicta.
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Michael Foster
                    </a>
                  </p>
                  <p className="text-gray-600">Co-Founder / CTO</p>
                </div>
              </div>
            </article>
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time datetime="2020-03-16" className="text-gray-500">
                  Mar 16, 2020
                </time>
                <a
                  href="#"
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  Marketing
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Boost your conversion rate
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                  totam vitae illo. Non aliquid explicabo necessitatibus unde.
                  Sed exercitationem placeat consectetur nulla deserunt vel.
                  Iusto corrupti dicta.
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Michael Foster
                    </a>
                  </p>
                  <p className="text-gray-600">Co-Founder / CTO</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
=======
import React from 'react'

function Blog() {
  return (
    <div class="bg-gray-100 min-h-screen py-32 px-10 ">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl-grid-cols-4 gap-y-10 gap-x-6 "> 

  <div class="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300">
    <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/health/wp-content/uploads/2021/11/therapist_vs_psychotherapist_getty_creative.jpeg" alt="" class="rounded-t-lg w-full" />
  <div class="p-6">
    <a href="/blog" class="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">This is Amazing for people to visit.</a>
  <p class="text-gray-700 my-2 hover-text-900 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quis.</p>
  </div>
    </div>
  <div class="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300">
    <img src="https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750,h_564,c_fill,g_faces,q_auto/https://www.gcu.edu/sites/default/files/2022-09/GettyImages-1352017390.jpg" alt="" class="rounded-t-lg w-full" />
  <div class="p-6">
    <a href="/blog" class="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">This is Amazing for people to visit.</a>
  <p class="text-gray-700 my-2 hover-text-900 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quis.</p>
  </div>
    </div>
  <div class="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300">
    <img src="https://149913238.v2.pressablecdn.com/wp-content/uploads/2020/04/organizational-psychologist-meeting-with-workers-in-workplace-750x350-1.jpg" alt="" class="rounded-t-lg w-full" />
  <div class="p-6">
    <a href="/blog" class="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">This is Amazing for people to visit.</a>
  <p class="text-gray-700 my-2 hover-text-900 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quis.</p>
  </div>
    </div>
    </div>
</div>
  )
>>>>>>> Stashed changes
}
export default Blog;
