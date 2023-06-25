import React from 'react'
import TimelineData from '../data/TimelineData'
import TimelineItem from './TimelineItem'
import { Link } from 'react-router-dom'

import './component-styles/Timeline.css'

const Timeline = ({ id }) =>
    TimelineData.length > 0 && (
        <div className="timeline-container">
            {TimelineData.map((data, idx) => (
                    <TimelineItem data={data} id={id} />
            ))}
        </div>
    );

export default Timeline;