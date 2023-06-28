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
      const waveAnimation = {
        rotate: [0, -20, 20, -20, 0],
        transition: { duration: 2, repeat: Infinity },
      };

  return (
    <motion.span className='wave-hand' animate={waveAnimation} role="img" aria-label="wave-hand">
    👋
  </motion.span>
  )
}

export default Whiteboard