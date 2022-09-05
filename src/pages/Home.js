import { Link } from 'react-router-dom'
import './page-styles/Home.css'
import Logo from '../pictures/Logo.png'
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer'
import Typewriter from 'typewriter-effect'
import Cardflip from '../components/Cardflip'


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

  const textUp2 = {
    hidden: {
        x: '-5vh',
        opacity: 0,
    },
    visible: { 
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.75,
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
            delay: 1.5,
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
            delay: 1.5,
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
            delay: 2.5,
            duration: 1,
            ease: [0.6, 0.01, -0.05, 0.95],
            type: "spring",
            stiffness: 200,

        }
    },
    exit: {
        opacity: 0,
    },
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
    ? document.querySelector('body').classList.add('loading')
    : document.querySelector('body').classList.remove('loading');
  }, [loading])

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
          <motion.div>
            <motion.div className='text-6xl font-bold'
              variants={textUp}
            >
              Hello
            </motion.div>
            <motion.div className='text-9xl font-bold'
              variants={textUp2}
            >
              I'm Stephen Ni
            </motion.div>
            <motion.div className='text-3xl mb-8 mt-8'>
              <Typewriter
                options={{
                  strings:[],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(2500)
                    .typeString("Aspiring Full-Stack Developer")
                    .deleteAll()
                    .typeString("Creator, Innovator")
                }}
              />
            </motion.div>
          </motion.div>
          <div className='flex'>
            <Link to='/experiences'>
              <motion.button className="button"
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                variants={buttonLeft}
                >
                  Experiences
              </motion.button>
            </Link>
            <Link to='projects'>
                <motion.button 
                  className="button"
                  whileHover={{scale:1.1}}
                  whileTap={{scale:0.9}}
                  variants={buttonRight}
                  >
                    Projects
                </motion.button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          variants={imageRight}
          >     
            <img src={Logo} className='w-96 ml-40 rounded-full object-cover border-green-500 border-solid border-3'/>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}