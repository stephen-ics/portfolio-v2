import React from 'react'
import './page-styles/About.css'
import { motion } from 'framer-motion'


const About = () => {
  return (
    <motion.div className='flex items-center justify-center w-full h-full mt-48'
      initial={{opacity:0}}
      animate={{opacity:1, transition: {duration:1}}}
      exit={{opacity:0, transition: {duration:0}}}
    >
        <h1>About Me!</h1>
    </motion.div>
    
  )
}

export default About