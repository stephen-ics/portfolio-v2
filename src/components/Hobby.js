import React from 'react'
import { motion } from 'framer-motion'

const Hobby = ({ title, description }) => {
  return (
    <motion.div className='flex justify-center items-center rounded-xl w-60 h-60 bg-white mx-10 bg-gradient-to-r from-blue-400 to-purple-400'
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}>
        <h1>{title}</h1>
        <h3>{description}</h3>
    </motion.div>
  )
}

export default Hobby