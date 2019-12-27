var vehiclModel = require('../model/vehicledb');
var moment = require('moment')



module.exports.getAllVehicles = function (req, res, next) {
    vehiclModel.find().populate("customer").exec((er, data) => {

        let conditionalData = validateCustomer(data);

        if (!er) res.status(200).json(conditionalData);
        else {
            console.log(er);
            return next(er);
        }
    });

}

module.exports.getVehicleByStatus = function (req, res, next) {

    vehiclModel.find().populate("customer").exec((er, data) => {
        let conditionalData = validateCustomer(data);
        var filteredData = conditionalData.filter((vehicle)=>{
            if(String(req.params.status).includes('true')) return (vehicle.connected == true);
            else return (vehicle.connected == false);
        });
        console.log(filteredData);

        if (!er) res.status(200).json(filteredData);
        else {
            console.log(er);
            return next(er);
        }
    });

}

function validateCustomer(data) {
    var validatedDate =  data.map(vehicle => {
        var date = moment(vehicle.lastSeen)
        var now = moment().toISOString();
        var output = moment(now).diff(date, 'minutes');
        if ( parseInt(output) <= 2 ){
            vehicle.connected = true;
        }else {
            vehicle.connected = false;
        }
        return vehicle;
    });
    return validatedDate;
}
module.exports.getVehiclesByCustomer = function (req, res, next) {
    console.log(req.params.customerId)
    vehiclModel.find({
        customer: req.params.customerId
    }).populate("customer").exec((er, data) => {
        console.log(data);
        let conditionalData = validateCustomer(data);

        if (!er) res.status(200).json(conditionalData);
        else {
            console.log(er);
            return next(er);
        }
    });

}

module.exports.updateVehicle = function (req, res, next) {

    vehiclModel.updateOne({
        _id: req.params.vehicleId
    }, {
        connected: true,
        lastSeen: moment().toISOString()
    }, (error, data) => {
        if (!error) res.status(200).json(data);
        else {
            console.log(error);
            return next(error);
        }
    })

}