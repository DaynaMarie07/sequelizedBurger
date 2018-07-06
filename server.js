// Solution 1: Sequelize the burger assignment
// ===========================================

// This solutions adds sequelize functionality to Burger
// This is the minimum required work for students

// Step 1: Deleted the models, db, and config folder//done//

// Step 2: `Ran sequelize init:config & sequelize init:models` in the command line to initialize the projecthttps://github.com/DaynaMarie07/sequelizedBurger.git//done//

// Step 2: Edited the new config.json file to accommodate our database connection//done//

// Step 3: Made a burger model with a burger_name attribute of type DataTypes.String, and a devoured attribute of type//done//
// DataTypes.Boolean. Set devoured to have a defaultValue of false//done//

// Step 5: Removed any reference to the old ORM in burgers_controller//done//

// Step 6: Utilized Sequelize ORM methods in place of the deleted ORM functions
//         in burgers_controller.js//done//

var express = require("express");
var bodyParser = require("body-parser");

// bring in the models
var db = require("./models");

var app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: false
}));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// listen on port 3000
var PORT = process.env.PORT || 3000;
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App now listening on port:", PORT);
  });
});
