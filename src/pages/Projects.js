import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import Modal from '../components/Modal';
import './page-styles/Projects.css'

const Projects = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);
    
  return (
    <motion.div className='flex justify-center w-full h-full absolute items-center'
        initial={{width: 0}}
        animate={{width: '100%', transition: {duration:0.5}}}
        exit={{x: window.innerWidth, transition: {duration:0.25}}}
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
            {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
        </AnimatePresence>
    </motion.div>
  )
}

export default Projects