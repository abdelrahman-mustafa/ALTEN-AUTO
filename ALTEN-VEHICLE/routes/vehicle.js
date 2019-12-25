var express = require('express');
var router = express.Router();
var controller  =require('../controller/index');

router.get('/vehicles/', controller.vehicle.getAllVehicles);
router.get('/vehicles/connected/:status', controller.vehicle.getVehicleByStatus);
router.get('/vehicles/:vehicleId', controller.vehicle.updateVehicle);
router.get('/vehicles/customer/:customerId', controller.vehicle.getVehiclesByCustomer);


module.exports = router;