import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../pictures/Logo.png'
import './component-styles/Navbar.css'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react';
import { GoThreeBars } from "react-icons/go"

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
  const [showDropdown, setShowDropdown] = useState(false);
  const { pathname } = useLocation();

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

  const links = [
    {
        name: "Home",
        link: "/",
        id: "home",
        priority: false
    },
    {
        name: "About",
        link: "/about",
        id: "calendar",
        priority: false
    },
    {
        name: "Experiences",
        link: "/experiences",
        id: "track",
        priority: false
    },
    {
        name: "Projects",
        link: "/projects",
        id: "leaderboard",
        priority: false
    },
    {
      name: "Whiteboard",
      link: "/whiteboard",
      id: "leaderbord",
      priority: false
    }
]

    return (
      <div className='flex justify-center mb-40'>
        <motion.header
          variants={dropIn}
          initial='hidden'
          animate='visible'
          exit='exit'
          className={`navbar justify-center z-[99999999] min-h-[7vh] py-2 lg:py-4 shadow-xl fixed w-full top-0 ${fillNavbar ? 'fill' : ''}`}
        >
          <div className="px-4 mx-auto lg:flex lg:items-center m-30">
            <div className="flex justify-between items-center">
              <Link to='/'>
                <img src={Logo} className='w-12 rounded-full'/>
              </Link>
    
              <button
                className="border border-solid border-gray-200 px-3 py-1 rounded text-gray-200 bg-black opacity-50 hover:opacity-75 lg:hidden cursor-pointer"
                aria-label="Menu"
                data-test-id="navbar-menu"
                onClick={
                  () => {
                      setShowDropdown(!showDropdown);
                  }}
              >
                <GoThreeBars size={20}/>
              </button>
            </div>
         
            <div className={`${showDropdown ? "flex" : "hidden"} flex-col lg:flex  lg:flex-row lg:ml-auto mt-3 lg:mt-0`} data-test-id="navbar">
              <div>
                {links.map(({ name, link, priority, id }) => 
                  <Link key={name}  to={link} className='text-xl hover:bg-gray-200/25 hover:bg-opacity-10 hover:bg-black p-2 lg:px-4 lg:mx-2 rounded duration-300 transition-colors'>
                      {name}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </motion.header>
      </div>
    );
  }

  export default Navbar