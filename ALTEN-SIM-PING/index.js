var io = require('socket.io-client');
var config = require('./config.js');
var http = require('http');
module.exports = function(){
    var socket = io.connect({
        host: config.socket.hostname,
        port: config.socket.port
    });
    getAllVehicles((err, data) => {
        let vehicles = JSON.parse(data).data.vehicles;
        let x =
            console.log('Start Loopimg')
        vehicles.forEach(vehicle => {
            setInterval(() => {
                //Emit message
                console.log(vehicle)
                socket.emit(config.socket.socket_name, {
                    vehicleId: vehicle.id,
                    status: 'connected'
                });
    
            }, getRandomInt(1, 3) * 60 * 1000);
        });
    
        if (err) console.error(err);
    });
    
}




function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function getAllVehicles(callback) {
    var options = {
        method: 'GET',
        hostname: config.VehicleService.hostname,
        path: '/vehicles',
        port: config.VehicleService.port,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Connection': 'keep-alive',
        },
    }
    var req = http.request(options, (res) => {
        var chunk = ''
        res.on('data', (data) => chunk += data);
        res.on('end', (data) => {
            // chunk+=data;
            callback(null, chunk);
        })
    });
    req.on('error', (err) => {
        console.log('Error ', err)
        callback(err, null)
    })
    req.write(JSON.stringify(dataString));
    req.end();

}