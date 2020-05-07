import React, {useState, useEffect} from 'react';

import "./slideshow.css";

const Slideshow = props => {
	const cards = props.cardsInfo;
	const cardsKeys = Object.keys(cards);
	const [activeCard, setActiveCard] = useState();

	useEffect(_=> {
		setActiveCard(cardsKeys[0]);
	}, [cards])

	const slides = cardsKeys.map(cardKey => {
		let classNames = "slideshow-card-container-1";
		if(cardKey === activeCard) {
			classNames += ' active-slideshow-card-image-1';
		}
		return (
			<div className={classNames} onClick={e=>setActiveCard(cardKey)} key={cardKey} >
				<div className="card-key">{cardKey}</div>
				<div className="card-info">{cards[cardKey].info}</div>
				<img className="slideshow-card-image" src={require("../../assets/animals/" + cards[cardKey].url + ".webp")} alt={cardKey} />
			</div> 
		)
	})

	return (
		<div className="slideshow-main-container-1">
			{slides}
		</div>
	)
}


export default Slideshow;
