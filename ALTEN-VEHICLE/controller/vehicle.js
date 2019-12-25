var vehiclModel = require('../model/vehicledb');
module.exports.getAllVehicles = function (req, res, next) {
    vehiclModel.find().populate("customer").exec((er, data)=>{
        console.log(data);
            if(!er) res.status(200).json(data);
            else{
                console.log(er);
                return next(er);
            }
        }
    );

}

module.exports.getVehicleByStatus = function (req, res, next) {

    vehiclModel.find({connected: req.params.status}).populate("customer").exec((er, data)=>{
        console.log(data);
            if(!er) res.status(200).json(data);
            else{
                console.log(er);
                return next(er);
            }
        }
    );

}


module.exports.getVehiclesByCustomer = function (req, res, next) {
    console.log(req.params.customerId)
    vehiclModel.find({customer: req.params.customerId}).populate("customer").exec((er, data)=>{
        console.log(data);
            if(!er) res.status(200).json(data);
            else{
                console.log(er);
                return next(er);
            }
        }
    );

}

module.exports.updateVehicle = function (req, res, next) {

    vehiclModel.updateOne({_id: req.params.vehicleId},{connected: true, lastSeen: new Date().toISOString()},(error, data) => {
        if(!error) res.status(200).json(data);
        else{
            console.log(error);
            return next(error);
        }
    })

}
