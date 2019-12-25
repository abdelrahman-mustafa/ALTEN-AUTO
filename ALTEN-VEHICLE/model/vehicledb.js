var mongoose = require('mongoose'); // Node Tool for MongoDB
var uuid = require('uuid'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
var Schema = mongoose.Schema; // 


var vehicleSchema = new Schema({

    _id: {
        type: String
    },
    vehicleID: {
        type: String
    },
    number: {
        type: String
    },
    connected: {
        type: Boolean
    },
    updatedAt: {
        type: Date
    },
    customer: {
        id: {
            type: String
        },
        name: {
            type: String
        }
    },

});

vehicleSchema.pre('save', function (next) {
    if (this._id == null)
        this._id = uuid();

    next()
});

module.exports = mongoose.model('vehicles', vehicleSchema);