var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose"),
  Customer = require("./models/CustomerModel"),
  bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost:27017/customerInfo", {
  useNewUrlParser: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./routes/APIRoutes"); //importing route
routes(app); //register the route

app.listen(port);
