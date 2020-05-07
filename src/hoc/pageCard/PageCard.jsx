import React from 'react';
import "./pageCard.css";

const card = props => {
	return (
		<div className="card-container"> 
			{props.children}
		</div>
	)
}

export default card;