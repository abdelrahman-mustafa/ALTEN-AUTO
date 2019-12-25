var express = require('express');
var app = express();
var router = require('./routes/index');
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    return res.status(200).send('ok');
});

app.use(router);
module.exports = app;