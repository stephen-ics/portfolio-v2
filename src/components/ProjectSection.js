import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { SiDevpost } from 'react-icons/si'
import ProjectData from "../data/ProjectData.js";
import { useState, useEffect } from 'react'

const ProjectSection = ({ whileHover, whileTap, className, onClick, title, subtitle, image, devpost, github, tags }) => {
  const data = ['Item 1', 'Item 2', 'Item 3'];
  const [selectedTag, setSelectedTag] = useState('');
  const [tagColors, setTagColors] = useState({});

  useEffect(() => {
    const updatedColors = {};
    tags.forEach((tag) => {
      if (tag === 'ReactJS') {
        updatedColors[tag] = 'blue'
      }

      else if (tag === 'NextJS') {
        updatedColors[tag] = 'blue'
      }

      else if (tag === 'TailwindCSS') {
        updatedColors[tag] = 'blue'
      }

      else if (tag === 'Framer-motion') {
        updatedColors[tag] = 'blue'
      }

      else if (tag === 'JSON-Server') {
        updatedColors[tag] = 'blue'
      }

      else if (tag === 'Firebase') {
        updatedColors[tag] = 'blue'
      }

      else if (tag === 'HTML5') {
        updatedColors[tag] = 'blue'
      }

      else if (tag === 'CSS3') {
        updatedColors[tag] = 'blue'
      }

      else if (tag === 'Javascript') {
        updatedColors[tag] = 'blue'
      }

      else if (tag === 'Typescript') {
        updatedColors[tag] = 'blue'
      }

      else if (tag === 'Workbox') {
        updatedColors[tag] = 'blue'
      }

      else if (tag === 'PWA') {
        updatedColors[tag] = 'blue'
      }

      else if (tag === 'Chakra-ui') {
        updatedColors[tag] = 'blue'
      }

      else if (tag === 'DeSo') {
        updatedColors[tag] = 'blue'
      }

      else if (tag === 'Twilio') {
        updatedColors[tag] = 'red'
      }

      else if (tag === 'OpenCV') {
        updatedColors[tag] = 'red'
      }

      else if (tag === 'Tensorflow') {
        updatedColors[tag] = 'red'
      }


  
    });
    setTagColors(updatedColors);
  }, [tags]);


  return (
    <motion.button
        whileHover={whileHover}
        whileTap={whileTap}
        className={className}
        onClick={onClick}
     
    > 
    <div className='m-4'>
      <div className='flex flex-col items-center w-full h-full text-slate-800'>
        <img src={image} className='w-full h-96 object-cover rounded-t-2xl'></img>
        <h1 className='mt-4 text-4xl text-left w-full font-semibold'>{title}</h1>
        <h2 className='text-2xl text-left w-full font-normal'>{subtitle}</h2>
      </div>
    </div>
    <div>
      <div className='flex'>
          {tags.map((tag, index) => (
            <div className='text-black px-4 py-2 rounded-xl m-2' style={{ backgroundColor: tagColors[tag]}}>{tag}</div>
          ))}
        </div>
    </div>
    

      
    </motion.button>
  )
}

export default ProjectSection