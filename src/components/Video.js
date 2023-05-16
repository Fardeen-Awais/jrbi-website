import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
function Video({ youtube }) {
  return (
    <>
      <div className="min-h-screen py-10 max-w-6xl mx-auto p-3">
        <div className="flex flex-col justify-center items-center my-10 ">
          <h2 className=" border-2 border-gray-600 p-2 ">Our Videos</h2>
          <p className="py-4 text-xl">Let's see some videos 📽</p>
        </div>
        <motion.div
          variants={fadeIn("right", "spring", 0.8, 0.5)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6  md:p-6 py-10 mx-auto"
        >
          {youtube.map((Youtube) => (
            <div key={Youtube._key}>
              <iframe
                className="w-full h-96 md:h-64 lg:h-80 object-cover object-center"
                src={`https://www.youtube.com/embed/${Youtube.url}`}
                title={Youtube.title}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default Video;
