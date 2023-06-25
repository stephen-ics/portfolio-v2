import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../pictures/Logo.png'
import './component-styles/Navbar.css'
import { motion } from 'framer-motion'

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
    return (
      <motion.nav
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
        className='navbar'
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
    );
  }

  export default Navbar