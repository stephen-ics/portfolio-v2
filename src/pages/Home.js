import { Link } from 'react-router-dom'
import './page-styles/Home.css'
import Logo from '../pictures/Logo.png'
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer'


export default function Home() {

  const {ref, inView} = useInView();

  useEffect(() => {
    console.log()
  })


  const container = {
    hidden: {
  
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

  const textUp = {
    hidden: {
        y: '5vh',
        x: '-5vh',
        opacity: 0,
    },
    visible: { 
        y: 0,
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

  const buttonLeft = {
    hidden: {
        x: '-10vh',
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

  const buttonRight = {
    hidden: {
        x: '10vh',
        opacity: 0,
    },
    visible: { 
        x: 0,
        opacity: 1,
        transition: {
            staggerChildren: 0.35,
            duration: 2,
            ease: [0.6, 0.01, -0.05, 0.95],
        }
    },
    exit: {
        opacity: 0,
    },
  };

  const imageRight = {
    hidden: {
        x: '20vh',
        opacity: 0,
    },
    visible: { 
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: [0.6, 0.01, -0.05, 0.95],
        }
    },
    exit: {
        opacity: 0,
    },
  };

  return (
    <motion.div 
      className='h-full text-slate-700 flex flex-col mt-24 w-full'
      variants={container}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <motion.div className='flex justify-center'>
        <motion.div className='flex flex-col justify-around'>
          <motion.div
            variants={textUp}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <h2 className='text-6xl'>Hello!</h2>
            <h1 className='text-9xl font-bold'>I'm Stephen Ni</h1>
  
            <h2 className='text-3xl mb-8 mt-8'>Aspiring Full-Stack Developer</h2>
          </motion.div>
          <div className='flex'>
            <Link to='/experiences'>
              <motion.button className="button"
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                variants={buttonLeft}
                initial='hidden'
                animate='visible'
                exit='exit'>
                  Experiences
              </motion.button>
            </Link>
            <Link to='projects'>
                <motion.button 
                  className="button"
                  whileHover={{scale:1.1}}
                  whileTap={{scale:0.9}}
                  variants={buttonRight}
                  initial='hidden'
                  animate='visible'
                  exit='exit'>
                    Projects
                </motion.button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          variants={imageRight}
          initial='hidden'
          animate='visible'
          exit='exit'>     
            <img src={Logo} className='w-96 ml-40 rounded-full object-cover border-green-500 border-solid border-3'/>
        </motion.div>
      </motion.div>
      

    </motion.div>
  )
}