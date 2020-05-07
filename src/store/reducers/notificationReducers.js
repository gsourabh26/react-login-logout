import {HANDLE_ERROR, HIDE_NOTIFICATION, HANDLE_SUCCESS} from "../actionCreators/actionTypes";

const initState = {
	message: null,
	activeClass: 'success',
	display: false
}

const userReducer = (state = initState, action ) => {
	switch (action.type) {
		case HANDLE_ERROR: 
			let message = (action.payload.error && action.payload.error.data) || "somthing went wrong";
			state = {
				...state, 
				message,
				activeClass: 'error',
				display: true
			}
			return state;
		case HANDLE_SUCCESS: 
			state = {
				...state, 
				message: action.payload.message,
				display: true
			}
			return state;
		case HIDE_NOTIFICATION:
			state = {
				...initState
			}
			return state;
		default :
			return state;
	}
}

export default userReducer;