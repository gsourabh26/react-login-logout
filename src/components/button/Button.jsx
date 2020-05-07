import React from 'react';

import "./button.css";

const button = props => {
	return (
		<button 
			onClick={props.onClick}
			className={"my-button " + props.className}
			disabled={props.disable}
		>
			{props.value}
		</button>
	)
}

export default button;