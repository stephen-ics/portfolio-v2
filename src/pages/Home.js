import { Link } from 'react-router-dom'
import './page-styles/Home.css'
import Logo from '../pictures/Logo.png'
import { motion, useAnimation } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer'
import Typewriter from 'typewriter-effect'
import Cardflip from '../components/Cardflip'
import HomeProjects from '../components/HomeProjects'

import BitBots from '../pictures/projects/BitBots.png'
import TokensForGood from '../pictures/projects/TokensForGood.png'
import CloseConnect from '../pictures/projects/CloseConnect.png'
import DeSsert from '../pictures/projects/Dessert.png'
import Concerto from '../pictures/projects/Concerto.png'
import CodeBro from '../pictures/projects/CodeBro.png'
import PlantUp from '../pictures/projects/PlantUp.png'
import StockStalker from '../pictures/projects/StockStalker.png'


export default function Home() {

  const {ref, inView} = useInView();

  useEffect(() => {
    console.log()
  })


  const container = {
    hidden: {
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.75,
      },
    },
    exit: {
        y: '-20vh',
        opacity: 0,
        transition: {
          duration: 0.25,
        }
    },
  };

  const containerText = {
    hidden: {
  
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
    exit: {
        y: '-20vh',
        opacity: 0,
        transition: {
          duration: 0.25,
        }
    },
  };

  const handAnimation = {
    initial: {
      rotate: 0,
    },
    animate: {
      rotate: [-15, 15, -15, 15, 0],
      transition: {
        duration: 2,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  };

  const textUp = {
    hidden: {
        x: '-5vh',
        opacity: 0,
    },
    visible: { 
        x: 0,
        opacity: 1,
        transition: {
            duration: 2,
            ease: [0.6, 0.01, -0.05, 0.95],
        }
    },
    exit: {
        opacity: 0,
    },
  };

  const imageUp = {
    hidden: {
        y: 0,
        opacity: 0,
    },
    visible: { 
        y: '-5vh',
        opacity: 1,
        transition: {
            duration: 2,
            ease: [0.6, 0.01, -0.05, 0.95],
        }
    },
    exit: {
        opacity: 0,
    },
  };

  const buttonLeft = {
    hidden: {
        x: '-10vh',
        opacity: 0,
    },
    visible: { 
        x: 0,
        opacity: 1,
        transition: {
            delay: 1.5,
            duration: 2,
            ease: [0.6, 0.01, -0.05, 0.95],
        }
    },
    exit: {
        opacity: 0,
    },
  };

  const buttonRight = {
    hidden: {
        x: '10vh',
        opacity: 0,
    },
    visible: { 
        x: 0,
        opacity: 1,
        transition: {
            delay: 1.5,
            duration: 2,
            ease: [0.6, 0.01, -0.05, 0.95],
        }
    },
    exit: {
        opacity: 0,
    },
  };

  const imageRight = {
    hidden: {
        x: '20vh',
        opacity: 0,
    },
    visible: { 
        x: 0,
        opacity: 1,
        transition: {
            delay: 2.5,
            duration: 1,
            ease: [0.6, 0.01, -0.05, 0.95],
            type: "spring",
            stiffness: 200,

        }
    },
    exit: {
        opacity: 0,
    },
  };

  const waveAnimation = {
    rotate: [0, -20, 20, -20, 0],
    transition: { duration: 2, repeat: Infinity },
  };

  const textUpControls = useAnimation();

  useEffect(() => {
    textUpControls.start('visible');
  }, [textUpControls]);


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
    ? document.querySelector('body').classList.add('loading')
    : document.querySelector('body').classList.remove('loading');
  }, [loading])

  return (
    <motion.div 
      className='h-full text-slate-900 flex flex-col w-full justify-center'
      variants={container}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <motion.div className='flex justify-center flex-wrap 2xl:flex-row xl:flex-row flex-col items-center'>
        <motion.div className='flex flex-col justify-around items-center'>
          <motion.div className='2xl:text-left xl:text-left lg:text-left md:text-left sm:text-left text-center'>
          <motion.h1 variants={textUp} className='xl:text-6xl text-5xl font-bold'>
          <motion.span
            className='wave-hand'
            role="img"
            aria-label="wave-hand"
            animate={waveAnimation}
          >
            👋
          </motion.span>{' '}
          Hey
        </motion.h1>
            <motion.h1 variants={containerText} className='xl:text-9xl lg:text-8xl md:text-8xl sm:text-7xl text-6xl font-bold text-wrap break-words'>
              <motion.span variants={imageUp}>I</motion.span>
              <motion.span variants={imageUp}>'</motion.span>
              <motion.span variants={imageUp}>m</motion.span>
              <motion.span variants={imageUp}> </motion.span>
              <motion.span variants={imageUp} className='text-green-400'>S</motion.span>
              <motion.span variants={imageUp}>t</motion.span>
              <motion.span variants={textUp}>e</motion.span>
              <motion.span variants={textUp}>p</motion.span>
              <motion.span variants={textUp}>h</motion.span>
              <motion.span variants={textUp}>e</motion.span>
              <motion.span variants={textUp}>n</motion.span>
              <motion.span> </motion.span>
              <motion.span variants={textUp} className='text-green-400'>N</motion.span>
              <motion.span variants={textUp}>i</motion.span>
            </motion.h1>
            <motion.div className='xl:text-4xl text-3xl mb-8 mt-8'
              variants={textUp}>
              <Typewriter
                options={{
                  strings:[],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(2500)
                    .typeString("Aspiring Full-Stack Developer")
                    .deleteAll()
                    .typeString("Creator, Innovator")
                }}
              />
            </motion.div>
          </motion.div>
          <div className='flex xl:flex-nowrap xl:justify-start lg:justify-start md:justify-start sm:justify-start flex-wrap justify-center w-full'>
            <motion.div className='flex' variants={buttonLeft}>
              <Link class='button mb-4 mx-2' to='experiences'>
                <div class="button__line"></div>
                <div class="button__line"></div>
                <span class="button__text">Experience</span>
                <div class="button__drow1"></div>
                <div class="button__drow2"></div>
            
              </Link>
            </motion.div>
            <motion.div className='flex' variants={buttonRight}>
              <Link class='button mb-4 mx-2' to='projects'>
                <div class="button__line"></div>
                <div class="button__line"></div>
                <span class="button__text">Projects</span>
                <div class="button__drow1"></div>
                <div class="button__drow2"></div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          variants={imageRight}
          >     
            <img src={Logo} className='logo 2xl:mx-32 xl:mx-32 rounded-full object-cover border-green-500 border-solid border-3'/>
        </motion.div>
      </motion.div>
      <motion.div className='flex flex-col items-center xl:mt-32 mt-8'>
        <motion.div variants={imageUp}>
          <HomeProjects title='StockStalker: Hack the 6ix Winner' date='August 2022' subtitle='To search, manage, and see the overall ESG performance' image={StockStalker} link='https://devpost.com/software/stock-stalker-4jrosz'/>
        </motion.div>
        <motion.div variants={imageUp}>
          <HomeProjects title='PlantUp: Backyard Hacks III Winner' date='July 2022' subtitle='To make gardening an exciting experience' image={PlantUp} link='https://devpost.com/software/plantup'/>
        </motion.div>
        <motion.div variants={imageUp}>
          <HomeProjects title='CodeBro: Hacky Birthay MLH! 2022 Winner' date='July 2022' subtitle='To practice both their web design and competitive problem-solving skills offline' image={CodeBro} link='https://devpost.com/software/codebro'/>
        </motion.div>
        <motion.div variants={imageUp}>
          <HomeProjects title='DeSsert: FreyHacks Winner' date='June 2022' subtitle="Find the perfect recipe while owning the rights to your content on the world's first decentralized recipe sharing site" image={DeSsert} link='link'/>
        </motion.div>
        <motion.div variants={imageUp}>
          <HomeProjects title='Close Connect: WaffleHacks 2022 Winner' date='June 2022' subtitle='To meet others who live in different regions and celebrate your differences' image={CloseConnect} link='link'/>
        </motion.div>
        <motion.div variants={imageUp}>
          <HomeProjects title='Tokens For Good: JAMHacks 6 Winner' date='May 2022' subtitle='To provide an incentive to donate through collectible NFTs' image={TokensForGood} link='https://devpost.com/software/decharity-gvhxw2'/>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}