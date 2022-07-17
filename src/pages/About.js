import React from 'react'
import './page-styles/About.css'
import { motion } from 'framer-motion'


const About = () => {
  return (
    <motion.div className='flex items-center justify-center w-full h-full absolute'
      initial={{width:0}}
      animate={{width: '100%', transition: {duration:0.5}}}
      exit={{x: window.innerWidth, transition: {duration:0.25}}}
    >
        <h1>About Me!</h1>
       
       

    </motion.div>
    
  )
}

export default About