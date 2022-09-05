import React from 'react'
import './page-styles/About.css'
import { motion } from 'framer-motion'
import Art from '../pictures/hobbies/Art.jpeg'
import Math from '../pictures/hobbies/Math.jpeg'
import Piano from '../pictures/hobbies/Piano.webp'
import Running from '../pictures/hobbies/Running.webp'
import Hobby from '../components/Hobby'
import Cardflip from '../components/Cardflip'


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
      <div className='flex flex-col items-center text-slate-900 w-full'>
        <h1>Hello! I'm Stephen</h1>
        <h2 className='font-normal'>I'm a high school student at John Fraser Secondary School and an aspiring full-stack developer</h2>
        <h2 className='mb-20 font-normal'>I have experience with front end web development including blah blah blah</h2>

        <div className='my-10'>
          <div>
            sdasd
          </div>
        </div>
        
        <div>
          <h2 className='text-4xl'>Hobbies</h2>
          <div className='flex flex-wrap items-center justify-between mb-20'>
            <Cardflip title='Math' subtitle='I do Math' description="Math has always been an inescapable part of my childhood, but overtime I've grown to love it!" image={Math}/>
            <Cardflip title='Piano' subtitle='I play the piano' description="I've been playing the piano for 3 years, I am currently level 10! I love to play music, especially anime openings" image={Piano}/>
            <Cardflip title='Art' subtitle='I enjoy drawing' description="I've been drawing ever since I was in elementary school, I havn't grown out of stick figures yet but my love for art still burns!" image={Art}/>
            <Cardflip title='Running' subtitle='I love Run' description="Though I am not the most athletic, I've always been good at running! Whether it's cross country or track and field, it feels great after a good run" image={Running}/>
          </div>
        </div>
        <div>
          <h2 className='text-4xl'>Hobbies</h2>
          <div className='flex flex-wrap items-center justify-between mb-20'>
            <Cardflip title='Math' description='I like math haha I like math haha I like math haha I like math haha I like math haha I like math haha' image={Math}/>
            <Cardflip title='Piano' description='I like piano' image={Piano}/>
          </div>
        </div>

 
      </div>


    </motion.div>
    
  )
}

export default About