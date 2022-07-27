import React from 'react'
import { motion } from 'framer-motion'

const Hobby = ({ title, description }) => {
  return (
    <motion.div className='flex flex-col text-slate-800 justify-center items-center rounded-xl w-60 h-60 bg-white mr-12 bg-gradient-to-r from-blue-400 to-purple-400'
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}>
        <h1 className='m-0 mb-3'>{title}</h1>
        <h3 className='m-0'>{description}</h3>
    </motion.div>
  )
}

export default Hobby