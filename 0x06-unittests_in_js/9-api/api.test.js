const { expect } = require('chai');
const request = require('request');

describe('api', () => {
  it('correct status code and body for request to /cart/:id as an int', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('correct status code for request to /cart/:id as a string', (done) => {
    request.get('http://localhost:7865/cart/error', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      expect(response.body).to.include('<title>Error</title>');
      done();
    });
  });
});
