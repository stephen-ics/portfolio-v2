import React from 'react'
import Cardflip from '../components/Cardflip'
import { motion } from 'framer-motion'
import ProgressCircle from '../components/ProgressCircle'
import Progress from '../components/Progress'
import { Line, Circle } from 'rc-progress';
import HomeProjects from '../components/HomeProjects'
import Logo from '../pictures/Logo.png'
import './page-styles/Whiteboard.css'
import { GoThreeBars } from 'react-icons/go'

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
      <div className=''>
        <GoThreeBars /> 
        <div className='box bg-black'>
          

        </div>
        <div className=''>

        </div>
      </div>
    </motion.div>
  )
}

export default Whiteboard