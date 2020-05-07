import React from 'react';
import {connect} from 'react-redux';

import "./notification.css";
import {hideNotification} from "../../store/actionCreators";

const Notification = props => {
	let element = props.display ? (
		<div className={"notification-container " + props.className}>
			<div className="notification-message-container">
				<div className="notification-message">
					{props.message}
				</div>
			</div>
			<div className="notification-close" onClick={props.hideNotification}>
				<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="cross-svg"><path d="M256 512C114.84 512 0 397.16 0 256S114.84 0 256 0s256 114.84 256 256-114.84 256-256 256zm0-475.43C135.008 36.57 36.57 135.008 36.57 256S135.008 475.43 256 475.43 475.43 376.992 475.43 256 376.992 36.57 256 36.57zm0 0"/><path d="M347.43 365.715c-4.68 0-9.36-1.785-12.93-5.36L151.645 177.5c-7.145-7.145-7.145-18.715 0-25.855 7.14-7.141 18.714-7.145 25.855 0L360.355 334.5c7.145 7.145 7.145 18.715 0 25.855a18.207 18.207 0 01-12.925 5.36zm0 0"/><path d="M164.57 365.715c-4.68 0-9.355-1.785-12.925-5.36-7.145-7.14-7.145-18.714 0-25.855L334.5 151.645c7.145-7.145 18.715-7.145 25.855 0 7.141 7.14 7.145 18.714 0 25.855L177.5 360.355a18.216 18.216 0 01-12.93 5.36zm0 0"/></svg>
			</div>
		</div>
	)
	: "";
	return element;
}

const mapStateToProps = (state) => {
	return {
		display: state.notify.display,
		message: state.notify.message,
		className: state.notify.activeClass
	}
}

const mapDispatchToProps = dispatch => {
	return {
		hideNotification: () => dispatch(hideNotification())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);