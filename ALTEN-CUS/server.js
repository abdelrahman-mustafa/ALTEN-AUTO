var app = require('./app');
var http = require('http');
var mongoDB = require('./model/index');
var config = require('./config')
mongoDB.connect()
var server = http.createServer(app);

server.listen(config.PORT, function() {
    console.log(`SERVER LISTEN ON PORT [${PORT}]`);
});

process.on("uncaughtException", function(ex) {
    console.log(`PROCESS Uncaught Exception : ${ex.stack || ex.message}`);
});

process.on('SIGTERM', function() {
    console.log('PROCESS RECEIVED [SIGTERM]');
    process.exit(0);
});

process.on('SIGINT', function() {
    console.log('PROCESS RECEIVED [SIGINT]');
    process.exit(0);
});