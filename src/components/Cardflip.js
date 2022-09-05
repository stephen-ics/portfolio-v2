import React from 'react'
import './component-styles/Cardflip.css'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Cardflip = ({ title, subtitle, description, image }) => {
    const [flipped, setFlipped] = useState(false)
    const flipCard = () => {
        setFlipped(!flipped)
    }

  return (
    <motion.div class="card"
    whileHover={{scale:1.05}}
    whileTape={{scale:.95}}>
		<div className={flipped ? "cardInner isFlipped" : "cardInner"} onClick={flipCard}>
			<div class="cardFace cardFaceFront">
				<h2>{title}</h2>
                
			</div>
			<div class="cardFace cardFaceBack">
				<div class="cardContent">
					<div class="cardHeader">
						<img src={image} alt="" class="pp" />
						<h2>{title}</h2>
					</div>
					<div class="cardBody">
						<h3>{subtitle}</h3>
						<p>{description}</p>
					</div>
				</div>
			</div>
		</div>
	</motion.div>
  )
}

export default Cardflip