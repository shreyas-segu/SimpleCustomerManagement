const mongoose = require("mongoose"),
  Customer = mongoose.model("Customer");

exports.getAllCustomers = (req, res) => {
  Customer.find({}, (err, customers) => {
    if (err) res.send(err);
    res.json(customers);
  });
};

exports.createCustomer = (req, res) => {
  let customer = new Customer(req.body);
  customer.save(customer, (err, customer) => {
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
    {
      $set: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dob: req.body.dob,
        age: req.body.age,
        address: req.body.address
      }
    },
    { new: true },
    (err, customer) => {
      if (err) res.send(err);
      res.json(customer);
    }
  );
};

exports.deleteCustomer = (req, res) => {
  Customer.deleteOne({ _id: req.params.id }, err => {
    if (err) res.send(err);
    res.json({ message: "deleted" });
  });
};
