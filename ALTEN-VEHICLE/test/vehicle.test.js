process.env.NODE_ENV = "testing";
var chai = require('chai');
chai.use(require('chai-http'));
var should = chai.should();
var app = require('../app');
var data = require('./init');
describe('API endpoint GET /', function() {

    it('should return 200', function(done) {
        chai.request(app).get('/ping').end((err, res)=>{
            res.statusCode.should.eql(200);
            res.text.should.eql('ok');
            done();
        });
    });
});


describe('API endpoint GET /vehicles', function() {
    before((done) => { //Before each test we empty the database
        setTimeout(() => {
            done();
        }, 1500);
    });
    it('should return all vehicles', function(done) {
        chai.request(app).get('/vehicles').end((err, res)=>{
            res.statusCode.should.eql(200);
            res.body.length.should.eql(data.length);
            done();
        });
    });
});


describe('API endpoint GET /vehicles/connected/status', function() {
    before((done) => { //Before each test we empty the database
        setTimeout(() => {
            done();
        }, 1500);
    });
    it('should return all connected vehicles ', function(done) {
        chai.request(app).get('/vehicles/connected/true').end((err, res)=>{
            res.statusCode.should.eql(200);
            res.body.length.should.eql(data.length);
            done();
        });
    });
    it('should return all disconnected vehicles ', function(done) {
        chai.request(app).get('/vehicles/connected/false').end((err, res)=>{
            res.statusCode.should.eql(200);
            res.body.length.should.eql(0);
            done();
        });
    });
});
