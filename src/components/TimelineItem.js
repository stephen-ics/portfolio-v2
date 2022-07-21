import React from 'react';
import { FaBluetooth } from 'react-icons/fa';
import './component-styles/Timeline.css'

const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className='tag' style={{background: data.category.color}}>
                {data.category.tag}
            </span>
            <p>{data.position}</p>
            <time>{data.date}</time>
            {data.link && (
                <a
                    href={data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.link.text}
                </a>
            )}
            <span className="circle" />
        </div>
    </div>
);

export default TimelineItem;