import React from 'react';
import './page-styles/Projects.css'

import ProjectData from "../data/ProjectData.js";

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

  const imageUp = {
    hidden: {
        y: '5vh',
        opacity: 0,
    },
    visible: { 
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: [0.6, 0.01, -0.05, 0.95],
        }
    },
    exit: {
        opacity: 0,
    },
  };

  console.log(ProjectData[0].tags)


    
  return (
    <motion.div className='text-slate-900 w-full flex flex-col'
    variants={container}
    initial='hidden'
    animate='visible'
    exit='exit'
 
    >
      <h1 className='text-5xl text-center'>My Projects</h1>
      <div className='flex justify-center mt-2'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
        {ProjectData.map((project) => {
            return (
              <DisplayModal title={project.title} subtitle={project.subtitle} description={project.description} techStack={project.techStack} image={`../projects/${project.image}`} github={project.github} devpost={project.devpost} tags={project.tags}/>
            );
          })}
           
        </div>
      </div>
    </motion.div>
      
  )
}

export default Projects