import React from 'react';

import './pagination.css'

const pagination = props => {
	const pageNumber = [...new Array(props.pages)].map((e, index) => {
		var className = "pageNumber";
		if(props.currentPage === index + 1) {
			className += " activePage"
		}
		return (
			<div className={className} onClick={e=> props.onChange(index+1)}  key={index+1}>
				{index + 1}
			</div>
		);
	})
	return (
		<div className="pagination-container">
			{pageNumber}
		</div>
	)
}

export default pagination;