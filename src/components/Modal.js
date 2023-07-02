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
            type: 'spring',
            damping: 14,
            stiffness: 150,
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

const Modal = ({ handleClose, title, subtitle, description, techStack, image, github, devpost }) => {
    return (
        <div className='sm:block hidden'>
            <Backdrop onClick={handleClose}>
                <motion.div 
                    onClick={(e) => e.stopPropagation()}
                    className='modal orange-gradient'
                    variants={dropIn}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                >
                    <img src={image} className='modal-image object-cover rounded-l-xl'/>
                    <div className='flex flex-col items-center ml-10'>
                        <ModalButton onClick={handleClose} label='Close'></ModalButton>
                        <div className='flex justify-between mt-10 items-start ml-4'>
                            <div>
                                <h1 className='text-5xl'>{title}</h1>
                                <h3 className='text-xl'>{subtitle}</h3>
                                <p className='text-xl mt-2'>{description}</p>
                                <p className='text-xl mt-10'>{techStack}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Backdrop>
        </div>
    )
}

export default Modal;