const jwt = require('jsonwebtoken');
const express = require('express');
const bodyParser = require('body-parser');

const roles = require('./src/roles');
const user = require('./src/user');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(function(req, res, next) {
	//for cross origin issue
	res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
	//for preflight issue
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
	res.header('Content-Type', 'application/json');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	//for axios mac issue.
	res.header('Access-Control-Allow-Credentials', true);
	next();
})


app.get('/', (req, res) => {
	res.send('welcome');
});

app.get('/roles', roles.getRoles);

app.post('/login', user.login);
app.post('/signup', user.signup);

// app.all("*", (req, res) => {
// 	res.status(404).send("Oops. Seems like you forgot the url...")
// })

app.listen(8000, _=> console.log("server listening port: 8000"));