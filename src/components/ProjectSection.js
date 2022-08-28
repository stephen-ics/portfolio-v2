import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { SiDevpost } from 'react-icons/si'

const ProjectSection = ({ whileHover, whileTap, className, onClick, title, subtitle, image, devpost, github }) => {
  return (

    <motion.button
        whileHover={whileHover}
        whileTap={whileTap}
        className={className}
        onClick={onClick}
    > 
    
      <div className='flex flex-col items-center w-full h-full'>
        <img src={image} className='w-full h-full object-cover rounded-t-2xl'></img>
        <h1 className='mt-4 text-4xl'>{title}</h1>
        <h2 className='text-2xl'>{subtitle}</h2>
      </div>
      <div className='flex justify-evenly mb-3 mt-3'>
          <div className='flex justify-between items-center bg-blue-600 px-2 py-1 rounded-xl'>
            <p className='text-lg mr-4'>Devpost</p>
            <a href='https://google.com' target='_blank'><SiDevpost size={30} color='rgb(12,56,145)'/></a>
          </div>
          
          <div className='flex justify-between items-center bg-slate-800 px-2 py-1 rounded-xl'>
            <p className='text-lg mr-4'>Github</p>
            <a href='https://google.com' target='_blank'><FaGithub size={40}/></a>
          </div> 
      </div>
    </motion.button>
  )
}

export default ProjectSection