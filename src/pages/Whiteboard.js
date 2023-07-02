import React from 'react'
import Cardflip from '../components/Cardflip'
import { motion } from 'framer-motion'
import ProgressCircle from '../components/ProgressCircle'
import Progress from '../components/Progress'
import { Line, Circle } from 'rc-progress';
import HomeProjects from '../components/HomeProjects'
import Logo from '../pictures/Logo.png'
import './page-styles/Whiteboard.css'
import { FaGithub } from 'react-icons/fa'
import { SiDevpost } from 'react-icons/si'

const Whiteboard = () => {
  const containerText = {
    hidden: {
  
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
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

  const handAnimation = {
    initial: {
      rotate: 0,
    },
    animate: {
      rotate: [-15, 15, -15, 15, 0],
      transition: {
        duration: 2,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  };

  const iconContainer = {
    hidden: {
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const imageUp = {
    hidden: {
        y: 0,
        opacity: 0,
    },
    visible: { 
        y: '-5vh',
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
    <div>
            <motion.div variants={iconContainer} className='xl:text-9xl lg:text-8xl md:text-8xl sm:text-7xl text-6xl font-bold text-wrap break-words'>
              <motion.span variants={imageUp} className='text-green-400'>T</motion.span>
              <motion.span variants={imageUp}>h</motion.span>
              <motion.span variants={imageUp}>e</motion.span>
              <motion.span variants={imageUp}> </motion.span>
              <motion.span variants={imageUp} className='text-green-400'>G</motion.span>
              <motion.span variants={imageUp}>r</motion.span>
              <motion.span variants={imageUp}>i</motion.span>
              <motion.span variants={imageUp}>n</motion.span>
              <motion.span variants={imageUp}>d</motion.span>
              <motion.span variants={imageUp}> </motion.span>
              <motion.span variants={imageUp} className='text-green-400'>I</motion.span>
              <motion.span variants={imageUp}>s</motion.span>
              <motion.span variants={imageUp}> </motion.span>
              <motion.span variants={imageUp} className='text-green-400'>O</motion.span>
              <motion.span variants={imageUp}>n</motion.span>
            </motion.div>
    </div>
  )
}

export default Whiteboard