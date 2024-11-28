const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spy.restore();
  });

  it('should log the correct total when called with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);

    assert(spy.calledWith('The total is: 120'));
    assert(spy.calledOnce);
  });

  it('should log the correct total when called with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);

    assert(spy.calledWith('The total is: 20'));
    assert(spy.calledOnce);
  });
});
