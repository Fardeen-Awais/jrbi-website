import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeAnimation } from "@/utils/motion";
function Assesment({ asses }) {
  return (
    <div className="min-h-screen py-10 mx-auto ">
      <div className="flex flex-col justify-center items-center my-10 ">
        <h2 className=" border-2 border-gray-600 p-2 ">Assessments</h2>
        <p className="p-4 max-w-sm text-gray-700 dark:text-gray-300 text-md text-center">
          Please follow the instructions from the researcher of this study
        </p>
      </div>
      <motion.div
        variants={fadeAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 m-7 md:p-6 py-10 "
      >
        {asses.map((assessment) => (
          <Link href={"/quiz/" + assessment.slug.current} key={assessment.slug}>
            <div className="relative flex items-center justify-between rounded-xl border border-gray-100 p-4 shadow-md hover:shadow-sm sm:p-6 lg:p-8 cursor-pointer bg-white max-w-sm">
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
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
export default Assesment;
