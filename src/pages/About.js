import React from 'react'
import './page-styles/About.css'
import { motion } from 'framer-motion'


const About = () => {
  return (
    <motion.div className='flex items-center w-full h-full mt-10 ml-20'
      initial={{opacity:0}}
      animate={{opacity:1, transition: {duration:0.5}}}
      exit={{opacity:0, transition: {duration:0.25}}}
    >
      <div className='flex flex-col'>
        <h1>About Me!</h1>
        <h2>Skills</h2>
        <djv className='flex'>
          <img />
          <div>
            <h1>School</h1>
            <h3>Expected graduation</h3>
          </div>
        </djv>
        <h1>Experience</h1>
        <h2>Clubs</h2>
        <h1>Volunteering</h1>
        <h1>Awards</h1>
      </div>
    </motion.div>
    
  )
}

export default About