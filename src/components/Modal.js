import { motion } from 'framer-motion'
import Backdrop from './Backdrop'
import './component-styles/Modal.css'
import Logo from '../pictures/Logo.png'
import { FaGithub } from 'react-icons/fa'
import { SiDevpost } from 'react-icons/si'

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
            stiffness: 500,
        }
    },
    exit: {
        y: '100vh',
        opacity: 0,
    },
};

const ModalButton = ({ onClick, label }) => (
    <motion.button
        className='modal-button'
        type='button'
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        onClick={onClick}
    >
        {label}
    </motion.button>
);


const Modal = ({ handleClose, title, subtitle, description, image, github, devpost }) => {

    return (
        <Backdrop onClick={handleClose}>
            <motion.div 
                onClick={(e) => e.stopPropagation()}
                className='modal orange-gradient'
                variants={dropIn}
                initial='hidden'
                animate='visible'
                exit='exit'
            >
                <ModalButton onClick={handleClose} label='Close'></ModalButton>
  
                <div className='flex w-full justify-between mt-5 items-center'>
                    <img src={image} className='w-40 h-40'/>
                    <div>
                        <h1>{title}</h1>
                        <h3>{subtitle}</h3>
                        <p>{description}</p>
                    </div>
                    <div className='flex flex-col'>
                        <a href={devpost} target='_blank'>
                            <SiDevpost size={60}/>
                        </a>
                        <a href={github} target='_blank'>
                            <FaGithub size={60}/>
                        </a>
                    </div>
                </div>
            </motion.div>
            
        </Backdrop>
    )
}

export default Modal;