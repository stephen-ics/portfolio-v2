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
                <img src={image} className='object-cover rounded-l-xl w-80'/>
                <div className='w-full flex flex-col items-center ml-5'>
                    <ModalButton onClick={handleClose} label='Close'></ModalButton>
                    <div className='flex w-full h-full justify-between mt-10 items-start'>
                        <div>
                            <h1 className='text-5xl'>{title}</h1>
                            <h3 className='text-xl'>{subtitle}</h3>
                            <p className='text-base mt-2'>{description}</p>
                        </div>
                        <div className='flex flex-col h-full justify-between pl-16'>
                            <a href={devpost} target='_blank' className='flex flex-col items-center'>
                                <h1 className='text-2xl'>Devpost</h1>
                                <SiDevpost size={60}/>
                            </a>
                            <a href={github} target='_blank' className='mb-20 flex flex-col items-center'>
                                <h1 className='text-2xl'>Github</h1>
                                <FaGithub size={60}/>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
            
        </Backdrop>
    )
}

export default Modal;