import React from 'react'
import { SectionWrapper } from '@/hoc'
import Image from 'next/image'
function About() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
  <Image
      src="/about.jpg"
      alt="About Image"
      width={500}
      height={500}
      className="absolute inset-0 -z-10 h-full bg-right w-full object-cover object-right md:object-center opacity-20"
    />
  <svg viewBox="0 0 1097 845" aria-hidden="true" className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]">
    <path fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)" fill-opacity=".2" d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z" />
    <defs>
      <linearGradient id="10724532-9d81-43d2-bb94-866e98dd6e42" x1="1097.04" x2="-141.165" y1=".22" y2="363.075" gradientUnits="userSpaceOnUse">
        <stop stop-color="#" />
        <stop offset="1" stop-color="#" />
      </linearGradient>
    </defs>
  </svg>
  <svg viewBox="0 0 1097 845" aria-hidden="true" className="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
    <path fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)" fill-opacity=".2" d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z" />
    <defs>
      <linearGradient id="8ddc7edb-8983-4cd7-bccb-79ad21097d70" x1="1097.04" x2="-141.165" y1=".22" y2="363.075" gradientUnits="userSpaceOnUse">
        <stop stop-color="#f3c6c0" />
        <stop offset="1" stop-color="#" />
      </linearGradient>
    </defs>
  </svg>
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-4xl font-anton font-bold tracking-wider text-white sm:text-6xl">About Us</h2>
      <p className="mt-6 text-lg leading-8 text-gray-300">Hey im joyce i'm a psychology professional. In this website you can relieve your bad social Habbits</p>
    </div>
    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
      <div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
        <a href="#">Brief Introduction <span aria-hidden="true">&rarr;</span></a>

        <a href="#">Who can join<span aria-hidden="true">&rarr;</span></a>

        <a href="#">Our values <span aria-hidden="true">&rarr;</span></a>

        <a href="#">Interverstion Plan <span aria-hidden="true">&rarr;</span></a>
      </div>
      <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col-reverse">
          <dt className="text-base leading-7 text-gray-300">Full-time colleagues</dt>
          <dd className="text-2xl font-bold leading-9 tracking-tight text-white">300+</dd>
        </div>

        <div className="flex flex-col-reverse">
          <dt className="text-base leading-7 text-gray-300">Quizz</dt>
          <dd className="text-2xl font-bold leading-9 tracking-tight text-white">100+</dd>
        </div>

        <div className="flex flex-col-reverse">
          <dt className="text-base leading-7 text-gray-300">Modules</dt>
          <dd className="text-2xl font-bold leading-9 tracking-tight text-white">Unlimited</dd>
        </div>
      </dl>
    </div>
  </div>
</div>
  )
}

export default SectionWrapper(About,'about') // Yay section wrapper say sai har section mai animation add hui hai aur section ki width define hui hai 