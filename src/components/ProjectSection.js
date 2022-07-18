import React from 'react'

const ProjectSection = (whileHover, whileTap, className, onClick) => {
  return (
    <motion.button
        whileHover={whileHover}
        whileTap={whileTap}
        className={className}
        onClick={onClick}
    >
            Launch Model
    </motion.button>
  )
}

export default ProjectSection