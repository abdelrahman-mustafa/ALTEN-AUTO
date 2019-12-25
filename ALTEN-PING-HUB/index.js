//socket.io instantiation
const http  = require('http');
const config = require('./config.js');

const io = require("socket.io")(config.socket.port);

//listen on every connection
io.on('connection', (socket) => {
    console.log('New user connected')
    //listen on new_message
    socket.on(config.socket.socket_name, (data) => {
        console.log(data)
            if (data.vehicleId) {
                updateVehicle(data.vehicleId);
            }

    });
});

function updateVehicle(vehicleId){
    var dataString = {"query":`mutation {\n  updateVehicle(\n    data: { connected: true }\n    where: { id: \"${vehicleId}\" }\n  ) {\n    id\n  }\n}\n`};

    
    var options = {
        method: 'POST',
        hostname: config.VehicleService.hostname,
        path:'/api',
        port : config.VehicleService.port,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Connection': 'keep-alive',
        },
    }
    var req = http.request(options, (res)=>{
        var chunk = '' 
        res.on('data',(data)=> chunk += data);
        res.on('end', (data) =>{ 
            chunk+=data;
            console.log('@@@@@@@@@@@@@@2222' + chunk);
        })
    });
    req.on('error', (err)=>{
        console.log('Error ', err)
    })
    req.write(JSON.stringify(dataString));
    req.end();
       
}

