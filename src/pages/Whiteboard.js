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
      const waveAnimation = {
        rotate: [0, -20, 20, -20, 0],
        transition: { duration: 2, repeat: Infinity },
      };

  return (
    <div>
            <motion.h1 variants={containerText} className='xl:text-9xl lg:text-8xl md:text-8xl sm:text-7xl text-6xl font-bold text-wrap break-words'>
              <motion.span variants={imageUp}>I</motion.span>
              <motion.span variants={imageUp}>'</motion.span>
              <motion.span variants={imageUp}>m</motion.span>
              <motion.span variants={imageUp}> </motion.span>
              <motion.span variants={imageUp} className='text-green-400'>S</motion.span>
              <motion.span variants={imageUp}>t</motion.span>
              <motion.span variants={textUp}>e</motion.span>
              <motion.span variants={textUp}>p</motion.span>
              <motion.span variants={textUp}>h</motion.span>
              <motion.span variants={textUp}>e</motion.span>
              <motion.span variants={textUp}>n</motion.span>
              <motion.span> </motion.span>
              <motion.span variants={textUp} className='text-green-400'>N</motion.span>
              <motion.span variants={textUp}>i</motion.span>
            </motion.h1>
    </div>
  )
}

export default Whiteboard