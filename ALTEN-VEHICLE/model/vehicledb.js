var mongoose = require('mongoose'); // Node Tool for MongoDB
var uuid = require('uuid'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
var Schema = mongoose.Schema; // 



const customer_schema = new mongoose.Schema({
    _id: String,
    name: String,
    address: String,

}, {
    collection: "customers"
});

const customer_model = mongoose.model('Customer', customer_schema);

//======================================

const schema = new mongoose.Schema({
    _id: String,
    number: String,
    lastSeen: String,
    vehicleId: String,
    connected: Boolean,
    customer: { type: String, ref: 'Customer' }
}, {
    collection: 'vehicles'
});


schema.pre('save', function (next) {
    if (this._id == null)
        this._id = uuid();

    next()
});

module.exports = mongoose.model('vehicles', schema);