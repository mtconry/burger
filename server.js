//Require dependencies
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var PORT = 3000;


//Server setup variables
var app = express();
var PORT = process.env.PORT || 3000;

//Set app to listen to the PORT defined above 
app.listen(PORT);

//Define handlebars engine
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
//Set handlebars engine
app.set("view engine", "handlebars");

//Serve static content for the app from the "public" directory in the application
app.use(express.static(__dirname + "/public"));

//Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override the POST having ?_method=DELETE
app.use(methodOverride("_method"));

//Require the routes set in burger_controller.js
var routes = require("./controllers/burger_controller");

app.use("/", routes);

// app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT)
