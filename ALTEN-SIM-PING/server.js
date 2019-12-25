const http = require('http');
const buildHub = require('./index');

const app = express();

// all environments
app.set('port', process.env.PORT || config.port);


app.get('/ping', function(req, res) {
    return res.status(200).json({ message: "pong" });
});

app.get('/down', function(req, res) {
    res.status(200).json({ message: "done" });
    process.exit()
});


app.use(function(err, req, res, next) {
    return res.status(500).json({ message: 'Something went wrong. please try again or contact your administrator!' });
});

const server = http.createServer(app);

server.listen(app.get('port'), function() {
    console.log('Server listening on port ' + app.get('port'))
});


process.on("exit", function () {
    console.log('End of the PING SERVICE');
});

// exist process on SIGTERM
process.on('SIGTERM', function () {
    console.log('PROCESS RECEIVED [SIGTERM] AT %s', new Date().toISOString());
    setTimeout(() => {
        process.exit(0);
    }, 2000);
});

// exist process on SIGINT
process.on('SIGINT', function () {
    console.log('PROCESS RECEIVED [SIGINT] AT %s', new Date().toISOString());
    setTimeout(() => {
        process.exit(0);
    }, 2000);
});

process.on('uncaughtException', function (err) {
   console.logl('Uncaught Exception : ' + err.stack);
});