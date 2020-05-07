import React, {Component} from 'react';
import "./login.css";
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import Card from '../../hoc/pageCard/PageCard';
import Input from "../input/Input";
import Button from "../../components/button/Button";
import {login} from "../../store/actionCreators";


class Login extends Component {
	state = {
		formData: {
			email: {
				value: "",
				valid: false
			},
			password: {
				value: "",
				valid: false
			}	
		}
	}

	changeState(key, value, field) {
		this.setState(prevState => {
			let formData = {
				...prevState.formData
			}
			formData[key] = {
				...prevState.formData[key]
			}
			formData[key][field] = value;
			return {formData};
		});
	}

	setValue(key, value) {
		this.changeState(key, value, 'value')
	}

	validStateHandler(key, value) {
		this.changeState(key, value, 'valid')
	}

	isFormValid() {
		let valid = true;
		for(var key in this.state.formData){
			if(!this.state.formData[key].valid){
				valid = false;
				break;
			}
		}
		return !valid;
	}

	submitFormHandler(event){
		event.preventDefault();
		const {email, password} = this.state.formData;
		this.props.login({
			email: email.value, 
			password: password.value 
		}, this.props.history);
	}

	render (){
		return (
			<Card>
				<h3>Login</h3>
				<form className="signup-form-container">
					<Input 
						type="email"
						placeholder="Enter Email"
						value={this.state.formData.email.value}
						onChange={value=>this.setValue("email", value)}
						validation={{
							"email": true,
							"required": true
						}}
						validationHandler={value => this.validStateHandler("email", value)}
					/>
					<Input 
						type="password"
						placeholder="Enter password"
						value={this.state.formData.password.value}
						onChange={value=>this.setValue("password", value)}
						validation={{
							"required": true
						}}
						validationHandler={value => this.validStateHandler("password", value)}
					/>

					<Button 
						value="Submit"
						className="secondary"
						disable={this.isFormValid()}
						onClick={ e => this.submitFormHandler(e)}
					/>
				</form>
			</Card>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		login: (userInfo, history) => dispatch(login(userInfo, history))
	}
}

export default connect(null, mapDispatchToProps)(withRouter(Login));