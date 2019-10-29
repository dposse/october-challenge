const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

const should = chai.should();
const expect = chai.expect;

chai.use(chaiHttp);

describe('WordStream code challenge backend tests', () => {
  describe('canary test', () => {
    it('should assert true is true', () => {
      //tested below with false in one to make sure things are wired properly
      expect(true).to.be.true;
    })
  })
  
  describe('Get data from wordstream test api', () => {
    //actually not sure how or even if this should be tested?
    // probably in the land of "this is an implementation detail"
    // and should only test what the apps output behavior should be
  })

  describe('GET /topgeolocations success route', () => {
    it('should return status code 200', (done) => {
      //arrange
      //act
      chai.request(server)
        .get('/topgeolocations')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        })

      //assert
    })
  })

  describe('GET /topgeolocations failure route', () => {
    
  })
})