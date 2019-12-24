var express = require('express');
var router = express.Router();
var controller  =require('./../controller/index');

router.get('/customers/:customerId', controller.customer.getCustomer);
router.get('/customers/', controller.customer.getAllCustomers);

module.exports = router;