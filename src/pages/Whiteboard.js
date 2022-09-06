import React from 'react'
import Cardflip from '../components/Cardflip'
import { motion } from 'framer-motion'
import ProgressCircle from '../components/ProgressCircle'

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
    <motion.div 
    variants={container}
    initial='hidden'
    animate='visible'
    exit='exit'
    className='flex h-full justify-center items-center absolute w-full'>
        <div className='flex'>
            <div>
                <ProgressCircle percentage={90} />
                <ProgressCircle percentage={60} />
                <ProgressCircle percentage={40} />
                <ProgressCircle percentage={20} />
            </div>
            <div>
                <ProgressCircle percentage={90} />
                <ProgressCircle percentage={60} />     
                <ProgressCircle percentage={90} />
                <ProgressCircle percentage={60} />
            </div>
        </div>

    
        
    
    </motion.div>
  )
}

export default Whiteboard