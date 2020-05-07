import React, {Component} from 'react';
import {connect} from "react-redux";

import "./news.css";
import Pagination from '../../components/pagination/Pagination';
import NewsfeedList from '../../components/newsfeedList/NewsfeedList';

import axios from "../../axios/newsInstance";
import {showError} from "../../store/actionCreators";

class News extends Component {
	state = {
		feeds: [],
		currentPage: 1
	}

	fetchFeeds = (pageNumber) => {
		axios.get("/" + pageNumber + ".json").then(data => {
			if(data.data) {
				this.setState({feeds: data.data, currentPage: pageNumber});
			}
		}).catch(err=> {
			this.props.showError(err.response);
		})
	}

	componentDidMount() {
		this.fetchFeeds(this.state.currentPage);
	}

	paginationChange = (pageNumber) => {
		this.fetchFeeds(pageNumber);
	}

	render() {
		return (
			<div className="news-container-main">
				<div className="feeds-container">
					<NewsfeedList 
						feeds={this.state.feeds}
					/>
				</div>
				<div className="news-pagination-container">
					<Pagination 
						currentPage={this.state.currentPage}
						pages={12}
						onChange={this.paginationChange}
					/>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		showError: error => dispatch(showError(error))
	}
}

export default connect(null, mapDispatchToProps)(News);
