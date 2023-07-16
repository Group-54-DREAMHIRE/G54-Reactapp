import { Col, Layout, Row } from 'antd';
import { motion } from 'framer-motion';
import { pageanimation } from '../assets/animations/pageanimation';
function Quizes() {
  return (
    <>
      <motion.div variants={pageanimation}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{duration:0.6}}>
       <h1>This is quizes</h1>
     </motion.div>
    </>
  )
}

export default Quizes
