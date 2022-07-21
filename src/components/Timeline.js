import React from 'react'
import TimelineData from '../data/TimelineData'
import TimelineItem from './TimelineItem'

import './component-styles/Timeline.css'

const Timeline = () =>
    TimelineData.length > 0 && (
        <div className="timeline-container">
            {TimelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );

export default Timeline;