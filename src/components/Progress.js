import React from "react";
import './component-styles/Progress.css'

function SkillsBar () {
   return (
    <div className='flex shadow-2xl rounded-2xl bg-white'>
        <div className="container"> 
            <div className="skill-box">
                <span className="title">ReactJS | NextJS</span>
                <div className="skill-bar">
                <span className="skill-per percent95">
                    <span className="tooltip">95%</span>
                </span>
            </div>
            </div>
            <div className="skill-box">
                <span className="title">NodeJS | ExpressJS</span>
                <div className="skill-bar">
                <span className="skill-per percent85">
                    <span className="tooltip">85%</span>
                </span>
            </div>
            </div>
            <div className="skill-box">
                <span className="title">C# | Unity</span>
                <div className="skill-bar">
                <span className="skill-per percent75">
                    <span className="tooltip">75%</span>
                </span>
            </div>
            </div>
        </div>
        <div className="container"> 
            <div className="skill-box">
                <span className="title">Python | Flask</span>
                <div className="skill-bar">
                <span className="skill-per percent90">
                    <span className="tooltip">90%</span>
                </span>
            </div>
            </div>
            <div className="skill-box">
                <span className="title">PostgreSQL | Mongo | Firebase</span>
                <div className="skill-bar">
                <span className="skill-per percent80">
                    <span className="tooltip">80%</span>
                </span>
            </div>
            </div>
            <div className="skill-box">
                <span className="title">Arduino</span>
                <div className="skill-bar">
                <span className="skill-per percent60">
                    <span className="tooltip">60%</span>
                </span>
            </div>
            </div>
        </div>
    </div>
   )
}

export default SkillsBar;