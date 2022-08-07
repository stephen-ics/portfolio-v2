import React from 'react'
import './page-styles/About.css'
import { motion } from 'framer-motion'
import Art from '../pictures/hobbies/Art.jpeg'
import Math from '../pictures/hobbies/Math.jpeg'
import Piano from '../pictures/hobbies/Piano.webp'
import Running from '../pictures/hobbies/Running.webp'
import Hobby from '../components/Hobby'


const About = () => {
  return (
    <motion.div className='flex flex-col justify-center items-center w-full h-full mt-10'
      initial={{opacity:0}}
      animate={{opacity:1, transition: {duration:0.5}}}
      exit={{opacity:0, transition: {duration:0.25}}}
    >
      <div className='flex flex-col items-center text-slate-700 w-full'>
        <h1>Hello! I'm Stephen</h1>
        <h2 className='font-normal'>I'm a high school student at John Fraser Secondary School and an aspiring full-stack developer</h2>
        <h2 className='mb-20 font-normal'>I have experience with front end web development including blah blah blah</h2>
        
        <div className='flex flex-col ml-24 w-full'>
          <h2 className='text-4xl text-center'>Hobbies</h2>
          <div className='flex w-full flex-wrap'>
            <Hobby title='Math' description='I like math haha I like math haha I like math haha I like math haha I like math haha I like math haha' image={Math}/>
            <Hobby title='Piano' description='I like piano' image={Piano}/>
            <Hobby title='Art' description='I like art' image={Art}/>
            <Hobby title='Running' description='I like running' image={Running}/>
          </div>
        </div>

 
      </div>


    </motion.div>
    
  )
}

export default About