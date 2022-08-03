import React from 'react';
import { FaBluetooth } from 'react-icons/fa';
import './component-styles/Timeline.css'
import { motion } from 'framer-motion'
import CodeBro from '../pictures/projects/CodeBro.png'

const TimelineItem = ({ data }) => (
    <motion.div className="timeline-item"
    whileHover={{scale: 1.05}}
    whileTap={{scale: 0.95}}>
        <div className="timeline-item-content">
            <div>
                <div className="tag" style={{ background: data.category.color }}>
                    {data.category.tag}
                </div>
                <div className='flex items-center mt-4'>
                    <img src={CodeBro}  className='h-40 mt-4 rounded-xl'/>
                    <div>
                        <h1 className='text-2xl'>{data.employer}</h1>
                        <h3 className='text-base font-normal mt-3'>{data.position} | {data.date}</h3>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                {data.link && (
                    <a
                        href={data.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {data.link.text}
                    </a>
                )}
            </div>
        </div>
    </motion.div>
);

export default TimelineItem;

