import React from 'react'
import './page-styles/About.css'
import { motion } from 'framer-motion'
import Art from '../pictures/hobbies/Art.jpeg'
import Math from '../pictures/hobbies/Math.jpeg'
import Piano from '../pictures/hobbies/Piano.webp'
import Running from '../pictures/hobbies/Running.webp'
import Hobby from '../components/Hobby'
import Cardflip from '../components/Cardflip'
import Logo from '../pictures/Logo.png'


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
            delay: 1,
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
        x: '-5vh',
        opacity: 0,
    },
    visible: { 
        x: 0,
        opacity: 1,
        transition: {
            delay: 1.6,
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
    <motion.div className='flex flex-col mt-10'
      variants={container}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <div className='flex flex-col text-slate-900 w-full items-start ml-60'>
        <div className='flex mt-16 items-center'>
          <motion.img variants={imageLeft} src={Logo} className='w-60 rounded-xl object-cover'/>
          <div className='ml-16'>
            <motion.h1 variants={textUp} className=''>Hello! I'm Stephen</motion.h1>
            <motion.h2 variants={textUp2} className='font-normal'>I'm a high school student at John Fraser Secondary School and an aspiring full-stack developer</motion.h2>
            <motion.h2 variants={textUp2} className='mb-20 font-normal'>I have experience with front end web development including blah blah blah</motion.h2>
          </div>
        </div>
        
        <div className='mt-6'>
          <motion.h2 variants={textUp3} className='text-4xl mt-12'>Hobbies</motion.h2>
          <motion.div className='flex flex-wrap mb-20'>
            <motion.div variants={imageUp}>
              <Cardflip title='Math' subtitle='I do Math' description="Math has always been an inescapable part of my childhood, but overtime I've grown to love it!" image={Math}/>
            </motion.div>
            <motion.div variants={imageDown}>
              <Cardflip title='Piano' subtitle='I play the piano' description="I've been playing the piano for 3 years, I am currently level 10! I love to play music, especially anime openings" image={Piano}/>
            </motion.div>
            <motion.div variants={imageUp}>
              <Cardflip title='Art' subtitle='I enjoy drawing' description="I've been drawing ever since I was in elementary school, I havn't grown out of stick figures yet but my love for art still burns!" image={Art}/>
            </motion.div>
            <motion.div variants={imageDown}>
              <Cardflip title='Running' subtitle='I love Run' description="Though I am not the most athletic, I've always been good at running! Whether it's cross country or track and field, it feels great after a good run" image={Running}/>
            </motion.div>
          </motion.div>
        </div>
        <div>
          <h2 className='text-4xl'>Principals</h2>
          <div className='flex flex-wrap mb-20'>
            <Cardflip title='Math' description='I like math haha I like math haha I like math haha I like math haha I like math haha I like math haha' image={Math}/>
            <Cardflip title='Piano' description='I like piano' image={Piano}/>
          </div>
        </div>

 
      </div>


    </motion.div>
    
  )
}

export default About