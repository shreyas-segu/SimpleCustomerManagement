const CustomersController = require("../controllers/CustomerController");
//Registering routes for the API endpoints
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
