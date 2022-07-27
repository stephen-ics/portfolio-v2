import React from 'react'
import { motion } from 'framer-motion'

const ProjectSection = ({ whileHover, whileTap, className, onClick, title, image }) => {
  return (

    <motion.button
        whileHover={whileHover}
        whileTap={whileTap}
        className={className}
        onClick={onClick}
    > 
    
      <div className='flex flex-col items-center w-80'>
        <img src={image} className='w-full object-cover h-60 rounded-t-2xl'></img>
        <h1 className='mt-4 text-2xl'>{title}</h1>
        <h2 className='text-lg'>Subtitle</h2>
      </div>
      <div className='flex justify-center'>
          <a>
            <div className='w-12 bg-black rounded-l m-5'>
              <img src={image} className='w-8 rounded-full'/>
            </div>
          </a>
          <a>
            <div className='w-12 bg-black rounded-l m-5'>
              <img src={image} className='w-8 rounded-full'/>
            </div>
          </a>
      </div>
    </motion.button>
  )
}

export default ProjectSection