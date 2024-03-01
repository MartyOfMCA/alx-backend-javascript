const { expect } = require('chai');
const request = require('request');

describe('api', function () {
  it('correct status code for request to /', function (done) {
    request.get('http://localhost:7865/', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
