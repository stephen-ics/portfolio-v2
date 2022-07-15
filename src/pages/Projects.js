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
    <div> 
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
    </div>
  )
}

export default Projects