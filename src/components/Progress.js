import React from "react";
import './component-styles/Progress.css'

function SkillsBar () {
   return (
    <div className='flex bg-white'>
        <div className="container"> 
            <div className="skill-box">
                <span className="title">HTML</span>
                <div className="skill-bar">
                <span className="skill-per html">
                    <span className="tooltip">45%</span>
                </span>
            </div>
            </div>
            <div className="skill-box">
                <span className="title">CSS</span>
                <div className="skill-bar">
                <span className="skill-per css">
                    <span className="tooltip">80%</span>
                </span>
            </div>
            </div>
            <div className="skill-box">
                <span className="title">JavaScript</span>
                <div className="skill-bar">
                <span className="skill-per javascript">
                    <span className="tooltip">60%</span>
                </span>
            </div>
            </div>
        </div>
        <div className="container"> 
            <div className="skill-box">
                <span className="title">HTML</span>
                <div className="skill-bar">
                <span className="skill-per html">
                    <span className="tooltip">95%</span>
                </span>
            </div>
            </div>
            <div className="skill-box">
                <span className="title">CSS</span>
                <div className="skill-bar">
                <span className="skill-per css">
                    <span className="tooltip">80%</span>
                </span>
            </div>
            </div>
            <div className="skill-box">
                <span className="title">JavaScript</span>
                <div className="skill-bar">
                <span className="skill-per javascript">
                    <span className="tooltip">60%</span>
                </span>
            </div>
            </div>
        </div>
       
  
    </div>
   )
}

export default SkillsBar;