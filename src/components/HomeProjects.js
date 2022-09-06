import React from 'react'
import '../components/component-styles/HomeProjects.css';
import Logo from '../pictures/Logo.png'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const HomeProjects = () => {
    const [hover, setHover] = useState(false);

    const handleHover = () => {
        setHover(!hover)
        console.log(!hover)
        
    }

  return (
    <motion.div className='project-container bg-blue-100 bg-cover bg-center bg-no-repeat text-9xl font-bold text-slate-900' style={{backgroundImage: `url(${Logo})`}}
    whileHover={{scale:1.025}}
    whileTap={{scale:0.975}}
    onHoverStart={handleHover}
    onHoverEnd={handleHover}>
        <motion.div className={hover ? "project hovering p-10 bg-white/[0.5]": "project nothovering p-10 bg-white/[0.5]"}>
            <h1 className='titleee'>Hey</h1>
            <h2 className='subtitle'>Hello</h2>
    
           
        </motion.div>

    </motion.div>
  )
}

export default HomeProjects