const mongoose = require("mongoose"),
  Customer = mongoose.model("Customer");

exports.getAllCustomers = (req, res) => {
  Customer.find({}, (err, customers) => {
    if (err) res.send(err);
    res.json(customers);
  });
};

exports.createCustomer = (req, res) => {
  let newCustomer = new Customer(req.body);
  newCustomer.save({}, (err, customer) => {
    if (err) res.send(err);
    res.json(customer);
  });
};

exports.getCustomer = (req, res) => {
  Customer.findById(req.params.id, (err, customer) => {
    if (err) res.send(err);
    res.json(customer);
  });
};

exports.updateCustomer = (req, res) => {
  Customer.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, customer) => {
      if (err) res.send(err);
      res.json(customer);
    }
  );
};

exports.deleteCustomer = (req, res) => {
  Customer.remove({ _id: req.params.id }, err => {
    if (err) res.send(err);
    res.json({ message: "deleted" });
  });
};
