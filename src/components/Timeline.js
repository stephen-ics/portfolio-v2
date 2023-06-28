import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosSchool } from "react-icons/io";
import { RiCommunityFill } from "react-icons/ri";
import TimelineData from "../data/TimelineData.js";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import './component-styles/Timeline.css'
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };
    
    return (
        <div>
        <h1 className="timeline-title">My Timeline</h1>
        <VerticalTimeline>
          {TimelineData.map((element) => {
            let isWorkIcon = (element.icon === "work");
            let showButton =
              element.buttonText !== undefined &&
              element.buttonText !== null &&
              element.buttonText !== "";
        
  
            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName="timeline-date"
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={isWorkIcon ? <RiCommunityFill /> : <IoIosSchool />}
              >
              
              <img src={`../${element.image}`} className='timeline-image'/>
              <h3 className="vertical-timeline-element-title timeline-title">
                {element.title}
              </h3>
              <h3 className='vertical-timeline-element-subtitle timeline-subtitle'>{element.association}</h3>
              <h5 className="vertical-timeline-element-subtitle timeline-subtitle">
                {element.location}
              </h5>
              <p id="timeline-description">{element.description}</p>
              {showButton && (
                <a
                  className={`timeline-button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href={element.buttonLink}
                  target="_blank"
                >
                  {element.buttonText}
                </a>
              )}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>

    );
};

export default Timeline