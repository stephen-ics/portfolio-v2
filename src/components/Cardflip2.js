import React from 'react'
import './component-styles/Cardflip2.css'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Cardflip = ({ title, subtitle, description, image }) => {
    const [flipped, setFlipped] = useState(false)
    const flipCard = () => {
        setFlipped(!flipped)
    }

  return (
    <motion.div class="card2"
    whileHover={{scale:1.05}}
    whileTape={{scale:.95}}>
		<div className={flipped ? "cardInner2 isFlipped2" : "cardInner2"} onClick={flipCard}>
			<div class="cardFace2 cardFaceFront2">
				<h2>{title}</h2>
                
			</div>
			<div class="cardFace2 cardFaceBack2">
				<div class="cardContent2">
					<div class="cardHeader2">
						<h2>{title}</h2>
					</div>
					<div class="cardBody2">
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