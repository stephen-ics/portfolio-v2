import React from 'react'
import Cardflip from '../components/Cardflip'
import { motion } from 'framer-motion'
import ProgressCircle from '../components/ProgressCircle'
import Progress from '../components/Progress'
import { Line, Circle } from 'rc-progress';
import HomeProjects from '../components/HomeProjects'

const Whiteboard = () => {
    const container = {
        hidden: {
      
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            staggerChildren: 1.5,
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
    
      const banner = {
        animate: {
          transition: {
            delayChildren: 0.4,
            staggerChildren: 0.1,
          },
        },
      };
    
      const letterAnimation = {
        initial: {
          y: 400
        },
        animate: {
          y: 0,
          transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
          },
        },
      };
    
      const textUp = {
        hidden: {
            x: '-5vh',
            opacity: 0,
        },
        visible: { 
            x: 0,
            opacity: 1,
            transition: {
                duration: 2,
                ease: [0.6, 0.01, -0.05, 0.95],
            }
        },
        exit: {
            opacity: 0,
        },
      };
      
  return (
    <motion.div className='text-slate-900 mb-10 w-full flex flex-col'
    variants={container}
    initial='hidden'
    animate='visible'
    exit='exit'
 
    >
      <h1 className='text-5xl text-center mt-10 mb-10'>Projects</h1>
      <div className='w-full flex justify-center'>
        <div className='flex flex-col items-start'>
        <HomeProjects />
        <HomeProjects />
        <HomeProjects />
        </div>
      </div>
    </motion.div>
  )
}

export default Whiteboard