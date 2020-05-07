function getRoles(req, res) {
	res.status(200).jsonp([
		"admin",
		"user"
	]) 
}

module.exports = {
	getRoles
}

