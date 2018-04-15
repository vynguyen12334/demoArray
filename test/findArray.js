//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('find Array', () => {
    beforeEach((done) => {
        done();
    });
    /*
     * Test the /GET route
     */
    describe('/GET route', () => {
        it('it should GET all the find', (done) => {
            chai.request(server)
                .get('/find')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array'); //response type array
                    res.body.length.should.be.eql(1000000); //leght array 1000000
                    done();
                });
        });
    });
});