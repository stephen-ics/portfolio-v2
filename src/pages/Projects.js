import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import Modal from '../components/Modal';
import './page-styles/Projects.css'

import BitBots from '../pictures/projects/BitBots.png'
import TokensForGood from '../pictures/projects/TokensForGood.png'
import CloseConnect from '../pictures/projects/CloseConnect.png'
import DeSsert from '../pictures/projects/Dessert.png'
import Concerto from '../pictures/projects/Concerto.png'
import CodeBro from '../pictures/projects/CodeBro.png'

import ProjectSection from '../components/Modal';
import DisplayModal from '../components/DisplayModal'

const Projects = () => {

    
  return (
    <div className='flex flex-col items-center text-slate-700'>
      <h1 className='text-5xl mt-10'>Projects</h1>
      <div className='flex flex-wrap'>
          <DisplayModal title='Project 1' subtitle='date' description='this is the description!' image={CodeBro}></DisplayModal>
          <DisplayModal title='Project 2' subtitle='date' description='this is the description!' image={Concerto}></DisplayModal>
          <DisplayModal title='Project 3' subtitle='date' description='this is the description!' image={DeSsert}></DisplayModal>
          <DisplayModal title='Project 3' subtitle='date' description='this is the description!' image={CloseConnect}></DisplayModal>
          <DisplayModal title='Project 3' subtitle='date' description='this is the description!' image={TokensForGood}></DisplayModal>
          <DisplayModal title='Project 4' subtitle='date' description='this is the description!' image={BitBots}></DisplayModal>
      </div>
    </div>
      
  )
}

export default Projects