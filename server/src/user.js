const jwt = require('jsonwebtoken');

const signup = (req, res) => {
	const {name, email, role, password} = req.body;
	if(!name || !email || !role || !password) {
		res.status(400).send("signup failed")
	} else {
		res.status(200).send(name + " signup successfully");
	}
}

const login = (req, res) => {
	const {name, email, role, password} = req.body;
	if(!email || !password) {
		res.status(400).send("invalid email/password");
		return;
	}
	if(email == "sourabh@gmail.com" && password == "sourabh") {
		jwt.sign(
			{email,name: "sourabh",role: "admin"},
			'testing',
			{ expiresIn: '1h' }, 
			(err, token) => {
				if(err) {
					res.status(500).send("Error in processing token");
				} else {
					res.status(200).jsonp({
						token,
						name: "sourabh",
						email
					})
				}
			}
		);
	} else {
		res.status(401).send("Authentication failed");
	}

}

module.exports = {
	signup,
	login
}

