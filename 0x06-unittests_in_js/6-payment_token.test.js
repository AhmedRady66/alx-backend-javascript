const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return successful response when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response.data).toBe('Successful response from the API');
        done();
      })
      .catch(done);
  });

  it('should not return anything when success is false', (done) => {
    getPaymentTokenFromAPI(false)
      .then((response) => {
        expect(response).toBeUndefined();
        done();
      })
      .catch(done);
  });
});
