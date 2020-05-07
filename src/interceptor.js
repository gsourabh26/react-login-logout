import axios from "axios";

const interceptor = _ => {
	axios.defaults.baseURL = "http://local.host:8000";
	axios.defaults.withCredentials = true
	
	axios.interceptors.request.use(request => {
		return request;
	}, error => {
		return Promise.reject(error)
	})

	// axios.interceptors.response.use(function (response) {
	// 	console.log("response >>>", response )
	//     return response;
	//   }, function (error) {
	//   	console.log("response errpr >>>>",error)
	//     return Promise.reject(error);
	//   });
	
}

export default interceptor;

