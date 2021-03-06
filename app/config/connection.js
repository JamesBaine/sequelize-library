// *********************************************************
// CONNECTION.JS - THIS FILE INTIATES CONNECTION TO MYSQL
// *********************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates MYSQL connection using Sequelize
// Edit this object to use MYSQL user/database information
var sequelize = new Sequelize("", "", "", {
	host: "localhost",
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});

// Exports the connection for other files to use
module.exports = sequelize;
