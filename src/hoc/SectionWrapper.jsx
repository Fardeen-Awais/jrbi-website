// Yay section wrapper say sai har section mai animation add hui hai aur section ki width define hui hai 
import { motion } from "framer-motion";
import { styles } from "@/styles/styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding}  mx-auto relative z-0 min-h-screen bg-white-100 dark:bg-black-100 dark:text-white`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
