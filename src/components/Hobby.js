import React from 'react'
import { motion } from 'framer-motion'

const Hobby = ({ title, description, image }) => {
  return (
    <motion.div className='flex flex-col justify-center items-center rounded-xl w-2/5 h-96 m-10 mr-12 bg-gradient-to-r from-blue-400/[0.5] to-purple-400/[0.5]'
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}>
        <div className='flex h-full'>
          <div className='h-full flex flex-col justify-center'>
            <h1 className='m-0 mb-3'>{title}</h1>
            <h3 className='m-0'>{description}</h3>
          </div>
          <div className='h-full'>
            <img src={image}/>
          </div>
        </div>
    </motion.div>
  )
}

export default Hobby