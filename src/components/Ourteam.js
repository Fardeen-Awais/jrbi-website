import React from 'react'
import { motion } from 'framer-motion'
import { zoomIn } from '@/utils/motion';
import StarWrapper from '@/hoc/SectionWrapper'
import { fadeIn } from '@/utils/motion';
function Ourteam() {
  return (
    <motion.div
    variants ={zoomIn(0.5,0.3)}
    className='bg-pink-400'
    >
        hello Ourteam 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consequuntur dolores sit, eveniet quidem inventore mollitia consequatur rem numquam vitae tempore odio quos hic modi necessitatibus facilis eius ipsa aut vel. Quos adipisci reiciendis incidunt architecto accusantium deserunt, asperiores beatae, quasi nesciunt dolorem voluptatem, error cumque porro quaerat eveniet natus vitae odio voluptate corrupti libero consectetur voluptatum officia! Fuga earum fugit, sapiente reiciendis laboriosam beatae laborum delectus asperiores, qui libero veniam voluptates dolorem! Dolor voluptatibus placeat accusantium, laboriosam odio tempore quis eveniet maiores cum facere! Optio similique minus error necessitatibus!
    </motion.div>
  );
}


export default Ourteam