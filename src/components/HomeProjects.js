import React from 'react'
import '../components/component-styles/HomeProjects.css';
import Logo from '../pictures/Logo.png'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const HomeProjects = ( {title, date, subtitle, image, link} ) => {
    const [hover, setHover] = useState(false);

    const handleHover = () => {
        setHover(!hover)
        console.log(!hover)
        
    }

  return (
    <a href={link} target='_blank'>
        <motion.div className='project-container bg-blue-100 bg-cover bg-center bg-no-repeat font-bold text-slate-900' style={{backgroundImage: `url(${image})`}}
        whileHover={{scale:1.025}}
        whileTap={{scale:0.975}}
        onHoverStart={handleHover}
        onHoverEnd={handleHover}>
            
                <motion.div className={hover ? "project hovering p-10 text-center": "project nothovering h-1/2 w-1/5 flex items-center justify-center text-center"}>
                    <div className='flex flex-col'>
                        <h1 className='title'>{title}</h1>
                        <h1 className='date'>{date}</h1>
                        <h2 className='subtitle'>{subtitle}</h2>
                    </div>     
                </motion.div>
        </motion.div>
    </a>
  )
}

export default HomeProjects