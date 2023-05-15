import React from "react";
import StarWrapper from "@/hoc/SectionWrapper";
import { motion } from "framer-motion";
import Room from "./Doctors_room";

function Hero() {
  return (
    <div className="flex flex-col">
      <div className="relative py-5">
        <motion.div
          initial={{ width: "50%" }}
          whileInView={{ width: "1%" }}
          transition={{ duration: 1 }}
          className="absolute z-10 top-0 left-0 bg-black dark:bg-white-100 "
        />
        <h1 className="font-anton text-7xl md:text-8xl">
          MAKE YOU HEALTH BETTER <br /> WILL MAKE US BETTER
        </h1>
        <motion.div />
      </div>
      <Room />
    </div>
  );
}

export default StarWrapper(Hero, "hero");
