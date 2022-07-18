import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import Modal from '../components/Modal';
import './page-styles/Projects.css'

import Logo from '../pictures/Logo.png'

import ProjectSection from '../components/Modal';

const Projects = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);
    
  return (
    <motion.div className='flex justify-center w-full h-full items-center mt-48'
        initial={{opacity:0}}
        animate={{opacity:1, transition: {duration:0.5}}}
        exit={{opacity:0, transition: {duration:0.25}}}
    > 
        <motion.button
        whileHover={{ scale:1.1 }}
        whileTap={{ scale:0.9 }}
        className='button'
        onClick={() => (modalOpen ? close() : open())}
        >
            Launch Model
        </motion.button>
        
        <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
            onExitComplete={() => null}
        >
            {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} title='Title' date='Date' description='Description' img={Logo}/>}
        </AnimatePresence>
    </motion.div>
  )
}

export default Projects