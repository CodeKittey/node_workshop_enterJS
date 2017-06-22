//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);

//Our parent block
describe('dev test', () => {

    /*
     * Test the / route
     */
    describe('/ root', () => {
        it('it should get / with status 200', (done) => {

        });
    });

    /*
     * Test the /GET route
     */
    describe('/GET dev', () => {
        it('it should GET all of the dev', (done) => {

        });
    });

    describe('/GET dev:id', () => {
        it('it should GET one individual employee of the dev', (done) => {

        });
    });

    describe('/POST dev', () => {
        it('it should POST all of the dev', (done) => {

        });
    });

});
