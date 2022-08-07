import React from 'react'
import { motion } from 'framer-motion'

const Hobby = ({ title, description, image }) => {
  return (
    <motion.div className='flex flex-col justify-center items-center rounded-xl w-2/5 h-96 m-10 mr-12 bg-gradient-to-r from-blue-400/[0.5] to-purple-400/[0.5]'
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}>
        <div className='flex h-full w-full'>
          <img src={image} className='h-full w-1/2 object-cover rounded-l-xl'/>
          <div className='h-full w-1/2 flex flex-col mt-10 items-center'>
            <h1 className='m-0 mb-3 mx-8'>{title}</h1>
            <h3 className='m-0 mx-8'>{description}</h3>
          </div>
        </div>
    </motion.div>
  )
}

export default Hobby