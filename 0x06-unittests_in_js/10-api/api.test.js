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
      done();
    });
  });

  it('correct status code for request to index', function (done) {
    request.get('http://localhost:7865/', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('correct response body for request to index', function (done) {
    request.get('http://localhost:7865/', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('correct status code for request to /available_payments', function (done) {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('correct response body for request to /available_payments', function (done) {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      expect(body).to.eq('{"payment_methods":{"credit_cards":true,"paypal":false}}');
      done();
    });
  });

  it('correct status code for request to /login route', function (done) {
    request.post('http://localhost:7865/login', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('correct body for request to /login route', function (done) {
    request.post({
      url: 'http://localhost:7865/login',
      headers: {'content-type': 'application/json'},
      body: '{"userName": "Jake Savage"}'
    }, (error, response, body) => {
      expect(body).to.equal('Welcome Jake Savage');
      done();
    });
  });
});
