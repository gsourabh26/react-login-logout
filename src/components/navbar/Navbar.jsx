import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import {connect} from 'react-redux';

import "./navbar.css";
import {logout} from "../../store/actionCreators"; 
import logo from "../../assets/crown.png";

const navbar = props => {
	const unauthenticatedMenu = (
		<div className="navlinks-container">
			<NavLink activeClassName="active" to="/signup">Register</NavLink>		
			<NavLink activeClassName="active" to="/login">Login</NavLink>		
		</div>
	);
	const authenticatedMenu = (
		<div className="navlinks-container">
			<NavLink activeClassName="active" to="/dashboard/news-feed">News</NavLink>	
			<NavLink activeClassName="active" to="/logout" onClick={props.logout}>Logout</NavLink>	
		</div>
	);
	return (
		<div className="navbar-container">
			<div className="logo-container">
				<Link to="/dashboard">
					<img src={logo} alt="logo" />
				</Link>
			</div>
			{
				props.name ? <div className="userInfo">{props.name}</div> : ""
			}
			{
				props.token ? authenticatedMenu : unauthenticatedMenu
			}
		</div>
	);
}

const mapDispatchToProps = dispatch => {
	return {
		logout: _ => dispatch(logout())
	}
}

const mapStateToProps = state => {
	return {
		token: state.users.token,
		name: state.users.name
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(navbar);
