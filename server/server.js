const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  Customer = require("./models/CustomerModel"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  dotenv = require("dotenv").config();

const port = process.env.PORT || 3001;
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true
});
console.log(process.env.port);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const routes = require("./routes/APIRoutes");
routes(app);

app.use(function(req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
