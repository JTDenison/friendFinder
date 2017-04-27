var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/app/public"));

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./app/routing/apiRoute.js")(app);
require("./app/routing/htmlRoute.js")(app);

app.listen(PORT, function() {
  console.log("Hello friend, we are waiting on " + PORT);
});