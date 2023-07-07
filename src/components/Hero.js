import React from "react";
import { motion } from "framer-motion";
import Room from "./Doctors_room";
import Image from "next/image";
import { styles } from "@/styles/styles";
import { SectionWrapper } from "@/hoc";
import Link from "next/link";
function Hero() {
  return (
    <div className="flex flex-col h-screen mx-auto relative  bg-white-100 dark:bg-black-100  px-7 md:px-10  max-w-7xl">
      <div className="relative ">
        <motion.div
          initial={{ width: "50%" }}
          whileInView={{ width: "1%" }}
          transition={{ duration: 1 }}
          className="absolute z-10 top-0 left-0 bg-black dark:bg-white-100 "
        />
        <h1
          className={`${styles.heroHeadText} max-w-2xl `}
        >{`Ignite your health journey by mastering self-efficacy skills for confident decision-making`}</h1>
        <motion.div />
      </div>
      <div className="flex items-center justify-center mx-auto my-10 w-96 h-96">
        <Image
          src="/Heart_Cover.png"
          width={2000}
          height={2000}
          alt="Picture of the author"
        />
      </div>

      <div className="relative bottom-12 md:bottom-0 w-full flex justify-center ">
        <Link href={"#service"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 -960 960 960"
            width="48"
          >
            <path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default SectionWrapper(Hero, "hero");
