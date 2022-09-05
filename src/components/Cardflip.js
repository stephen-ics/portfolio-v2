import React from 'react'
import './component-styles/Cardflip.css'

const Cardflip = () => {

    const card = document.querySelector(".card__inner");

    card.addEventListener("click", function (e) {
    card.classList.toggle('is-flipped');
    });
  return (
    <div class="card">
		<div class="card__inner">
			<div class="card__face card__face--front">
				<h2>Card Front</h2>
			</div>
			<div class="card__face card__face--back">
				<div class="card__content">
					<div class="card__header">
						<img src="pp.jpg" alt="" class="pp" />
						<h2>Tyler Potts</h2>
					</div>
					<div class="card__body">
						<h3>JavaScript Wizard</h3>
						<p>Lorem ipsum <strong>dolor</strong> sit amet, consectetur <strong>adipiscing</strong> elit. Sed id erat a magna lobortis dictum. Nunc est arcu, <strong>lacinia</strong> quis sapien placerat, <strong>laoreet</strong> tincidunt nulla.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Cardflip