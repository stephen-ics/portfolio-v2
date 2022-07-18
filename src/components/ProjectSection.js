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
    
      <div className='flex items-center'>
        <img src={image} className='w-20 h-20 rounded-full'></img>
        <h1 className='ml-10'>{title}</h1>
      </div>
      <div className='flex flex-col'>
          <a><img src={image} className='w-8 rounded-full my-1'/></a>
          <a><img src={image} className='w-8 rounded-full my-1'/></a>
      </div>
     
    </motion.button>
  )
}

export default ProjectSection