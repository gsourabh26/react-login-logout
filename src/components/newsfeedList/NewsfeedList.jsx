import React, {useEffect} from 'react';
import "./newsfeedList.css";

import Newsfeed from "./newsfeed/Newsfeed";

const NewsfeedList = props => {
	const {feeds} = props;
	
	const feedList = feeds ? feeds.map((feed, index) => {
		return <Newsfeed 
			key={feed.id}
			feed={feed}
		/> 
	}) : null;

	useEffect(_=> {
		document.documentElement.scrollTop = 0;
	}, [props.feeds])

	return (
		<div className="feeds-list"> 
			{feedList}
		</div>
	)
}	

export default NewsfeedList;