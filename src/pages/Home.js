import { Link } from 'react-router-dom'
import './page-styles/Home.css'
import Logo from '../pictures/Logo.png'
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className='flex justify-center text-blue-900'>
      <div className='flex items-center justfiy-center m-20 mx-24'>
        <div className='flex flex-col w-2/4'>
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
        </div>
        <img src={Logo} className='ml-40 rounded-2xl w-2/4 object-cover'/>
      </div>
    </div>
  )
}