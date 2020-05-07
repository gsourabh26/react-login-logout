import {HANDLE_ERROR, HIDE_NOTIFICATION, HANDLE_SUCCESS} from "./actionTypes";

export const showError = (error) => {
	return {
		type: HANDLE_ERROR,
		payload: {
			error
		}
	}
}

export const showSuccess = (message) => {
	return {
		type: HANDLE_SUCCESS,
		payload: {
			message
		}
	}
}

export const hideNotification = (error) => {
	return {
		type: HIDE_NOTIFICATION
	}
}	



