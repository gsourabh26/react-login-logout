import React, {Component} from 'react';
import "./signup.css";
import {connect} from 'react-redux';

import Card from '../../hoc/pageCard/PageCard';
import Input from "../input/Input";
import Button from "../../components/button/Button";
import {fetchRoles, singup} from "../../store/actionCreators";



class Signup extends Component {
	state = {
		formData: {
			name: {
				value: "",
				valid: false
			},
			email: {
				value: "",
				valid: false
			},
			role: {
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
		const {name, email, password, role} = this.state.formData;
		this.props.singup({
			name: name.value, 
			email: email.value, 
			password: password.value, 
			role: role.value
		})
	}

	componentDidMount() {
		this.props.fetchRoles();
	}

	render (){
		return (
			<Card>
				<h3>Signup</h3>
				<form className="signup-form-container">
					<Input 
						type="string"
						placeholder="Enter Name"
						value={this.state.formData.name.value}
						onChange={value=>this.setValue("name", value)}
						validation={{
							"required": true
						}}
						validationHandler={value => this.validStateHandler("name", value)}
					/>
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
							"password": true,
							"required": true
						}}
						validationHandler={value => this.validStateHandler("password", value)}
					/>
					<Input 
						elementType="select"
						value={this.state.formData.role.value}
						onChange={value=>this.setValue("role", value)}
						options={{
							values: this.props.roles,
							firstPlaceholder: true
						}}
						validation={{
							"required": true
						}}
						validationHandler={value => this.validStateHandler("role", value)}
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

const mapStateToProps = state => {
	return {
		roles: state.users.roles
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchRoles: _ => dispatch(fetchRoles()),
		singup: userInfo => dispatch(singup(userInfo))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);