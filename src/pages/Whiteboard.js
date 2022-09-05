import React from 'react'
import Cardflip from '../components/Cardflip'

const Whiteboard = () => {
  return (
    <div className='flex items-center justify-center h-full absolute w-full'>
        <h1>Whiteboard</h1>
        <Cardflip title='running' description='i like running'/>
    
    </div>
  )
}

export default Whiteboard