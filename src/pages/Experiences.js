import React from 'react'
import { motion } from 'framer-motion'
import Timeline from '../components/Timeline'
import './page-styles/Experiences.css'

const Experience = () => {
  const container = {
    hidden: {
      y: '10vh',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.35,
        duration: 0.5,
      },
    },
    exit: {
        y: '-10vh',
        opacity: 0,
        transition: {
          duration: 0.25,
        }
    },
  };

  return (
    <motion.div 
    className='mt-10 flex flex-col text-center justify-center text-slate-900'
    variants={container}
    initial='hidden'
    animate='visible'
    exit='exit'
  >
    <Timeline/>
  </motion.div>
  )
}

export default Experience