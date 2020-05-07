import {ROLES_FETCHED, SAVE_USER_AUTH_INFO, USER_SIGNOUT} from "../actionCreators/actionTypes";

const initState = {
	token: localStorage.getItem("token"),
	name: localStorage.getItem("name"),
	email: localStorage.getItem("email"),
	roles: []
}

const userReducer = (state = initState, action ) => {
	switch (action.type) {
		case ROLES_FETCHED: 
			state = {
				...state,
				roles: action.payload.roles
			};
			return state;
		case SAVE_USER_AUTH_INFO:
			let	{name, email, token} = action.payload.userInfo;
			state = {
				...state,
				token,
				name,
				email
			}
			localStorage.setItem("token", token);
			localStorage.setItem("name", name);
			localStorage.setItem("email", email);
			return state;
		case USER_SIGNOUT: 
			localStorage.removeItem("token");
			localStorage.removeItem("name");
			localStorage.removeItem("email");
			state = {
				...state,
				token: null,
				email: null,
				name: null
			}
			return state;
		default :
			return state;
	}
}

export default userReducer;