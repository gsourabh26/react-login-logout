import React from 'react';
import "./newsfeed.css";

import Button from "../../button/Button";


const newsfeed = props => {
	return (
		<div className="feed-container">
			<img src={require("../../../assets/feedbg/tech" + Math.ceil(Math.random() * 12) + ".jpg")} alt="feedbg"/>
			<div className="feed-overlay">
				<div className="feed-title">
					{props.feed.title}
				</div>
				<div className="feed-time">
					{props.feed.time_ago}
				</div>
				<div className="feed-action">
					<a href={props.feed.url} target="__blank">
						<Button 
							value="Read more"
							className="primary"
						/>
					</a>
				</div>
			</div>
		</div>
	);
}

export default newsfeed;

