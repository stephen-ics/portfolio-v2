import { motion } from 'framer-motion';
import './component-styles/Backdrop.css'

const Backdrop = ({ children, onClick }) => {
    return (
        <motion.div
        className='backdrop'
        onClick={onClick}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            {children}
        </motion.div>

    );
};

export default Backdrop