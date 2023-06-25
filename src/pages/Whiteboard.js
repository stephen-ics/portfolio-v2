import React from 'react'
import Cardflip from '../components/Cardflip'
import { motion } from 'framer-motion'
import ProgressCircle from '../components/ProgressCircle'
import Progress from '../components/Progress'
import { Line, Circle } from 'rc-progress';
import HomeProjects from '../components/HomeProjects'
import Logo from '../pictures/Logo.png'

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

  return (
    <motion.div className='text-slate-900 mb-10 w-full flex flex-col relative z-0'
    variants={container}
    initial='hidden'
    animate='visible'
    exit='exit'
 
    >
      <div className='relative top-0 z-0'>
        <div className='w-64 h-64 bg-black absolute top-0 z-20'>

        </div>
        <div className='w-64 h-64 bg-blue-500 absolute top-0 z-30'>

        </div>
      </div>
    </motion.div>
  )
}

export default Whiteboard