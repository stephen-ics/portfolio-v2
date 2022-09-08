import React from 'react';
import { FaBluetooth } from 'react-icons/fa';
import './component-styles/Timeline.css'
import { motion } from 'framer-motion'
import CodeBro from '../pictures/projects/CodeBro.png'

const TimelineItem = ({ data, id }) => (
    <motion.div className="timeline-item"
    whileHover={{scale: 1.05}}
    whileTap={{scale: 0.95}}>
        <div className="timeline-item-content">
            <div>
                <div className='flex items-center mt-4'>
                    <img src={CodeBro}  className='h-40 mt-4 rounded-xl'/>
                    <div className='ml-10'>
                        <h1 className='text-2xl'>{data.employer}</h1>
                        <h3 className='text-l font-normal mt-1'>{data.position} </h3> 
                        <h3 className='text-base font-normal'> {data.date}</h3>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
);

export default TimelineItem;

