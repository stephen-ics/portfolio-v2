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


  const dropInLeft ={
    hidden: {
        x: '100vh',
        opacity: 0,
    },
    visible: { 
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.1,
            type: 'spring',
            delay: 0.5,
            damping: 25,
            stiffness: 200,
        }
    },
    exit: {
        y: '100vh',
        opacity: 0,
    },
  };

  return (
    <motion.div 
      className='h-full text-slate-700 flex flex-col mt-24 w-full'
      initial={{opacity:0}}
      animate={{opacity:1, transition: {duration:0.5}}}
      exit={{opacity:0, transition: {duration:0.25}}}
    >
      <motion.div className='flex justify-center'>
        <motion.div className='flex flex-col justify-around'>
          <h2 className='text-4xl'>Hello!</h2>
          <h1 className='text-8xl font-bold'>I'm Stephen Ni</h1>
          <h2 className='text-3xl mb-8'>Aspiring Full-Stack Developer</h2>
          <div className='flex'>
            <Link to='/experiences'>
              <motion.button className="button"
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}>
                  Experiences
              </motion.button>
            </Link>
            <Link to='projects'>
                <motion.button className="button"
                  whileHover={{scale:1.1}}
                  whileTap={{scale:0.9}}>
                    Projects
                </motion.button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}>     
            <img src={Logo} className='w-96 ml-40 rounded-full object-cover border-green-500 border-solid border-3'/>
        </motion.div>
      </motion.div>
      

    </motion.div>
  )
}