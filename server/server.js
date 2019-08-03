const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose"),
  Customer = require("./models/CustomerModel"),
  bodyParser = require("body-parser"),
  cors = require("cors");

mongoose.connect("mongodb://localhost:27017/customerInfo", {
  useNewUrlParser: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const routes = require("./routes/APIRoutes"); //importing route
routes(app); //register the route

app.use(function(req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
