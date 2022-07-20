import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import Modal from '../components/Modal';
import './page-styles/Projects.css'

import Logo from '../pictures/Logo.png'

import ProjectSection from '../components/Modal';
import DisplayModal from '../components/DisplayModal'

const Projects = () => {

    
  return (
    <div className='flex flex-col items-center'>
          <h1 className='text-5xl mt-10'>Projects</h1>
          <div className='flex'>
              <DisplayModal title='Project 1' subtitle='date' description='this is the description!' image={Logo}></DisplayModal>
              <DisplayModal title='Project 2' subtitle='date' description='this is the description!' image={Logo}></DisplayModal>
          </div>
          <div className='flex'>
              <DisplayModal title='Project 3' subtitle='date' description='this is the description!' image={Logo}></DisplayModal>
              <DisplayModal title='Project 4' subtitle='date' description='this is the description!' image={Logo}></DisplayModal>
          </div>
        </div>
      
  )
}

export default Projects