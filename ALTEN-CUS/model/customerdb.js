var mongoose = require('mongoose'); // Node Tool for MongoDB
var uuid = require('uuid'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
var Schema = mongoose.Schema; // 


var customerSchema = new Schema({
    _id: {
        type: String,
    },
    name: {
        type: String,
        index: true
    },
    address: {
        type: String
    },
    vehicles: [
        {
            _id: { type: String },
            vehicleID: { type: String },
            number: { type: String },
            connected: { type: Boolean },
            updatedAt: { type: Date }

        }
    ]
});

customerSchema.pre('save', function (next) {
    if (this._id == null)
        this._id = uuid();

    next()
});

module.exports = mongoose.model('customers', customerSchema);