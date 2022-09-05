import React from 'react';
import './page-styles/Projects.css'

import BitBots from '../pictures/projects/BitBots.png'
import TokensForGood from '../pictures/projects/TokensForGood.png'
import CloseConnect from '../pictures/projects/CloseConnect.png'
import DeSsert from '../pictures/projects/Dessert.png'
import Concerto from '../pictures/projects/Concerto.png'
import CodeBro from '../pictures/projects/CodeBro.png'
import PlantUp from '../pictures/projects/PlantUp.png'
import StockStalker from '../pictures/projects/StockStalker.png'

import DisplayModal from '../components/DisplayModal'
import { motion } from 'framer-motion'


const Projects = () => {
  const container = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.35,
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

    
  return (
    <motion.div className='text-slate-900 mb-10 w-full flex flex-col'
    variants={container}
    initial='hidden'
    animate='visible'
    exit='exit'
 
    >
      <h1 className='text-5xl text-center mt-10'>Projects</h1>
      <div className='w-full flex justify-center'>
        <div className='flex flex-col items-start'>
            <div className='flex'>
              <DisplayModal title='Stock Stalker' subtitle='August 2022' description='Unlike the traditional profit-orientated approach in financial investing, responsible investing is a relatively new concept that expressly recognizes the importance of environmental, social, and governance aspects to the investor and the long-term health and stability of the market' techStack='The prototype was designed with Figma while the front end was built on React ·We used Tailwind CSS, framer-motion and various libraries to decorate our web page. The backend data was stored on JSON-Server, cors and axios ·Notifications are sent out using Twilio. Functionalities were built with tradingviewwidget' image={StockStalker} github='https://github.com/stephen-ics/Hack-The-6ix' devpost='https://devpost.com/software/stock-stalker-4jrosz'></DisplayModal>
              <DisplayModal title='PlantUp' subtitle='July 2022' description='At its core, PlantUp is a platform that is meant to make gardening an exciting experience- and we have plenty of features that help realize this.' techStack='We designed the prototype on UI/UX Figma and built the front-end using primarily React.JS, tailwind CSS. We also added framer-motion to sprinkle in a little bit of animations. The data in the back end was stored in JSON databases, and we used HTTPS requests to change the JSON in order to fit our needs We also used Twilio for the messaging component and domain.com for our domain name!' image={PlantUp} github='https://github.com/stephen-ics/Backyard-Hacks-3.0' devpost='https://devpost.com/software/plantup'></DisplayModal>
              <DisplayModal title='CodeBro' subtitle='July 2022' description='CodeBro is an offline programming suite that allows users to practice both their web design and competitive problem-solving skills.' techStack='We built our front-end using React.Js, Typescript, Workbox and Tailwind CSS for the styling. As we were making a Progressive Web App (PWA), we made an active effort to not use any external servers and databases in order to make sure that CodeBro could operate offline.' image={CodeBro} github='https:google.com' devpost='https://google.com'></DisplayModal>
            </div>
            <div className='flex'>
              <DisplayModal title='Concerto' subtitle='July 2022' description='Concerto aims to destress the high stress concert buying experience ticket minimize reselling through a standard auctioning system!' techStack='The UI was designed through Figma. The front end was built with React and TailwindCSS, while the pages were routed using Next.js built-in router. Our authentication system was built with firebase auth while the back-end data was stored in firestore and accessed through firebase hooks.' image={Concerto}></DisplayModal>
              <DisplayModal title='DeSsert' subtitle='June 2022' description='DeSsert is a decentralized recipe sharing site that allow users to browse through traditional to exotic recipes from cultures all over the world.' techStack='The UI was designed through Figma. We then developed the front end with React and TailwindCSS. The pages were routed using Next.js built-in router while the backend features such as creating and liking a post, and minting a recipe into a NFT was achieved through the DeSo protocol library.' image={DeSsert}></DisplayModal>
              <DisplayModal title='CloseConnect' subtitle='June 2022' description='CloseConnect pairs you with people who live all over the world. This allows for people to tread out of their region and meet others who live in different worlds and to celebrate their different cultures and backgrounds.' techStack='We built the majority of the front-end using react.js, html5, and css3, we built the navigational bar with react-router-dom, and created alerts with reactjs-alert. On the other hand, we used firebase for the back-end database and log-in/log-out system.' image={CloseConnect}></DisplayModal>
            </div>
            <div className='flex'>
              <DisplayModal title='Tokens For Good' subtitle='June 2022' description='Our project gives people who donate to charity an NFT. This gives people the novelty of possessing limited-time collectables and a sense of pride knowing they supported a good cause, increasing the incentive to donate.' techStack='We designed the UI with Figma and implemented the front end using React.js and Chakra UI. The blockchain was implemented with the DesO utility Library and the login was implemented through DeSo Login' image={TokensForGood}></DisplayModal>
              <DisplayModal title='BitBots' subtitle='January 2022' description='Bitbots is a program that uses computer vision and artificial intelligence to convert ASL signs into English text or audio, and vice versa. It takes input from a user who finger-spells letters, and the phrase is then interpreted into text or audio.' techStack='We built Speak Out! using Google Teachable Machine and the interactive dashboard using HTML,CSS,Javascript and Netlify. As we used Teachable it allowed us to concentrate a lot more on the data to train to give out more accurate results!' image={BitBots}></DisplayModal>
            </div>
        </div>
      </div>
    </motion.div>
      
  )
}

export default Projects