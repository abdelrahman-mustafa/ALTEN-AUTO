var customerModel = require('./../model/customerdb');
module.exports.getAllCustomers = function (req, res, next) {
    customerModel.find((error, data) => {
        if(!error) res.status(200).json(data);
        else{
            console.log(error);
            return next(error);
        }
    })

}

module.exports.getCustomer = function (req, res) {
    customerModel.findById(req.params.customerId,(error, data) => {
        if(!error) res.status(200).json(data);
        else{
            console.log(error);
            return next(error);
        }
    })

}