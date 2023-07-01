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
        updatedColors[tag] = '#99ccff'
      }

      else if (tag === 'NextJS') {
        updatedColors[tag] = '#82ffad'
      }

      else if (tag === 'TailwindCSS') {
        updatedColors[tag] = '#ffbfbf'
      }

      else if (tag === 'Framer-motion') {
        updatedColors[tag] = '#ffdbb8'
      }

      else if (tag === 'JSON-Server') {
        updatedColors[tag] = '#ffb2f2'
      }

      else if (tag === 'Firebase') {
        updatedColors[tag] = '#ffd1ba'
      }

      else if (tag === 'HTML5') {
        updatedColors[tag] = '#99ffd6'
      }

      else if (tag === 'CSS3') {
        updatedColors[tag] = '#dbb8ff'
      }

      else if (tag === 'Javascript') {
        updatedColors[tag] = '#ffbdde'
      }

      else if (tag === 'Typescript') {
        updatedColors[tag] = '#ffffb2'
      }

      else if (tag === 'Workbox') {
        updatedColors[tag] = '#a3a3ff'
      }

      else if (tag === 'PWA') {
        updatedColors[tag] = '#ffd4a8'
      }

      else if (tag === 'Chakra-ui') {
        updatedColors[tag] = 'HoneyDew'
      }

      else if (tag === 'DeSo') {
        updatedColors[tag] = 'PaleTurquoise'
      }

      else if (tag === 'Twilio') {
        updatedColors[tag] = '#99e6ff'
      }

      else if (tag === 'OpenCV') {
        updatedColors[tag] = '#dbdbff'
      }

      else if (tag === 'Tensorflow') {
        updatedColors[tag] = '#ffc299'
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
      <div className=''>
        <div className='flex flex-col items-center w-full h-full text-slate-800'>
          <img src={image} className='w-full h-96 object-cover rounded-t-2xl'></img>
          <h1 className='mt-5 text-3xl text-left w-full font-medium'>{title}</h1>
          <h2 className='text-2xl text-left w-full font-medium text-gray-600'>{subtitle}</h2>
        </div>
      </div>
      <div>
      <div className='flex mt-4'>
            {tags.map((tag, index) => (
              <div className='text-black px-4 py-2 rounded-md m-1' style={{ backgroundColor: tagColors[tag]}}>{tag}</div>
            ))}
          </div>
      </div>
    </div>
    

      
    </motion.button>
  )
}

export default ProjectSection