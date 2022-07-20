import React from 'react'
import './page-styles/About.css'
import { motion } from 'framer-motion'
import Hobby from '../components/Hobby'


const About = () => {
  return (
    <motion.div className='flex items-center w-full h-full mt-10 ml-20'
      initial={{opacity:0}}
      animate={{opacity:1, transition: {duration:0.5}}}
      exit={{opacity:0, transition: {duration:0.25}}}
    >
      <div className='flex flex-col'>
        <h1>Hello! I'm Stephen</h1>
        <h2>I'm a high school student at John Fraser Secondary School and an aspiring full-stack developer</h2>
        <h3>I have experience with front end web development including blah blah blah</h3>
  
          <div className='flex'>
            <Hobby />
            <Hobby />
            <Hobby />
            <Hobby />
          </div>

 
      </div>


    </motion.div>
    
  )
}

export default About