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
          <DisplayModal title='CodeBro' subtitle='July 2022' description='CodeBro is an offline programming suite that allows users to practice both their web design and competitive problem-solving skills.' image={CodeBro} github='https:google.com' devpost='https://google.com'></DisplayModal>
          <DisplayModal title='Concerto' subtitle='July 2022' description='Concerto aims to destress the high stress concert buying experience ticket minimize reselling through a standard auctioning system!' image={Concerto}></DisplayModal>
          <DisplayModal title='DeSsert' subtitle='June 2022' description='DeSsert is a decentralized recipe sharing site that allow users to browse through traditional to exotic recipes from cultures all over the world.' image={DeSsert}></DisplayModal>
          <DisplayModal title='CloseConnect' subtitle='June 2022' description='CloseConnect pairs you with people who live all over the world. This allows for people to tread out of their region and meet others who live in different worlds and to celebrate their different cultures and backgrounds.' image={CloseConnect}></DisplayModal>
          <DisplayModal title='Tokens For Good' subtitle='June 2022' description='Our project gives people who donate to charity an NFT. This gives people the novelty of possessing limited-time collectables and a sense of pride knowing they supported a good cause, increasing the incentive to donate.' image={TokensForGood}></DisplayModal>
          <DisplayModal title='BitBots' subtitle='January 2022' description='Bitbots is a program that uses computer vision and artificial intelligence to convert ASL signs into English text or audio, and vice versa. It takes input from a user who finger-spells letters, and the phrase is then interpreted into text or audio.' image={BitBots}></DisplayModal>
      </div>
    </div>
      
  )
}

export default Projects