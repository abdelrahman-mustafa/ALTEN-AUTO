var express = require('express');
var router = express.Router();
var controller  =require('../controller/index');

router.get('/vehicles/', controller.vehicle.getAllVehicles);
router.get('/vehicles/connected/:status', controller.vehicle.getVehicleByStatus);

module.exports = router;