import React from 'react';

import author from '../../assets/author.jpg';
import Card from "../../hoc/pageCard/PageCard";


import './home.css';

const home = props => {
	return (
		<Card>
			<div className="home-container">
				<h2>This is my Test App</h2>
				<div className="author-details">
					<img className="author-photo" src={author} alt="author" />
					<div className="name">sourbh gupta</div>
					<div className="contact-details">
						<div className="contact phone">9034663490</div>
						<div className="contact email">er.sourbhgupta@gmail.com</div>
					</div>
				</div>
			</div>
		</Card>
	)
}

export default home;
