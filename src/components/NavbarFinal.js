import Navbar from './Navbar'
import NavItems from './NavItems'
import { Link } from 'react-router-dom'
import DropdownMenu from './DropdownMenu';
import { FaCog } from 'react-icons/fa'
import React from 'react'
import { motion } from 'framer-motion'

const dropIn ={
  hidden: {
      y: '-100vh',
      opacity: 0,
  },
  visible: { 
      y:'0',
      opacity: 1,
      transition: {
          duration: 0.1,
          type: 'spring',
          damping: 25,
          stiffness: 200,
      }
  },
  exit: {
      y: '100vh',
      opacity: 0,
  },
};

const NavbarFinal = () => {
  return (
    <motion.div
    onClick={(e) => e.stopPropagation()}
    variants={dropIn}
    initial='hidden'
    animate='visible'
    exit='exit'>

    <Navbar>
        <NavItems icon={<FaCog></FaCog>}>
            <DropdownMenu></DropdownMenu>
        </NavItems>
    </Navbar>

    </motion.div>
  )
}

export default NavbarFinal