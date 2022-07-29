import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { SiDevpost } from 'react-icons/si'

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
      <div className='flex justify-evenly'>
          <div>
            <a href='https://google.com' target='_blank'><SiDevpost size={40}/></a>
          </div>
          <div>
            <a href='https://google.com' target='_blank'><FaGithub size={40}/></a>
          </div>
      </div>
    </motion.button>
  )
}

export default ProjectSection