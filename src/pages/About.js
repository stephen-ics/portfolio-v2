import React from 'react'
import './page-styles/About.css'
import { motion } from 'framer-motion'
import Art from '../pictures/hobbies/Art.jpeg'
import Math from '../pictures/hobbies/Math.jpeg'
import Piano from '../pictures/hobbies/Piano.webp'
import Running from '../pictures/hobbies/Running.webp'
import Self from '../pictures/Self.jpg'
import Hobby from '../components/Hobby'
import Cardflip from '../components/Cardflip'
import Cardflip2 from '../components/Cardflip2'
import Logo from '../pictures/Logo.png'
import ProgressCircle from '../components/ProgressCircle'
import Progress from '../components/Progress'


const About = () => {
  const container = {
    hidden: {
        y: '10vh',
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

  const textUp = {
    hidden: {
        x: '5vh',
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
        x: '5vh',
        opacity: 0,
    },
    visible: { 
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 2,
            ease: [0.6, 0.01, -0.05, 0.95],
        }
    },
    exit: {
        opacity: 0,
    },
  };


  const textUp3 = {
    hidden: {
        x: '5vh',
        opacity: 0,
    },
    visible: { 
        x: 0,
        opacity: 1,
        transition: {
            delay: 1,
            duration: 2,
            ease: [0.6, 0.01, -0.05, 0.95],
        }
    },
    exit: {
        opacity: 0,
    },
  };

  const textUp4 = {
    hidden: {
        x: '5vh',
        opacity: 0,
    },
    visible: { 
        x: 0,
        opacity: 1,
        transition: {
            delay: 2,
            duration: 2,
            ease: [0.6, 0.01, -0.05, 0.95],
        }
    },
    exit: {
        opacity: 0,
    },
  };

  const imageLeft = {
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

  const progressUp = {
    hidden: {
        y: '10vh',
        opacity: 0,
    },
    visible: { 
        y: 0,
        opacity: 1,
        transition: {
            delay: 1.2,
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
        y: '10vh',
        opacity: 0,
    },
    visible: { 
        y: 0,
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

  const imageDown = {
    hidden: {
        y: '-10vh',
        opacity: 0,
    },
    visible: { 
        y: 0,
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
    <motion.div className='flex justify-center mx-10 w-full'
      variants={container}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <div className='flex flex-col text-slate-900'>
        <div className='flex items-start flex-wrap lg:justify-evenly justify-center'>

          <motion.img variants={imageLeft} src={Self} className='w-96 h-96 rounded-full object-cover border-green-400 border-4 border-solid'/>
        
          <div className='flex flex-col lg:mt-0 mt-10 lg:ml-10'>
            <div className='flex flex-col items-center lg:items-start text-wrap break-words'>
              <motion.h1 variants={textUp} className='text-3xl text-center lg:text-left'>Hello! I'm Stephen 🐢</motion.h1>
              <motion.h3 variants={textUp2} className='text-2xl text-center lg:text-left mt-2 text-green-700'>I'm a full-stack developer studying Systems Design Engineering @ UWaterloo!</motion.h3>
              <motion.h3 variants={textUp3} className='text-xl font-normal text-center lg:text-left mt-2'>I specialize in React, Node.js, Python, and I am familiar with various databases. My enthusiasm stems</motion.h3>
              <motion.h3 variants={textUp3} className='text-xl font-normal text-center lg:text-left'> from my extensive experience in hackathons, thriving in collaborative high-pressure environments. I code</motion.h3>
              <motion.h3 variants={textUp3} className='text-xl font-normal text-center lg:text-left'>to create innovative solutions to everyday problems.</motion.h3>
            </div>
            <motion.div variants={imageUp} className='mt-4'>
              <Progress />
            </motion.div>
          </div>
        </div>  

    

        <div className='mt-10 flex flex-col items-center lg:items-start'>
          <motion.h2 variants={textUp4} className='text-4xl'>Hobbies</motion.h2>
          <motion.div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
            <motion.div variants={imageUp}>
              <Cardflip title='Math' subtitle='I do math' description="Math has always been an inescapable part of my childhood, but overtime I've grown to love it!" image={Math}/>
            </motion.div>
            <motion.div variants={imageDown}>
              <Cardflip title='Piano' subtitle='I play the piano' description="I've been playing the piano for 3 years, I am currently level 10! I love to play music, especially anime openings" image={Piano}/>
            </motion.div>
            <motion.div variants={imageUp}>
              <Cardflip title='Art' subtitle='I draw' description="I've been drawing ever since I was in elementary school, I havn't grown out of stick figures yet but my love for art still burns!" image={Art}/>
            </motion.div>
            <motion.div variants={imageDown}>
              <Cardflip title='Running' subtitle='I run' description="Though I am not the most athletic, I've always been good at running! Whether it's cross country or track and field, it feels great after a good run" image={Running}/>
            </motion.div>
          </motion.div>
        </div>
        <div className='mt-10 flex flex-col items-center lg:items-start'>
          <motion.h2 variants={textUp4} className='text-4xl'>Values</motion.h2>
          <motion.div variants={imageUp} className='grid lg:grid-cols-2 grid-cols-1'>
            <Cardflip2 title='Tenacious' subtitle='Risks are meant to be taken' description='If there is a risk, I will take it. I put my all into every project I start. Whenever I start a project, I always make sure to try a new technology or learn a new skill, so that I am always constantly learning and improving' image={Math}/>
            <Cardflip2 title='Open-minded' subtitle='Mistakes are a blessing' description='There is no success without failure, that is why I appreciate any sort of critism, and I always make sure apply the feedback I receive to make my next project my best project.' image={Piano}/>
          </motion.div>
        </div>
      </div>
    </motion.div>

    
  )
}

export default About