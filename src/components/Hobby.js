import React from 'react'
import { motion } from 'framer-motion'
import ReactCardFlip from 'react-card-flip';

const Hobby = ({ title, description, image }) => {
  return (
    <div>

      <motion.div className='flex flex-col justify-center items-center rounded-xl w-128 h-128 object-cover m-10 mr-12 bg-gradient-to-r from-blue-400/[0.5] to-purple-400/[0.5]'
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}>
          <div className='flex flex-col h-full w-full'>
            <img src={image} className='h-1/2 w-full object-cover rounded-t-xl'/>
            <div className='flex flex-col mt-10 items-center'>
              <h1 className='m-0 mb-3 mx-8'>{title}</h1>
              <h3 className='m-0 mx-8'>{description}</h3>
            </div>
          </div>
      </motion.div>
    </div>
  )
}

export default Hobby