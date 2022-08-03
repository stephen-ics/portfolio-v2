import React from 'react'
import ExperienceSection from '../components/ExperienceSection'
import Timeline from '../components/Timeline'
import TimelineData from '../data/TimelineData'

import './page-styles/Experiences.css'

const Experiences = () => {
  return (
    <div className='mt-20 flex flex-col text-center justify-center text-slate-700'>
      <h1 className='text-4xl'>My Timeline</h1>
      <div className='mt-5'>
        <div>
          <h1 className='year'>2022</h1>
          <Timeline/>
        </div>
      </div>
    </div>
  )
}

export default Experiences