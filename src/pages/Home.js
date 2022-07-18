import { Link } from 'react-router-dom'
import './page-styles/Home.css'
import Logo from '../pictures/Logo.png'
import { motion } from 'framer-motion';

export default function Home() {

  const dropInLeft ={
    hidden: {
        x: '100vh',
        opacity: 0,
    },
    visible: { 
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.1,
            type: 'spring',
            delay: 0.5,
            damping: 25,
            stiffness: 200,
        }
    },
    exit: {
        y: '100vh',
        opacity: 0,
    },
  };

  return (
    <motion.div 
      className='text-blue-900 flex items-center justify-center w-full h-full mt-48'
      initial={{opacity:0}}
      animate={{opacity:1, transition: {duration:0.5}}}
      exit={{opacity:0, transition: {duration:0.25}}}
    >
      <motion.div className='flex flex-col'>
        <h2 className='text-4xl'>Hello!</h2>
        <h1 className='text-6xl font-bold'>
          I'm Stephen Ni
        </h1>
        <h2 className='text-xl mb-8'>Aspiring Full-Stack Developer</h2>
        <div className='flex'>
          <Link to='/experiences'>
            <motion.button className="button"
              whileHover={{scale:1.1}}
              whileTap={{scale:0.9}}>
                Experiences
            </motion.button>
          </Link>
          <Link to='projects'>
              <motion.button className="button"
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}>
                  Projects
              </motion.button>
            </Link>
          </div>
        </motion.div>
      <motion.div
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}>
    
          <img src={Logo} className='ml-40 rounded-2xl w-96 object-cover'/>
      </motion.div>
    </motion.div>
  )
}