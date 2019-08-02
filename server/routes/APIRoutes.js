const CustomersController = require("../controllers/CustomerController");

module.exports = app => {
  app
    .route("/customers")
    .get(CustomersController.getAllCustomers)
    .post(CustomersController.createCustomer);

  app
    .route("/customer/:id")
    .get(CustomersController.getCustomer)
    .put(CustomersController.updateCustomer)
    .delete(CustomersController.deleteCustomer);
};
