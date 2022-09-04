import React from 'react'
import './page-styles/About.css'
import { motion } from 'framer-motion'
import Art from '../pictures/hobbies/Art.jpeg'
import Math from '../pictures/hobbies/Math.jpeg'
import Piano from '../pictures/hobbies/Piano.webp'
import Running from '../pictures/hobbies/Running.webp'
import Hobby from '../components/Hobby'


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
  return (
    <motion.div className='flex flex-col justify-center items-center mt-10'
      variants={container}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <div className='flex flex-col items-center text-slate-700 w-full'>
        <h1>Hello! I'm Stephen</h1>
        <h2 className='font-normal'>I'm a high school student at John Fraser Secondary School and an aspiring full-stack developer</h2>
        <h2 className='mb-20 font-normal'>I have experience with front end web development including blah blah blah</h2>

        <div className='my-10'>
          <div>
            sdasd
          </div>
        </div>
        
        <div>
          <h2 className='text-4xl text-center'>Hobbies</h2>
          <div className='flex flex-wrap items-center justify-center'>
            <Hobby title='Math' description='I like math haha I like math haha I like math haha I like math haha I like math haha I like math haha' image={Math}/>
            <Hobby title='Piano' description='I like piano' image={Piano}/>
            <Hobby title='Art' description='I like art' image={Art}/>
            <Hobby title='Violin' description='I like VIolining' image={Running}/>
          </div>
        </div>

 
      </div>


    </motion.div>
    
  )
}

export default About