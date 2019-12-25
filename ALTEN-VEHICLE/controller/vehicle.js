var vehiclModel = require('../model/vehicledb');
module.exports.getAllVehicles = function (req, res, next) {
    vehiclModel.find((error, data) => {
        if(!error) res.status(200).json(data);
        else{
            console.log(error);
            return next(error);
        }
    })

}

module.exports.getVehicleByStatus = function (req, res, next) {
    vehiclModel.find({connected: req.params.status},(error, data) => {
        if(!error) res.status(200).json(data);
        else{
            console.log(error);
            return next(error);
        }
    })

}