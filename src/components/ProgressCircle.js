import React from 'react'
import ProgressBar from 'react-animated-progress-bar';


const ProgressCircle = ({ percentage }) => {


  return (


     <ProgressBar
        width="400px"
        height="10px"
        rect
        fontColor="black"
        percentage={percentage}
        rectPadding="1px"
        rectBorderRadius="20px"
      />

  )
}

export default ProgressCircle