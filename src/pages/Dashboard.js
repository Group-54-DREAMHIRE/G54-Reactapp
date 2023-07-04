import { Col, Layout, Row } from 'antd';
import { motion } from 'framer-motion';
import { pageanimation } from '../assets/animations/pageanimation';
function Dashboard() {
  return (
    <>
      <motion.div variants={pageanimation}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{duration:0.6}}>
        <h1>This is Dashboard</h1>
     </motion.div>
    </>
  )
}

export default Dashboard
