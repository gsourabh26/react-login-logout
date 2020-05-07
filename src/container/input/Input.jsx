import React, {Component} from 'react';
import "./input.css";

class Input extends Component {
	state = {
		errorMessage: ""
	}

	validateInputValue = (event) => {
		let value = event.target.value;
		let {validation, onChange, validationHandler} = this.props;
		let error = "";
		if(validation) {
			if(!error && validation.required) {
				if(!value) {
					error = "Mandatory field";
				} else {
					error = "";
				}
			}
			if(!error && validation.email) {
				let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				if(!re.test(String(value).toLowerCase())){
					error = "Enter a valid email";	
				} else {
					error = "";
				}
			}
			if(!error && validation.password) {
				let re = /(?=.*\d)(?=.*[a-z])(?=.*\W)/;
				if(value.length < 8 || !re.test(String(value).toLowerCase())){
					error = "Invalid password! should contain one character, one numeric, one special character and minimum lenght should be 8";	
				} else {
					error = "";
				}
			}
		}
		validationHandler(!error);
		this.setState({errorMessage: error});
		onChange(value);
	}

	componentDidMount() {
		// this.validateInputValue({
		// 	target: {
		// 		value: this.props.value
		// 	}
		// });
	}

	render() {
		var element = null;
		switch(this.props.elementType) {
			case "select": 
				element = (
					<select 
						placeholder={this.props.placeholder} 
						value={this.props.value} 
						onChange={this.validateInputValue}
						className={"input-bar select-bar " + this.props.className}
					>
						{
							this.props.options && this.props.options.values && 
							this.props.options.values.map((option, index) => (
								<option 
									key={option.display} 
									value={option.value}
									disabled={index === 0 && this.props.options.firstPlaceholder}
								>
									{option.display}
								</option>
							))
						}
					</select>
				);
				break;
			default: 
				element = (
					<input 
						type={this.props.type}
						placeholder={this.props.placeholder}
						value={this.props.value}
						onChange={this.validateInputValue}
						className={"input-bar " + this.props.className}
					/>
				);
		}
		return (
			<div className="input-container">
				{element}
				{
					this.state.errorMessage ? 
						<div className="error-message">{this.state.errorMessage}</div>	
					:null
				}
			</div>
		)
	}
}

export default Input;