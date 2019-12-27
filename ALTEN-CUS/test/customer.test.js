process.env.NODE_ENV = "testing";
var http = require('http');
var sinon = require('sinon');
var chai = require('chai');
var should = chai.should();
var initData = require('./init')
chai.use(require('chai-http'));

var app = require('./../app');
var data = require('./init');
describe('API endpoint GET /', function() {

    it('should return 200', function(done) {
        chai.request(app).get('/ping').end((err, res)=>{
            console.log(res)
            res.statusCode.should.eql(200);
            res.text.should.eql('ok');
            done();
        });
    });
});




describe('API endpoint GET /customers/customerId', function() {
    before((done) => { //Before each test we empty the database
        setTimeout(() => {
            done();
        }, 1000);
    });
    it('should return the main customer', function(done) {
        var base = 'http://localhost:3000';
        chai.request(app).get(`/customers/${data[0]._id}`).end((err, res) => {
            res.statusCode.should.eql(200);
            res.headers['content-type'].should.contain('application/json');
            res.body.name.should.eql(data[0].name);
            done();
        });
    });
});


describe('API endpoint GET /customers', function() {
    beforeEach((done) => { //Before each test we empty the database
        setTimeout(() => {
            done();
        }, 1000);
    });
    it('should return all customers', function(done) {
        var base = 'http://localhost:3000';
        chai.request(app).get('/customers').end((err, res)=>{
            res.statusCode.should.eql(200);
            res.headers['content-type'].should.contain('application/json');
            res.body.length.should.eql(data.length);
            done();
        });
    });
});
