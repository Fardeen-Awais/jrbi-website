import React from 'react'
import Link from "next/link";
import Image from 'next/image';

function Assesment({asses}) {
  console.log(asses)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 m-7 md:p-6 ">
           {asses.map((assessment) => (
          <Link href={'quiz/abd'}>
        <div className="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-md hover:shadow-sm sm:p-6 lg:p-8 cursor-pointer">
          <div className="pt-4 text-gray-500">
            <svg
              className="h-8 w-8 sm:h-10 sm:w-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              ></path>
            </svg>

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
              {assessment.title}
            </h3>

            <p className="mt-2 hidden text-sm sm:block line-clamp-3">
              {assessment.description}
            </p>
          </div>

          <span
            className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600"
          >
            4.3
          </span>
        </div>
        </Link>
      ))}
    </div>
  )
}
export default Assesment