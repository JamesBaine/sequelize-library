// Dependencies
// ===============================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up express app
// ==========================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api + json"}));

// Static directory
app.use(express.static("app/public"));

// Routes
// =============================
require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes.js")(app);

// Starts the server to begin listening
// ======================================================
app.listen(PORT, function() {
	console.log("App is litening on PORT " + PORT);
});
