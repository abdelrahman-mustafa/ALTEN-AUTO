var uuid = require('uuid');
var mongoose = require('mongoose');
var Vehicle = require('./../model/vehicledb')


var config = require('./../config');

var Customer;
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
let data = []

data = [{
        name: "Kalles Grustransporter AB",
        address: "Cementvägen 8, 111 11 Södertälje",
        vehicles: [{
                vehicleID: "YS2R4X20005399401",
                number: "ABC123",
                connected: false
            },
            {
                vehicleID: "VLUR4X20009093588",
                number: "DEF456",
                connected: false
            },
            {
                vehicleID: "VLUR4X20009048066",
                number: "GHI789",
                connected: false
            },
        ]


    }, {
        name: "Johans Bulk AB",
        address: "Balkvägen 12, 222 22 Stockholm",
        vehicles: [{
                vehicleID: "YS2R4X20005388011",
                number: "JKL012",
                connected: false
            },
            {
                vehicleID: "YS2R4X20005387949",
                number: "MNO345",
                connected: false
            }
        ],
    }, {
        name: "Haralds Värdetransporter AB",
        address: "Budgetvägen 1, 333 33 Uppsala",
        vehicles: [{
                vehicleID: "VLUR4X20009048066",
                number: "PQR678",
                connected: false
            },
            {
                vehicleID: "YS2R4X20005387055",
                number: "STU901",
                connected: false
            }
        ]

    }

]

//-----------------------------------------------------------
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
    }
});


mongoose.connect(config.mongodb.uri, config.mongodb.option, (err) => {
    if (err) {
        console.log(`Could not connect to database ${config.mongodb.db} :`, err);
    } else {
        //console.log(config.secret);
        mongoose.connection.db.dropDatabase( function(err, result) {
            Customer = mongoose.model('customers', customerSchema)

                buildSeed()
                console.log('Connected to database : ' + config.mongodb.db);

        });
    }
});







let output_data = []
function buildSeed() {


    data.forEach((customer) => {
        let customer_id = uuid()
        customer._id = customer_id;
        const vehicles = customer.vehicles;
        delete customer.vehicles;
        vehicles.forEach((vehicle) => {
            vehicle._id = uuid();
            vehicle.vehicleId = vehicle.vehicleID;
            vehicle.customer = customer_id;
            vehicle.lastSeen = new Date()
            output_data.push(vehicle)
            Vehicle.create(vehicle).then((res) => {
                console.log(res)
            });
        });
        
        Customer.create(customer).then((res) => {
            console.log(res)
        });
    });
}

module.exports = output_data;