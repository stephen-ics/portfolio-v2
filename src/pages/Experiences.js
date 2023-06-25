import React from 'react'
import Timeline from '../components/Timeline'
import { motion } from 'framer-motion'


import './page-styles/Experiences.css'

const Experiences = () => {
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
      },
    },
    exit: {
        y: '-20vh',
        opacity: 0,
        transition: {
          duration: 0.25,
        }
    },
  };

  return (
    <motion.div 
      className='flex flex-col text-center justify-center text-slate-900'
      variants={container}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h1 className='text-5xl'>My Timeline</h1>
      <div className='mt-5'>
        <div>
          <h1 className='year'>2022</h1>
          <Timeline/>
        </div>
      </div>
    </motion.div>
  )
}

export default Experiences