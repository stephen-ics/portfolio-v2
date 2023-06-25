import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../pictures/Logo.png'
import './component-styles/Navbar.css'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react';

function Navbar() {
  const dropIn ={
    hidden: {
        y: '-10vh',
        opacity: 0,
    },
    visible: { 
        y:'0',
        opacity: 1,
        transition: {
            type: 'spring',
            damping: 8,
            stiffness: 30,
        }
    },
    exit: {
        y: '10vh',
        opacity: 0,
    },
  };
  const [fillNavbar, setFillNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 100;
      if (window.scrollY > threshold) {
        setFillNavbar(true)
      }
      else {
        setFillNavbar(false)
      }
    }

    window.addEventListener('scroll', handleScroll);
  
  }, [fillNavbar])
    return (
      <div className='flex justify-center mb-40'>
        <motion.nav
          variants={dropIn}
          initial='hidden'
          animate='visible'
          exit='exit'
          className={`navbar ${fillNavbar ? 'fill' : ''}`}
        >
            <ul><Link to='/' className='flex items-center'><img src={Logo} className='w-12 rounded-full'/></Link></ul>
            <ul className='text-white flex w-full justify-center text-xl'>
              <li className='nav-list'>
                <Link to='/'>Home</Link>
              </li>
              <li className='nav-list'>
                <Link to='/about'>About</Link>
              </li>
              <li className='nav-list'>
                <Link to='/experiences'>Experience</Link>
              </li>
              <li className='nav-list'>
                <Link to='/projects'>Projects</Link>
              </li>
              <li className='nav-list'>
                <Link to='/whiteboard'>Whiteboard</Link>
              </li>
            </ul>
        </motion.nav>
      </div>
    );
  }

  export default Navbar