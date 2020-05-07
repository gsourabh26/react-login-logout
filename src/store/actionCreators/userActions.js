import axios from 'axios';

import {ROLES_FETCHED, SAVE_USER_AUTH_INFO, USER_SIGNOUT} from "./actionTypes";
import {showError, showSuccess} from "./notificationActions";


export const rolesFetched = (roles) => {
	return {
		type: ROLES_FETCHED,
		payload: {
			roles
		}
	}
} 

export const saveUserAuthInfo = (userInfo) => {
	return {
		type: SAVE_USER_AUTH_INFO,
		payload: {
			userInfo
		}
	}
} 

export const fetchRoles = () => {
	return (dispatch, getState) => {
		var state = getState();
		if(!state.users.roles.length) {
			axios.get("/roles").then(data => {
				var roles = data.data;
				if(roles && roles.length) {
					roles = roles.map(role => ({value: role, display: role}));
					roles.unshift({value:"", display: "Select Role"});
				}
				dispatch(rolesFetched(roles));
			}).catch(err=> {
				dispatch(showError(err.response));
			})
		}
	}
}

export const singup = (userInfo) => {
	return (dispatch, getState) => {
		axios.post('/signup', userInfo).then(result => {
			dispatch(showSuccess(result.data));
		}).catch(err=> {	
			dispatch(showError(err.response));
		})
	}
}

export const login = (userInfo, history) => {
	return (dispatch, getState) => {
		axios.post('/login', userInfo).then(result => {
			dispatch(saveUserAuthInfo(result.data));
			history.push("/");
		}).catch(err=> {	
			dispatch(showError(err.response));
		})
	}
}

export const logout = _ => {
	return {
		type: USER_SIGNOUT
	}
}